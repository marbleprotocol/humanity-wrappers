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
export class MockHumanityRegistryContract extends BaseContract {
// tslint:disable:max-line-length
    public static ABI: string = '[{"constant":true,"inputs":[],"name":"result","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"isHuman","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_result","type":"bool"}],"name":"setResult","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]';
    public static ORIGINAL_BYTECODE: string = '0x60806040526000805460ff1916600117905534801561001d57600080fd5b506101b18061002d6000396000f3fe608060405234801561001057600080fd5b506004361061005d577c01000000000000000000000000000000000000000000000000000000006000350463653721478114610062578063f4b4dc2e14610080578063f72c436f14610095575b600080fd5b61006a6100a8565b6040516100779190610140565b60405180910390f35b61009361008e366004610113565b6100b1565b005b61006a6100a33660046100ed565b6100c4565b60005460ff1681565b6000805460ff1916911515919091179055565b5060005460ff1690565b60006100da8235610159565b9392505050565b60006100da8235610154565b6000602082840312156100ff57600080fd5b600061010b84846100ce565b949350505050565b60006020828403121561012557600080fd5b600061010b84846100e1565b61013a81610154565b82525050565b6020810161014e8284610131565b92915050565b151590565b600073ffffffffffffffffffffffffffffffffffffffff821661014e56fea265627a7a72305820b6c8a12e5f307a061215500469b37c86dbc8a30f7eba63bdfab1ee3e2e5f1de56c6578706572696d656e74616cf50037';
    public static BYTECODE: string = MockHumanityRegistryContract.ORIGINAL_BYTECODE;
// tslint:enable:max-line-length
    public result = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as MockHumanityRegistryContract;
            const encodedData = self._strictEncodeArguments('result()', []);
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
            const abiEncoder = self._lookupAbiEncoder('result()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public isHuman = {
        async callAsync(
            who: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as MockHumanityRegistryContract;
            const encodedData = self._strictEncodeArguments('isHuman(address)', [who
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
            const abiEncoder = self._lookupAbiEncoder('isHuman(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public setResult = {
        async sendTransactionAsync(
            _result: boolean,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockHumanityRegistryContract;
            const encodedData = self._strictEncodeArguments('setResult(bool)', [_result
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.setResult.estimateGasAsync.bind(
                    self,
                    _result
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _result: boolean,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockHumanityRegistryContract;
            const encodedData = self._strictEncodeArguments('setResult(bool)', [_result
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
            _result: boolean,
        ): string {
            const self = this as any as MockHumanityRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setResult(bool)', [_result
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _result: boolean,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MockHumanityRegistryContract;
            const encodedData = self._strictEncodeArguments('setResult(bool)', [_result
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
            const abiEncoder = self._lookupAbiEncoder('setResult(bool)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public static linkLibrary(
        libraryName: string,
        address: string,
    ): void {
        const bytecode = MockHumanityRegistryContract.BYTECODE;
        const cleanedAddress = address.replace('0x', '');
        // truncate to 37 characters
        const truncatedName = libraryName.slice(0, 36);
        const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
        MockHumanityRegistryContract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
    }
    public static async deployAsync(
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<MockHumanityRegistryContract> {
        const abi = JSON.parse(MockHumanityRegistryContract.ABI);
        const bytecode = MockHumanityRegistryContract.BYTECODE;
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, []);
        const web3Wrapper = new Web3Wrapper(provider);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {data: txData},
            txDefaults,
            web3Wrapper.estimateGasAsync.bind(web3Wrapper),
        );
        const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        logUtils.log(`transactionHash: ${txHash}`);
        const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
        logUtils.log(`MockHumanityRegistry successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new MockHumanityRegistryContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }
    public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>) {
        const abi = JSON.parse(MockHumanityRegistryContract.ABI);
        const contractInstance = new MockHumanityRegistryContract(abi, address, provider, txDefaults);
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('MockHumanityRegistry', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method