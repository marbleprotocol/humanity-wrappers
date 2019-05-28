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


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class PayableHumanityApplicantContract extends BaseContract {
// tslint:disable:max-line-length
    public static ABI: string = '[{"constant":false,"inputs":[{"name":"who","type":"address"}],"name":"applyFor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"humanity","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"governance","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"exchange","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_governance","type":"address"},{"name":"_registry","type":"address"},{"name":"_humanity","type":"address"},{"name":"_exchange","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[{"name":"who","type":"address"}],"name":"applyWithEtherFor","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"}]';
    public static ORIGINAL_BYTECODE: string = '0x60806040523480156200001157600080fd5b5060405160808062000bda83398101806040526200003391908101906200018c565b60008054600160a060020a03808716600160a060020a031992831617928390556001805482881690841617905560028054828716931692909217918290556040517f095ea7b30000000000000000000000000000000000000000000000000000000081528793879387939081169263095ea7b392620000bb9216906000199060040162000212565b602060405180830381600087803b158015620000d657600080fd5b505af1158015620000eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525062000111919081019062000163565b505060038054600160a060020a031916600160a060020a03949094169390931790925550620002659350505050565b60006200014e825162000253565b9392505050565b60006200014e825162000258565b6000602082840312156200017657600080fd5b600062000184848462000140565b949350505050565b60008060008060808587031215620001a357600080fd5b6000620001b1878762000155565b9450506020620001c48782880162000155565b9350506040620001d78782880162000155565b9250506060620001ea8782880162000155565b91505092959194509250565b620002018162000231565b82525050565b620002018162000250565b60408101620002228285620001f6565b6200014e602083018462000207565b60006200023e8262000244565b92915050565b600160a060020a031690565b90565b151590565b60006200023e8262000231565b61096580620002756000396000f3fe608060405260043610610071577c0100000000000000000000000000000000000000000000000000000000600035046337ea0de2811461007357806349f81a20146100a957806351e6a9f5146100cb5780635aa6e675146100de5780637b103999146100f3578063d2f7265a14610108575b005b34801561007f57600080fd5b5061009361008e3660046106a3565b61011d565b6040516100a09190610890565b60405180910390f35b3480156100b557600080fd5b506100be61048c565b6040516100a09190610862565b6100936100d93660046106a3565b61049b565b3480156100ea57600080fd5b506100be610604565b3480156100ff57600080fd5b506100be610613565b34801561011457600080fd5b506100be610622565b60008054604080517fc27cabb500000000000000000000000000000000000000000000000000000000815290518392600160a060020a03169163c27cabb5916004808301926020929190829003018186803b15801561017b57600080fd5b505afa15801561018f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506101b391908101906106e7565b6002546040517f70a08231000000000000000000000000000000000000000000000000000000008152919250600091600160a060020a03909116906370a08231906102029030906004016107ff565b60206040518083038186803b15801561021a57600080fd5b505afa15801561022e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061025291908101906106e7565b90508082111561034a57600254600160a060020a03166323b872dd333061027f868663ffffffff61063116565b6040518463ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004016102b99392919061083a565b602060405180830381600087803b1580156102d357600080fd5b505af11580156102e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061030b91908101906106c9565b61034a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034190610870565b60405180910390fd5b6040516060907f0a3b0a4f00000000000000000000000000000000000000000000000000000000906103809087906024016107ff565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009094169390931790925260005460015492517fe3c3b200000000000000000000000000000000000000000000000000000000008152919350600160a060020a039081169263e3c3b200926104319233921690869060040161080d565b602060405180830381600087803b15801561044b57600080fd5b505af115801561045f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061048391908101906106e7565b95945050505050565b600254600160a060020a031681565b60008054604080517fc27cabb500000000000000000000000000000000000000000000000000000000815290518392600160a060020a03169163c27cabb5916004808301926020929190829003018186803b1580156104f957600080fd5b505afa15801561050d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061053191908101906106e7565b6003546040517f6b1d4db7000000000000000000000000000000000000000000000000000000008152919250600160a060020a031690636b1d4db790349061057f908590429060040161089e565b6020604051808303818588803b15801561059857600080fd5b505af11580156105ac573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052506105d191908101906106e7565b5060006105dd8461011d565b6040519091503390303180156108fc02916000818181858888f15093979650505050505050565b600054600160a060020a031681565b600154600160a060020a031681565b600354600160a060020a031681565b60008282111561066d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034190610880565b508082035b92915050565b600061068482356108c6565b9392505050565b600061068482516108da565b600061068482516108d7565b6000602082840312156106b557600080fd5b60006106c18484610678565b949350505050565b6000602082840312156106db57600080fd5b60006106c1848461068b565b6000602082840312156106f957600080fd5b60006106c18484610697565b61070e816108df565b82525050565b61070e816108c6565b6000610728826108b9565b61073281856108bd565b93506107428185602086016108f1565b61074b81610921565b9093019392505050565b61070e816108e6565b600061076b602c836108bd565b7f48756d616e6974794170706c6963616e743a3a6170706c79466f723a2054726181527f6e73666572206661696c65640000000000000000000000000000000000000000602082015260400192915050565b60006107ca6020836108bd565b7f536166654d6174683a3a7375623a20496e746567657220756e646572666c6f77815260200192915050565b61070e816108d7565b602081016106728284610714565b6060810161081b8286610705565b6108286020830185610714565b8181036040830152610483818461071d565b606081016108488286610705565b6108556020830185610714565b6106c160408301846107f6565b602081016106728284610755565b602080825281016106728161075e565b60208082528101610672816107bd565b6020810161067282846107f6565b604081016108ac82856107f6565b61068460208301846107f6565b5190565b90815260200190565b6000600160a060020a038216610672565b90565b151590565b6000610672825b6000610672826108c6565b60005b8381101561090c5781810151838201526020016108f4565b8381111561091b576000848401525b50505050565b601f01601f19169056fea265627a7a72305820f934563d8db27e456b0d698fd89387763d2efe8470b47be8407e67b7628083306c6578706572696d656e74616cf50037';
    public static BYTECODE: string = PayableHumanityApplicantContract.ORIGINAL_BYTECODE;
// tslint:enable:max-line-length
    public applyFor = {
        async sendTransactionAsync(
            who: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as PayableHumanityApplicantContract;
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
            const self = this as any as PayableHumanityApplicantContract;
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
            const self = this as any as PayableHumanityApplicantContract;
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
            const self = this as any as PayableHumanityApplicantContract;
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
            const self = this as any as PayableHumanityApplicantContract;
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
        },};    public governance = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as PayableHumanityApplicantContract;
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
            const self = this as any as PayableHumanityApplicantContract;
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
            const self = this as any as PayableHumanityApplicantContract;
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
        },};    public applyWithEtherFor = {
        async sendTransactionAsync(
            who: string,
            txData: Partial<TxDataPayable> = {},
        ): Promise<string> {
            const self = this as any as PayableHumanityApplicantContract;
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
            const self = this as any as PayableHumanityApplicantContract;
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
            const self = this as any as PayableHumanityApplicantContract;
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
            const self = this as any as PayableHumanityApplicantContract;
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
        },};    public static linkLibrary(
        libraryName: string,
        address: string,
    ): void {
        const bytecode = PayableHumanityApplicantContract.BYTECODE;
        const cleanedAddress = address.replace('0x', '');
        // truncate to 37 characters
        const truncatedName = libraryName.slice(0, 36);
        const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
        PayableHumanityApplicantContract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
    }
    public static async deployAsync(
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _governance: string,
            _registry: string,
            _humanity: string,
            _exchange: string,
    ): Promise<PayableHumanityApplicantContract> {
        const abi = JSON.parse(PayableHumanityApplicantContract.ABI);
        const bytecode = PayableHumanityApplicantContract.BYTECODE;
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
        logUtils.log(`PayableHumanityApplicant successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new PayableHumanityApplicantContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_governance,
_registry,
_humanity,
_exchange
];
        return contractInstance;
    }
    public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>) {
        const abi = JSON.parse(PayableHumanityApplicantContract.ABI);
        const contractInstance = new PayableHumanityApplicantContract(abi, address, provider, txDefaults);
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('PayableHumanityApplicant', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method