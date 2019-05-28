// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
// tslint:disable:no-unbound-method
import { BaseContract } from '@0x/base-contract';
import { BlockParam, BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, MethodAbi, TxData, TxDataPayable, SupportedProvider } from 'ethereum-types';
import { BigNumber, classUtils, logUtils, providerUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
import * as ethers from 'ethers';
import * as _ from 'lodash';
// tslint:enable:no-unused-variable

export type TwitterHumanityApplicantEventArgs =
    | TwitterHumanityApplicantApplyEventArgs;

export enum TwitterHumanityApplicantEvents {
    Apply = 'Apply',
}

export interface TwitterHumanityApplicantApplyEventArgs extends DecodedLogArgs {
    proposalId: BigNumber;
    applicant: string;
    username: string;
}

/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class TwitterHumanityApplicantContract extends BaseContract {
// tslint:disable:max-line-length
    public static ABI: string = '[{"constant":false,"inputs":[{"name":"who","type":"address"}],"name":"applyFor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"humanity","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"who","type":"address"}],"name":"applyWithEtherFor","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"governance","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"exchange","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_governance","type":"address"},{"name":"_registry","type":"address"},{"name":"_humanity","type":"address"},{"name":"_exchange","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalId","type":"uint256"},{"indexed":true,"name":"applicant","type":"address"},{"indexed":false,"name":"username","type":"string"}],"name":"Apply","type":"event"},{"constant":false,"inputs":[{"name":"username","type":"string"}],"name":"applyWithTwitter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"who","type":"address"},{"name":"username","type":"string"}],"name":"applyWithTwitterFor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"username","type":"string"}],"name":"applyWithTwitterUsingEther","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"who","type":"address"},{"name":"username","type":"string"}],"name":"applyWithTwitterUsingEtherFor","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"}]';
    public static ORIGINAL_BYTECODE: string = '0x60806040523480156200001157600080fd5b5060405160808062000e48833981018060405262000033919081019062000198565b60008054600160a060020a03808716600160a060020a031992831617928390556001805482881690841617905560028054828716931692909217918290556040517f095ea7b300000000000000000000000000000000000000000000000000000000815287938793879387938793879387939081169263095ea7b392620000c3921690600019906004016200021e565b602060405180830381600087803b158015620000de57600080fd5b505af1158015620000f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506200011991908101906200016f565b505060038054600160a060020a031916600160a060020a0394909416939093179092555062000271975050505050505050565b60006200015a82516200025f565b9392505050565b60006200015a825162000264565b6000602082840312156200018257600080fd5b60006200019084846200014c565b949350505050565b60008060008060808587031215620001af57600080fd5b6000620001bd878762000161565b9450506020620001d08782880162000161565b9350506040620001e38782880162000161565b9250506060620001f68782880162000161565b91505092959194509250565b6200020d816200023d565b82525050565b6200020d816200025c565b604081016200022e828562000202565b6200015a602083018462000213565b60006200024a8262000250565b92915050565b600160a060020a031690565b90565b151590565b60006200024a826200023d565b610bc780620002816000396000f3fe6080604052600436106100ae576000357c0100000000000000000000000000000000000000000000000000000000900480635aa6e675116100765780635aa6e6751461014e5780637b103999146101635780638a17611a14610178578063d2f7265a1461018b578063f63a03a7146101a0576100ae565b80630b6e78b7146100b057806337ea0de2146100e657806348e8681b1461010657806349f81a201461011957806351e6a9f51461013b575b005b3480156100bc57600080fd5b506100d06100cb366004610838565b6101c0565b6040516100dd9190610a97565b60405180910390f35b3480156100f257600080fd5b506100d0610101366004610812565b610219565b6100d0610114366004610838565b610588565b34801561012557600080fd5b5061012e610594565b6040516100dd9190610a58565b6100d0610149366004610812565b6105a3565b34801561015a57600080fd5b5061012e61070c565b34801561016f57600080fd5b5061012e61071b565b6100d06101863660046108a8565b61072a565b34801561019757600080fd5b5061012e610736565b3480156101ac57600080fd5b506100d06101bb3660046108a8565b610745565b6000806101cc84610219565b905083600160a060020a0316817fa760eea069988dd86998d7cfc5e919ffbec5a4f878497ebe16c16bd2d7d79544856040516102089190610a66565b60405180910390a390505b92915050565b60008054604080517fc27cabb500000000000000000000000000000000000000000000000000000000815290518392600160a060020a03169163c27cabb5916004808301926020929190829003018186803b15801561027757600080fd5b505afa15801561028b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506102af91908101906108dd565b6002546040517f70a08231000000000000000000000000000000000000000000000000000000008152919250600091600160a060020a03909116906370a08231906102fe9030906004016109f5565b60206040518083038186803b15801561031657600080fd5b505afa15801561032a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061034e91908101906108dd565b90508082111561044657600254600160a060020a03166323b872dd333061037b868663ffffffff61075116565b6040518463ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004016103b593929190610a30565b602060405180830381600087803b1580156103cf57600080fd5b505af11580156103e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610407919081019061088a565b610446576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043d90610a77565b60405180910390fd5b6040516060907f0a3b0a4f000000000000000000000000000000000000000000000000000000009061047c9087906024016109f5565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009094169390931790925260005460015492517fe3c3b200000000000000000000000000000000000000000000000000000000008152919350600160a060020a039081169263e3c3b2009261052d92339216908690600401610a03565b602060405180830381600087803b15801561054757600080fd5b505af115801561055b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061057f91908101906108dd565b95945050505050565b6000806101cc846105a3565b600254600160a060020a031681565b60008054604080517fc27cabb500000000000000000000000000000000000000000000000000000000815290518392600160a060020a03169163c27cabb5916004808301926020929190829003018186803b15801561060157600080fd5b505afa158015610615573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061063991908101906108dd565b6003546040517f6b1d4db7000000000000000000000000000000000000000000000000000000008152919250600160a060020a031690636b1d4db79034906106879085904290600401610aa5565b6020604051808303818588803b1580156106a057600080fd5b505af11580156106b4573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052506106d991908101906108dd565b5060006106e584610219565b6040519091503390303180156108fc02916000818181858888f15093979650505050505050565b600054600160a060020a031681565b600154600160a060020a031681565b60006102133383610588565b600354600160a060020a031681565b600061021333836101c0565b60008282111561078d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043d90610a87565b50900390565b600061079f8235610b1c565b9392505050565b600061079f8251610b30565b600082601f8301126107c357600080fd5b81356107d66107d182610ae7565b610ac0565b915080825260208301602083018583830111156107f257600080fd5b6107fd838284610b47565b50505092915050565b600061079f8251610b2d565b60006020828403121561082457600080fd5b60006108308484610793565b949350505050565b6000806040838503121561084b57600080fd5b60006108578585610793565b925050602083013567ffffffffffffffff81111561087457600080fd5b610880858286016107b2565b9150509250929050565b60006020828403121561089c57600080fd5b600061083084846107a6565b6000602082840312156108ba57600080fd5b813567ffffffffffffffff8111156108d157600080fd5b610830848285016107b2565b6000602082840312156108ef57600080fd5b60006108308484610806565b61090481610b35565b82525050565b61090481610b1c565b600061091e82610b0f565b6109288185610b13565b9350610938818560208601610b53565b61094181610b83565b9093019392505050565b61090481610b3c565b6000610961602c83610b13565b7f48756d616e6974794170706c6963616e743a3a6170706c79466f723a2054726181527f6e73666572206661696c65640000000000000000000000000000000000000000602082015260400192915050565b60006109c0602083610b13565b7f536166654d6174683a3a7375623a20496e746567657220756e646572666c6f77815260200192915050565b61090481610b2d565b60208101610213828461090a565b60608101610a1182866108fb565b610a1e602083018561090a565b818103604083015261057f8184610913565b60608101610a3e82866108fb565b610a4b602083018561090a565b61083060408301846109ec565b60208101610213828461094b565b6020808252810161079f8184610913565b6020808252810161021381610954565b60208082528101610213816109b3565b6020810161021382846109ec565b60408101610ab382856109ec565b61079f60208301846109ec565b60405181810167ffffffffffffffff81118282101715610adf57600080fd5b604052919050565b600067ffffffffffffffff821115610afe57600080fd5b506020601f91909101601f19160190565b5190565b90815260200190565b6000600160a060020a038216610213565b90565b151590565b6000610213825b600061021382610b1c565b82818337506000910152565b60005b83811015610b6e578181015183820152602001610b56565b83811115610b7d576000848401525b50505050565b601f01601f19169056fea265627a7a72305820c617d30589bfc06b234c6de3588072de25b537cb9ff64a70e2eea5083b4aa6156c6578706572696d656e74616cf50037';
    public static BYTECODE: string = TwitterHumanityApplicantContract.ORIGINAL_BYTECODE;
// tslint:enable:max-line-length
    public applyFor = {
        async sendTransactionAsync(
            who: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyFor(address)', [who
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.applyFor.estimateGasAsync.bind(
                    self,
                    who
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            who: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyFor(address)', [who
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            who: string,
        ): string {
            const self = this as any as TwitterHumanityApplicantContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('applyFor(address)', [who
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            who: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyFor(address)', [who
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('applyFor(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public humanity = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('humanity()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('humanity()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public applyWithEtherFor = {
        async sendTransactionAsync(
            who: string,
            txData: Partial<TxDataPayable> = {},
        ): Promise<string> {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyWithEtherFor(address)', [who
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.applyWithEtherFor.estimateGasAsync.bind(
                    self,
                    who
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            who: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyWithEtherFor(address)', [who
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            who: string,
        ): string {
            const self = this as any as TwitterHumanityApplicantContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('applyWithEtherFor(address)', [who
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            who: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyWithEtherFor(address)', [who
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('applyWithEtherFor(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public governance = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('governance()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('governance()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public registry = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('registry()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('registry()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public exchange = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('exchange()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('exchange()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public applyWithTwitter = {
        async sendTransactionAsync(
            username: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyWithTwitter(string)', [username
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.applyWithTwitter.estimateGasAsync.bind(
                    self,
                    username
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            username: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyWithTwitter(string)', [username
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            username: string,
        ): string {
            const self = this as any as TwitterHumanityApplicantContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('applyWithTwitter(string)', [username
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            username: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyWithTwitter(string)', [username
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('applyWithTwitter(string)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public applyWithTwitterFor = {
        async sendTransactionAsync(
            who: string,
            username: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyWithTwitterFor(address,string)', [who,
    username
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.applyWithTwitterFor.estimateGasAsync.bind(
                    self,
                    who,
                    username
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            who: string,
            username: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyWithTwitterFor(address,string)', [who,
    username
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            who: string,
            username: string,
        ): string {
            const self = this as any as TwitterHumanityApplicantContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('applyWithTwitterFor(address,string)', [who,
    username
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            who: string,
            username: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyWithTwitterFor(address,string)', [who,
        username
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('applyWithTwitterFor(address,string)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public applyWithTwitterUsingEther = {
        async sendTransactionAsync(
            username: string,
            txData: Partial<TxDataPayable> = {},
        ): Promise<string> {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyWithTwitterUsingEther(string)', [username
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.applyWithTwitterUsingEther.estimateGasAsync.bind(
                    self,
                    username
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            username: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyWithTwitterUsingEther(string)', [username
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            username: string,
        ): string {
            const self = this as any as TwitterHumanityApplicantContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('applyWithTwitterUsingEther(string)', [username
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            username: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyWithTwitterUsingEther(string)', [username
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('applyWithTwitterUsingEther(string)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public applyWithTwitterUsingEtherFor = {
        async sendTransactionAsync(
            who: string,
            username: string,
            txData: Partial<TxDataPayable> = {},
        ): Promise<string> {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyWithTwitterUsingEtherFor(address,string)', [who,
    username
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.applyWithTwitterUsingEtherFor.estimateGasAsync.bind(
                    self,
                    who,
                    username
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            who: string,
            username: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyWithTwitterUsingEtherFor(address,string)', [who,
    username
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            who: string,
            username: string,
        ): string {
            const self = this as any as TwitterHumanityApplicantContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('applyWithTwitterUsingEtherFor(address,string)', [who,
    username
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            who: string,
            username: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as TwitterHumanityApplicantContract;
            const encodedData = self._strictEncodeArguments('applyWithTwitterUsingEtherFor(address,string)', [who,
        username
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('applyWithTwitterUsingEtherFor(address,string)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public static linkLibrary(
        libraryName: string,
        address: string,
    ): void {
        const bytecode = TwitterHumanityApplicantContract.BYTECODE;
        const cleanedAddress = address.replace('0x', '');
        // truncate to 37 characters
        const truncatedName = libraryName.slice(0, 36);
        const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
        TwitterHumanityApplicantContract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
    }
    public static async deployAsync(
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _governance: string,
            _registry: string,
            _humanity: string,
            _exchange: string,
    ): Promise<TwitterHumanityApplicantContract> {
        const abi = JSON.parse(TwitterHumanityApplicantContract.ABI);
        const bytecode = TwitterHumanityApplicantContract.BYTECODE;
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_governance,
_registry,
_humanity,
_exchange
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_governance,
_registry,
_humanity,
_exchange
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_governance,
_registry,
_humanity,
_exchange
]);
        const web3Wrapper = new Web3Wrapper(provider);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {data: txData},
            txDefaults,
            web3Wrapper.estimateGasAsync.bind(web3Wrapper),
        );
        const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        logUtils.log(`transactionHash: ${txHash}`);
        const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
        logUtils.log(`TwitterHumanityApplicant successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new TwitterHumanityApplicantContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_governance,
_registry,
_humanity,
_exchange
];
        return contractInstance;
    }
    public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>) {
        const abi = JSON.parse(TwitterHumanityApplicantContract.ABI);
        const contractInstance = new TwitterHumanityApplicantContract(abi, address, provider, txDefaults);
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('TwitterHumanityApplicant', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method