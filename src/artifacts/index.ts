import { ContractAbi } from 'ethereum-types';

interface Artifact {
  contract_name: string;
  bytecode: string;
  abi: ContractAbi;
  networks: {
    [networkId: number]: {
      address: string;
    };
  };
}

import * as ERC20 from './ERC20.json';
import * as Faucet from './Faucet.json';
import * as Governance from './Governance.json';
import * as Humanity from './Humanity.json';
import * as HumanityApplicant from './HumanityApplicant.json';
import * as HumanityGovernance from './HumanityGovernance.json';
import * as HumanityRegistry from './HumanityRegistry.json';
import * as IERC20 from './IERC20.json';
import * as IGovernance from './IGovernance.json';
import * as IHumanity from './IHumanity.json';
import * as IRegistry from './IRegistry.json';
import * as IUniswapExchange from './IUniswapExchange.json';
import * as MockERC20 from './MockERC20.json';
import * as MockHumanityGovernance from './MockHumanityGovernance.json';
import * as MockHumanityRegistry from './MockHumanityRegistry.json';
import * as MockTarget from './MockTarget.json';
import * as MockUniswap from './MockUniswap.json';
import * as PayableHumanityApplicant from './PayableHumanityApplicant.json';
import * as SafeMath from './SafeMath.json';
import * as TwitterHumanityApplicant from './TwitterHumanityApplicant.json';
import * as UniversalBasicIncome from './UniversalBasicIncome.json';
import * as Void from './Void.json';

export const artifacts = {
  ERC20: (ERC20 as any) as Artifact,
  Faucet: (Faucet as any) as Artifact,
  Governance: (Governance as any) as Artifact,
  Humanity: (Humanity as any) as Artifact,
  HumanityApplicant: (HumanityApplicant as any) as Artifact,
  HumanityGovernance: (HumanityGovernance as any) as Artifact,
  HumanityRegistry: (HumanityRegistry as any) as Artifact,
  IERC20: (IERC20 as any) as Artifact,
  IGovernance: (IGovernance as any) as Artifact,
  IHumanity: (IHumanity as any) as Artifact,
  IRegistry: (IRegistry as any) as Artifact,
  IUniswapExchange: (IUniswapExchange as any) as Artifact,
  MockERC20: (MockERC20 as any) as Artifact,
  MockHumanityGovernance: (MockHumanityGovernance as any) as Artifact,
  MockHumanityRegistry: (MockHumanityRegistry as any) as Artifact,
  MockTarget: (MockTarget as any) as Artifact,
  MockUniswap: (MockUniswap as any) as Artifact,
  PayableHumanityApplicant: (PayableHumanityApplicant as any) as Artifact,
  SafeMath: (SafeMath as any) as Artifact,
  TwitterHumanityApplicant: (TwitterHumanityApplicant as any) as Artifact,
  UniversalBasicIncome: (UniversalBasicIncome as any) as Artifact,
  Void: (Void as any) as Artifact,
};
