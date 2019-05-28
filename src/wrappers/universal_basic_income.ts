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
export class UniversalBasicIncomeContract extends BaseContract {
// tslint:disable:max-line-length
    public static ABI: string = '[{"constant":true,"inputs":[],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INCOME_PER_SECOND","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index_0","type":"address"}],"name":"claimTimes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MONTHLY_INCOME","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dai","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_registry","type":"address"},{"name":"_dai","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[],"name":"claim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]';
    public static ORIGINAL_BYTECODE: string = '0x608060405234801561001057600080fd5b5060405160408061082b833981018060405261002f9190810190610073565b60008054600160a060020a03938416600160a060020a031991821617909155600180549290931691161790556100d5565b600061006c82516100be565b9392505050565b6000806040838503121561008657600080fd5b60006100928585610060565b92505060206100a385828601610060565b9150509250929050565b60006100b8826100c9565b92915050565b60006100b8826100ad565b600160a060020a031690565b610747806100e46000396000f3fe608060405234801561001057600080fd5b506004361061007e577c010000000000000000000000000000000000000000000000000000000060003504634e71d92d81146100835780637b1039991461008d5780637e42b2b1146100ab578063b89ea402146100c0578063ee8bb63c146100d3578063f4b9fa75146100db575b600080fd5b61008b6100e3565b005b6100956103a1565b6040516100a29190610680565b60405180910390f35b6100b36103bd565b6040516100a291906106be565b6100b36100ce3660046104c6565b6103c6565b6100b36103d8565b6100956103e4565b6000546040517ff72c436f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063f72c436f90610139903390600401610657565b60206040518083038186803b15801561015157600080fd5b505afa158015610165573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061018991908101906104ec565b6101c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101bf906106ae565b60405180910390fd5b3360009081526002602052604081205442906101ee57670de0b6b3a76400009150610223565b33600090815260026020526040902054610220906459d39e7f0f90610214908490610400565b9063ffffffff61044716565b91505b6001546040517f70a0823100000000000000000000000000000000000000000000000000000000815260009173ffffffffffffffffffffffffffffffffffffffff16906370a082319061027a903090600401610649565b60206040518083038186803b15801561029257600080fd5b505afa1580156102a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506102ca919081019061050a565b905060008382106102db57836102dd565b815b6001546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb906103369033908590600401610665565b602060405180830381600087803b15801561035057600080fd5b505af1158015610364573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061038891908101906104ec565b5050336000908152600260205260409020919091555050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b6459d39e7f0f81565b60026020526000908152604090205481565b670de0b6b3a764000081565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60008282111561043c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101bf9061069e565b508082035b92915050565b60008261045657506000610441565b8282028284828161046357fe5b041461049b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101bf9061068e565b9392505050565b600061049b82356106d5565b600061049b82516106f6565b600061049b82516106f3565b6000602082840312156104d857600080fd5b60006104e484846104a2565b949350505050565b6000602082840312156104fe57600080fd5b60006104e484846104ae565b60006020828403121561051c57600080fd5b60006104e484846104ba565b610531816106fb565b82525050565b610531816106d5565b61053181610702565b6000610556601f836106cc565b7f536166654d6174683a3a6d756c3a20496e7465676572206f766572666c6f7700815260200192915050565b600061058f6020836106cc565b7f536166654d6174683a3a7375623a20496e746567657220756e646572666c6f77815260200192915050565b60006105c86051836106cc565b7f556e6976657273616c4261736963496e636f6d653a3a636c61696d3a20596f7581527f206d757374206265206f6e207468652048756d616e697479207265676973747260208201527f7920746f20636c61696d20696e636f6d65000000000000000000000000000000604082015260600192915050565b610531816106f3565b602081016104418284610537565b602081016104418284610528565b604081016106738285610528565b61049b6020830184610640565b602081016104418284610540565b6020808252810161044181610549565b6020808252810161044181610582565b60208082528101610441816105bb565b602081016104418284610640565b90815260200190565b600073ffffffffffffffffffffffffffffffffffffffff8216610441565b90565b151590565b6000610441825b6000610441826106d556fea265627a7a723058206f54ea94c2044ec4a233431471ebe28609a78d1fc2d19f7155b6aa6e91871acf6c6578706572696d656e74616cf50037';
    public static BYTECODE: string = UniversalBasicIncomeContract.ORIGINAL_BYTECODE;
// tslint:enable:max-line-length
    public registry = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as UniversalBasicIncomeContract;
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
        },};    public INCOME_PER_SECOND = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as UniversalBasicIncomeContract;
            const encodedData = self._strictEncodeArguments('INCOME_PER_SECOND()', []);
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
            const abiEncoder = self._lookupAbiEncoder('INCOME_PER_SECOND()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public claimTimes = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as UniversalBasicIncomeContract;
            const encodedData = self._strictEncodeArguments('claimTimes(address)', [index_0
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
            const abiEncoder = self._lookupAbiEncoder('claimTimes(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public MONTHLY_INCOME = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as UniversalBasicIncomeContract;
            const encodedData = self._strictEncodeArguments('MONTHLY_INCOME()', []);
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
            const abiEncoder = self._lookupAbiEncoder('MONTHLY_INCOME()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public dai = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as UniversalBasicIncomeContract;
            const encodedData = self._strictEncodeArguments('dai()', []);
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
            const abiEncoder = self._lookupAbiEncoder('dai()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public claim = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as UniversalBasicIncomeContract;
            const encodedData = self._strictEncodeArguments('claim()', []);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.claim.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as UniversalBasicIncomeContract;
            const encodedData = self._strictEncodeArguments('claim()', []);
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
        ): string {
            const self = this as any as UniversalBasicIncomeContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('claim()', []);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as UniversalBasicIncomeContract;
            const encodedData = self._strictEncodeArguments('claim()', []);
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
            const abiEncoder = self._lookupAbiEncoder('claim()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public static linkLibrary(
        libraryName: string,
        address: string,
    ): void {
        const bytecode = UniversalBasicIncomeContract.BYTECODE;
        const cleanedAddress = address.replace('0x', '');
        // truncate to 37 characters
        const truncatedName = libraryName.slice(0, 36);
        const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
        UniversalBasicIncomeContract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
    }
    public static async deployAsync(
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _registry: string,
            _dai: string,
    ): Promise<UniversalBasicIncomeContract> {
        const abi = JSON.parse(UniversalBasicIncomeContract.ABI);
        const bytecode = UniversalBasicIncomeContract.BYTECODE;
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_registry,
_dai
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_registry,
_dai
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_registry,
_dai
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
        logUtils.log(`UniversalBasicIncome successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new UniversalBasicIncomeContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_registry,
_dai
];
        return contractInstance;
    }
    public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>) {
        const abi = JSON.parse(UniversalBasicIncomeContract.ABI);
        const contractInstance = new UniversalBasicIncomeContract(abi, address, provider, txDefaults);
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('UniversalBasicIncome', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method