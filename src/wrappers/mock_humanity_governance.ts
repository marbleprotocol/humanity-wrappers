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

export type MockHumanityGovernanceEventArgs =
    | MockHumanityGovernanceExecuteEventArgs
    | MockHumanityGovernanceProposeEventArgs
    | MockHumanityGovernanceRemoveVoteEventArgs
    | MockHumanityGovernanceTerminateEventArgs
    | MockHumanityGovernanceVoteEventArgs;

export enum MockHumanityGovernanceEvents {
    Execute = 'Execute',
    Propose = 'Propose',
    RemoveVote = 'RemoveVote',
    Terminate = 'Terminate',
    Vote = 'Vote',
}

export interface MockHumanityGovernanceExecuteEventArgs extends DecodedLogArgs {
    proposalId: BigNumber;
}
export interface MockHumanityGovernanceProposeEventArgs extends DecodedLogArgs {
    proposalId: BigNumber;
    proposer: string;
    target: string;
    data: string;
}
export interface MockHumanityGovernanceRemoveVoteEventArgs extends DecodedLogArgs {
    proposalId: BigNumber;
    voter: string;
}
export interface MockHumanityGovernanceTerminateEventArgs extends DecodedLogArgs {
    proposalId: BigNumber;
}
export interface MockHumanityGovernanceVoteEventArgs extends DecodedLogArgs {
    proposalId: BigNumber;
    voter: string;
    approve: boolean;
    weight: BigNumber;
}

/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class MockHumanityGovernanceContract extends BaseContract {
// tslint:disable:max-line-length
    public static ABI: string = '[{"constant":true,"inputs":[{"name":"index_0","type":"uint256"}],"name":"proposals","outputs":[{"name":"result","type":"uint8"},{"name":"target","type":"address"},{"name":"data","type":"bytes"},{"name":"proposer","type":"address"},{"name":"feeRecipient","type":"address"},{"name":"fee","type":"uint256"},{"name":"startTime","type":"uint256"},{"name":"yesCount","type":"uint256"},{"name":"noCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"proposalId","type":"uint256"}],"name":"finalize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index_0","type":"uint256"},{"name":"index_1","type":"address"}],"name":"yesVotes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"fee","type":"uint256"}],"name":"setProposalFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"proposalId","type":"uint256"}],"name":"voteNo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"proposalId","type":"uint256"}],"name":"removeVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"OPEN_VOTE_PERIOD","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"proposalId","type":"uint256"}],"name":"voteYes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"TOTAL_VOTE_PERIOD","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getProposalsCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"data","type":"bytes"}],"name":"propose","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"void","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index_0","type":"address"}],"name":"withdrawTimes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"timestamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"proposalId","type":"uint256"}],"name":"getProposal","outputs":[{"components":[{"name":"result","type":"uint8"},{"name":"target","type":"address"},{"name":"data","type":"bytes"},{"name":"proposer","type":"address"},{"name":"feeRecipient","type":"address"},{"name":"fee","type":"uint256"},{"name":"startTime","type":"uint256"},{"name":"yesCount","type":"uint256"},{"name":"noCount","type":"uint256"}],"name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index_0","type":"uint256"},{"name":"index_1","type":"address"}],"name":"noVotes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"feeRecipient","type":"address"},{"name":"target","type":"address"},{"name":"data","type":"bytes"}],"name":"proposeWithFeeRecipient","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"VETO_PERIOD","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index_0","type":"address"}],"name":"deposits","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"humanity","type":"address"},{"name":"proposalFee","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalId","type":"uint256"}],"name":"Execute","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalId","type":"uint256"},{"indexed":true,"name":"proposer","type":"address"},{"indexed":true,"name":"target","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Propose","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalId","type":"uint256"},{"indexed":true,"name":"voter","type":"address"}],"name":"RemoveVote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalId","type":"uint256"}],"name":"Terminate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalId","type":"uint256"},{"indexed":true,"name":"voter","type":"address"},{"indexed":false,"name":"approve","type":"bool"},{"indexed":false,"name":"weight","type":"uint256"}],"name":"Vote","type":"event"},{"constant":false,"inputs":[{"name":"time","type":"uint256"}],"name":"setBlockTimestampIncrease","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"time","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]';
    public static ORIGINAL_BYTECODE: string = '0x6080604052426008553480156200001557600080fd5b506040516040806200252e8339810180604052620000379190810190620000e8565b60018054600160a060020a031916600160a060020a038416179055600081905560405182908290829082906200006d90620000b8565b604051809103906000f0801580156200008a573d6000803e3d6000fd5b5060028054600160a060020a031916600160a060020a03929092169190911790555062000156945050505050565b605280620024dc83390190565b6000620000d382516200013a565b9392505050565b6000620000d3825162000153565b60008060408385031215620000fc57600080fd5b60006200010a8585620000c5565b92505060206200011d85828601620000da565b9150509250929050565b6000620001348262000147565b92915050565b6000620001348262000127565b600160a060020a031690565b90565b61237680620001666000396000f3fe608060405234801561001057600080fd5b5060043610610190576000357c01000000000000000000000000000000000000000000000000000000009004806398e527d3116100fb578063c27cabb5116100b4578063e3c3b2001161008e578063e3c3b2001461031e578063e861dc8514610262578063fc0c546a14610331578063fc7e286d1461033957610190565b8063c27cabb5146102e3578063c7f758a8146102eb578063da5c5b551461030b57610190565b806398e527d3146102855780639d4818481461028d578063ac4c25b2146102a0578063ad221321146102b5578063b6b55f25146102c8578063b80777ea146102db57610190565b80631a6f7be51161014d5780631a6f7be5146102295780632e1a7d4d1461023c5780633f68fde41461024f5780635d9dacb5146102625780636a1cf7211461026a5780637c64a45c1461027d57610190565b8063013cf08b1461019557806305261aea146101c65780630a45486e146101db5780630bc43490146101ee57806310bf50681461020e57806316ada54714610221575b600080fd5b6101a86101a336600461167e565b61034c565b6040516101bd99989796959493929190612068565b60405180910390f35b6101d96101d436600461167e565b610447565b005b6101d96101e936600461167e565b61076a565b6102016101fc36600461169c565b610783565b6040516101bd9190612236565b6101d961021c36600461167e565b6107a0565b6102016107c7565b6101d961023736600461167e565b6107ce565b6101d961024a36600461167e565b610a64565b6101d961025d36600461167e565b610b77565b610201610ccf565b6101d961027836600461167e565b610cd6565b610201610e3d565b610201610e44565b61020161029b36600461160e565b610e4a565b6102a8610e60565b6040516101bd919061205a565b6102016102c3366004611583565b610e6f565b6101d96102d636600461167e565b610e81565b610201610f72565b610201610f78565b6102fe6102f936600461167e565b610f7e565b6040516101bd9190612225565b61020161031936600461169c565b6110c9565b61020161032c3660046115a9565b6110e6565b6102a8611397565b610201610347366004611583565b6113a6565b6003818154811061035957fe5b6000918252602091829020600891909102018054600180830180546040805160026101009584161586026000190190931692909204601f810188900488028301880190915280825260ff8516975092909304600160a060020a0316949091908301828280156104095780601f106103de57610100808354040283529160200191610409565b820191906000526020600020905b8154815290600101906020018083116103ec57829003601f168201915b505050600284015460038501546004860154600587015460068801546007909801549697600160a060020a0394851697939094169550909350919089565b60006003828154811061045657fe5b6000918252602082206008909102019150815460ff16600281111561047757fe5b146104a05760405160e560020a62461bcd028152600401610497906121d5565b60405180910390fd5b60006104aa6107c7565b90508160070154826006015411156106475760058201546104d4906205460063ffffffff6113b816565b81116104f55760405160e560020a62461bcd028152600401610497906121a5565b815460ff19166001908117835554600383015460048085015460405160e060020a63a9059cbb028152600160a060020a039485169463a9059cbb9461053e94911692910161202d565b602060405180830381600087803b15801561055857600080fd5b505af115801561056c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506105909190810190611660565b6105af5760405160e560020a62461bcd02815260040161049790612105565b8154604051610100909104600160a060020a0316906105d2906001850190611fde565b6000604051808303816000865af19150503d806000811461060f576040519150601f19603f3d011682016040523d82523d6000602084013e610614565b606091505b50506040518491507fddb556f1d2c1ec821e910b019d3685b229db152a0ecd517ca7e24b8bd713928990600090a2610765565b600582015461065f906202a30063ffffffff6113b816565b81116106805760405160e560020a62461bcd028152600401610497906121c5565b815460ff191660029081178355600154905460048085015460405160e060020a63a9059cbb028152600160a060020a039485169463a9059cbb946106c894911692910161202d565b602060405180830381600087803b1580156106e257600080fd5b505af11580156106f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061071a9190810190611660565b6107395760405160e560020a62461bcd028152600401610497906121f5565b60405183907fd681175168470800567b22d50d831df189686adc5b155827823a5ada6a97a4fe90600090a25b505050565b60085461077d908263ffffffff6113b816565b60085550565b600460209081526000928352604080842090915290825290205481565b3330146107c25760405160e560020a62461bcd02815260040161049790612135565b600055565b6008545b90565b6000600382815481106107dd57fe5b6000918252602082206008909102019150815460ff1660028111156107fe57fe5b1461081e5760405160e560020a62461bcd02815260040161049790612195565b6005810154600090610839906205460063ffffffff6113b816565b905060006108456107c7565b90508181111561086a5760405160e560020a62461bcd02815260040161049790612205565b3360008181526006602090815260408083205488845260058352818420948452939091528120546108a290839063ffffffff6113e016565b60078601549091506108ba908263ffffffff6113b816565b6007860155600086815260056020908152604080832033808552925280832085905551909188917f88d35328232823f54954b6627e9f732371656f6daa40cb1b01b27dc7875a7b479161090e91869061203b565b60405180910390a3600585015461092e906202a30063ffffffff6113b816565b8311801561094457508460060154856007015410155b15610a3257845460ff191660029081178655600154905460048088015460405160e060020a63a9059cbb028152600160a060020a039485169463a9059cbb9461099194911692910161202d565b602060405180830381600087803b1580156109ab57600080fd5b505af11580156109bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506109e39190810190611660565b610a025760405160e560020a62461bcd02815260040161049790612175565b60405186907fd681175168470800567b22d50d831df189686adc5b155827823a5ada6a97a4fe90600090a2610a5c565b33600090815260076020526040902054841115610a5c573360009081526007602052604090208490555b505050505050565b33600090815260076020526040902054610a7c6107c7565b11610a9c5760405160e560020a62461bcd028152600401610497906120f5565b33600090815260066020526040902054610abc908263ffffffff6113e016565b336000818152600660205260409081902092909255600154915160e060020a63a9059cbb028152600160a060020a039092169163a9059cbb91610b03918590600401612012565b602060405180830381600087803b158015610b1d57600080fd5b505af1158015610b31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610b559190810190611660565b610b745760405160e560020a62461bcd02815260040161049790612155565b50565b600060038281548110610b8657fe5b6000918252602082206008909102019150815460ff166002811115610ba757fe5b14610bc75760405160e560020a62461bcd02815260040161049790612115565b6005810154610bdf906205460063ffffffff6113b816565b610be76107c7565b1115610c085760405160e560020a62461bcd02815260040161049790612145565b60008281526004602090815260408083203384529091529020546006820154610c369163ffffffff6113e016565b600682015560008281526005602090815260408083203384529091529020546007820154610c699163ffffffff6113e016565b60078201556000828152600460209081526040808320338085529083528184208490558584526005835281842081855290925280832083905551909184917f3676c1fca38c63566d0cbf07d561c0db78a4cc1f64d3d929ef452bfef41a3d069190a35050565b6202a30081565b600060038281548110610ce557fe5b90600052602060002090600802019050610d0f6202a30082600501546113b890919063ffffffff16565b610d176107c7565b1115610d385760405160e560020a62461bcd028152600401610497906121b5565b6005810154600090610d53906205460063ffffffff6113b816565b33600090815260076020526040902054909150811115610d80573360009081526007602052604090208190555b60008381526004602090815260408083203384528252808320546006909252822054610db19163ffffffff6113e016565b6006840154909150610dc9908263ffffffff6113b816565b6006808501919091553360008181526020928352604080822054888352600485528183208484529094529081902092909255905185907f88d35328232823f54954b6627e9f732371656f6daa40cb1b01b27dc7875a7b4790610e2f90600190869061203b565b60405180910390a350505050565b6205460081565b60035490565b6000610e573384846110e6565b90505b92915050565b600254600160a060020a031681565b60076020526000908152604090205481565b6001546040517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a03909116906323b872dd90610ece90339030908690600401611fea565b602060405180830381600087803b158015610ee857600080fd5b505af1158015610efc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610f209190810190611660565b610f3f5760405160e560020a62461bcd02815260040161049790612185565b33600090815260066020526040902054610f5f908263ffffffff6113b816565b3360009081526006602052604090205550565b60085481565b60005481565b610f8661140b565b60038281548110610f9357fe5b600091825260209091206040805161012081019091526008909202018054829060ff166002811115610fc157fe5b6002811115610fcc57fe5b8152815461010090819004600160a060020a031660208084019190915260018085018054604080516002948316159096026000190190911692909204601f810184900484028501840183528085529190940193918301828280156110715780601f1061104657610100808354040283529160200191611071565b820191906000526020600020905b81548152906001019060200180831161105457829003601f168201915b50505091835250506002820154600160a060020a03908116602083015260038301541660408201526004820154606082015260058201546080820152600682015460a082015260079091015460c09091015292915050565b600560209081526000928352604080842090915290825290205481565b60003330148015906111065750600154600160a060020a03848116911614155b6111255760405160e560020a62461bcd02815260040161049790612215565b6001546000546040517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a03909216916323b872dd916111739133913091600401611fea565b602060405180830381600087803b15801561118d57600080fd5b505af11580156111a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506111c59190810190611660565b6111e45760405160e560020a62461bcd02815260040161049790612165565b6003546111ef61140b565b600160a060020a038086166020830152604082018590523360608301528616608082015260005460a08201526112236107c7565b60c08201526000805460e083015260038054600181810180845592909352835160089091027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b01805492938593919291839160ff199091169083600281111561128857fe5b02179055506020828101518254600160a060020a039091166101000274ffffffffffffffffffffffffffffffffffffffff0019909116178255604083015180516112d89260018501920190611473565b50606082015160028201805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a0393841617909155608084015160038401805490921690831617905560a0830151600483015560c0830151600583015560e08301516006830155610100909201516007909101556040519087169150339084907f2f162bd58e5254c884a7cbc5409e7e1d4f69b18801f19b8502365fc82b0c199690611384908990612049565b60405180910390a45090505b9392505050565b600154600160a060020a031681565b60066020526000908152604090205481565b600082820183811015610e575760405160e560020a62461bcd028152600401610497906121e5565b6000828211156114055760405160e560020a62461bcd02815260040161049790612125565b50900390565b60408051610120810190915280600081526020016000600160a060020a03168152602001606081526020016000600160a060020a031681526020016000600160a060020a03168152602001600081526020016000815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106114b457805160ff19168380011785556114e1565b828001600101855582156114e1579182015b828111156114e15782518255916020019190600101906114c6565b506114ed9291506114f1565b5090565b6107cb91905b808211156114ed57600081556001016114f7565b6000610e5782356122b1565b6000610e5782516122bc565b600082601f83011261153457600080fd5b81356115476115428261226b565b612244565b9150808252602083016020830185838301111561156357600080fd5b61156e8382846122f6565b50505092915050565b6000610e5782356107cb565b60006020828403121561159557600080fd5b60006115a1848461150b565b949350505050565b6000806000606084860312156115be57600080fd5b60006115ca868661150b565b93505060206115db8682870161150b565b925050604084013567ffffffffffffffff8111156115f857600080fd5b61160486828701611523565b9150509250925092565b6000806040838503121561162157600080fd5b600061162d858561150b565b925050602083013567ffffffffffffffff81111561164a57600080fd5b61165685828601611523565b9150509250929050565b60006020828403121561167257600080fd5b60006115a18484611517565b60006020828403121561169057600080fd5b60006115a18484611577565b600080604083850312156116af57600080fd5b60006116bb8585611577565b92505060206116568582860161150b565b6116d5816122d9565b82525050565b6116d5816122b1565b6116d5816122bc565b60006116f88261229f565b61170281856122a3565b9350611712818560208601612302565b61171b81612332565b9093019392505050565b6000815460018116600081146117425760018114611765576117a4565b607f600283041661175381876122ac565b60ff19841681529550850192506117a4565b6002820461177381876122ac565b955061177e85612293565b60005b8281101561179d57815488820152600190910190602001611781565b5050850192505b505092915050565b6116d5816122e0565b6116d5816122eb565b60006117cb6044836122a3565b7f476f7665726e616e63653a3a77697468647261773a20566f746572732077697481527f6820616e206163746976652070726f706f73616c2063616e6e6f74207769746860208201527f6472617700000000000000000000000000000000000000000000000000000000604082015260600192915050565b60006118506030836122a3565b7f476f7665726e616e63653a3a66696e616c697a653a2052657475726e2070726f81527f706f73616c20666565206661696c656400000000000000000000000000000000602082015260400192915050565b60006118af6035836122a3565b7f476f7665726e616e63653a3a72656d6f7665566f74653a2050726f706f73616c81527f20697320616c72656164792066696e616c697a65640000000000000000000000602082015260400192915050565b600061190e6020836122a3565b7f536166654d6174683a3a7375623a20496e746567657220756e646572666c6f77815260200192915050565b60006119476047836122a3565b7f476f7665726e616e63653a3a73657450726f706f73616c4665653a2050726f7081527f6f73616c206665652063616e206f6e6c79206265207365742076696120676f7660208201527f65726e616e636500000000000000000000000000000000000000000000000000604082015260600192915050565b60006119cc603e836122a3565b7f476f7665726e616e63653a3a72656d6f7665566f74653a2050726f706f73616c81527f206973206e6f206c6f6e67657220696e20766f74696e6720706572696f640000602082015260400192915050565b6000611a2b6025836122a3565b7f476f7665726e616e63653a3a77697468647261773a205472616e73666572206681527f61696c6564000000000000000000000000000000000000000000000000000000602082015260400192915050565b6000611a8a6034836122a3565b7f476f7665726e616e63653a3a70726f706f73655769746846656552656369706981527f656e743a205472616e73666572206661696c6564000000000000000000000000602082015260400192915050565b6000611ae9602b836122a3565b7f476f7665726e616e63653a3a766f74654e6f3a205472616e7366657220746f2081527f766f6964206661696c6564000000000000000000000000000000000000000000602082015260400192915050565b6000611b486024836122a3565b7f476f7665726e616e63653a3a6465706f7369743a205472616e7366657220666181527f696c656400000000000000000000000000000000000000000000000000000000602082015260400192915050565b6000611ba76031836122a3565b7f476f7665726e616e63653a3a766f74654e6f3a2050726f706f73616c2069732081527f616c72656164792066696e616c697a6564000000000000000000000000000000602082015260400192915050565b6000611c06604a836122a3565b7f476f7665726e616e63653a3a66696e616c697a653a2050726f706f73616c206381527f616e6e6f7420626520657865637574656420756e74696c20656e64206f66207660208201527f65746f20706572696f6400000000000000000000000000000000000000000000604082015260600192915050565b6000611c8b603e836122a3565b7f476f7665726e616e63653a3a766f74655965733a2050726f706f73616c20697381527f206e6f206c6f6e67657220616363657074696e672079657320766f7465730000602082015260400192915050565b6000611cea6050836122a3565b7f476f7665726e616e63653a3a66696e616c697a653a2050726f706f73616c206381527f616e6e6f74206265207465726d696e6174656420756e74696c20656e64206f6660208201527f2079657320766f746520706572696f6400000000000000000000000000000000604082015260600192915050565b6000611d6f6033836122a3565b7f476f7665726e616e63653a3a66696e616c697a653a2050726f706f73616c206981527f7320616c72656164792066696e616c697a656400000000000000000000000000602082015260400192915050565b6000611dce601f836122a3565b7f536166654d6174683a3a6164643a20496e7465676572206f766572666c6f7700815260200192915050565b6000611e07602d836122a3565b7f476f7665726e616e63653a3a66696e616c697a653a205472616e73666572207481527f6f20766f6964206661696c656400000000000000000000000000000000000000602082015260400192915050565b6000611e66603a836122a3565b7f476f7665726e616e63653a3a766f74654e6f3a2050726f706f73616c2069732081527f6e6f206c6f6e67657220696e20766f74696e6720706572696f64000000000000602082015260400192915050565b6000611ec56035836122a3565b7f476f7665726e616e63653a3a70726f706f73655769746846656552656369706981527f656e743a20496e76616c69642070726f706f73616c0000000000000000000000602082015260400192915050565b8051600090610120840190611f2c85826117b5565b506020830151611f3f60208601826116db565b5060408301518482036040860152611f5782826116ed565b9150506060830151611f6c60608601826116db565b506080830151611f7f60808601826116db565b5060a0830151611f9260a0860182611fd5565b5060c0830151611fa560c0860182611fd5565b5060e0830151611fb860e0860182611fd5565b50610100830151611fcd610100860182611fd5565b509392505050565b6116d5816107cb565b60006113908284611725565b60608101611ff882866116cc565b61200560208301856116db565b6115a16040830184611fd5565b6040810161202082856116cc565b6113906020830184611fd5565b6040810161202082856116db565b6040810161202082856116e4565b60208082528101610e5781846116ed565b60208101610e5a82846117ac565b6101208101612077828c6117b5565b612084602083018b6116db565b8181036040830152612096818a6116ed565b90506120a560608301896116db565b6120b260808301886116db565b6120bf60a0830187611fd5565b6120cc60c0830186611fd5565b6120d960e0830185611fd5565b6120e7610100830184611fd5565b9a9950505050505050505050565b60208082528101610e5a816117be565b60208082528101610e5a81611843565b60208082528101610e5a816118a2565b60208082528101610e5a81611901565b60208082528101610e5a8161193a565b60208082528101610e5a816119bf565b60208082528101610e5a81611a1e565b60208082528101610e5a81611a7d565b60208082528101610e5a81611adc565b60208082528101610e5a81611b3b565b60208082528101610e5a81611b9a565b60208082528101610e5a81611bf9565b60208082528101610e5a81611c7e565b60208082528101610e5a81611cdd565b60208082528101610e5a81611d62565b60208082528101610e5a81611dc1565b60208082528101610e5a81611dfa565b60208082528101610e5a81611e59565b60208082528101610e5a81611eb8565b60208082528101610e578184611f17565b60208101610e5a8284611fd5565b60405181810167ffffffffffffffff8111828210171561226357600080fd5b604052919050565b600067ffffffffffffffff82111561228257600080fd5b506020601f91909101601f19160190565b60009081526020902090565b5190565b90815260200190565b919050565b6000610e5a826122cd565b151590565b6000600382106114ed57fe5b600160a060020a031690565b6000610e5a825b6000610e5a826122b1565b6000610e5a826122c1565b82818337506000910152565b60005b8381101561231d578181015183820152602001612305565b8381111561232c576000848401525b50505050565b601f01601f19169056fea265627a7a72305820725670d0f488fb875a6bdb2c93c55b59bde67201767f9e3787117c4a2ae07ab06c6578706572696d656e74616cf500376080604052348015600f57600080fd5b50603580601d6000396000f3fe6080604052600080fdfea165627a7a72305820122b0d198a50df60919e9880d76f5a1dbcc7de8f48055ebc52ff0366d02a868d0029';
    public static BYTECODE: string = MockHumanityGovernanceContract.ORIGINAL_BYTECODE;
// tslint:enable:max-line-length
    public proposals = {
        async callAsync(
            index_0: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[number, string, string, string, string, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('proposals(uint256)', [index_0
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
            const abiEncoder = self._lookupAbiEncoder('proposals(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<[number, string, string, string, string, BigNumber, BigNumber, BigNumber, BigNumber]
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public finalize = {
        async sendTransactionAsync(
            proposalId: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('finalize(uint256)', [proposalId
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.finalize.estimateGasAsync.bind(
                    self,
                    proposalId
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            proposalId: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('finalize(uint256)', [proposalId
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
            proposalId: BigNumber,
        ): string {
            const self = this as any as MockHumanityGovernanceContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('finalize(uint256)', [proposalId
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            proposalId: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('finalize(uint256)', [proposalId
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
            const abiEncoder = self._lookupAbiEncoder('finalize(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public yesVotes = {
        async callAsync(
            index_0: BigNumber,
            index_1: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('yesVotes(uint256,address)', [index_0,
        index_1
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
            const abiEncoder = self._lookupAbiEncoder('yesVotes(uint256,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public setProposalFee = {
        async sendTransactionAsync(
            fee: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('setProposalFee(uint256)', [fee
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.setProposalFee.estimateGasAsync.bind(
                    self,
                    fee
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            fee: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('setProposalFee(uint256)', [fee
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
            fee: BigNumber,
        ): string {
            const self = this as any as MockHumanityGovernanceContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setProposalFee(uint256)', [fee
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            fee: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('setProposalFee(uint256)', [fee
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
            const abiEncoder = self._lookupAbiEncoder('setProposalFee(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public voteNo = {
        async sendTransactionAsync(
            proposalId: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('voteNo(uint256)', [proposalId
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.voteNo.estimateGasAsync.bind(
                    self,
                    proposalId
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            proposalId: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('voteNo(uint256)', [proposalId
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
            proposalId: BigNumber,
        ): string {
            const self = this as any as MockHumanityGovernanceContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('voteNo(uint256)', [proposalId
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            proposalId: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('voteNo(uint256)', [proposalId
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
            const abiEncoder = self._lookupAbiEncoder('voteNo(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public withdraw = {
        async sendTransactionAsync(
            amount: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('withdraw(uint256)', [amount
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.withdraw.estimateGasAsync.bind(
                    self,
                    amount
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            amount: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('withdraw(uint256)', [amount
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
            amount: BigNumber,
        ): string {
            const self = this as any as MockHumanityGovernanceContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('withdraw(uint256)', [amount
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            amount: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('withdraw(uint256)', [amount
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
            const abiEncoder = self._lookupAbiEncoder('withdraw(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public removeVote = {
        async sendTransactionAsync(
            proposalId: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('removeVote(uint256)', [proposalId
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.removeVote.estimateGasAsync.bind(
                    self,
                    proposalId
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            proposalId: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('removeVote(uint256)', [proposalId
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
            proposalId: BigNumber,
        ): string {
            const self = this as any as MockHumanityGovernanceContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('removeVote(uint256)', [proposalId
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            proposalId: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('removeVote(uint256)', [proposalId
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
            const abiEncoder = self._lookupAbiEncoder('removeVote(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public OPEN_VOTE_PERIOD = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('OPEN_VOTE_PERIOD()', []);
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
            const abiEncoder = self._lookupAbiEncoder('OPEN_VOTE_PERIOD()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public voteYes = {
        async sendTransactionAsync(
            proposalId: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('voteYes(uint256)', [proposalId
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.voteYes.estimateGasAsync.bind(
                    self,
                    proposalId
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            proposalId: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('voteYes(uint256)', [proposalId
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
            proposalId: BigNumber,
        ): string {
            const self = this as any as MockHumanityGovernanceContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('voteYes(uint256)', [proposalId
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            proposalId: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('voteYes(uint256)', [proposalId
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
            const abiEncoder = self._lookupAbiEncoder('voteYes(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public TOTAL_VOTE_PERIOD = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('TOTAL_VOTE_PERIOD()', []);
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
            const abiEncoder = self._lookupAbiEncoder('TOTAL_VOTE_PERIOD()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public getProposalsCount = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('getProposalsCount()', []);
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
            const abiEncoder = self._lookupAbiEncoder('getProposalsCount()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public propose = {
        async sendTransactionAsync(
            target: string,
            data: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('propose(address,bytes)', [target,
    data
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.propose.estimateGasAsync.bind(
                    self,
                    target,
                    data
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            target: string,
            data: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('propose(address,bytes)', [target,
    data
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
            target: string,
            data: string,
        ): string {
            const self = this as any as MockHumanityGovernanceContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('propose(address,bytes)', [target,
    data
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            target: string,
            data: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('propose(address,bytes)', [target,
        data
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
            const abiEncoder = self._lookupAbiEncoder('propose(address,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public void = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('void()', []);
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
            const abiEncoder = self._lookupAbiEncoder('void()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public withdrawTimes = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('withdrawTimes(address)', [index_0
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
            const abiEncoder = self._lookupAbiEncoder('withdrawTimes(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public deposit = {
        async sendTransactionAsync(
            amount: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('deposit(uint256)', [amount
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.deposit.estimateGasAsync.bind(
                    self,
                    amount
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            amount: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('deposit(uint256)', [amount
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
            amount: BigNumber,
        ): string {
            const self = this as any as MockHumanityGovernanceContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('deposit(uint256)', [amount
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            amount: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('deposit(uint256)', [amount
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
            const abiEncoder = self._lookupAbiEncoder('deposit(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public timestamp = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('timestamp()', []);
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
            const abiEncoder = self._lookupAbiEncoder('timestamp()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public proposalFee = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('proposalFee()', []);
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
            const abiEncoder = self._lookupAbiEncoder('proposalFee()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public getProposal = {
        async callAsync(
            proposalId: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{result: number;target: string;data: string;proposer: string;feeRecipient: string;fee: BigNumber;startTime: BigNumber;yesCount: BigNumber;noCount: BigNumber}
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('getProposal(uint256)', [proposalId
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
            const abiEncoder = self._lookupAbiEncoder('getProposal(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<{result: number;target: string;data: string;proposer: string;feeRecipient: string;fee: BigNumber;startTime: BigNumber;yesCount: BigNumber;noCount: BigNumber}
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public noVotes = {
        async callAsync(
            index_0: BigNumber,
            index_1: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('noVotes(uint256,address)', [index_0,
        index_1
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
            const abiEncoder = self._lookupAbiEncoder('noVotes(uint256,address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public proposeWithFeeRecipient = {
        async sendTransactionAsync(
            feeRecipient: string,
            target: string,
            data: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('proposeWithFeeRecipient(address,address,bytes)', [feeRecipient,
    target,
    data
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.proposeWithFeeRecipient.estimateGasAsync.bind(
                    self,
                    feeRecipient,
                    target,
                    data
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            feeRecipient: string,
            target: string,
            data: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('proposeWithFeeRecipient(address,address,bytes)', [feeRecipient,
    target,
    data
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
            feeRecipient: string,
            target: string,
            data: string,
        ): string {
            const self = this as any as MockHumanityGovernanceContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('proposeWithFeeRecipient(address,address,bytes)', [feeRecipient,
    target,
    data
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            feeRecipient: string,
            target: string,
            data: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('proposeWithFeeRecipient(address,address,bytes)', [feeRecipient,
        target,
        data
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
            const abiEncoder = self._lookupAbiEncoder('proposeWithFeeRecipient(address,address,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public VETO_PERIOD = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('VETO_PERIOD()', []);
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
            const abiEncoder = self._lookupAbiEncoder('VETO_PERIOD()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public token = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('token()', []);
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
            const abiEncoder = self._lookupAbiEncoder('token()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public deposits = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('deposits(address)', [index_0
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
            const abiEncoder = self._lookupAbiEncoder('deposits(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public setBlockTimestampIncrease = {
        async sendTransactionAsync(
            time: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('setBlockTimestampIncrease(uint256)', [time
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.setBlockTimestampIncrease.estimateGasAsync.bind(
                    self,
                    time
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            time: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('setBlockTimestampIncrease(uint256)', [time
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
            time: BigNumber,
        ): string {
            const self = this as any as MockHumanityGovernanceContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setBlockTimestampIncrease(uint256)', [time
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            time: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('setBlockTimestampIncrease(uint256)', [time
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
            const abiEncoder = self._lookupAbiEncoder('setBlockTimestampIncrease(uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public time = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as MockHumanityGovernanceContract;
            const encodedData = self._strictEncodeArguments('time()', []);
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
            const abiEncoder = self._lookupAbiEncoder('time()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },};    public static linkLibrary(
        libraryName: string,
        address: string,
    ): void {
        const bytecode = MockHumanityGovernanceContract.BYTECODE;
        const cleanedAddress = address.replace('0x', '');
        // truncate to 37 characters
        const truncatedName = libraryName.slice(0, 36);
        const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
        MockHumanityGovernanceContract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
    }
    public static async deployAsync(
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            humanity: string,
            proposalFee: BigNumber,
    ): Promise<MockHumanityGovernanceContract> {
        const abi = JSON.parse(MockHumanityGovernanceContract.ABI);
        const bytecode = MockHumanityGovernanceContract.BYTECODE;
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [humanity,
proposalFee
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [humanity,
proposalFee
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [humanity,
proposalFee
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
        logUtils.log(`MockHumanityGovernance successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new MockHumanityGovernanceContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [humanity,
proposalFee
];
        return contractInstance;
    }
    public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>) {
        const abi = JSON.parse(MockHumanityGovernanceContract.ABI);
        const contractInstance = new MockHumanityGovernanceContract(abi, address, provider, txDefaults);
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('MockHumanityGovernance', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method