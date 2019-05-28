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
export class MockTargetContract extends BaseContract {
// tslint:disable:max-line-length
    public static ABI: string = '[{"constant":true,"inputs":[],"name":"value","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"setValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"data","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"}]';
    public static ORIGINAL_BYTECODE: string = '0x608060405234801561001057600080fd5b506101fd806100206000396000f3fe608060405234801561001057600080fd5b506004361061005d577c010000000000000000000000000000000000000000000000000000000060003504633fa4f24581146100625780634fa519fa1461008057806373d4a13a1461008a575b600080fd5b61006a61009f565b6040516100779190610165565b60405180910390f35b6100886100a5565b005b6100926100ac565b604051610077919061014d565b60005481565b6004600055565b6040805160048152602481019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f4fa519fa0000000000000000000000000000000000000000000000000000000017905290565b600061011182610179565b61011b818561017d565b935061012b818560208601610189565b610134816101b9565b9093019392505050565b61014781610186565b82525050565b6020808252810161015e8184610106565b9392505050565b60208101610173828461013e565b92915050565b5190565b90815260200190565b90565b60005b838110156101a457818101518382015260200161018c565b838111156101b3576000848401525b50505050565b601f01601f19169056fea265627a7a72305820f84e165a808f55e61fb816c8aa9982bbe10d0a3a4b65c95eb3affe0380135daa6c6578706572696d656e74616cf50037';
    public static BYTECODE: string = MockTargetContract.ORIGINAL_BYTECODE;
// tslint:enable:max-line-length
    public value = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockTargetContract;
            const encodedData = self._strictEncodeArguments('value()', []);
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
            const abiEncoder = self._lookupAbiEncoder('value()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public setValue = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockTargetContract;
            const encodedData = self._strictEncodeArguments('setValue()', []);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.setValue.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockTargetContract;
            const encodedData = self._strictEncodeArguments('setValue()', []);
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
            const self = this as any as MockTargetContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setValue()', []);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MockTargetContract;
            const encodedData = self._strictEncodeArguments('setValue()', []);
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
            const abiEncoder = self._lookupAbiEncoder('setValue()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public data = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as MockTargetContract;
            const encodedData = self._strictEncodeArguments('data()', []);
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
            const abiEncoder = self._lookupAbiEncoder('data()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public static linkLibrary(
        libraryName: string,
        address: string,
    ): void {
        const bytecode = MockTargetContract.BYTECODE;
        const cleanedAddress = address.replace('0x', '');
        // truncate to 37 characters
        const truncatedName = libraryName.slice(0, 36);
        const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
        MockTargetContract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
    }
    public static async deployAsync(
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<MockTargetContract> {
        const abi = JSON.parse(MockTargetContract.ABI);
        const bytecode = MockTargetContract.BYTECODE;
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
        logUtils.log(`MockTarget successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new MockTargetContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }
    public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>) {
        const abi = JSON.parse(MockTargetContract.ABI);
        const contractInstance = new MockTargetContract(abi, address, provider, txDefaults);
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('MockTarget', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method