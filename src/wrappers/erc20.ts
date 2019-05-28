// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
// tslint:disable:no-unbound-method
import { BaseContract } from '@0x/base-contract';
import {
  BlockParam,
  BlockParamLiteral,
  CallData,
  ContractAbi,
  ContractArtifact,
  DecodedLogArgs,
  MethodAbi,
  TxData,
  TxDataPayable,
  SupportedProvider,
} from 'ethereum-types';
import { BigNumber, classUtils, logUtils, providerUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
import * as ethers from 'ethers';
import * as _ from 'lodash';
// tslint:enable:no-unused-variable

export type ERC20EventArgs = ERC20TransferEventArgs | ERC20ApprovalEventArgs;

export enum ERC20Events {
  Transfer = 'Transfer',
  Approval = 'Approval',
}

export interface ERC20TransferEventArgs extends DecodedLogArgs {
  from: string;
  to: string;
  value: BigNumber;
}
export interface ERC20ApprovalEventArgs extends DecodedLogArgs {
  owner: string;
  spender: string;
  value: BigNumber;
}

/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class ERC20Contract extends BaseContract {
  // tslint:disable:max-line-length
  public static ABI: string =
    '[{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]';
  public static ORIGINAL_BYTECODE: string =
    '0x608060405234801561001057600080fd5b50610823806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a5576000357c01000000000000000000000000000000000000000000000000000000009004806370a082311161007857806370a0823114610166578063a457c2d71461018c578063a9059cbb146101b8578063dd62ed3e146101e4576100a5565b8063095ea7b3146100aa57806318160ddd146100ea57806323b872dd14610104578063395093511461013a575b600080fd5b6100d6600480360360408110156100c057600080fd5b50600160a060020a038135169060200135610212565b604080519115158252519081900360200190f35b6100f26102c3565b60408051918252519081900360200190f35b6100d66004803603606081101561011a57600080fd5b50600160a060020a038135811691602081013590911690604001356102c9565b6100d66004803603604081101561015057600080fd5b50600160a060020a038135169060200135610392565b6100f26004803603602081101561017c57600080fd5b5035600160a060020a0316610475565b6100d6600480360360408110156101a257600080fd5b50600160a060020a038135169060200135610490565b6100d6600480360360408110156101ce57600080fd5b50600160a060020a03813516906020013561050e565b6100f2600480360360408110156101fa57600080fd5b50600160a060020a0381358116916020013516610524565b6000600160a060020a03831661025c5760405160e560020a62461bcd02815260040180806020018281038252602b815260200180610789602b913960400191505060405180910390fd5b336000818152600160209081526040808320600160a060020a03881680855290835292819020869055805186815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a350600192915050565b60025490565b600160a060020a03831660009081526001602090815260408083203384529091528120546102fd908363ffffffff61054f16565b600160a060020a038516600090815260016020908152604080832033845290915290205561032c8484846105af565b600160a060020a0384166000818152600160209081526040808320338085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b6000600160a060020a0383166103dc5760405160e560020a62461bcd0281526004018080602001828103825260448152602001806107b46044913960600191505060405180910390fd5b336000908152600160209081526040808320600160a060020a0387168452909152902054610410908363ffffffff6106af16565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a031660009081526020819052604090205490565b6000600160a060020a0383166104da5760405160e560020a62461bcd0281526004018080602001828103825260448152602001806107146044913960600191505060405180910390fd5b336000908152600160209081526040808320600160a060020a0387168452909152902054610410908363ffffffff61054f16565b600061051b3384846105af565b50600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b6000828211156105a9576040805160e560020a62461bcd02815260206004820181905260248201527f536166654d6174683a3a7375623a20496e746567657220756e646572666c6f77604482015290519081900360640190fd5b50900390565b600160a060020a0382166105f75760405160e560020a62461bcd0281526004018080602001828103825260318152602001806107586031913960400191505060405180910390fd5b600160a060020a038316600090815260208190526040902054610620908263ffffffff61054f16565b600160a060020a038085166000908152602081905260408082209390935590841681522054610655908263ffffffff6106af16565b600160a060020a038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008282018381101561070c576040805160e560020a62461bcd02815260206004820152601f60248201527f536166654d6174683a3a6164643a20496e7465676572206f766572666c6f7700604482015290519081900360640190fd5b939250505056fe45524332303a3a6465637265617365416c6c6f77616e63653a2043616e6e6f7420646563726561736520616c6c6f77616e636520666f722061646472657373207a65726f45524332303a3a5f7472616e736665723a2043616e6e6f74207472616e7366657220746f2061646472657373207a65726f45524332303a3a617070726f76653a2043616e6e6f7420617070726f76652061646472657373207a65726f45524332303a3a696e637265617365416c6c6f77616e63653a2043616e6e6f7420696e63726561736520616c6c6f77616e636520666f722061646472657373207a65726fa165627a7a72305820d5dc580fd896f0fb81ab7795d83ac6624f6ba66e3abbc78e3d0a75546bfefe5d0029';
  public static BYTECODE: string = ERC20Contract.ORIGINAL_BYTECODE;
  // tslint:enable:max-line-length
  public totalSupply = {
    async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      const self = (this as any) as ERC20Contract;
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
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
  };
  public balanceOf = {
    async callAsync(owner: string, callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<BigNumber> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('balanceOf(address)', [owner]);
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
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
  };
  public allowance = {
    async callAsync(
      owner: string,
      spender: string,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<BigNumber> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('allowance(address,address)', [owner, spender]);
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
      const result = abiEncoder.strictDecodeReturnValue<BigNumber>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
  };
  public transfer = {
    async sendTransactionAsync(to: string, value: BigNumber, txData: Partial<TxData> = {}): Promise<string> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('transfer(address,uint256)', [to, value]);
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
        self.transfer.estimateGasAsync.bind(self, to, value),
      );
      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(to: string, value: BigNumber, txData: Partial<TxData> = {}): Promise<number> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('transfer(address,uint256)', [to, value]);
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
    getABIEncodedTransactionData(to: string, value: BigNumber): string {
      const self = (this as any) as ERC20Contract;
      const abiEncodedTransactionData = self._strictEncodeArguments('transfer(address,uint256)', [to, value]);
      return abiEncodedTransactionData;
    },
    async callAsync(
      to: string,
      value: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('transfer(address,uint256)', [to, value]);
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
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
  };
  public approve = {
    async sendTransactionAsync(spender: string, value: BigNumber, txData: Partial<TxData> = {}): Promise<string> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('approve(address,uint256)', [spender, value]);
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
        self.approve.estimateGasAsync.bind(self, spender, value),
      );
      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(spender: string, value: BigNumber, txData: Partial<TxData> = {}): Promise<number> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('approve(address,uint256)', [spender, value]);
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
    getABIEncodedTransactionData(spender: string, value: BigNumber): string {
      const self = (this as any) as ERC20Contract;
      const abiEncodedTransactionData = self._strictEncodeArguments('approve(address,uint256)', [spender, value]);
      return abiEncodedTransactionData;
    },
    async callAsync(
      spender: string,
      value: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('approve(address,uint256)', [spender, value]);
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
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
  };
  public transferFrom = {
    async sendTransactionAsync(
      from: string,
      to: string,
      value: BigNumber,
      txData: Partial<TxData> = {},
    ): Promise<string> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [from, to, value]);
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
        self.transferFrom.estimateGasAsync.bind(self, from, to, value),
      );
      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(from: string, to: string, value: BigNumber, txData: Partial<TxData> = {}): Promise<number> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [from, to, value]);
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
    getABIEncodedTransactionData(from: string, to: string, value: BigNumber): string {
      const self = (this as any) as ERC20Contract;
      const abiEncodedTransactionData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [
        from,
        to,
        value,
      ]);
      return abiEncodedTransactionData;
    },
    async callAsync(
      from: string,
      to: string,
      value: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('transferFrom(address,address,uint256)', [from, to, value]);
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
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
  };
  public increaseAllowance = {
    async sendTransactionAsync(spender: string, addedValue: BigNumber, txData: Partial<TxData> = {}): Promise<string> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('increaseAllowance(address,uint256)', [spender, addedValue]);
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
        self.increaseAllowance.estimateGasAsync.bind(self, spender, addedValue),
      );
      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(spender: string, addedValue: BigNumber, txData: Partial<TxData> = {}): Promise<number> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('increaseAllowance(address,uint256)', [spender, addedValue]);
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
    getABIEncodedTransactionData(spender: string, addedValue: BigNumber): string {
      const self = (this as any) as ERC20Contract;
      const abiEncodedTransactionData = self._strictEncodeArguments('increaseAllowance(address,uint256)', [
        spender,
        addedValue,
      ]);
      return abiEncodedTransactionData;
    },
    async callAsync(
      spender: string,
      addedValue: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('increaseAllowance(address,uint256)', [spender, addedValue]);
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
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
  };
  public decreaseAllowance = {
    async sendTransactionAsync(
      spender: string,
      subtractedValue: BigNumber,
      txData: Partial<TxData> = {},
    ): Promise<string> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('decreaseAllowance(address,uint256)', [spender, subtractedValue]);
      const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
        {
          to: self.address,
          ...txData,
          data: encodedData,
        },
        self._web3Wrapper.getContractDefaults(),
        self.decreaseAllowance.estimateGasAsync.bind(self, spender, subtractedValue),
      );
      const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(spender: string, subtractedValue: BigNumber, txData: Partial<TxData> = {}): Promise<number> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('decreaseAllowance(address,uint256)', [spender, subtractedValue]);
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
    getABIEncodedTransactionData(spender: string, subtractedValue: BigNumber): string {
      const self = (this as any) as ERC20Contract;
      const abiEncodedTransactionData = self._strictEncodeArguments('decreaseAllowance(address,uint256)', [
        spender,
        subtractedValue,
      ]);
      return abiEncodedTransactionData;
    },
    async callAsync(
      spender: string,
      subtractedValue: BigNumber,
      callData: Partial<CallData> = {},
      defaultBlock?: BlockParam,
    ): Promise<boolean> {
      const self = (this as any) as ERC20Contract;
      const encodedData = self._strictEncodeArguments('decreaseAllowance(address,uint256)', [spender, subtractedValue]);
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
      const result = abiEncoder.strictDecodeReturnValue<boolean>(rawCallResult);
      // tslint:enable boolean-naming
      return result;
    },
  };
  public static linkLibrary(libraryName: string, address: string): void {
    const bytecode = ERC20Contract.BYTECODE;
    const cleanedAddress = address.replace('0x', '');
    // truncate to 37 characters
    const truncatedName = libraryName.slice(0, 36);
    const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
    ERC20Contract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
  }
  public static async deployAsync(
    supportedProvider: SupportedProvider,
    txDefaults: Partial<TxData>,
  ): Promise<ERC20Contract> {
    const abi = JSON.parse(ERC20Contract.ABI);
    const bytecode = ERC20Contract.BYTECODE;
    const provider = providerUtils.standardizeOrThrow(supportedProvider);
    const constructorAbi = BaseContract._lookupConstructorAbi(abi);
    [] = BaseContract._formatABIDataItemList(constructorAbi.inputs, [], BaseContract._bigNumberToString);
    const iface = new ethers.utils.Interface(abi);
    const deployInfo = iface.deployFunction;
    const txData = deployInfo.encode(bytecode, []);
    const web3Wrapper = new Web3Wrapper(provider);
    const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
      { data: txData },
      txDefaults,
      web3Wrapper.estimateGasAsync.bind(web3Wrapper),
    );
    const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
    logUtils.log(`transactionHash: ${txHash}`);
    const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
    logUtils.log(`ERC20 successfully deployed at ${txReceipt.contractAddress}`);
    const contractInstance = new ERC20Contract(abi, txReceipt.contractAddress as string, provider, txDefaults);
    contractInstance.constructorArgs = [];
    return contractInstance;
  }
  public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>): ERC20Contract {
    const abi = JSON.parse(ERC20Contract.ABI);
    const contractInstance = new ERC20Contract(abi, address, provider, txDefaults);
    return contractInstance;
  }
  constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
    super('ERC20', abi, address, supportedProvider, txDefaults);
    classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
  }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
