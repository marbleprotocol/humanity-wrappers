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
export class MockUniswapContract extends BaseContract {
// tslint:disable:max-line-length
    public static ABI: string = '[{"constant":true,"inputs":[],"name":"humanity","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_humanity","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"tokens_bought","type":"uint256"},{"name":"timestamp","type":"uint256"}],"name":"ethToTokenSwapOutput","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"}]';
    public static ORIGINAL_BYTECODE: string = '0x608060405234801561001057600080fd5b50604051602080610494833981018060405261002f9190810190610067565b60008054600160a060020a031916600160a060020a03929092169190911790556100b5565b6000610060825161009e565b9392505050565b60006020828403121561007957600080fd5b60006100858484610054565b949350505050565b6000610098826100a9565b92915050565b60006100988261008d565b600160a060020a031690565b6103d0806100c46000396000f3fe608060405260043610610045577c0100000000000000000000000000000000000000000000000000000000600035046349f81a20811461004a5780636b1d4db714610075575b600080fd5b34801561005657600080fd5b5061005f610095565b60405161006c9190610342565b60405180910390f35b6100886100833660046102b5565b6100b1565b60405161006c9190610350565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600080546040517f70a08231000000000000000000000000000000000000000000000000000000008152829173ffffffffffffffffffffffffffffffffffffffff16906370a0823190610108903090600401610319565b60206040518083038186803b15801561012057600080fd5b505afa158015610134573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506101589190810190610297565b6000546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb906101b19033908590600401610327565b602060405180830381600087803b1580156101cb57600080fd5b505af11580156101df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506102039190810190610271565b508334111561023d5760405133903486900380156108fc02916000818181858888f1935050505015801561023b573d6000803e3d6000fd5b505b90505b92915050565b6000610252825161037f565b9392505050565b6000610252823561037c565b6000610252825161037c565b60006020828403121561028357600080fd5b600061028f8484610246565b949350505050565b6000602082840312156102a957600080fd5b600061028f8484610265565b600080604083850312156102c857600080fd5b60006102d48585610259565b92505060206102e585828601610259565b9150509250929050565b6102f881610384565b82525050565b6102f88161035e565b6102f88161038b565b6102f88161037c565b6020810161024082846102fe565b6040810161033582856102ef565b6102526020830184610310565b602081016102408284610307565b602081016102408284610310565b600073ffffffffffffffffffffffffffffffffffffffff8216610240565b90565b151590565b6000610240825b60006102408261035e56fea265627a7a72305820115ce66ffd6df9be337fcc7a25c2da1fa2f3670b2f7938153ada76dee7efbec96c6578706572696d656e74616cf50037';
    public static BYTECODE: string = MockUniswapContract.ORIGINAL_BYTECODE;
// tslint:enable:max-line-length
    public humanity = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as MockUniswapContract;
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
        },};    public ethToTokenSwapOutput = {
        async sendTransactionAsync(
            tokens_bought: BigNumber,
            timestamp: BigNumber,
            txData: Partial<TxDataPayable> = {},
        ): Promise<string> {
            const self = this as any as MockUniswapContract;
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
            const self = this as any as MockUniswapContract;
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
            const self = this as any as MockUniswapContract;
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
            const self = this as any as MockUniswapContract;
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
        const bytecode = MockUniswapContract.BYTECODE;
        const cleanedAddress = address.replace('0x', '');
        // truncate to 37 characters
        const truncatedName = libraryName.slice(0, 36);
        const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
        MockUniswapContract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
    }
    public static async deployAsync(
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _humanity: string,
    ): Promise<MockUniswapContract> {
        const abi = JSON.parse(MockUniswapContract.ABI);
        const bytecode = MockUniswapContract.BYTECODE;
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_humanity
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_humanity
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_humanity
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
        logUtils.log(`MockUniswap successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new MockUniswapContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_humanity
];
        return contractInstance;
    }
    public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>) {
        const abi = JSON.parse(MockUniswapContract.ABI);
        const contractInstance = new MockUniswapContract(abi, address, provider, txDefaults);
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('MockUniswap', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method