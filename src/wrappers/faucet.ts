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
export class FaucetContract extends BaseContract {
// tslint:disable:max-line-length
    public static ABI: string = '[{"constant":true,"inputs":[],"name":"START_BLOCK","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"humanity","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"auction","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BLOCK_REWARD","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastMined","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"END_BLOCK","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_humanity","type":"address"},{"name":"_auction","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[],"name":"mine","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]';
    public static ORIGINAL_BYTECODE: string = '0x60806040524360005543624c4b40016001554360045534801561002157600080fd5b506040516040806105a883398101806040526100409190810190610090565b60028054600160a060020a03938416600160a060020a031991821617909155600380549290931691161790556100f2565b600061007d82516100ca565b9392505050565b600061007d82516100db565b600080604083850312156100a357600080fd5b60006100af8585610084565b92505060206100c085828601610071565b9150509250929050565b60006100d5826100e6565b92915050565b60006100d5826100ca565b600160a060020a031690565b6104a7806101016000396000f3fe608060405234801561001057600080fd5b506004361061009a576000357c0100000000000000000000000000000000000000000000000000000000900480637f05b9ef116100785780637f05b9ef146100e757806399f4b251146100ef578063b5afac5d146100f9578063cd3ec1d6146101015761009a565b806339b3e8261461009f57806349f81a20146100bd5780637d9f6db5146100d2575b600080fd5b6100a7610109565b6040516100b49190610425565b60405180910390f35b6100c561010f565b6040516100b491906103f7565b6100da61012b565b6040516100b491906103ce565b6100a7610147565b6100f7610153565b005b6100a7610252565b6100a7610258565b60005481565b60025473ffffffffffffffffffffffffffffffffffffffff1681565b60035473ffffffffffffffffffffffffffffffffffffffff1681565b670de0b6b3a764000081565b6000600154431061016657600154610168565b435b90506000610199670de0b6b3a764000061018d6004548561025e90919063ffffffff16565b9063ffffffff6102ae16565b6002546003546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815292935073ffffffffffffffffffffffffffffffffffffffff9182169263a9059cbb926101f792169085906004016103dc565b602060405180830381600087803b15801561021157600080fd5b505af1158015610225573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506102499190810190610315565b50504360045550565b60045481565b60015481565b6000828211156102a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029a90610415565b60405180910390fd5b508082035b92915050565b6000826102bd575060006102a8565b828202828482816102ca57fe5b0414610302576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029a90610405565b9392505050565b6000610302825161045d565b60006020828403121561032757600080fd5b60006103338484610309565b949350505050565b6103448161043c565b82525050565b61034481610462565b6000610360601f83610433565b7f536166654d6174683a3a6d756c3a20496e7465676572206f766572666c6f7700815260200192915050565b6000610399602083610433565b7f536166654d6174683a3a7375623a20496e746567657220756e646572666c6f77815260200192915050565b6103448161045a565b602081016102a8828461033b565b604081016103ea828561033b565b61030260208301846103c5565b602081016102a8828461034a565b602080825281016102a881610353565b602080825281016102a88161038c565b602081016102a882846103c5565b90815260200190565b600073ffffffffffffffffffffffffffffffffffffffff82166102a8565b90565b151590565b60006102a88261043c56fea265627a7a7230582013c6d36f47f2156b99fcb448eeb31b4c9d4818e5a75dbce512549c60f2d7934a6c6578706572696d656e74616cf50037';
    public static BYTECODE: string = FaucetContract.ORIGINAL_BYTECODE;
// tslint:enable:max-line-length
    public START_BLOCK = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as FaucetContract;
            const encodedData = self._strictEncodeArguments('START_BLOCK()', []);
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
            const abiEncoder = self._lookupAbiEncoder('START_BLOCK()');
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
            const self = this as any as FaucetContract;
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
        },};    public auction = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as FaucetContract;
            const encodedData = self._strictEncodeArguments('auction()', []);
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
            const abiEncoder = self._lookupAbiEncoder('auction()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public BLOCK_REWARD = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as FaucetContract;
            const encodedData = self._strictEncodeArguments('BLOCK_REWARD()', []);
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
            const abiEncoder = self._lookupAbiEncoder('BLOCK_REWARD()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public lastMined = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as FaucetContract;
            const encodedData = self._strictEncodeArguments('lastMined()', []);
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
            const abiEncoder = self._lookupAbiEncoder('lastMined()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public END_BLOCK = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as FaucetContract;
            const encodedData = self._strictEncodeArguments('END_BLOCK()', []);
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
            const abiEncoder = self._lookupAbiEncoder('END_BLOCK()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public mine = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as FaucetContract;
            const encodedData = self._strictEncodeArguments('mine()', []);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.mine.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as FaucetContract;
            const encodedData = self._strictEncodeArguments('mine()', []);
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
            const self = this as any as FaucetContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('mine()', []);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as FaucetContract;
            const encodedData = self._strictEncodeArguments('mine()', []);
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
            const abiEncoder = self._lookupAbiEncoder('mine()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public static linkLibrary(
        libraryName: string,
        address: string,
    ): void {
        const bytecode = FaucetContract.BYTECODE;
        const cleanedAddress = address.replace('0x', '');
        // truncate to 37 characters
        const truncatedName = libraryName.slice(0, 36);
        const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
        FaucetContract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
    }
    public static async deployAsync(
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _humanity: string,
            _auction: string,
    ): Promise<FaucetContract> {
        const abi = JSON.parse(FaucetContract.ABI);
        const bytecode = FaucetContract.BYTECODE;
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_humanity,
_auction
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_humanity,
_auction
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_humanity,
_auction
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
        logUtils.log(`Faucet successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new FaucetContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_humanity,
_auction
];
        return contractInstance;
    }
    public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>) {
        const abi = JSON.parse(FaucetContract.ABI);
        const contractInstance = new FaucetContract(abi, address, provider, txDefaults);
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('Faucet', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method