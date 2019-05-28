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
export class HumanityRegistryContract extends BaseContract {
// tslint:disable:max-line-length
    public static ABI: string = '[{"constant":true,"inputs":[],"name":"humanity","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"governance","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index_0","type":"address"}],"name":"humans","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_humanity","type":"address"},{"name":"_governance","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"who","type":"address"}],"name":"add","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"who","type":"address"}],"name":"remove","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"isHuman","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]';
    public static ORIGINAL_BYTECODE: string = '0x608060405234801561001057600080fd5b50604051604080610898833981018060405261002f919081019061007f565b60018054600160a060020a03938416600160a060020a031991821617909155600280549290931691161790556100e1565b600061006c82516100b9565b9392505050565b600061006c82516100ca565b6000806040838503121561009257600080fd5b600061009e8585610073565b92505060206100af85828601610060565b9150509250929050565b60006100c4826100d5565b92915050565b60006100c4826100b9565b600160a060020a031690565b6107a8806100f06000396000f3fe608060405234801561001057600080fd5b506004361061007e577c010000000000000000000000000000000000000000000000000000000060003504630a3b0a4f811461008357806329092d0e1461009857806349f81a20146100ab5780635aa6e675146100c95780639a98ce27146100de578063f72c436f146100fe575b600080fd5b610096610091366004610504565b610111565b005b6100966100a6366004610504565b6101de565b6100b3610256565b6040516100c091906106f2565b60405180910390f35b6100d1610265565b6040516100c091906106b5565b6100f16100ec366004610504565b610274565b6040516100c091906106e4565b6100f161010c366004610504565b610289565b600254600160a060020a0316331461015e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015590610710565b60405180910390fd5b600160a060020a03811660009081526020819052604090205460ff16156101b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015590610700565b6101ba816102a7565b600160a060020a03166000908152602081905260409020805460ff19166001179055565b600254600160a060020a03163314806101ff575033600160a060020a038216145b610235576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015590610720565b600160a060020a03166000908152602081905260409020805460ff19169055565b600154600160a060020a031681565b600254600160a060020a031681565b60006020819052908152604090205460ff1681565b600160a060020a031660009081526020819052604090205460ff1690565b600154604080517f18160ddd0000000000000000000000000000000000000000000000000000000081529051600092600160a060020a0316916318160ddd916004808301926020929190829003018186803b15801561030557600080fd5b505afa158015610319573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061033d919081019061052a565b90506a17293b0a9e69fd9c0000008110156103de576001546040517f40c10f19000000000000000000000000000000000000000000000000000000008152600160a060020a03909116906340c10f19906103a790859069065a4da25d3016c00000906004016106c9565b600060405180830381600087803b1580156103c157600080fd5b505af11580156103d5573d6000803e3d6000fd5b505050506104e1565b6a260ce0ff28d2b2ee000000811015610446576001546040517f40c10f19000000000000000000000000000000000000000000000000000000008152600160a060020a03909116906340c10f19906103a790859069043c33c1937564800000906004016106c9565b6a52b7d2dcc80cd2e40000008110156104e1576001546040517f40c10f19000000000000000000000000000000000000000000000000000000008152600160a060020a03909116906340c10f19906104ae90859069014542ba12a337c00000906004016106c9565b600060405180830381600087803b1580156104c857600080fd5b505af11580156104dc573d6000803e3d6000fd5b505050505b5050565b60006104f18235610739565b9392505050565b60006104f18251610755565b60006020828403121561051657600080fd5b600061052284846104e5565b949350505050565b60006020828403121561053c57600080fd5b600061052284846104f8565b61055181610739565b82525050565b61055181610744565b61055181610758565b61055181610763565b600061057f603983610730565b7f48756d616e69747952656769737472793a3a6164643a2041646472657373206981527f7320616c7265616479206f6e2074686520726567697374727900000000000000602082015260400192915050565b60006105de603a83610730565b7f48756d616e69747952656769737472793a3a6164643a204f6e6c7920676f766581527f726e616e63652063616e2061646420616e206964656e74697479000000000000602082015260400192915050565b600061063d605683610730565b7f48756d616e69747952656769737472793a3a72656d6f76653a204f6e6c79206781527f6f7665726e616e6365206f7220746865206964656e74697479206f776e65722060208201527f63616e2072656d6f766520616e206964656e7469747900000000000000000000604082015260600192915050565b602081016106c38284610548565b92915050565b604081016106d78285610548565b6104f16020830184610569565b602081016106c38284610557565b602081016106c38284610560565b602080825281016106c381610572565b602080825281016106c3816105d1565b602080825281016106c381610630565b90815260200190565b60006106c382610749565b151590565b600160a060020a031690565b90565b60006106c382610739565b60006106c38261075556fea265627a7a72305820d03c7fde78520e7008f86f3c10fc4c66c642c3b7d28caa3e3b3c55d46afe95d96c6578706572696d656e74616cf50037';
    public static BYTECODE: string = HumanityRegistryContract.ORIGINAL_BYTECODE;
// tslint:enable:max-line-length
    public humanity = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as HumanityRegistryContract;
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
            const self = this as any as HumanityRegistryContract;
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
        },};    public humans = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as HumanityRegistryContract;
            const encodedData = self._strictEncodeArguments('humans(address)', [index_0
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
            const abiEncoder = self._lookupAbiEncoder('humans(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public add = {
        async sendTransactionAsync(
            who: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as HumanityRegistryContract;
            const encodedData = self._strictEncodeArguments('add(address)', [who
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.add.estimateGasAsync.bind(
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
            const self = this as any as HumanityRegistryContract;
            const encodedData = self._strictEncodeArguments('add(address)', [who
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
            const self = this as any as HumanityRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('add(address)', [who
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            who: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as HumanityRegistryContract;
            const encodedData = self._strictEncodeArguments('add(address)', [who
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
            const abiEncoder = self._lookupAbiEncoder('add(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public remove = {
        async sendTransactionAsync(
            who: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as HumanityRegistryContract;
            const encodedData = self._strictEncodeArguments('remove(address)', [who
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.remove.estimateGasAsync.bind(
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
            const self = this as any as HumanityRegistryContract;
            const encodedData = self._strictEncodeArguments('remove(address)', [who
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
            const self = this as any as HumanityRegistryContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('remove(address)', [who
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            who: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as HumanityRegistryContract;
            const encodedData = self._strictEncodeArguments('remove(address)', [who
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
            const abiEncoder = self._lookupAbiEncoder('remove(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
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
            const self = this as any as HumanityRegistryContract;
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
        },};    public static linkLibrary(
        libraryName: string,
        address: string,
    ): void {
        const bytecode = HumanityRegistryContract.BYTECODE;
        const cleanedAddress = address.replace('0x', '');
        // truncate to 37 characters
        const truncatedName = libraryName.slice(0, 36);
        const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
        HumanityRegistryContract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
    }
    public static async deployAsync(
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _humanity: string,
            _governance: string,
    ): Promise<HumanityRegistryContract> {
        const abi = JSON.parse(HumanityRegistryContract.ABI);
        const bytecode = HumanityRegistryContract.BYTECODE;
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_humanity,
_governance
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_humanity,
_governance
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_humanity,
_governance
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
        logUtils.log(`HumanityRegistry successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new HumanityRegistryContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_humanity,
_governance
];
        return contractInstance;
    }
    public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>) {
        const abi = JSON.parse(HumanityRegistryContract.ABI);
        const contractInstance = new HumanityRegistryContract(abi, address, provider, txDefaults);
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('HumanityRegistry', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method