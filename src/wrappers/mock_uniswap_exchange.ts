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
export class MockUniswapExchangeContract extends BaseContract {
// tslint:disable:max-line-length
    public static ABI: string = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"valueInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"setup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_valueInEth","type":"uint256"}],"name":"setValueInEth","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_valueInEth","type":"uint256"}],"name":"removeEth","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAmount","type":"uint256"}],"name":"removeTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factoryAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"eth_sold","type":"uint256"}],"name":"getEthToTokenInputPrice","outputs":[{"name":"tokens_bought","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokens_bought","type":"uint256"}],"name":"getEthToTokenOutputPrice","outputs":[{"name":"eth_sold","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokens_sold","type":"uint256"}],"name":"getTokenToEthInputPrice","outputs":[{"name":"eth_bought","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"eth_bought","type":"uint256"}],"name":"getTokenToEthOutputPrice","outputs":[{"name":"tokens_sold","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"min_tokens","type":"uint256"},{"name":"deadline","type":"uint256"}],"name":"ethToTokenSwapInput","outputs":[{"name":"tokens_bought","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"min_tokens","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"recipient","type":"address"}],"name":"ethToTokenTransferInput","outputs":[{"name":"tokens_bought","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_bought","type":"uint256"},{"name":"deadline","type":"uint256"}],"name":"ethToTokenSwapOutput","outputs":[{"name":"eth_sold","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_bought","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"recipient","type":"address"}],"name":"ethToTokenTransferOutput","outputs":[{"name":"eth_sold","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_sold","type":"uint256"},{"name":"min_eth","type":"uint256"},{"name":"deadline","type":"uint256"}],"name":"tokenToEthSwapInput","outputs":[{"name":"eth_bought","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_sold","type":"uint256"},{"name":"min_eth","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"recipient","type":"address"}],"name":"tokenToEthTransferInput","outputs":[{"name":"eth_bought","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"eth_bought","type":"uint256"},{"name":"max_tokens","type":"uint256"},{"name":"deadline","type":"uint256"}],"name":"tokenToEthSwapOutput","outputs":[{"name":"tokens_sold","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"eth_bought","type":"uint256"},{"name":"max_tokens","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"recipient","type":"address"}],"name":"tokenToEthTransferOutput","outputs":[{"name":"tokens_sold","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]';
    public static ORIGINAL_BYTECODE: string = '0x6080604052662386f26fc1000060045534801561001b57600080fd5b506113468061002b6000396000f3fe60806040526004361061015d576000357c0100000000000000000000000000000000000000000000000000000000900480636b1d4db7116100d35780639d76ea581161008c5780639d76ea5814610326578063ad65d76d1461033b578063b8cb65ee1461034e578063cd7724c3146101f2578063d4e4841d1461036e578063f39b5b9b1461038e5761015d565b80636b1d4db71461029c5780637237e031146102af57806395b68fe71461024757806395d89b41146102cf57806395e3c50b146102e4578063966dae0e146103045761015d565b80632640f62c116101255780632640f62c146101f2578063313ce5671461021257806344af18e81461022757806359e948621461024757806366d38203146102675780636b035964146102875761015d565b8063013efd8b1461015f57806306fdde03146101955780630b573638146101aa57806310ca2fab146101bd57806318160ddd146101dd575b005b34801561016b57600080fd5b5061017f61017a366004610cc1565b6103a1565b60405161018c9190611225565b60405180910390f35b3480156101a157600080fd5b5061017f610499565b61017f6101b8366004610c74565b61049f565b3480156101c957600080fd5b5061015d6101d8366004610c1c565b610555565b3480156101e957600080fd5b5061017f61055a565b3480156101fe57600080fd5b5061017f61020d366004610c1c565b610560565b34801561021e57600080fd5b5061017f610594565b34801561023357600080fd5b5061015d610242366004610c1c565b61059a565b34801561025357600080fd5b5061017f610262366004610c1c565b6105cb565b34801561027357600080fd5b5061015d610282366004610bd8565b6105ee565b34801561029357600080fd5b5061017f610630565b61017f6102aa366004610c3a565b610636565b3480156102bb57600080fd5b5061017f6102ca366004610d04565b6106f3565b3480156102db57600080fd5b5061017f6107ec565b3480156102f057600080fd5b5061017f6102ff366004610cc1565b6107f2565b34801561031057600080fd5b506103196108d9565b60405161018c91906111d4565b34801561033257600080fd5b506103196108e8565b61017f610349366004610c74565b6108f7565b34801561035a57600080fd5b5061015d610369366004610c1c565b61095c565b34801561037a57600080fd5b5061017f610389366004610d04565b6109e3565b61017f61039c366004610c3a565b610ad3565b60006103ac84610560565b9050828111156103da5760405160e560020a62461bcd0281526004016103d190611293565b60405180910390fd5b60075460405160e060020a6323b872dd028152600160a060020a03909116906323b872dd90610411903390309086906004016111e2565b602060405180830381600087803b15801561042b57600080fd5b505af115801561043f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506104639190810190610bfe565b50604051339085156108fc029086906000818181858888f19350505050158015610491573d6000803e3d6000fd5b509392505050565b60005481565b60006104aa846105cb565b90503481146104ce5760405160e560020a62461bcd0281526004016103d190611253565b60075460405160e060020a63a9059cbb028152600160a060020a039091169063a9059cbb90610503908590889060040161120a565b602060405180830381600087803b15801561051d57600080fd5b505af1158015610531573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506104919190810190610bfe565b600455565b60035481565b60045460009061058e9061058284670de0b6b3a764000063ffffffff610b3816565b9063ffffffff610b7c16565b92915050565b60025481565b604051339082156108fc029083906000818181858888f193505050501580156105c7573d6000803e3d6000fd5b5050565b600061058e670de0b6b3a764000061058260045485610b3890919063ffffffff16565b600880543373ffffffffffffffffffffffffffffffffffffffff199182161790915560078054909116600160a060020a03929092169190911790556012600255565b60045481565b6000610641836105cb565b90503481146106655760405160e560020a62461bcd0281526004016103d190611283565b60075460405160e060020a63a9059cbb028152600160a060020a039091169063a9059cbb9061069a903390879060040161120a565b602060405180830381600087803b1580156106b457600080fd5b505af11580156106c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506106ec9190810190610bfe565b5092915050565b60006106fe856105cb565b9050838110156107235760405160e560020a62461bcd0281526004016103d1906112a3565b60075460405160e060020a6323b872dd028152600160a060020a03909116906323b872dd9061075a90339030908a906004016111e2565b602060405180830381600087803b15801561077457600080fd5b505af1158015610788573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506107ac9190810190610bfe565b50604051600160a060020a0383169082156108fc029083906000818181858888f193505050501580156107e3573d6000803e3d6000fd5b50949350505050565b60015481565b60006107fd846105cb565b9050828110156108225760405160e560020a62461bcd0281526004016103d190611273565b60075460405160e060020a6323b872dd028152600160a060020a03909116906323b872dd90610859903390309089906004016111e2565b602060405180830381600087803b15801561087357600080fd5b505af1158015610887573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506108ab9190810190610bfe565b50604051339082156108fc029083906000818181858888f19350505050158015610491573d6000803e3d6000fd5b600854600160a060020a031690565b600754600160a060020a031690565b600061090234610560565b9050838110156109275760405160e560020a62461bcd0281526004016103d190611263565b60075460405160e060020a63a9059cbb028152600160a060020a039091169063a9059cbb90610503908590859060040161120a565b60075460405160e060020a63a9059cbb028152600160a060020a039091169063a9059cbb90610991903390859060040161120a565b602060405180830381600087803b1580156109ab57600080fd5b505af11580156109bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506105c79190810190610bfe565b60006109ee85610560565b905083811115610a135760405160e560020a62461bcd0281526004016103d1906112c3565b60075460405160e060020a6323b872dd028152600160a060020a03909116906323b872dd90610a4a903390309086906004016111e2565b602060405180830381600087803b158015610a6457600080fd5b505af1158015610a78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610a9c9190810190610bfe565b50604051600160a060020a0383169086156108fc029087906000818181858888f193505050501580156107e3573d6000803e3d6000fd5b6000610ade34610560565b905082811015610b035760405160e560020a62461bcd0281526004016103d190611243565b60075460405160e060020a63a9059cbb028152600160a060020a039091169063a9059cbb9061069a903390859060040161120a565b600082610b475750600061058e565b82820282848281610b5457fe5b0414610b755760405160e560020a62461bcd0281526004016103d190611233565b9392505050565b6000808211610ba05760405160e560020a62461bcd0281526004016103d1906112b3565b6000828481610bab57fe5b04949350505050565b6000610b7582356112dc565b6000610b7582516112f6565b6000610b7582356112e7565b600060208284031215610bea57600080fd5b6000610bf68484610bb4565b949350505050565b600060208284031215610c1057600080fd5b6000610bf68484610bc0565b600060208284031215610c2e57600080fd5b6000610bf68484610bcc565b60008060408385031215610c4d57600080fd5b6000610c598585610bcc565b9250506020610c6a85828601610bcc565b9150509250929050565b600080600060608486031215610c8957600080fd5b6000610c958686610bcc565b9350506020610ca686828701610bcc565b9250506040610cb786828701610bb4565b9150509250925092565b600080600060608486031215610cd657600080fd5b6000610ce28686610bcc565b9350506020610cf386828701610bcc565b9250506040610cb786828701610bcc565b60008060008060808587031215610d1a57600080fd5b6000610d268787610bcc565b9450506020610d3787828801610bcc565b9350506040610d4887828801610bcc565b9250506060610d5987828801610bb4565b91505092959194509250565b610d6e816112fb565b82525050565b610d6e816112dc565b610d6e816112e7565b6000610d93601f836112d3565b7f536166654d6174683a3a6d756c3a20496e7465676572206f766572666c6f7700815260200192915050565b6000610dcc603f836112d3565b7f4d6f636b556e69737761703a3a657468546f546f6b656e53776170496e70757481527f3a2069736e27742067726561746572207468616e206d696e5f746f6b656e7300602082015260400192915050565b6000610e2b604b836112d3565b7f4d6f636b556e69737761703a3a657468546f546f6b656e5472616e736665724f81527f75747075743a206d73672e76616c756520646f65736e277420657175616c207460208201527f6865206574685f736f6c64000000000000000000000000000000000000000000604082015260600192915050565b6000610eb06043836112d3565b7f4d6f636b556e69737761703a3a657468546f546f6b656e5472616e736665724981527f6e7075743a2069736e27742067726561746572207468616e206d696e5f746f6b60208201527f656e730000000000000000000000000000000000000000000000000000000000604082015260600192915050565b6000610f35603c836112d3565b7f4d6f636b556e69737761703a3a746f6b656e546f45746853776170496e70757481527f3a2069736e27742067726561746572207468616e206d696e5f65746800000000602082015260400192915050565b6000610f946047836112d3565b7f4d6f636b556e69737761703a3a657468546f546f6b656e537761704f7574707581527f743a206d73672e76616c756520646f65736e277420657175616c20746865206560208201527f74685f736f6c6400000000000000000000000000000000000000000000000000604082015260600192915050565b60006110196049836112d3565b7f4d6f636b556e69737761703a3a746f6b656e546f457468537761704f7574707581527f743a20746f6b656e735f736f6c642069732067726561746572207468616e206d60208201527f61785f746f6b656e730000000000000000000000000000000000000000000000604082015260600192915050565b600061109e6040836112d3565b7f4d6f636b556e69737761703a3a746f6b656e546f4574685472616e736665724981527f6e7075743a2069736e27742067726561746572207468616e206d696e5f657468602082015260400192915050565b60006110fd6023836112d3565b7f536166654d6174683a3a6469763a20496e76616c69642064697669736f72207a81527f65726f0000000000000000000000000000000000000000000000000000000000602082015260400192915050565b600061115c604d836112d3565b7f4d6f636b556e69737761703a3a746f6b656e546f4574685472616e736665724f81527f75747075743a20746f6b656e735f736f6c64206973206772656174657220746860208201527f616e206d61785f746f6b656e7300000000000000000000000000000000000000604082015260600192915050565b6020810161058e8284610d74565b606081016111f08286610d65565b6111fd6020830185610d65565b610bf66040830184610d7d565b604081016112188285610d65565b610b756020830184610d7d565b6020810161058e8284610d7d565b6020808252810161058e81610d86565b6020808252810161058e81610dbf565b6020808252810161058e81610e1e565b6020808252810161058e81610ea3565b6020808252810161058e81610f28565b6020808252810161058e81610f87565b6020808252810161058e8161100c565b6020808252810161058e81611091565b6020808252810161058e816110f0565b6020808252810161058e8161114f565b90815260200190565b600061058e826112ea565b90565b600160a060020a031690565b151590565b600061058e82600061058e826112dc56fea265627a7a72305820987cb29d54c85d2139d3c6623239dc654bbf32cc5306d8019bf417a077efc2df6c6578706572696d656e74616cf50037';
    public static BYTECODE: string = MockUniswapExchangeContract.ORIGINAL_BYTECODE;
// tslint:enable:max-line-length
    public name = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as MockUniswapExchangeContract;
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
        },};    public totalSupply = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockUniswapExchangeContract;
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
        },};    public decimals = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockUniswapExchangeContract;
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
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public valueInEth = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('valueInEth()', []);
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
            const abiEncoder = self._lookupAbiEncoder('valueInEth()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public symbol = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as MockUniswapExchangeContract;
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
        },};    public setup = {
        async sendTransactionAsync(
            _token: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('setup(address)', [_token
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.setup.estimateGasAsync.bind(
                    self,
                    _token
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _token: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('setup(address)', [_token
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
            _token: string,
        ): string {
            const self = this as any as MockUniswapExchangeContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setup(address)', [_token
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _token: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('setup(address)', [_token
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
            const abiEncoder = self._lookupAbiEncoder('setup(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public setValueInEth = {
        async sendTransactionAsync(
            _valueInEth: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('setValueInEth(uint256)', [_valueInEth
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.setValueInEth.estimateGasAsync.bind(
                    self,
                    _valueInEth
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _valueInEth: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('setValueInEth(uint256)', [_valueInEth
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
            _valueInEth: BigNumber,
        ): string {
            const self = this as any as MockUniswapExchangeContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setValueInEth(uint256)', [_valueInEth
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _valueInEth: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('setValueInEth(uint256)', [_valueInEth
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
            const abiEncoder = self._lookupAbiEncoder('setValueInEth(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public removeEth = {
        async sendTransactionAsync(
            _valueInEth: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('removeEth(uint256)', [_valueInEth
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.removeEth.estimateGasAsync.bind(
                    self,
                    _valueInEth
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _valueInEth: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('removeEth(uint256)', [_valueInEth
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
            _valueInEth: BigNumber,
        ): string {
            const self = this as any as MockUniswapExchangeContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('removeEth(uint256)', [_valueInEth
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _valueInEth: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('removeEth(uint256)', [_valueInEth
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
            const abiEncoder = self._lookupAbiEncoder('removeEth(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public removeTokens = {
        async sendTransactionAsync(
            _tokenAmount: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('removeTokens(uint256)', [_tokenAmount
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.removeTokens.estimateGasAsync.bind(
                    self,
                    _tokenAmount
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _tokenAmount: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('removeTokens(uint256)', [_tokenAmount
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
            _tokenAmount: BigNumber,
        ): string {
            const self = this as any as MockUniswapExchangeContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('removeTokens(uint256)', [_tokenAmount
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _tokenAmount: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('removeTokens(uint256)', [_tokenAmount
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
            const abiEncoder = self._lookupAbiEncoder('removeTokens(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public tokenAddress = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('tokenAddress()', []);
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
            const abiEncoder = self._lookupAbiEncoder('tokenAddress()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public factoryAddress = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('factoryAddress()', []);
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
            const abiEncoder = self._lookupAbiEncoder('factoryAddress()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public getEthToTokenInputPrice = {
        async callAsync(
            eth_sold: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('getEthToTokenInputPrice(uint256)', [eth_sold
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
            const abiEncoder = self._lookupAbiEncoder('getEthToTokenInputPrice(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public getEthToTokenOutputPrice = {
        async callAsync(
            tokens_bought: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('getEthToTokenOutputPrice(uint256)', [tokens_bought
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
            const abiEncoder = self._lookupAbiEncoder('getEthToTokenOutputPrice(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public getTokenToEthInputPrice = {
        async callAsync(
            tokens_sold: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('getTokenToEthInputPrice(uint256)', [tokens_sold
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
            const abiEncoder = self._lookupAbiEncoder('getTokenToEthInputPrice(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public getTokenToEthOutputPrice = {
        async callAsync(
            eth_bought: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('getTokenToEthOutputPrice(uint256)', [eth_bought
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
            const abiEncoder = self._lookupAbiEncoder('getTokenToEthOutputPrice(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public ethToTokenSwapInput = {
        async sendTransactionAsync(
            min_tokens: BigNumber,
            deadline: BigNumber,
            txData: Partial<TxDataPayable> = {},
        ): Promise<string> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('ethToTokenSwapInput(uint256,uint256)', [min_tokens,
    deadline
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.ethToTokenSwapInput.estimateGasAsync.bind(
                    self,
                    min_tokens,
                    deadline
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            min_tokens: BigNumber,
            deadline: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('ethToTokenSwapInput(uint256,uint256)', [min_tokens,
    deadline
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
            min_tokens: BigNumber,
            deadline: BigNumber,
        ): string {
            const self = this as any as MockUniswapExchangeContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('ethToTokenSwapInput(uint256,uint256)', [min_tokens,
    deadline
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            min_tokens: BigNumber,
            deadline: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('ethToTokenSwapInput(uint256,uint256)', [min_tokens,
        deadline
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
            const abiEncoder = self._lookupAbiEncoder('ethToTokenSwapInput(uint256,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public ethToTokenTransferInput = {
        async sendTransactionAsync(
            min_tokens: BigNumber,
            deadline: BigNumber,
            recipient: string,
            txData: Partial<TxDataPayable> = {},
        ): Promise<string> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('ethToTokenTransferInput(uint256,uint256,address)', [min_tokens,
    deadline,
    recipient
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.ethToTokenTransferInput.estimateGasAsync.bind(
                    self,
                    min_tokens,
                    deadline,
                    recipient
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            min_tokens: BigNumber,
            deadline: BigNumber,
            recipient: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('ethToTokenTransferInput(uint256,uint256,address)', [min_tokens,
    deadline,
    recipient
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
            min_tokens: BigNumber,
            deadline: BigNumber,
            recipient: string,
        ): string {
            const self = this as any as MockUniswapExchangeContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('ethToTokenTransferInput(uint256,uint256,address)', [min_tokens,
    deadline,
    recipient
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            min_tokens: BigNumber,
            deadline: BigNumber,
            recipient: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('ethToTokenTransferInput(uint256,uint256,address)', [min_tokens,
        deadline,
        recipient
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
            const abiEncoder = self._lookupAbiEncoder('ethToTokenTransferInput(uint256,uint256,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public ethToTokenSwapOutput = {
        async sendTransactionAsync(
            tokens_bought: BigNumber,
            deadline: BigNumber,
            txData: Partial<TxDataPayable> = {},
        ): Promise<string> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('ethToTokenSwapOutput(uint256,uint256)', [tokens_bought,
    deadline
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
                    deadline
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            tokens_bought: BigNumber,
            deadline: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('ethToTokenSwapOutput(uint256,uint256)', [tokens_bought,
    deadline
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
            deadline: BigNumber,
        ): string {
            const self = this as any as MockUniswapExchangeContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('ethToTokenSwapOutput(uint256,uint256)', [tokens_bought,
    deadline
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            tokens_bought: BigNumber,
            deadline: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('ethToTokenSwapOutput(uint256,uint256)', [tokens_bought,
        deadline
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
        },};    public ethToTokenTransferOutput = {
        async sendTransactionAsync(
            tokens_bought: BigNumber,
            deadline: BigNumber,
            recipient: string,
            txData: Partial<TxDataPayable> = {},
        ): Promise<string> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('ethToTokenTransferOutput(uint256,uint256,address)', [tokens_bought,
    deadline,
    recipient
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.ethToTokenTransferOutput.estimateGasAsync.bind(
                    self,
                    tokens_bought,
                    deadline,
                    recipient
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            tokens_bought: BigNumber,
            deadline: BigNumber,
            recipient: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('ethToTokenTransferOutput(uint256,uint256,address)', [tokens_bought,
    deadline,
    recipient
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
            deadline: BigNumber,
            recipient: string,
        ): string {
            const self = this as any as MockUniswapExchangeContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('ethToTokenTransferOutput(uint256,uint256,address)', [tokens_bought,
    deadline,
    recipient
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            tokens_bought: BigNumber,
            deadline: BigNumber,
            recipient: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('ethToTokenTransferOutput(uint256,uint256,address)', [tokens_bought,
        deadline,
        recipient
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
            const abiEncoder = self._lookupAbiEncoder('ethToTokenTransferOutput(uint256,uint256,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public tokenToEthSwapInput = {
        async sendTransactionAsync(
            tokens_sold: BigNumber,
            min_eth: BigNumber,
            deadline: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('tokenToEthSwapInput(uint256,uint256,uint256)', [tokens_sold,
    min_eth,
    deadline
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.tokenToEthSwapInput.estimateGasAsync.bind(
                    self,
                    tokens_sold,
                    min_eth,
                    deadline
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            tokens_sold: BigNumber,
            min_eth: BigNumber,
            deadline: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('tokenToEthSwapInput(uint256,uint256,uint256)', [tokens_sold,
    min_eth,
    deadline
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
            tokens_sold: BigNumber,
            min_eth: BigNumber,
            deadline: BigNumber,
        ): string {
            const self = this as any as MockUniswapExchangeContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('tokenToEthSwapInput(uint256,uint256,uint256)', [tokens_sold,
    min_eth,
    deadline
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            tokens_sold: BigNumber,
            min_eth: BigNumber,
            deadline: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('tokenToEthSwapInput(uint256,uint256,uint256)', [tokens_sold,
        min_eth,
        deadline
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
            const abiEncoder = self._lookupAbiEncoder('tokenToEthSwapInput(uint256,uint256,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public tokenToEthTransferInput = {
        async sendTransactionAsync(
            tokens_sold: BigNumber,
            min_eth: BigNumber,
            deadline: BigNumber,
            recipient: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('tokenToEthTransferInput(uint256,uint256,uint256,address)', [tokens_sold,
    min_eth,
    deadline,
    recipient
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.tokenToEthTransferInput.estimateGasAsync.bind(
                    self,
                    tokens_sold,
                    min_eth,
                    deadline,
                    recipient
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            tokens_sold: BigNumber,
            min_eth: BigNumber,
            deadline: BigNumber,
            recipient: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('tokenToEthTransferInput(uint256,uint256,uint256,address)', [tokens_sold,
    min_eth,
    deadline,
    recipient
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
            tokens_sold: BigNumber,
            min_eth: BigNumber,
            deadline: BigNumber,
            recipient: string,
        ): string {
            const self = this as any as MockUniswapExchangeContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('tokenToEthTransferInput(uint256,uint256,uint256,address)', [tokens_sold,
    min_eth,
    deadline,
    recipient
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            tokens_sold: BigNumber,
            min_eth: BigNumber,
            deadline: BigNumber,
            recipient: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('tokenToEthTransferInput(uint256,uint256,uint256,address)', [tokens_sold,
        min_eth,
        deadline,
        recipient
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
            const abiEncoder = self._lookupAbiEncoder('tokenToEthTransferInput(uint256,uint256,uint256,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public tokenToEthSwapOutput = {
        async sendTransactionAsync(
            eth_bought: BigNumber,
            max_tokens: BigNumber,
            deadline: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('tokenToEthSwapOutput(uint256,uint256,uint256)', [eth_bought,
    max_tokens,
    deadline
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.tokenToEthSwapOutput.estimateGasAsync.bind(
                    self,
                    eth_bought,
                    max_tokens,
                    deadline
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            eth_bought: BigNumber,
            max_tokens: BigNumber,
            deadline: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('tokenToEthSwapOutput(uint256,uint256,uint256)', [eth_bought,
    max_tokens,
    deadline
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
            eth_bought: BigNumber,
            max_tokens: BigNumber,
            deadline: BigNumber,
        ): string {
            const self = this as any as MockUniswapExchangeContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('tokenToEthSwapOutput(uint256,uint256,uint256)', [eth_bought,
    max_tokens,
    deadline
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            eth_bought: BigNumber,
            max_tokens: BigNumber,
            deadline: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('tokenToEthSwapOutput(uint256,uint256,uint256)', [eth_bought,
        max_tokens,
        deadline
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
            const abiEncoder = self._lookupAbiEncoder('tokenToEthSwapOutput(uint256,uint256,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public tokenToEthTransferOutput = {
        async sendTransactionAsync(
            eth_bought: BigNumber,
            max_tokens: BigNumber,
            deadline: BigNumber,
            recipient: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('tokenToEthTransferOutput(uint256,uint256,uint256,address)', [eth_bought,
    max_tokens,
    deadline,
    recipient
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.tokenToEthTransferOutput.estimateGasAsync.bind(
                    self,
                    eth_bought,
                    max_tokens,
                    deadline,
                    recipient
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            eth_bought: BigNumber,
            max_tokens: BigNumber,
            deadline: BigNumber,
            recipient: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('tokenToEthTransferOutput(uint256,uint256,uint256,address)', [eth_bought,
    max_tokens,
    deadline,
    recipient
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
            eth_bought: BigNumber,
            max_tokens: BigNumber,
            deadline: BigNumber,
            recipient: string,
        ): string {
            const self = this as any as MockUniswapExchangeContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('tokenToEthTransferOutput(uint256,uint256,uint256,address)', [eth_bought,
    max_tokens,
    deadline,
    recipient
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            eth_bought: BigNumber,
            max_tokens: BigNumber,
            deadline: BigNumber,
            recipient: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockUniswapExchangeContract;
            const encodedData = self._strictEncodeArguments('tokenToEthTransferOutput(uint256,uint256,uint256,address)', [eth_bought,
        max_tokens,
        deadline,
        recipient
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
            const abiEncoder = self._lookupAbiEncoder('tokenToEthTransferOutput(uint256,uint256,uint256,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public static linkLibrary(
        libraryName: string,
        address: string,
    ): void {
        const bytecode = MockUniswapExchangeContract.BYTECODE;
        const cleanedAddress = address.replace('0x', '');
        // truncate to 37 characters
        const truncatedName = libraryName.slice(0, 36);
        const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
        MockUniswapExchangeContract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
    }
    public static async deployAsync(
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
    ): Promise<MockUniswapExchangeContract> {
        const abi = JSON.parse(MockUniswapExchangeContract.ABI);
        const bytecode = MockUniswapExchangeContract.BYTECODE;
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
        logUtils.log(`MockUniswapExchange successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new MockUniswapExchangeContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }
    public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>) {
        const abi = JSON.parse(MockUniswapExchangeContract.ABI);
        const contractInstance = new MockUniswapExchangeContract(abi, address, provider, txDefaults);
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('MockUniswapExchange', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method