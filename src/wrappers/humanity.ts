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

export type HumanityEventArgs =
    | HumanityTransferEventArgs
    | HumanityApprovalEventArgs;

export enum HumanityEvents {
    Transfer = 'Transfer',
    Approval = 'Approval',
}

export interface HumanityTransferEventArgs extends DecodedLogArgs {
    from: string;
    to: string;
    value: BigNumber;
}
export interface HumanityApprovalEventArgs extends DecodedLogArgs {
    owner: string;
    spender: string;
    value: BigNumber;
}

/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class HumanityContract extends BaseContract {
// tslint:disable:max-line-length
    public static ABI: string = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"FINAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_registry","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"name":"account","type":"address"},{"name":"value","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]';
    public static ORIGINAL_BYTECODE: string = '0x60c0604052600560808190527f312e302e3000000000000000000000000000000000000000000000000000000060a0908152620000409160039190620001f9565b503480156200004e57600080fd5b50604051602080620012f48339810180604052620000709190810190620002b3565b60048054600160a060020a031916600160a060020a038316179055620000ab336a14adf4b7320334b9000000640100000000620000b2810204565b50620003d8565b600160a060020a038216620000fe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f59062000389565b60405180910390fd5b6002546200011b9082640100000000620007ed620001ae82021704565b600255600160a060020a038216600090815260208190526040902054620001519082640100000000620007ed620001ae82021704565b600160a060020a0383166000818152602081905260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90620001a2908590620003ad565b60405180910390a35050565b600082820183811015620001f0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f5906200039b565b90505b92915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200023c57805160ff19168380011785556200026c565b828001600101855582156200026c579182015b828111156200026c5782518255916020019190600101906200024f565b506200027a9291506200027e565b5090565b6200029b91905b808211156200027a576000815560010162000285565b90565b6000620002ac8251620003c6565b9392505050565b600060208284031215620002c657600080fd5b6000620002d484846200029e565b949350505050565b6000620002eb602983620003bd565b7f45524332303a3a5f6d696e743a2043616e6e6f74206d696e7420746f2061646481527f72657373207a65726f0000000000000000000000000000000000000000000000602082015260400192915050565b60006200034c601f83620003bd565b7f536166654d6174683a3a6164643a20496e7465676572206f766572666c6f7700815260200192915050565b62000383816200029b565b82525050565b60208082528101620001f381620002dc565b60208082528101620001f3816200033d565b60208101620001f3828462000378565b90815260200190565b6000600160a060020a038216620001f3565b610f0c80620003e86000396000f3fe608060405234801561001057600080fd5b506004361061011d576000357c01000000000000000000000000000000000000000000000000000000009004806340c10f19116100b457806395d89b411161008357806395d89b4114610205578063a457c2d71461020d578063a9059cbb14610220578063dd62ed3e146102335761011d565b806340c10f19146101c057806354fd4d50146101d557806370a08231146101dd5780637b103999146101f05761011d565b80632ff2e9dc116100f05780632ff2e9dc14610188578063313ce5671461019057806339509351146101a557806339605da2146101b85761011d565b806306fdde0314610122578063095ea7b31461014057806318160ddd1461016057806323b872dd14610175575b600080fd5b61012a610246565b6040516101379190610da9565b60405180910390f35b61015361014e3660046109a4565b61027f565b6040516101379190610d9b565b61016861031f565b6040516101379190610e4a565b610153610183366004610957565b610325565b6101686103f1565b610198610400565b6040516101379190610e58565b6101536101b33660046109a4565b610405565b6101686104bc565b6101d36101ce3660046109a4565b6104cb565b005b61012a61054b565b6101686101eb3660046108f7565b6105d9565b6101f86105f4565b6040516101379190610d8d565b61012a610603565b61015361021b3660046109a4565b61063c565b61015361022e3660046109a4565b61069b565b61016861024136600461091d565b6106b1565b6040518060400160405280600881526020017f48756d616e69747900000000000000000000000000000000000000000000000081525081565b6000600160a060020a0383166102b35760405160e560020a62461bcd0281526004016102aa90610e0a565b60405180910390fd5b336000818152600160209081526040808320600160a060020a03881680855292529182902085905590519091907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061030d908690610e4a565b60405180910390a35060015b92915050565b60025490565b600160a060020a0383166000908152600160209081526040808320338452909152812054610359908363ffffffff6106dc16565b600160a060020a0385166000908152600160209081526040808320338452909152902055610388848484610707565b600160a060020a0384166000818152600160209081526040808320338085529252918290205491519092917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925916103df9190610e4a565b60405180910390a35060019392505050565b6a14adf4b7320334b900000081565b601281565b6000600160a060020a0383166104305760405160e560020a62461bcd0281526004016102aa90610e3a565b336000908152600160209081526040808320600160a060020a0387168452909152902054610464908363ffffffff6107ed16565b336000818152600160209081526040808320600160a060020a038916808552925291829020849055905190927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259161030d9190610e4a565b6a52b7d2dcc80cd2e400000081565b600454600160a060020a031633146104f85760405160e560020a62461bcd0281526004016102aa90610dca565b6a52b7d2dcc80cd2e400000061051c8261051061031f565b9063ffffffff6107ed16565b111561053d5760405160e560020a62461bcd0281526004016102aa90610e1a565b610547828261081c565b5050565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b505050505081565b600160a060020a031660009081526020819052604090205490565b600454600160a060020a031681565b6040518060400160405280600381526020017f48554d000000000000000000000000000000000000000000000000000000000081525081565b6000600160a060020a0383166106675760405160e560020a62461bcd0281526004016102aa90610dba565b336000908152600160209081526040808320600160a060020a0387168452909152902054610464908363ffffffff6106dc16565b60006106a8338484610707565b50600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b6000828211156107015760405160e560020a62461bcd0281526004016102aa90610dda565b50900390565b600160a060020a0382166107305760405160e560020a62461bcd0281526004016102aa90610dea565b600160a060020a038316600090815260208190526040902054610759908263ffffffff6106dc16565b600160a060020a03808516600090815260208190526040808220939093559084168152205461078e908263ffffffff6107ed16565b600160a060020a0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906107e0908590610e4a565b60405180910390a3505050565b6000828201838110156108155760405160e560020a62461bcd0281526004016102aa90610e2a565b9392505050565b600160a060020a0382166108455760405160e560020a62461bcd0281526004016102aa90610dfa565b600254610858908263ffffffff6107ed16565b600255600160a060020a038216600090815260208190526040902054610884908263ffffffff6107ed16565b600160a060020a0383166000818152602081905260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906108d3908590610e4a565b60405180910390a35050565b60006108158235610e73565b60006108158235610e8f565b60006020828403121561090957600080fd5b600061091584846108df565b949350505050565b6000806040838503121561093057600080fd5b600061093c85856108df565b925050602061094d858286016108df565b9150509250929050565b60008060006060848603121561096c57600080fd5b600061097886866108df565b9350506020610989868287016108df565b925050604061099a868287016108eb565b9150509250925092565b600080604083850312156109b757600080fd5b60006109c385856108df565b925050602061094d858286016108eb565b6109dd81610e73565b82525050565b6109dd81610e7e565b60006109f782610e66565b610a018185610e6a565b9350610a11818560208601610e98565b610a1a81610ec8565b9093019392505050565b6000610a31604483610e6a565b7f45524332303a3a6465637265617365416c6c6f77616e63653a2043616e6e6f7481527f20646563726561736520616c6c6f77616e636520666f7220616464726573732060208201527f7a65726f00000000000000000000000000000000000000000000000000000000604082015260600192915050565b6000610ab6603583610e6a565b7f48756d616e6974793a3a6d696e743a204f6e6c7920746865207265676973747281527f792063616e206d696e74206e657720746f6b656e730000000000000000000000602082015260400192915050565b6000610b15602083610e6a565b7f536166654d6174683a3a7375623a20496e746567657220756e646572666c6f77815260200192915050565b6000610b4e603183610e6a565b7f45524332303a3a5f7472616e736665723a2043616e6e6f74207472616e73666581527f7220746f2061646472657373207a65726f000000000000000000000000000000602082015260400192915050565b6000610bad602983610e6a565b7f45524332303a3a5f6d696e743a2043616e6e6f74206d696e7420746f2061646481527f72657373207a65726f0000000000000000000000000000000000000000000000602082015260400192915050565b6000610c0c602b83610e6a565b7f45524332303a3a617070726f76653a2043616e6e6f7420617070726f7665206181527f646472657373207a65726f000000000000000000000000000000000000000000602082015260400192915050565b6000610c6b602483610e6a565b7f48756d616e6974793a3a6d696e743a20457863656564732066696e616c20737581527f70706c7900000000000000000000000000000000000000000000000000000000602082015260400192915050565b6000610cca601f83610e6a565b7f536166654d6174683a3a6164643a20496e7465676572206f766572666c6f7700815260200192915050565b6000610d03604483610e6a565b7f45524332303a3a696e637265617365416c6c6f77616e63653a2043616e6e6f7481527f20696e63726561736520616c6c6f77616e636520666f7220616464726573732060208201527f7a65726f00000000000000000000000000000000000000000000000000000000604082015260600192915050565b6109dd81610e8f565b6109dd81610e92565b6020810161031982846109d4565b6020810161031982846109e3565b6020808252810161081581846109ec565b6020808252810161031981610a24565b6020808252810161031981610aa9565b6020808252810161031981610b08565b6020808252810161031981610b41565b6020808252810161031981610ba0565b6020808252810161031981610bff565b6020808252810161031981610c5e565b6020808252810161031981610cbd565b6020808252810161031981610cf6565b602081016103198284610d7b565b602081016103198284610d84565b5190565b90815260200190565b600061031982610e83565b151590565b600160a060020a031690565b90565b60ff1690565b60005b83811015610eb3578181015183820152602001610e9b565b83811115610ec2576000848401525b50505050565b601f01601f19169056fea265627a7a72305820cd7d6ce18bb9d83587505f21111c967b9caaefea3abeff0a3f0b060b0267b36e6c6578706572696d656e74616cf50037';
    public static BYTECODE: string = HumanityContract.ORIGINAL_BYTECODE;
// tslint:enable:max-line-length
    public name = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as HumanityContract;
            const encodedData = self._strictEncodeArguments('name()', []);
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
            const abiEncoder = self._lookupAbiEncoder('name()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public approve = {
        async sendTransactionAsync(
            spender: string,
            value: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
        },};    public INITIAL_SUPPLY = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as HumanityContract;
            const encodedData = self._strictEncodeArguments('INITIAL_SUPPLY()', []);
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
            const abiEncoder = self._lookupAbiEncoder('INITIAL_SUPPLY()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public decimals = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<number
        > {
            const self = this as any as HumanityContract;
            const encodedData = self._strictEncodeArguments('decimals()', []);
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
            const abiEncoder = self._lookupAbiEncoder('decimals()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<number
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public increaseAllowance = {
        async sendTransactionAsync(
            spender: string,
            addedValue: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
        },};    public FINAL_SUPPLY = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as HumanityContract;
            const encodedData = self._strictEncodeArguments('FINAL_SUPPLY()', []);
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
            const abiEncoder = self._lookupAbiEncoder('FINAL_SUPPLY()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public version = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as HumanityContract;
            const encodedData = self._strictEncodeArguments('version()', []);
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
            const abiEncoder = self._lookupAbiEncoder('version()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
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
            const self = this as any as HumanityContract;
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
        },};    public registry = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as HumanityContract;
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
        },};    public symbol = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as HumanityContract;
            const encodedData = self._strictEncodeArguments('symbol()', []);
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
            const abiEncoder = self._lookupAbiEncoder('symbol()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public decreaseAllowance = {
        async sendTransactionAsync(
            spender: string,
            subtractedValue: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
            const self = this as any as HumanityContract;
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
        const bytecode = HumanityContract.BYTECODE;
        const cleanedAddress = address.replace('0x', '');
        // truncate to 37 characters
        const truncatedName = libraryName.slice(0, 36);
        const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
        HumanityContract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
    }
    public static async deployAsync(
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _registry: string,
    ): Promise<HumanityContract> {
        const abi = JSON.parse(HumanityContract.ABI);
        const bytecode = HumanityContract.BYTECODE;
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_registry
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_registry
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_registry
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
        logUtils.log(`Humanity successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new HumanityContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_registry
];
        return contractInstance;
    }
    public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>) {
        const abi = JSON.parse(HumanityContract.ABI);
        const contractInstance = new HumanityContract(abi, address, provider, txDefaults);
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('Humanity', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method