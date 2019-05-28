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

export type MockERC20EventArgs =
    | MockERC20TransferEventArgs
    | MockERC20ApprovalEventArgs;

export enum MockERC20Events {
    Transfer = 'Transfer',
    Approval = 'Approval',
}

export interface MockERC20TransferEventArgs extends DecodedLogArgs {
    from: string;
    to: string;
    value: BigNumber;
}
export interface MockERC20ApprovalEventArgs extends DecodedLogArgs {
    owner: string;
    spender: string;
    value: BigNumber;
}

/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class MockERC20Contract extends BaseContract {
// tslint:disable:max-line-length
    public static ABI: string = '[{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"name":"account","type":"address"},{"name":"value","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]';
    public static ORIGINAL_BYTECODE: string = '0x608060405234801561001057600080fd5b50610afd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b0576000357c01000000000000000000000000000000000000000000000000000000009004806340c10f191161008357806340c10f191461011957806370a082311461012e578063a457c2d714610141578063a9059cbb14610154578063dd62ed3e14610167576100b0565b8063095ea7b3146100b557806318160ddd146100de57806323b872dd146100f35780633950935114610106575b600080fd5b6100c86100c3366004610734565b61017a565b6040516100d59190610a15565b60405180910390f35b6100e661021a565b6040516100d59190610a93565b6100c86101013660046106e7565b610220565b6100c8610114366004610734565b6102ec565b61012c610127366004610734565b6103a3565b005b6100e661013c366004610687565b6103b1565b6100c861014f366004610734565b6103cc565b6100c8610162366004610734565b61042b565b6100e66101753660046106ad565b610441565b6000600160a060020a0383166101ae5760405160e560020a62461bcd0281526004016101a590610a63565b60405180910390fd5b336000818152600160209081526040808320600160a060020a03881680855292529182902085905590519091907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610208908690610a93565b60405180910390a35060015b92915050565b60025490565b600160a060020a0383166000908152600160209081526040808320338452909152812054610254908363ffffffff61046c16565b600160a060020a0385166000908152600160209081526040808320338452909152902055610283848484610497565b600160a060020a0384166000818152600160209081526040808320338085529252918290205491519092917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925916102da9190610a93565b60405180910390a35060019392505050565b6000600160a060020a0383166103175760405160e560020a62461bcd0281526004016101a590610a83565b336000908152600160209081526040808320600160a060020a038716845290915290205461034b908363ffffffff61057d16565b336000818152600160209081526040808320600160a060020a038916808552925291829020849055905190927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925916102089190610a93565b6103ad82826105ac565b5050565b600160a060020a031660009081526020819052604090205490565b6000600160a060020a0383166103f75760405160e560020a62461bcd0281526004016101a590610a23565b336000908152600160209081526040808320600160a060020a038716845290915290205461034b908363ffffffff61046c16565b6000610438338484610497565b50600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b6000828211156104915760405160e560020a62461bcd0281526004016101a590610a33565b50900390565b600160a060020a0382166104c05760405160e560020a62461bcd0281526004016101a590610a43565b600160a060020a0383166000908152602081905260409020546104e9908263ffffffff61046c16565b600160a060020a03808516600090815260208190526040808220939093559084168152205461051e908263ffffffff61057d16565b600160a060020a0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610570908590610a93565b60405180910390a3505050565b6000828201838110156105a55760405160e560020a62461bcd0281526004016101a590610a73565b9392505050565b600160a060020a0382166105d55760405160e560020a62461bcd0281526004016101a590610a53565b6002546105e8908263ffffffff61057d16565b600255600160a060020a038216600090815260208190526040902054610614908263ffffffff61057d16565b600160a060020a0383166000818152602081905260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610663908590610a93565b60405180910390a35050565b60006105a58235610ab2565b60006105a58235610aaf565b60006020828403121561069957600080fd5b60006106a5848461066f565b949350505050565b600080604083850312156106c057600080fd5b60006106cc858561066f565b92505060206106dd8582860161066f565b9150509250929050565b6000806000606084860312156106fc57600080fd5b6000610708868661066f565b93505060206107198682870161066f565b925050604061072a8682870161067b565b9150509250925092565b6000806040838503121561074757600080fd5b6000610753858561066f565b92505060206106dd8582860161067b565b61076d81610aaa565b82525050565b6000610780604483610aa1565b7f45524332303a3a6465637265617365416c6c6f77616e63653a2043616e6e6f7481527f20646563726561736520616c6c6f77616e636520666f7220616464726573732060208201527f7a65726f00000000000000000000000000000000000000000000000000000000604082015260600192915050565b6000610805602083610aa1565b7f536166654d6174683a3a7375623a20496e746567657220756e646572666c6f77815260200192915050565b600061083e603183610aa1565b7f45524332303a3a5f7472616e736665723a2043616e6e6f74207472616e73666581527f7220746f2061646472657373207a65726f000000000000000000000000000000602082015260400192915050565b600061089d602983610aa1565b7f45524332303a3a5f6d696e743a2043616e6e6f74206d696e7420746f2061646481527f72657373207a65726f0000000000000000000000000000000000000000000000602082015260400192915050565b60006108fc602b83610aa1565b7f45524332303a3a617070726f76653a2043616e6e6f7420617070726f7665206181527f646472657373207a65726f000000000000000000000000000000000000000000602082015260400192915050565b600061095b601f83610aa1565b7f536166654d6174683a3a6164643a20496e7465676572206f766572666c6f7700815260200192915050565b6000610994604483610aa1565b7f45524332303a3a696e637265617365416c6c6f77616e63653a2043616e6e6f7481527f20696e63726561736520616c6c6f77616e636520666f7220616464726573732060208201527f7a65726f00000000000000000000000000000000000000000000000000000000604082015260600192915050565b61076d81610aaf565b602081016102148284610764565b6020808252810161021481610773565b60208082528101610214816107f8565b6020808252810161021481610831565b6020808252810161021481610890565b60208082528101610214816108ef565b602080825281016102148161094e565b6020808252810161021481610987565b602081016102148284610a0c565b90815260200190565b151590565b90565b6000600160a060020a03821661021456fea265627a7a7230582074d2de7392d7a0680f733a80e7de24729388be70b1883614f50dd15fc52889a26c6578706572696d656e74616cf50037';
    public static BYTECODE: string = MockERC20Contract.ORIGINAL_BYTECODE;
// tslint:enable:max-line-length
    public approve = {
        async sendTransactionAsync(
            spender: string,
            value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('approve(address,uint256)', [spender,
    value
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.approve.estimateGasAsync.bind(
                    self,
                    spender,
                    value
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            spender: string,
            value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('approve(address,uint256)', [spender,
    value
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
            spender: string,
            value: BigNumber,
        ): string {
            const self = this as any as MockERC20Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('approve(address,uint256)', [spender,
    value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            spender: string,
            value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('approve(address,uint256)', [spender,
        value
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
            const abiEncoder = self._lookupAbiEncoder('approve(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public totalSupply = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('totalSupply()', []);
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
            const abiEncoder = self._lookupAbiEncoder('totalSupply()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public transferFrom = {
        async sendTransactionAsync(
            from: string,
            to: string,
            value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [from,
    to,
    value
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.transferFrom.estimateGasAsync.bind(
                    self,
                    from,
                    to,
                    value
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            from: string,
            to: string,
            value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [from,
    to,
    value
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
            from: string,
            to: string,
            value: BigNumber,
        ): string {
            const self = this as any as MockERC20Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [from,
    to,
    value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            from: string,
            to: string,
            value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [from,
        to,
        value
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
            const abiEncoder = self._lookupAbiEncoder('transferFrom(address,address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public increaseAllowance = {
        async sendTransactionAsync(
            spender: string,
            addedValue: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('increaseAllowance(address,uint256)', [spender,
    addedValue
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.increaseAllowance.estimateGasAsync.bind(
                    self,
                    spender,
                    addedValue
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            spender: string,
            addedValue: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('increaseAllowance(address,uint256)', [spender,
    addedValue
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
            spender: string,
            addedValue: BigNumber,
        ): string {
            const self = this as any as MockERC20Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('increaseAllowance(address,uint256)', [spender,
    addedValue
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            spender: string,
            addedValue: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('increaseAllowance(address,uint256)', [spender,
        addedValue
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
            const abiEncoder = self._lookupAbiEncoder('increaseAllowance(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public balanceOf = {
        async callAsync(
            owner: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('balanceOf(address)', [owner
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
            const abiEncoder = self._lookupAbiEncoder('balanceOf(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public decreaseAllowance = {
        async sendTransactionAsync(
            spender: string,
            subtractedValue: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('decreaseAllowance(address,uint256)', [spender,
    subtractedValue
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.decreaseAllowance.estimateGasAsync.bind(
                    self,
                    spender,
                    subtractedValue
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            spender: string,
            subtractedValue: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('decreaseAllowance(address,uint256)', [spender,
    subtractedValue
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
            spender: string,
            subtractedValue: BigNumber,
        ): string {
            const self = this as any as MockERC20Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('decreaseAllowance(address,uint256)', [spender,
    subtractedValue
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            spender: string,
            subtractedValue: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('decreaseAllowance(address,uint256)', [spender,
        subtractedValue
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
            const abiEncoder = self._lookupAbiEncoder('decreaseAllowance(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public transfer = {
        async sendTransactionAsync(
            to: string,
            value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('transfer(address,uint256)', [to,
    value
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.transfer.estimateGasAsync.bind(
                    self,
                    to,
                    value
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            to: string,
            value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('transfer(address,uint256)', [to,
    value
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
            to: string,
            value: BigNumber,
        ): string {
            const self = this as any as MockERC20Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('transfer(address,uint256)', [to,
    value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            to: string,
            value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('transfer(address,uint256)', [to,
        value
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
            const abiEncoder = self._lookupAbiEncoder('transfer(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public allowance = {
        async callAsync(
            owner: string,
            spender: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('allowance(address,address)', [owner,
        spender
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
            const abiEncoder = self._lookupAbiEncoder('allowance(address,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public mint = {
        async sendTransactionAsync(
            account: string,
            value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('mint(address,uint256)', [account,
    value
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.mint.estimateGasAsync.bind(
                    self,
                    account,
                    value
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            account: string,
            value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('mint(address,uint256)', [account,
    value
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
            account: string,
            value: BigNumber,
        ): string {
            const self = this as any as MockERC20Contract;
            const abiEncodedTransactionData = self._strictEncodeArguments('mint(address,uint256)', [account,
    value
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            account: string,
            value: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MockERC20Contract;
            const encodedData = self._strictEncodeArguments('mint(address,uint256)', [account,
        value
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
            const abiEncoder = self._lookupAbiEncoder('mint(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public static linkLibrary(
        libraryName: string,
        address: string,
    ): void {
        const bytecode = MockERC20Contract.BYTECODE;
        const cleanedAddress = address.replace('0x', '');
        // truncate to 37 characters
        const truncatedName = libraryName.slice(0, 36);
        const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
        MockERC20Contract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
    }
    public static async deployAsync(
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<MockERC20Contract> {
        const abi = JSON.parse(MockERC20Contract.ABI);
        const bytecode = MockERC20Contract.BYTECODE;
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
        logUtils.log(`MockERC20 successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new MockERC20Contract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }
    public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>) {
        const abi = JSON.parse(MockERC20Contract.ABI);
        const contractInstance = new MockERC20Contract(abi, address, provider, txDefaults);
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('MockERC20', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method