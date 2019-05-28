import {
  FakeGasEstimateSubprovider,
  PrivateKeyWalletSubprovider,
  RPCSubprovider,
  Web3ProviderEngine,
} from '@0x/subproviders';
import { BigNumber, providerUtils } from '@0x/utils';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { config } from 'dotenv';
import { solidityKeccak256 } from 'ethers/utils';
import _ from 'lodash';
import * as rlp from 'rlp';

import {
  HumanityRegistryContract,
  MockERC20Contract,
  MockHumanityGovernanceContract,
  MockUniswapExchangeContract,
  TwitterHumanityApplicantContract,
  UniversalBasicIncomeContract,
} from '../src';

config();

const getAddress = (deployer: string, nonce: number): string => {
  return `0x
    ${solidityKeccak256(['bytes'], [rlp.encode([deployer, nonce])])
      .slice(12)
      .substring(14)}`;
};

const getNonce = async (web3Wrapper: any, account: string): Promise<number> => {
  const txCount = await web3Wrapper.sendRawPayloadAsync({
    method: 'eth_getTransactionCount',
    params: [account, 'latest'],
  });
  const nonce = +(txCount as string);
  return nonce;
};

(async () => {
  try {
    const rpcUrl = 'http://localhost:8545';
    const provider = new Web3ProviderEngine();
    const privateKey = _.isUndefined(process.env.PRIVATE_KEY) ? '' : process.env.PRIVATE_KEY;
    provider.addProvider(new PrivateKeyWalletSubprovider(privateKey));
    provider.addProvider(new RPCSubprovider(rpcUrl));
    provider.addProvider(new FakeGasEstimateSubprovider(8000000));
    providerUtils.startProviderEngine(provider);

    const web3Wrapper = new Web3Wrapper(provider);
    const [deployer] = await web3Wrapper.getAvailableAddressesAsync();
    const txDefaults = { from: deployer, gas: 6500000 };

    const nonce = await getNonce(web3Wrapper, deployer);
    console.log(nonce);

    const humanity = await MockERC20Contract.deployAsync(provider, txDefaults);

    const humanityGovernance = await MockHumanityGovernanceContract.deployAsync(
      provider,
      txDefaults,
      humanity.address,
      new BigNumber('1e18'),
    );

    const humanityRegistry = await HumanityRegistryContract.deployAsync(
      provider,
      txDefaults,
      humanity.address,
      humanityGovernance.address,
    );

    const exchangeAddress = getAddress(deployer, nonce + 4);

    const twitterHumanityApplicant = await TwitterHumanityApplicantContract.deployAsync(
      provider,
      txDefaults,
      humanityGovernance.address,
      humanityRegistry.address,
      humanity.address,
      exchangeAddress, // Uniswap
    );

    const exchange = await MockUniswapExchangeContract.deployAsync(provider, txDefaults);

    await web3Wrapper.awaitTransactionSuccessAsync(await exchange.setup.sendTransactionAsync(humanity.address));

    console.log('ExchangeAddress : ', exchangeAddress);
    console.log('Exchange.Address: ', exchange.address);

    const dai = await MockERC20Contract.deployAsync(provider, txDefaults);
    const daiAddress = dai.address;

    const ubi = await UniversalBasicIncomeContract.deployAsync(
      provider,
      txDefaults,
      humanityRegistry.address,
      daiAddress,
    );

    await web3Wrapper.awaitTransactionSuccessAsync(
      await dai.mint.sendTransactionAsync(ubi.address, new BigNumber('6000e18')),
    );

    await web3Wrapper.awaitTransactionSuccessAsync(
      await humanity.mint.sendTransactionAsync(exchange.address, new BigNumber('1000e18')),
    );

    await web3Wrapper.awaitTransactionSuccessAsync(
      await web3Wrapper.sendTransactionAsync({
        from: deployer,
        value: Web3Wrapper.toWei(new BigNumber(0.5)),
        to: exchangeAddress,
      }),
    );
  } catch (e) {
    console.log(e);
  }
  process.exit();
})().catch(e => {
  console.log(e);
  process.exit(1);
});
