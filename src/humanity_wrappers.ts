import { BigNumber } from '@0x/utils';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { LogEntry, Provider, TxData } from 'ethereum-types';
import * as ethUtil from 'ethereumjs-util';
import * as jsSHA3 from 'js-sha3';
import { AbiCoder } from 'web3-eth-abi';

import {
  HumanityContract,
  HumanityGovernanceContract,
  HumanityGovernanceExecuteEventArgs,
  HumanityGovernanceProposeEventArgs,
  HumanityGovernanceRemoveVoteEventArgs,
  HumanityGovernanceTerminateEventArgs,
  HumanityGovernanceVoteEventArgs,
  HumanityRegistryContract,
  IERC20Contract,
  IUniswapExchangeContract,
  TwitterHumanityApplicantApplyEventArgs,
  TwitterHumanityApplicantContract,
  UniversalBasicIncomeContract,
} from './wrappers';

interface ContractAddresses {
  DAI: string;
  Humanity: string;
  HumanityExchange: string;
  HumanityGov: string;
  Registry: string;
  TwitterApplicant: string;
  UBI: string;
}

const contractAddressesById: { [key: number]: ContractAddresses } = {
  1: {
    DAI: '0xdef042139d53d336d7c682731a54d96d50ad4a4f',
    Humanity: '0xbbd1706d16418bb136e1497a73d3af4164586da0',
    HumanityExchange: '0xe499657190d515119077af5d64f44b6f850baea5',
    HumanityGov: '0xdd806c4fdad2949a97fda79036cfbb8750181b37',
    Registry: '0x4ee46dc4962c2c2f6bcd4c098a0e2b28f66a5e90',
    TwitterApplicant: '0x9d661f7773be14439b4223f5b516bc7ef67b0369',
    UBI: '0x762d141b8d9600bde64138762e6fb38efc56dcba',
  },
  3: {
    DAI: '0xe8c8d8962736494db752c85313bfa177abf7dacf',
    Humanity: '0x73f9811c10615f84939f235f60dd3338fefdb285',
    HumanityExchange: '0x07caa7913076a51af8d87bd77d774424544817e5',
    HumanityGov: '0x7899d55270297b2c84e02b241a6e77257b55bfa9',
    Registry: '0xc8d5c73dc832d60dd6a3d78c1d31f44072894f4b',
    TwitterApplicant: '0x4d40759aae06a5bd676b178b81c9e783b367d195',
    UBI: '0x2b37f6f49939f6e1cc786c5e3d3993a72fb3c29f',
  },
  50: {
    DAI: '0x25b8fe1de9daf8ba351890744ff28cf7dfa8f5e3',
    Humanity: '0x1dc4c1cefef38a777b15aa20260a54e584b16c48',
    HumanityExchange: '0x48bacb9266a570d521063ef5dd96e61686dbe788',
    HumanityGov: '0x1d7022f5b17d2f8b695918fb48fa1089c9f85401',
    Registry: '0x871dd7c2b4b25e1aa18728e9d5f2af4c4e431f5c',
    TwitterApplicant: '0x0b1ba0af832d7c05fd64161e0db78e85978e8082',
    UBI: '0xcdb594a32b1cc3479d8746279712c39d18a07fc0',
  },
};

interface BlockRange {
  fromBlock: number;
  toBlock: number;
}

export class HumanityContracts {
  public humanity: HumanityContract;
  public humanityGovernance: HumanityGovernanceContract;
  public dai: IERC20Contract;
  public humanityExchange: IUniswapExchangeContract;
  public humanityRegistry: HumanityRegistryContract;
  public twitterHumanityApplicant: TwitterHumanityApplicantContract;
  public ubi: UniversalBasicIncomeContract;

  private readonly abi: AbiCoder;
  private readonly web3Wrapper: Web3Wrapper;

  constructor(provider: Provider, networkId: number, txDefaults?: Partial<TxData>) {
    this.humanity = HumanityContract.new(contractAddressesById[networkId].Humanity, provider, txDefaults);
    this.humanityGovernance = HumanityGovernanceContract.new(
      contractAddressesById[networkId].HumanityGov,
      provider,
      txDefaults,
    );
    this.dai = IERC20Contract.new(contractAddressesById[networkId].DAI, provider, txDefaults);
    this.humanityExchange = IUniswapExchangeContract.new(
      contractAddressesById[networkId].HumanityExchange,
      provider,
      txDefaults,
    );
    this.humanityRegistry = HumanityRegistryContract.new(
      contractAddressesById[networkId].Registry,
      provider,
      txDefaults,
    );
    this.twitterHumanityApplicant = TwitterHumanityApplicantContract.new(
      contractAddressesById[networkId].TwitterApplicant,
      provider,
      txDefaults,
    );
    this.ubi = UniversalBasicIncomeContract.new(contractAddressesById[networkId].UBI, provider, txDefaults);
    this.web3Wrapper = new Web3Wrapper(provider, txDefaults);
    this.abi = new AbiCoder();
  }

  public async getApplyEvents(blockRange: BlockRange): Promise<TwitterHumanityApplicantApplyEventArgs[]> {
    const logs = await this.getLogs('Apply(uint256,address,string)', this.twitterHumanityApplicant.address, blockRange);
    return logs.map(log => {
      const { data, topics } = log;
      const [, stringProposalId, applicantString] = topics;
      const proposalId = new BigNumber(stringProposalId);
      let username: string;
      try {
        username = this.abi.decodeParameter('string', data).toString();
      } catch (e) {
        username = '';
      }

      let applicant: string;
      try {
        applicant = this.abi
          .decodeParameter('address', applicantString)
          .toString()
          .toLowerCase();
      } catch (e) {
        applicant = applicantString;
      }

      return {
        applicant,
        proposalId,
        username,
      };
    });
  }

  public async getExecuteEvents(blockRange: BlockRange): Promise<HumanityGovernanceExecuteEventArgs[]> {
    const logs = await this.getLogs('Execute(uint256)', this.humanityGovernance.address, blockRange);
    return logs.map(log => {
      const { topics } = log;
      const [, stringProposalId] = topics;
      const proposalId = new BigNumber(stringProposalId);
      return {
        proposalId,
      };
    });
  }

  public async getProposeEvents(blockRange: BlockRange): Promise<HumanityGovernanceProposeEventArgs[]> {
    const logs = await this.getLogs(
      'Propose(uint256,address,address,bytes)',
      this.humanityGovernance.address,
      blockRange,
    );
    return logs.map(log => {
      const { data, topics } = log;
      const [, stringProposalId, proposer, target] = topics;
      const proposalId = new BigNumber(stringProposalId);
      return {
        data,
        proposalId,
        proposer,
        target,
      };
    });
  }

  public async getRemoveVoteEvents(blockRange: BlockRange): Promise<HumanityGovernanceRemoveVoteEventArgs[]> {
    const logs = await this.getLogs('RemoveVote(uint256,address)', this.humanityGovernance.address, blockRange);
    return logs.map(log => {
      const { topics } = log;
      const [, stringProposalId, stringVoter] = topics;
      const proposalId = new BigNumber(stringProposalId);
      const voter = this.abi
        .decodeParameter('address', stringVoter)
        .toString()
        .toLowerCase();
      return {
        proposalId,
        voter,
      };
    });
  }

  public async getTerminateEvents(blockRange: BlockRange): Promise<HumanityGovernanceTerminateEventArgs[]> {
    const logs = await this.getLogs('Terminate(uint256)', this.humanityGovernance.address, blockRange);
    return logs.map(log => {
      const { topics } = log;
      const [, stringProposalId] = topics;
      const proposalId = new BigNumber(stringProposalId);
      return {
        proposalId,
      };
    });
  }

  public async getVoteEvents(blockRange: BlockRange): Promise<HumanityGovernanceVoteEventArgs[]> {
    const logs = await this.getLogs('Vote(uint256,address,bool,uint256)', this.humanityGovernance.address, blockRange);
    return logs.map(log => {
      const { data, topics } = log;
      const [, stringProposalId, stringVoter] = topics;
      const decoded = this.abi.decodeParameters(['bool', 'uint256'], data);
      const proposalId = new BigNumber(stringProposalId);
      const weight = decoded[1];
      const approve = decoded[0];
      const voter = this.abi
        .decodeParameter('address', stringVoter)
        .toString()
        .toLowerCase();
      return {
        proposalId,
        voter,
        approve,
        weight,
      };
    });
  }

  private async getLogs(eventSignature: string, address: string, blockRange: BlockRange): Promise<LogEntry[]> {
    const topicForEventSignature = ethUtil.addHexPrefix(jsSHA3.keccak256(eventSignature));
    return this.web3Wrapper.getLogsAsync({
      ...blockRange,
      address,
      topics: [topicForEventSignature],
    });
  }
}
