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

export type GovernanceEventArgs =
    | GovernanceExecuteEventArgs
    | GovernanceProposeEventArgs
    | GovernanceRemoveVoteEventArgs
    | GovernanceTerminateEventArgs
    | GovernanceVoteEventArgs;

export enum GovernanceEvents {
    Execute = 'Execute',
    Propose = 'Propose',
    RemoveVote = 'RemoveVote',
    Terminate = 'Terminate',
    Vote = 'Vote',
}

export interface GovernanceExecuteEventArgs extends DecodedLogArgs {
    proposalId: BigNumber;
}
export interface GovernanceProposeEventArgs extends DecodedLogArgs {
    proposalId: BigNumber;
    proposer: string;
    target: string;
    data: string;
}
export interface GovernanceRemoveVoteEventArgs extends DecodedLogArgs {
    proposalId: BigNumber;
    voter: string;
}
export interface GovernanceTerminateEventArgs extends DecodedLogArgs {
    proposalId: BigNumber;
}
export interface GovernanceVoteEventArgs extends DecodedLogArgs {
    proposalId: BigNumber;
    voter: string;
    approve: boolean;
    weight: BigNumber;
}

/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class GovernanceContract extends BaseContract {
// tslint:disable:max-line-length
    public static ABI: string = '[{"constant":true,"inputs":[{"name":"index_0","type":"uint256"}],"name":"proposals","outputs":[{"name":"result","type":"uint8"},{"name":"target","type":"address"},{"name":"data","type":"bytes"},{"name":"proposer","type":"address"},{"name":"feeRecipient","type":"address"},{"name":"fee","type":"uint256"},{"name":"startTime","type":"uint256"},{"name":"yesCount","type":"uint256"},{"name":"noCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index_0","type":"uint256"},{"name":"index_1","type":"address"}],"name":"yesVotes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"OPEN_VOTE_PERIOD","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TOTAL_VOTE_PERIOD","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"void","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index_0","type":"address"}],"name":"withdrawTimes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index_0","type":"uint256"},{"name":"index_1","type":"address"}],"name":"noVotes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VETO_PERIOD","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index_0","type":"address"}],"name":"deposits","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_token","type":"address"},{"name":"_initialProposalFee","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalId","type":"uint256"}],"name":"Execute","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalId","type":"uint256"},{"indexed":true,"name":"proposer","type":"address"},{"indexed":true,"name":"target","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Propose","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalId","type":"uint256"},{"indexed":true,"name":"voter","type":"address"}],"name":"RemoveVote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalId","type":"uint256"}],"name":"Terminate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"proposalId","type":"uint256"},{"indexed":true,"name":"voter","type":"address"},{"indexed":false,"name":"approve","type":"bool"},{"indexed":false,"name":"weight","type":"uint256"}],"name":"Vote","type":"event"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"data","type":"bytes"}],"name":"propose","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"feeRecipient","type":"address"},{"name":"target","type":"address"},{"name":"data","type":"bytes"}],"name":"proposeWithFeeRecipient","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"proposalId","type":"uint256"}],"name":"voteYes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"proposalId","type":"uint256"}],"name":"voteNo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"proposalId","type":"uint256"}],"name":"removeVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"proposalId","type":"uint256"}],"name":"finalize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"fee","type":"uint256"}],"name":"setProposalFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"time","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"proposalId","type":"uint256"}],"name":"getProposal","outputs":[{"components":[{"name":"result","type":"uint8"},{"name":"target","type":"address"},{"name":"data","type":"bytes"},{"name":"proposer","type":"address"},{"name":"feeRecipient","type":"address"},{"name":"fee","type":"uint256"},{"name":"startTime","type":"uint256"},{"name":"yesCount","type":"uint256"},{"name":"noCount","type":"uint256"}],"name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getProposalsCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]';
    public static ORIGINAL_BYTECODE: string = '0x60806040523480156200001157600080fd5b50604051604080620024bc8339810180604052620000339190810190620000d8565b60018054600160a060020a031916600160a060020a03841617905560008190556040516200006190620000a8565b604051809103906000f0801580156200007e573d6000803e3d6000fd5b5060028054600160a060020a031916600160a060020a039290921691909117905550620001469050565b6052806200246a83390190565b6000620000c382516200012a565b9392505050565b6000620000c3825162000143565b60008060408385031215620000ec57600080fd5b6000620000fa8585620000b5565b92505060206200010d85828601620000ca565b9150509250929050565b6000620001248262000137565b92915050565b6000620001248262000117565b600160a060020a031690565b90565b61231480620001566000396000f3fe608060405234801561001057600080fd5b506004361061016a576000357c01000000000000000000000000000000000000000000000000000000009004806398e527d3116100e0578063c7f758a811610099578063c7f758a8146102aa578063da5c5b55146102ca578063e3c3b200146102dd578063e861dc8514610229578063fc0c546a146102f0578063fc7e286d146102f85761016a565b806398e527d31461024c5780639d48184814610254578063ac4c25b214610267578063ad2213211461027c578063b6b55f251461028f578063c27cabb5146102a25761016a565b80631a6f7be5116101325780631a6f7be5146101f05780632e1a7d4d146102035780633f68fde4146102165780635d9dacb5146102295780636a1cf721146102315780637c64a45c146102445761016a565b8063013cf08b1461016f57806305261aea146101a05780630bc43490146101b557806310bf5068146101d557806316ada547146101e8575b600080fd5b61018261017d36600461161c565b61030b565b60405161019799989796959493929190612006565b60405180910390f35b6101b36101ae36600461161c565b610406565b005b6101c86101c336600461163a565b610729565b60405161019791906121d4565b6101b36101e336600461161c565b610746565b6101c861076d565b6101b36101fe36600461161c565b610772565b6101b361021136600461161c565b610a08565b6101b361022436600461161c565b610b1b565b6101c8610c73565b6101b361023f36600461161c565b610c7a565b6101c8610de1565b6101c8610de8565b6101c86102623660046115ac565b610dee565b61026f610e04565b6040516101979190611ff8565b6101c861028a366004611521565b610e13565b6101b361029d36600461161c565b610e25565b6101c8610f16565b6102bd6102b836600461161c565b610f1c565b60405161019791906121c3565b6101c86102d836600461163a565b611067565b6101c86102eb366004611547565b611084565b61026f611335565b6101c8610306366004611521565b611344565b6003818154811061031857fe5b6000918252602091829020600891909102018054600180830180546040805160026101009584161586026000190190931692909204601f810188900488028301880190915280825260ff8516975092909304600160a060020a0316949091908301828280156103c85780601f1061039d576101008083540402835291602001916103c8565b820191906000526020600020905b8154815290600101906020018083116103ab57829003601f168201915b505050600284015460038501546004860154600587015460068801546007909801549697600160a060020a0394851697939094169550909350919089565b60006003828154811061041557fe5b6000918252602082206008909102019150815460ff16600281111561043657fe5b1461045f5760405160e560020a62461bcd02815260040161045690612173565b60405180910390fd5b600061046961076d565b9050816007015482600601541115610606576005820154610493906205460063ffffffff61135616565b81116104b45760405160e560020a62461bcd02815260040161045690612143565b815460ff19166001908117835554600383015460048085015460405160e060020a63a9059cbb028152600160a060020a039485169463a9059cbb946104fd949116929101611fcb565b602060405180830381600087803b15801561051757600080fd5b505af115801561052b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061054f91908101906115fe565b61056e5760405160e560020a62461bcd028152600401610456906120a3565b8154604051610100909104600160a060020a031690610591906001850190611f7c565b6000604051808303816000865af19150503d80600081146105ce576040519150601f19603f3d011682016040523d82523d6000602084013e6105d3565b606091505b50506040518491507fddb556f1d2c1ec821e910b019d3685b229db152a0ecd517ca7e24b8bd713928990600090a2610724565b600582015461061e906202a30063ffffffff61135616565b811161063f5760405160e560020a62461bcd02815260040161045690612163565b815460ff191660029081178355600154905460048085015460405160e060020a63a9059cbb028152600160a060020a039485169463a9059cbb94610687949116929101611fcb565b602060405180830381600087803b1580156106a157600080fd5b505af11580156106b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506106d991908101906115fe565b6106f85760405160e560020a62461bcd02815260040161045690612193565b60405183907fd681175168470800567b22d50d831df189686adc5b155827823a5ada6a97a4fe90600090a25b505050565b600460209081526000928352604080842090915290825290205481565b3330146107685760405160e560020a62461bcd028152600401610456906120d3565b600055565b425b90565b60006003828154811061078157fe5b6000918252602082206008909102019150815460ff1660028111156107a257fe5b146107c25760405160e560020a62461bcd02815260040161045690612133565b60058101546000906107dd906205460063ffffffff61135616565b905060006107e961076d565b90508181111561080e5760405160e560020a62461bcd028152600401610456906121a3565b33600081815260066020908152604080832054888452600583528184209484529390915281205461084690839063ffffffff61137e16565b600786015490915061085e908263ffffffff61135616565b6007860155600086815260056020908152604080832033808552925280832085905551909188917f88d35328232823f54954b6627e9f732371656f6daa40cb1b01b27dc7875a7b47916108b2918690611fd9565b60405180910390a360058501546108d2906202a30063ffffffff61135616565b831180156108e857508460060154856007015410155b156109d657845460ff191660029081178655600154905460048088015460405160e060020a63a9059cbb028152600160a060020a039485169463a9059cbb94610935949116929101611fcb565b602060405180830381600087803b15801561094f57600080fd5b505af1158015610963573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061098791908101906115fe565b6109a65760405160e560020a62461bcd02815260040161045690612113565b60405186907fd681175168470800567b22d50d831df189686adc5b155827823a5ada6a97a4fe90600090a2610a00565b33600090815260076020526040902054841115610a00573360009081526007602052604090208490555b505050505050565b33600090815260076020526040902054610a2061076d565b11610a405760405160e560020a62461bcd02815260040161045690612093565b33600090815260066020526040902054610a60908263ffffffff61137e16565b336000818152600660205260409081902092909255600154915160e060020a63a9059cbb028152600160a060020a039092169163a9059cbb91610aa7918590600401611fb0565b602060405180830381600087803b158015610ac157600080fd5b505af1158015610ad5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610af991908101906115fe565b610b185760405160e560020a62461bcd028152600401610456906120f3565b50565b600060038281548110610b2a57fe5b6000918252602082206008909102019150815460ff166002811115610b4b57fe5b14610b6b5760405160e560020a62461bcd028152600401610456906120b3565b6005810154610b83906205460063ffffffff61135616565b610b8b61076d565b1115610bac5760405160e560020a62461bcd028152600401610456906120e3565b60008281526004602090815260408083203384529091529020546006820154610bda9163ffffffff61137e16565b600682015560008281526005602090815260408083203384529091529020546007820154610c0d9163ffffffff61137e16565b60078201556000828152600460209081526040808320338085529083528184208490558584526005835281842081855290925280832083905551909184917f3676c1fca38c63566d0cbf07d561c0db78a4cc1f64d3d929ef452bfef41a3d069190a35050565b6202a30081565b600060038281548110610c8957fe5b90600052602060002090600802019050610cb36202a300826005015461135690919063ffffffff16565b610cbb61076d565b1115610cdc5760405160e560020a62461bcd02815260040161045690612153565b6005810154600090610cf7906205460063ffffffff61135616565b33600090815260076020526040902054909150811115610d24573360009081526007602052604090208190555b60008381526004602090815260408083203384528252808320546006909252822054610d559163ffffffff61137e16565b6006840154909150610d6d908263ffffffff61135616565b6006808501919091553360008181526020928352604080822054888352600485528183208484529094529081902092909255905185907f88d35328232823f54954b6627e9f732371656f6daa40cb1b01b27dc7875a7b4790610dd3906001908690611fd9565b60405180910390a350505050565b6205460081565b60035490565b6000610dfb338484611084565b90505b92915050565b600254600160a060020a031681565b60076020526000908152604090205481565b6001546040517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a03909116906323b872dd90610e7290339030908690600401611f88565b602060405180830381600087803b158015610e8c57600080fd5b505af1158015610ea0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610ec491908101906115fe565b610ee35760405160e560020a62461bcd02815260040161045690612123565b33600090815260066020526040902054610f03908263ffffffff61135616565b3360009081526006602052604090205550565b60005481565b610f246113a9565b60038281548110610f3157fe5b600091825260209091206040805161012081019091526008909202018054829060ff166002811115610f5f57fe5b6002811115610f6a57fe5b8152815461010090819004600160a060020a031660208084019190915260018085018054604080516002948316159096026000190190911692909204601f8101849004840285018401835280855291909401939183018282801561100f5780601f10610fe45761010080835404028352916020019161100f565b820191906000526020600020905b815481529060010190602001808311610ff257829003601f168201915b50505091835250506002820154600160a060020a03908116602083015260038301541660408201526004820154606082015260058201546080820152600682015460a082015260079091015460c09091015292915050565b600560209081526000928352604080842090915290825290205481565b60003330148015906110a45750600154600160a060020a03848116911614155b6110c35760405160e560020a62461bcd028152600401610456906121b3565b6001546000546040517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a03909216916323b872dd916111119133913091600401611f88565b602060405180830381600087803b15801561112b57600080fd5b505af115801561113f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061116391908101906115fe565b6111825760405160e560020a62461bcd02815260040161045690612103565b60035461118d6113a9565b600160a060020a038086166020830152604082018590523360608301528616608082015260005460a08201526111c161076d565b60c08201526000805460e083015260038054600181810180845592909352835160089091027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b01805492938593919291839160ff199091169083600281111561122657fe5b02179055506020828101518254600160a060020a039091166101000274ffffffffffffffffffffffffffffffffffffffff0019909116178255604083015180516112769260018501920190611411565b50606082015160028201805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a0393841617909155608084015160038401805490921690831617905560a0830151600483015560c0830151600583015560e08301516006830155610100909201516007909101556040519087169150339084907f2f162bd58e5254c884a7cbc5409e7e1d4f69b18801f19b8502365fc82b0c199690611322908990611fe7565b60405180910390a45090505b9392505050565b600154600160a060020a031681565b60066020526000908152604090205481565b600082820183811015610dfb5760405160e560020a62461bcd02815260040161045690612183565b6000828211156113a35760405160e560020a62461bcd028152600401610456906120c3565b50900390565b60408051610120810190915280600081526020016000600160a060020a03168152602001606081526020016000600160a060020a031681526020016000600160a060020a03168152602001600081526020016000815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061145257805160ff191683800117855561147f565b8280016001018555821561147f579182015b8281111561147f578251825591602001919060010190611464565b5061148b92915061148f565b5090565b61076f91905b8082111561148b5760008155600101611495565b6000610dfb823561224f565b6000610dfb825161225a565b600082601f8301126114d257600080fd5b81356114e56114e082612209565b6121e2565b9150808252602083016020830185838301111561150157600080fd5b61150c838284612294565b50505092915050565b6000610dfb823561076f565b60006020828403121561153357600080fd5b600061153f84846114a9565b949350505050565b60008060006060848603121561155c57600080fd5b600061156886866114a9565b9350506020611579868287016114a9565b925050604084013567ffffffffffffffff81111561159657600080fd5b6115a2868287016114c1565b9150509250925092565b600080604083850312156115bf57600080fd5b60006115cb85856114a9565b925050602083013567ffffffffffffffff8111156115e857600080fd5b6115f4858286016114c1565b9150509250929050565b60006020828403121561161057600080fd5b600061153f84846114b5565b60006020828403121561162e57600080fd5b600061153f8484611515565b6000806040838503121561164d57600080fd5b60006116598585611515565b92505060206115f4858286016114a9565b61167381612277565b82525050565b6116738161224f565b6116738161225a565b60006116968261223d565b6116a08185612241565b93506116b08185602086016122a0565b6116b9816122d0565b9093019392505050565b6000815460018116600081146116e0576001811461170357611742565b607f60028304166116f1818761224a565b60ff1984168152955085019250611742565b60028204611711818761224a565b955061171c85612231565b60005b8281101561173b5781548882015260019091019060200161171f565b5050850192505b505092915050565b6116738161227e565b61167381612289565b6000611769604483612241565b7f476f7665726e616e63653a3a77697468647261773a20566f746572732077697481527f6820616e206163746976652070726f706f73616c2063616e6e6f74207769746860208201527f6472617700000000000000000000000000000000000000000000000000000000604082015260600192915050565b60006117ee603083612241565b7f476f7665726e616e63653a3a66696e616c697a653a2052657475726e2070726f81527f706f73616c20666565206661696c656400000000000000000000000000000000602082015260400192915050565b600061184d603583612241565b7f476f7665726e616e63653a3a72656d6f7665566f74653a2050726f706f73616c81527f20697320616c72656164792066696e616c697a65640000000000000000000000602082015260400192915050565b60006118ac602083612241565b7f536166654d6174683a3a7375623a20496e746567657220756e646572666c6f77815260200192915050565b60006118e5604783612241565b7f476f7665726e616e63653a3a73657450726f706f73616c4665653a2050726f7081527f6f73616c206665652063616e206f6e6c79206265207365742076696120676f7660208201527f65726e616e636500000000000000000000000000000000000000000000000000604082015260600192915050565b600061196a603e83612241565b7f476f7665726e616e63653a3a72656d6f7665566f74653a2050726f706f73616c81527f206973206e6f206c6f6e67657220696e20766f74696e6720706572696f640000602082015260400192915050565b60006119c9602583612241565b7f476f7665726e616e63653a3a77697468647261773a205472616e73666572206681527f61696c6564000000000000000000000000000000000000000000000000000000602082015260400192915050565b6000611a28603483612241565b7f476f7665726e616e63653a3a70726f706f73655769746846656552656369706981527f656e743a205472616e73666572206661696c6564000000000000000000000000602082015260400192915050565b6000611a87602b83612241565b7f476f7665726e616e63653a3a766f74654e6f3a205472616e7366657220746f2081527f766f6964206661696c6564000000000000000000000000000000000000000000602082015260400192915050565b6000611ae6602483612241565b7f476f7665726e616e63653a3a6465706f7369743a205472616e7366657220666181527f696c656400000000000000000000000000000000000000000000000000000000602082015260400192915050565b6000611b45603183612241565b7f476f7665726e616e63653a3a766f74654e6f3a2050726f706f73616c2069732081527f616c72656164792066696e616c697a6564000000000000000000000000000000602082015260400192915050565b6000611ba4604a83612241565b7f476f7665726e616e63653a3a66696e616c697a653a2050726f706f73616c206381527f616e6e6f7420626520657865637574656420756e74696c20656e64206f66207660208201527f65746f20706572696f6400000000000000000000000000000000000000000000604082015260600192915050565b6000611c29603e83612241565b7f476f7665726e616e63653a3a766f74655965733a2050726f706f73616c20697381527f206e6f206c6f6e67657220616363657074696e672079657320766f7465730000602082015260400192915050565b6000611c88605083612241565b7f476f7665726e616e63653a3a66696e616c697a653a2050726f706f73616c206381527f616e6e6f74206265207465726d696e6174656420756e74696c20656e64206f6660208201527f2079657320766f746520706572696f6400000000000000000000000000000000604082015260600192915050565b6000611d0d603383612241565b7f476f7665726e616e63653a3a66696e616c697a653a2050726f706f73616c206981527f7320616c72656164792066696e616c697a656400000000000000000000000000602082015260400192915050565b6000611d6c601f83612241565b7f536166654d6174683a3a6164643a20496e7465676572206f766572666c6f7700815260200192915050565b6000611da5602d83612241565b7f476f7665726e616e63653a3a66696e616c697a653a205472616e73666572207481527f6f20766f6964206661696c656400000000000000000000000000000000000000602082015260400192915050565b6000611e04603a83612241565b7f476f7665726e616e63653a3a766f74654e6f3a2050726f706f73616c2069732081527f6e6f206c6f6e67657220696e20766f74696e6720706572696f64000000000000602082015260400192915050565b6000611e63603583612241565b7f476f7665726e616e63653a3a70726f706f73655769746846656552656369706981527f656e743a20496e76616c69642070726f706f73616c0000000000000000000000602082015260400192915050565b8051600090610120840190611eca8582611753565b506020830151611edd6020860182611679565b5060408301518482036040860152611ef5828261168b565b9150506060830151611f0a6060860182611679565b506080830151611f1d6080860182611679565b5060a0830151611f3060a0860182611f73565b5060c0830151611f4360c0860182611f73565b5060e0830151611f5660e0860182611f73565b50610100830151611f6b610100860182611f73565b509392505050565b6116738161076f565b600061132e82846116c3565b60608101611f96828661166a565b611fa36020830185611679565b61153f6040830184611f73565b60408101611fbe828561166a565b61132e6020830184611f73565b60408101611fbe8285611679565b60408101611fbe8285611682565b60208082528101610dfb818461168b565b60208101610dfe828461174a565b6101208101612015828c611753565b612022602083018b611679565b8181036040830152612034818a61168b565b90506120436060830189611679565b6120506080830188611679565b61205d60a0830187611f73565b61206a60c0830186611f73565b61207760e0830185611f73565b612085610100830184611f73565b9a9950505050505050505050565b60208082528101610dfe8161175c565b60208082528101610dfe816117e1565b60208082528101610dfe81611840565b60208082528101610dfe8161189f565b60208082528101610dfe816118d8565b60208082528101610dfe8161195d565b60208082528101610dfe816119bc565b60208082528101610dfe81611a1b565b60208082528101610dfe81611a7a565b60208082528101610dfe81611ad9565b60208082528101610dfe81611b38565b60208082528101610dfe81611b97565b60208082528101610dfe81611c1c565b60208082528101610dfe81611c7b565b60208082528101610dfe81611d00565b60208082528101610dfe81611d5f565b60208082528101610dfe81611d98565b60208082528101610dfe81611df7565b60208082528101610dfe81611e56565b60208082528101610dfb8184611eb5565b60208101610dfe8284611f73565b60405181810167ffffffffffffffff8111828210171561220157600080fd5b604052919050565b600067ffffffffffffffff82111561222057600080fd5b506020601f91909101601f19160190565b60009081526020902090565b5190565b90815260200190565b919050565b6000610dfe8261226b565b151590565b60006003821061148b57fe5b600160a060020a031690565b6000610dfe825b6000610dfe8261224f565b6000610dfe8261225f565b82818337506000910152565b60005b838110156122bb5781810151838201526020016122a3565b838111156122ca576000848401525b50505050565b601f01601f19169056fea265627a7a723058204873242d6a1dcf020215125ae31dc694c8730fbfbb0ed2f7c18925a24b310a356c6578706572696d656e74616cf500376080604052348015600f57600080fd5b50603580601d6000396000f3fe6080604052600080fdfea165627a7a72305820f30cea1ec0958caf037f46dfcf2704f2dbe8e8e811029fef754160bf2658b3fe0029';
    public static BYTECODE: string = GovernanceContract.ORIGINAL_BYTECODE;
// tslint:enable:max-line-length
    public proposals = {
        async callAsync(
            index_0: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<[number, string, string, string, string, BigNumber, BigNumber, BigNumber, BigNumber]
        > {
            const self = this as any as GovernanceContract;
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
        },};    public yesVotes = {
        async callAsync(
            index_0: BigNumber,
            index_1: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as GovernanceContract;
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
        },};    public OPEN_VOTE_PERIOD = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as GovernanceContract;
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
        },};    public TOTAL_VOTE_PERIOD = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as GovernanceContract;
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
        },};    public void = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
        },};    public proposalFee = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as GovernanceContract;
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
        },};    public noVotes = {
        async callAsync(
            index_0: BigNumber,
            index_1: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as GovernanceContract;
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
        },};    public VETO_PERIOD = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
        },};    public deposit = {
        async sendTransactionAsync(
            amount: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
        },};    public withdraw = {
        async sendTransactionAsync(
            amount: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
        },};    public propose = {
        async sendTransactionAsync(
            target: string,
            data: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
        },};    public proposeWithFeeRecipient = {
        async sendTransactionAsync(
            feeRecipient: string,
            target: string,
            data: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
        },};    public voteYes = {
        async sendTransactionAsync(
            proposalId: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
        },};    public voteNo = {
        async sendTransactionAsync(
            proposalId: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
        },};    public removeVote = {
        async sendTransactionAsync(
            proposalId: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
        },};    public finalize = {
        async sendTransactionAsync(
            proposalId: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
        },};    public setProposalFee = {
        async sendTransactionAsync(
            fee: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
            const self = this as any as GovernanceContract;
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
        },};    public time = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as GovernanceContract;
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
        },};    public getProposal = {
        async callAsync(
            proposalId: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<{result: number;target: string;data: string;proposer: string;feeRecipient: string;fee: BigNumber;startTime: BigNumber;yesCount: BigNumber;noCount: BigNumber}
        > {
            const self = this as any as GovernanceContract;
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
        },};    public getProposalsCount = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as GovernanceContract;
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
        },};    public static linkLibrary(
        libraryName: string,
        address: string,
    ): void {
        const bytecode = GovernanceContract.BYTECODE;
        const cleanedAddress = address.replace('0x', '');
        // truncate to 37 characters
        const truncatedName = libraryName.slice(0, 36);
        const libLabel = '__' + truncatedName + Array(37 - truncatedName.length).join('_') + '__';
        GovernanceContract.BYTECODE = bytecode.replace(new RegExp(libLabel, 'g'), cleanedAddress);
    }
    public static async deployAsync(
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _token: string,
            _initialProposalFee: BigNumber,
    ): Promise<GovernanceContract> {
        const abi = JSON.parse(GovernanceContract.ABI);
        const bytecode = GovernanceContract.BYTECODE;
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_token,
_initialProposalFee
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_token,
_initialProposalFee
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_token,
_initialProposalFee
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
        logUtils.log(`Governance successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new GovernanceContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_token,
_initialProposalFee
];
        return contractInstance;
    }
    public static new(address: string, provider: SupportedProvider, txDefaults?: Partial<TxData>) {
        const abi = JSON.parse(GovernanceContract.ABI);
        const contractInstance = new GovernanceContract(abi, address, provider, txDefaults);
        return contractInstance;
    }
    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('Governance', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method