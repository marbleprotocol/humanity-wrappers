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
export class HumanityApplicantContract extends BaseContract {
// tslint:disable:max-line-length
    public static ABI: string = '[{"constant":true,"inputs":[],"name":"humanity","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"governance","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_governance","type":"address"},{"name":"_registry","type":"address"},{"name":"_humanity","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"who","type":"address"}],"name":"applyFor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]';
    public static ORIGINAL_BYTECODE: string = '0x60806040523480156200001157600080fd5b50604051606080620009a7833981018060405262000033919081019062000164565b60008054600160a060020a03808616600160a060020a031992831617928390556001805486831690841617905560028054858316931692909217918290556040517f095ea7b30000000000000000000000000000000000000000000000000000000081529181169263095ea7b392620000b892919091169060001990600401620001d4565b602060405180830381600087803b158015620000d357600080fd5b505af1158015620000e8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506200010e91908101906200013b565b5050505062000227565b600062000126825162000215565b9392505050565b60006200012682516200021a565b6000602082840312156200014e57600080fd5b60006200015c848462000118565b949350505050565b6000806000606084860312156200017a57600080fd5b60006200018886866200012d565b93505060206200019b868287016200012d565b9250506040620001ae868287016200012d565b9150509250925092565b620001c381620001f3565b82525050565b620001c38162000212565b60408101620001e48285620001b8565b620001266020830184620001c9565b6000620002008262000206565b92915050565b600160a060020a031690565b90565b151590565b60006200020082620001f3565b61077080620002376000396000f3fe608060405234801561001057600080fd5b5060043610610068577c0100000000000000000000000000000000000000000000000000000000600035046337ea0de2811461006d57806349f81a20146100965780635aa6e675146100ab5780637b103999146100b3575b600080fd5b61008061007b3660046104c9565b6100bb565b60405161008d91906106b6565b60405180910390f35b61009e61042a565b60405161008d9190610688565b61009e610439565b61009e610448565b60008054604080517fc27cabb500000000000000000000000000000000000000000000000000000000815290518392600160a060020a03169163c27cabb5916004808301926020929190829003018186803b15801561011957600080fd5b505afa15801561012d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610151919081019061050d565b6002546040517f70a08231000000000000000000000000000000000000000000000000000000008152919250600091600160a060020a03909116906370a08231906101a0903090600401610625565b60206040518083038186803b1580156101b857600080fd5b505afa1580156101cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506101f0919081019061050d565b9050808211156102e857600254600160a060020a03166323b872dd333061021d868663ffffffff61045716565b6040518463ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040161025793929190610660565b602060405180830381600087803b15801561027157600080fd5b505af1158015610285573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506102a991908101906104ef565b6102e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102df90610696565b60405180910390fd5b6040516060907f0a3b0a4f000000000000000000000000000000000000000000000000000000009061031e908790602401610625565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009094169390931790925260005460015492517fe3c3b200000000000000000000000000000000000000000000000000000000008152919350600160a060020a039081169263e3c3b200926103cf92339216908690600401610633565b602060405180830381600087803b1580156103e957600080fd5b505af11580156103fd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610421919081019061050d565b95945050505050565b600254600160a060020a031681565b600054600160a060020a031681565b600154600160a060020a031681565b600082821115610493576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102df906106a6565b508082035b92915050565b60006104aa82356106d1565b9392505050565b60006104aa82516106e5565b60006104aa82516106e2565b6000602082840312156104db57600080fd5b60006104e7848461049e565b949350505050565b60006020828403121561050157600080fd5b60006104e784846104b1565b60006020828403121561051f57600080fd5b60006104e784846104bd565b610534816106ea565b82525050565b610534816106d1565b600061054e826106c4565b61055881856106c8565b93506105688185602086016106fc565b6105718161072c565b9093019392505050565b610534816106f1565b6000610591602c836106c8565b7f48756d616e6974794170706c6963616e743a3a6170706c79466f723a2054726181527f6e73666572206661696c65640000000000000000000000000000000000000000602082015260400192915050565b60006105f06020836106c8565b7f536166654d6174683a3a7375623a20496e746567657220756e646572666c6f77815260200192915050565b610534816106e2565b60208101610498828461053a565b60608101610641828661052b565b61064e602083018561053a565b81810360408301526104218184610543565b6060810161066e828661052b565b61067b602083018561053a565b6104e7604083018461061c565b60208101610498828461057b565b6020808252810161049881610584565b60208082528101610498816105e3565b60208101610498828461061c565b5190565b90815260200190565b6000600160a060020a038216610498565b90565b151590565b6000610498825b6000610498826106d1565b60005b838110156107175781810151838201526020016106ff565b83811115610726576000848401525b50505050565b601f01601f19169056fea265627a7a72305820302492d7993891d813dae397566a262b1dc2ad916b58404de63d9605e8a768376c6578706572696d656e74616cf50037';
    public static BYTECODE: string = HumanityApplicantContract.ORIGINAL_BYTECODE;
// tslint:enable:max-line-length
    public humanity = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as HumanityApplicantContract;
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
            const self = this as any as HumanityApplicantContract;
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
            const self = this as any as HumanityApplicantContract;
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
        },};    public applyFor = {
        async sendTransactionAsync(
            who: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as HumanityApplicantContract;
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
            const self = this as any as HumanityApplicantContract;
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
            const self = this as any as HumanityApplicantContract;
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
            const self = this as any as HumanityApplicantContract;
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
        },};    public static linkLibrary(
        libraryName: string,
        address: string,
    ): void {
        const bytecode = HumanityApplicantContract.BYTECODE;
        const cleanedAddress = address.replace('0x', '');
        // truncate to 37 characters
        const truncatedName = libraryName.slice(0, 36);
        const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
        HumanityApplicantContract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
    }
    public static async deployAsync(
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _governance: string,
            _registry: string,
            _humanity: string,
    ): Promise<HumanityApplicantContract> {
        const abi = JSON.parse(HumanityApplicantContract.ABI);
        const bytecode = HumanityApplicantContract.BYTECODE;
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_governance,
_registry,
_humanity
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_governance,
_registry,
_humanity
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_governance,
_registry,
_humanity
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
        logUtils.log(`HumanityApplicant successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new HumanityApplicantContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_governance,
_registry,
_humanity
];
        return contractInstance;
    }
    public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>) {
        const abi = JSON.parse(HumanityApplicantContract.ABI);
        const contractInstance = new HumanityApplicantContract(abi, address, provider, txDefaults);
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('HumanityApplicant', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method