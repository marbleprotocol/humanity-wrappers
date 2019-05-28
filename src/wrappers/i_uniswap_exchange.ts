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
export class IUniswapExchangeContract extends BaseContract {
// tslint:disable:max-line-length
    public static ABI: string = '[{"constant":false,"inputs":[{"name":"tokens_bought","type":"uint256"},{"name":"timestamp","type":"uint256"}],"name":"ethToTokenSwapOutput","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"}]';
    public static ORIGINAL_BYTECODE: string = '0x';
    public static BYTECODE: string = IUniswapExchangeContract.ORIGINAL_BYTECODE;
// tslint:enable:max-line-length
    public ethToTokenSwapOutput = {
        async sendTransactionAsync(
            tokens_bought: BigNumber,
            timestamp: BigNumber,
            txData: Partial<TxDataPayable> = {},
        ): Promise<string> {
            const self = this as any as IUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('ethToTokenSwapOutput(uint256,uint256)', [tokens_bought,
    timestamp
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.ethToTokenSwapOutput.estimateGasAsync.bind(
                    self,
                    tokens_bought,
                    timestamp
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            tokens_bought: BigNumber,
            timestamp: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as IUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('ethToTokenSwapOutput(uint256,uint256)', [tokens_bought,
    timestamp
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
            tokens_bought: BigNumber,
            timestamp: BigNumber,
        ): string {
            const self = this as any as IUniswapExchangeContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('ethToTokenSwapOutput(uint256,uint256)', [tokens_bought,
    timestamp
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            tokens_bought: BigNumber,
            timestamp: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as IUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('ethToTokenSwapOutput(uint256,uint256)', [tokens_bought,
        timestamp
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
            const abiEncoder = self._lookupAbiEncoder('ethToTokenSwapOutput(uint256,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public static linkLibrary(
        libraryName: string,
        address: string,
    ): void {
        const bytecode = IUniswapExchangeContract.BYTECODE;
        const cleanedAddress = address.replace('0x', '');
        // truncate to 37 characters
        const truncatedName = libraryName.slice(0, 36);
        const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
        IUniswapExchangeContract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
    }
    public static async deployAsync(
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<IUniswapExchangeContract> {
        const abi = JSON.parse(IUniswapExchangeContract.ABI);
        const bytecode = IUniswapExchangeContract.BYTECODE;
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
        logUtils.log(`IUniswapExchange successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new IUniswapExchangeContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }
    public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>) {
        const abi = JSON.parse(IUniswapExchangeContract.ABI);
        const contractInstance = new IUniswapExchangeContract(abi, address, provider, txDefaults);
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('IUniswapExchange', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method