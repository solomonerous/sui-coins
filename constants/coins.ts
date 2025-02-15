import { SUI_TYPE_ARG } from '@mysten/sui.js/utils';
import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';
import { TOKEN_SYMBOL } from '@/lib';
import {
  ADASVG,
  AVAXSVG,
  BNBSVG,
  BTCSVG,
  CELOSVG,
  DOGESVG,
  ETHSVG,
  FLOKISVG,
  FTMSVG,
  MATICSVG,
  SOLSVG,
  SUISVG,
  USDCSVG,
  USDTSVG,
} from '@/svg';
import {
  CoinData,
  CoinDataWithChainInfo,
} from '@/views/pool-details/pool-form/pool-form.types';

import { Network } from '.';

export const COIN_METADATA = {
  [SUI_TYPE_ARG]: {
    name: 'Sui',
    decimals: 9,
    symbol: TOKEN_SYMBOL.SUI,
  },
};

export const TESTNET_BASE_COINS = {
  SUI: SUI_TYPE_ARG,
  BNB: '0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ibnb::IBNB',
  ETH: '0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH',
  BTC: '0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ibtc::IBTC',
  USDT: '0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdt::IUSDT',
  USDC: '0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdc::IUSDC',
};

export const MAINNET_BASE_COINS = {
  SUI: SUI_TYPE_ARG,
  FUD: '0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD',
  ETH_WORMHOLE_USDC:
    '0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN',
  NATIVE_WORMHOLE_ETH:
    '0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN',
  ETH_WORMHOLE_USDT:
    '0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN',
  NATIVE_WORMHOLE_WBNB:
    '0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN',
  NATIVE_WORMHOLE_WAVAX:
    '0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN',
  NATIVE_WORMHOLE_WFTM:
    '0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN',
  NATIVE_WORMHOLE_CELO:
    '0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN',
  NATIVE_WORMHOLE_WMATIC:
    '0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN',
  NATIVE_WORMHOLE_SOL:
    '0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN',
  BSC_WORMHOLE_ADA:
    '0x4eac6573f65e7db5aea5a23e1335993a57e088dcd4aff7934059d9a6311d8655::coin::COIN',
  BSC_WORMHOLE_BTCB:
    '0x5cc7b6ed0ce0d43d08667793f6efe7a34d678a780755dc37ea8bfa8805f63327::coin::COIN',
  BSC_WORMHOLE_USDT:
    '0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN',
  BSC_WORMHOLE_USDC:
    '0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN',
  BSC_WORMHOLE_ETH:
    '0x5029d5a94429a73b8036cd67192d9c5e09bbc2c0fee942d50075a9edba66744f::coin::COIN',
  BSC_WORMHOLE_FLOKI:
    '0xbcbbd5c23edf35fc279e21ebc129a1187dbfa5b086c63a8e7ff202865888b27b::coin::COIN',
  BSC_WORMHOLE_DOGE:
    '0xd399b358bd0e835000f6caa8c771a7d186499b6e62d413c2fd6cfed709689f28::coin::COIN',
  ETH_CELER_WETH:
    '0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_weth_coin::CELER_WETH_COIN',
  ETH_CELER_WBTC:
    '0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_wbtc_coin::CELER_WBTC_COIN',
  ETH_CELER_USDC:
    '0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_usdc_coin::CELER_USDC_COIN',
  ETH_CELER_USDT:
    '0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_usdt_coin::CELER_USDT_COIN',
};

export const COIN_TYPE = {
  [Network.TESTNET]: {
    ...TESTNET_BASE_COINS,
    SUID: '0x02871464ed71b80969b32f2b23c981b085866485ba5368c0f59588fcc0dbce47::suid::SUID',
  },
  [Network.MAINNET]: {
    ...MAINNET_BASE_COINS,
  },
};

export const COIN_TYPE_TO_STABLE = {
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].BNB]: false,
    [COIN_TYPE[Network.TESTNET].ETH]: false,
    [COIN_TYPE[Network.TESTNET].BTC]: false,
    [COIN_TYPE[Network.TESTNET].USDT]: true,
    [COIN_TYPE[Network.TESTNET].USDC]: true,
    [COIN_TYPE[Network.TESTNET].SUI]: false,
    [COIN_TYPE[Network.TESTNET].SUID]: true,
  },
  [Network.MAINNET]: {
    [COIN_TYPE[Network.MAINNET].SUI]: false,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_ETH]: false,
    [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDC]: true,
    [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDT]: true,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WBNB]: false,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WAVAX]: false,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WFTM]: false,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_CELO]: false,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WMATIC]: false,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ADA]: false,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_BTCB]: false,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDC]: true,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDT]: true,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ETH]: false,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_FLOKI]: false,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_DOGE]: false,
  },
};

export const COIN_TYPE_TO_SYMBOL = {
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].BNB]: TOKEN_SYMBOL.BNB,
    [COIN_TYPE[Network.TESTNET].ETH]: TOKEN_SYMBOL.ETH,
    [COIN_TYPE[Network.TESTNET].BTC]: TOKEN_SYMBOL.BTC,
    [COIN_TYPE[Network.TESTNET].USDT]: TOKEN_SYMBOL.USDT,
    [COIN_TYPE[Network.TESTNET].USDC]: TOKEN_SYMBOL.USDC,
    [COIN_TYPE[Network.TESTNET].SUI]: TOKEN_SYMBOL.SUI,
    [COIN_TYPE[Network.TESTNET].SUID]: TOKEN_SYMBOL.SUID,
  },
  [Network.MAINNET]: {
    [COIN_TYPE[Network.MAINNET].SUI]: TOKEN_SYMBOL.SUI,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_ETH]: TOKEN_SYMBOL.ETH,
    [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDC]: TOKEN_SYMBOL.USDC,
    [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDT]: TOKEN_SYMBOL.USDT,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WBNB]:
      TOKEN_SYMBOL.WORMHOLE_WBNB,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WAVAX]:
      TOKEN_SYMBOL.WORMHOLE_WAVAX,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WFTM]:
      TOKEN_SYMBOL.WORMHOLE_WFTM,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_CELO]:
      TOKEN_SYMBOL.WORMHOLE_CELO,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_SOL]: TOKEN_SYMBOL.WORMHOLE_SOL,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WMATIC]:
      TOKEN_SYMBOL.WORMHOLE_WMATIC,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ADA]: TOKEN_SYMBOL.WORMHOLE_ADA,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_BTCB]: TOKEN_SYMBOL.WORMHOLE_BTCB,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDC]: TOKEN_SYMBOL.WORMHOLE_USDC,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDT]: TOKEN_SYMBOL.WORMHOLE_USDT,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ETH]: TOKEN_SYMBOL.WORMHOLE_ETH,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_FLOKI]:
      TOKEN_SYMBOL.WORMHOLE_FLOKI,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_DOGE]: TOKEN_SYMBOL.WORMHOLE_DOGE,
    [COIN_TYPE[Network.MAINNET].ETH_CELER_WBTC]: TOKEN_SYMBOL.ETH_CELER_WBTC,
    [COIN_TYPE[Network.MAINNET].ETH_CELER_USDC]: TOKEN_SYMBOL.ETH_CELER_USDC,
    [COIN_TYPE[Network.MAINNET].ETH_CELER_WETH]: TOKEN_SYMBOL.ETH_CELER_WETH,
  },
};

export const COIN_DECIMALS = {
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].BTC]: 9,
    [COIN_TYPE[Network.TESTNET].ETH]: 9,
    [COIN_TYPE[Network.TESTNET].BNB]: 9,
    [COIN_TYPE[Network.TESTNET].USDT]: 9,
    [COIN_TYPE[Network.TESTNET].USDC]: 9,
    [COIN_TYPE[Network.TESTNET].SUI]: 9,
    [COIN_TYPE[Network.TESTNET].SUID]: 9,
  },
  [Network.MAINNET]: {
    [COIN_TYPE[Network.MAINNET].SUI]: 9,
    [COIN_TYPE[Network.MAINNET].FUD]: 5,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_ETH]: 8,
    [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDC]: 6,
    [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDT]: 6,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WBNB]: 8,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_SOL]: 8,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WAVAX]: 8,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WFTM]: 8,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_CELO]: 8,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WMATIC]: 8,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ADA]: 8,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_BTCB]: 8,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDC]: 8,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDT]: 8,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ETH]: 8,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_FLOKI]: 8,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_DOGE]: 8,
    [COIN_TYPE[Network.MAINNET].ETH_CELER_WETH]: 9,
    [COIN_TYPE[Network.MAINNET].ETH_CELER_WBTC]: 8,
    [COIN_TYPE[Network.MAINNET].ETH_CELER_USDC]: 6,
    [COIN_TYPE[Network.MAINNET].ETH_CELER_USDT]: 6,
  },
};

export const COINS: Record<Network, Record<string, CoinData>> = {
  [Network.TESTNET]: {
    ETH: {
      decimals: COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].ETH],
      symbol: TOKEN_SYMBOL.ETH,
      type: COIN_TYPE[Network.TESTNET].ETH,
    },
    BTC: {
      decimals: COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].BTC],
      symbol: TOKEN_SYMBOL.BTC,
      type: COIN_TYPE[Network.TESTNET].BTC,
    },
    BNB: {
      decimals: COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].BNB],
      symbol: TOKEN_SYMBOL.BNB,
      type: COIN_TYPE[Network.TESTNET].BNB,
    },
    SUI: {
      decimals: COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].SUI],
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.TESTNET].SUI,
    },
    USDC: {
      decimals: COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].USDC],
      symbol: TOKEN_SYMBOL.USDC,
      type: COIN_TYPE[Network.TESTNET].USDC,
    },
    USDT: {
      decimals: COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].USDT],
      symbol: TOKEN_SYMBOL.USDT,
      type: COIN_TYPE[Network.TESTNET].USDT,
    },
    SUID: {
      decimals: COIN_DECIMALS[Network.TESTNET][COIN_TYPE[Network.TESTNET].SUI],
      symbol: TOKEN_SYMBOL.SUID,
      type: COIN_TYPE[Network.TESTNET].SUID,
    },
  },
  [Network.MAINNET]: {
    SUI: {
      decimals: COIN_DECIMALS[Network.MAINNET][COIN_TYPE[Network.MAINNET].SUI],
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.MAINNET].SUI,
    },
    FUD: {
      decimals: COIN_DECIMALS[Network.MAINNET][COIN_TYPE[Network.MAINNET].FUD],
      symbol: TOKEN_SYMBOL.FUD,
      type: COIN_TYPE[Network.MAINNET].FUD,
    },
    ETH_WORMHOLE_USDC: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDC
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_USDC,
      type: COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDC,
    },
    NATIVE_WORMHOLE_ETH: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_ETH
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_ETH,
      type: COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_ETH,
    },
    ETH_WORMHOLE_USDT: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDT
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_USDT,
      type: COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDT,
    },
    NATIVE_WORMHOLE_WBNB: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WBNB
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_WBNB,
      type: COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WBNB,
    },
    NATIVE_WORMHOLE_WAVAX: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WAVAX
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_WAVAX,
      type: COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WAVAX,
    },
    NATIVE_WORMHOLE_WFTM: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WFTM
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_WFTM,
      type: COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WFTM,
    },
    NATIVE_WORMHOLE_SOL: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_SOL
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_SOL,
      type: COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_SOL,
    },
    NATIVE_WORMHOLE_CELO: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_CELO
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_CELO,
      type: COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_CELO,
    },
    NATIVE_WORMHOLE_WMATIC: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WMATIC
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_WMATIC,
      type: COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WMATIC,
    },
    BSC_WORMHOLE_ADA: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ADA
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_ADA,
      type: COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ADA,
    },
    BSC_WORMHOLE_BTCB: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_BTCB
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_BTCB,
      type: COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_BTCB,
    },
    BSC_WORMHOLE_USDT: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDT
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_USDT,
      type: COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDT,
    },
    BSC_WORMHOLE_USDC: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDC
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_USDC,
      type: COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDC,
    },
    BSC_WORMHOLE_ETH: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ETH
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_ETH,
      type: COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ETH,
    },
    BSC_WORMHOLE_FLOKI: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_FLOKI
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_FLOKI,
      type: COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_FLOKI,
    },
    BSC_WORMHOLE_DOGE: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_DOGE
        ],
      symbol: TOKEN_SYMBOL.WORMHOLE_DOGE,
      type: COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_DOGE,
    },
    ETH_CELER_WBTC: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].ETH_CELER_WBTC
        ],
      symbol: TOKEN_SYMBOL.ETH_CELER_WBTC,
      type: COIN_TYPE[Network.MAINNET].ETH_CELER_WBTC,
    },
    ETH_CELER_WETH: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].ETH_CELER_WETH
        ],
      symbol: TOKEN_SYMBOL.ETH_CELER_WETH,
      type: COIN_TYPE[Network.MAINNET].ETH_CELER_WETH,
    },
    ETH_CELER_USDC: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].ETH_CELER_USDC
        ],
      symbol: TOKEN_SYMBOL.ETH_CELER_USDC,
      type: COIN_TYPE[Network.MAINNET].ETH_CELER_USDC,
    },
    ETH_CELER_USDT: {
      decimals:
        COIN_DECIMALS[Network.MAINNET][
          COIN_TYPE[Network.MAINNET].ETH_CELER_USDT
        ],
      symbol: TOKEN_SYMBOL.ETH_CELER_USDT,
      type: COIN_TYPE[Network.MAINNET].ETH_CELER_USDT,
    },
  },
};

export const COIN_TYPE_TO_COIN = {
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].ETH]: COINS[Network.TESTNET].ETH,
    [COIN_TYPE[Network.TESTNET].BTC]: COINS[Network.TESTNET].BTC,
    [COIN_TYPE[Network.TESTNET].BNB]: COINS[Network.TESTNET].BNB,
    [COIN_TYPE[Network.TESTNET].SUI]: COINS[Network.TESTNET].SUI,
    [COIN_TYPE[Network.TESTNET].USDC]: COINS[Network.TESTNET].USDC,
    [COIN_TYPE[Network.TESTNET].USDT]: COINS[Network.TESTNET].USDT,
    [COIN_TYPE[Network.TESTNET].SUID]: COINS[Network.TESTNET].SUID,
  },
  [Network.MAINNET]: {
    [COIN_TYPE[Network.MAINNET].SUI]: COINS[Network.MAINNET].SUI,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_ETH]:
      COINS[Network.MAINNET].NATIVE_WORMHOLE_ETH,
    [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDC]:
      COINS[Network.MAINNET].ETH_WORMHOLE_USDC,
    [COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDT]:
      COINS[Network.MAINNET].ETH_WORMHOLE_USDT,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_SOL]:
      COINS[Network.MAINNET].NATIVE_WORMHOLE_SOL,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WBNB]:
      COINS[Network.MAINNET].NATIVE_WORMHOLE_WBNB,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WAVAX]:
      COINS[Network.MAINNET].NATIVE_WORMHOLE_WAVAX,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WFTM]:
      COINS[Network.MAINNET].NATIVE_WORMHOLE_WFTM,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_CELO]:
      COINS[Network.MAINNET].NATIVE_WORMHOLE_CELO,
    [COIN_TYPE[Network.MAINNET].NATIVE_WORMHOLE_WMATIC]:
      COINS[Network.MAINNET].NATIVE_WORMHOLE_WMATIC,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ADA]:
      COINS[Network.MAINNET].BSC_WORMHOLE_ADA,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_BTCB]:
      COINS[Network.MAINNET].BSC_WORMHOLE_BTCB,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDC]:
      COINS[Network.MAINNET].BSC_WORMHOLE_USDC,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDT]:
      COINS[Network.MAINNET].BSC_WORMHOLE_USDT,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_ETH]:
      COINS[Network.MAINNET].BSC_WORMHOLE_ETH,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_FLOKI]:
      COINS[Network.MAINNET].BSC_WORMHOLE_FLOKI,
    [COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_DOGE]:
      COINS[Network.MAINNET].BSC_WORMHOLE_DOGE,
    [COIN_TYPE[Network.MAINNET].ETH_CELER_WETH]:
      COINS[Network.MAINNET].ETH_CELER_WETH,
    [COIN_TYPE[Network.MAINNET].ETH_CELER_WBTC]:
      COINS[Network.MAINNET].ETH_CELER_WBTC,
    [COIN_TYPE[Network.MAINNET].ETH_CELER_USDC]:
      COINS[Network.MAINNET].ETH_CELER_USDC,
  },
};

export const MAINNET_COINS_INFO: Record<
  string,
  { origin: string | null; bridge: 'celer' | 'wormhole' | null }
> = {
  [MAINNET_BASE_COINS.SUI]: {
    origin: null,
    bridge: null,
  },
  [MAINNET_BASE_COINS.NATIVE_WORMHOLE_ETH]: {
    origin: null,
    bridge: 'wormhole',
  },
  [MAINNET_BASE_COINS.BSC_WORMHOLE_ETH]: {
    origin: 'BSC',
    bridge: 'wormhole',
  },
  [MAINNET_BASE_COINS.ETH_CELER_WETH]: {
    origin: null,
    bridge: 'celer',
  },
  [MAINNET_BASE_COINS.ETH_CELER_USDC]: {
    origin: 'ETH',
    bridge: 'celer',
  },
  [MAINNET_BASE_COINS.BSC_WORMHOLE_USDC]: {
    origin: 'BSC',
    bridge: 'wormhole',
  },
  [MAINNET_BASE_COINS.ETH_WORMHOLE_USDC]: {
    origin: 'ETH',
    bridge: 'wormhole',
  },
  [MAINNET_BASE_COINS.ETH_CELER_USDT]: {
    origin: 'ETH',
    bridge: 'celer',
  },
  [MAINNET_BASE_COINS.BSC_WORMHOLE_USDT]: {
    origin: 'BSC',
    bridge: 'wormhole',
  },
  [MAINNET_BASE_COINS.ETH_WORMHOLE_USDT]: {
    origin: 'ETH',
    bridge: 'wormhole',
  },
  [MAINNET_BASE_COINS.BSC_WORMHOLE_BTCB]: {
    origin: 'BSC',
    bridge: 'wormhole',
  },
  [MAINNET_BASE_COINS.ETH_CELER_WBTC]: {
    origin: 'ETH',
    bridge: 'celer',
  },
  [MAINNET_BASE_COINS.BSC_WORMHOLE_ADA]: {
    origin: 'BSC',
    bridge: 'wormhole',
  },
  [MAINNET_BASE_COINS.NATIVE_WORMHOLE_WBNB]: {
    origin: null,
    bridge: 'wormhole',
  },
  [MAINNET_BASE_COINS.NATIVE_WORMHOLE_WAVAX]: {
    origin: null,
    bridge: 'wormhole',
  },
  [MAINNET_BASE_COINS.NATIVE_WORMHOLE_CELO]: {
    origin: null,
    bridge: 'wormhole',
  },
  [MAINNET_BASE_COINS.NATIVE_WORMHOLE_WMATIC]: {
    origin: null,
    bridge: 'wormhole',
  },
  [MAINNET_BASE_COINS.NATIVE_WORMHOLE_WFTM]: {
    origin: null,
    bridge: 'wormhole',
  },
  [MAINNET_BASE_COINS.BSC_WORMHOLE_DOGE]: {
    origin: 'BSC',
    bridge: 'wormhole',
  },
  [MAINNET_BASE_COINS.BSC_WORMHOLE_FLOKI]: {
    origin: 'BSC',
    bridge: 'wormhole',
  },
};

export const TOKEN_ICONS: Record<
  Network,
  Record<string, string | FC<SVGProps>>
> = {
  [Network.TESTNET]: {
    SUI: SUISVG,
    ETH: ETHSVG,
    USDC: USDCSVG,
    USDT: USDTSVG,
    BTC: BTCSVG,
    ADA: ADASVG,
    BNB: BNBSVG,
    AVAX: AVAXSVG,
    CELO: CELOSVG,
    MATIC: MATICSVG,
    FTM: FTMSVG,
    DOGE: DOGESVG,
    FLOKI: FLOKISVG,
  },
  [Network.MAINNET]: {
    [MAINNET_BASE_COINS.SUI]: SUISVG,
    [MAINNET_BASE_COINS.NATIVE_WORMHOLE_ETH]: ETHSVG,
    [MAINNET_BASE_COINS.BSC_WORMHOLE_ETH]: ETHSVG,
    [MAINNET_BASE_COINS.ETH_CELER_WETH]: ETHSVG,
    [MAINNET_BASE_COINS.ETH_CELER_USDC]: USDCSVG,
    [MAINNET_BASE_COINS.BSC_WORMHOLE_USDC]: USDCSVG,
    [MAINNET_BASE_COINS.ETH_WORMHOLE_USDC]: USDCSVG,
    [MAINNET_BASE_COINS.ETH_CELER_USDT]: USDTSVG,
    [MAINNET_BASE_COINS.BSC_WORMHOLE_USDT]: USDTSVG,
    [MAINNET_BASE_COINS.ETH_WORMHOLE_USDT]: USDTSVG,
    [MAINNET_BASE_COINS.BSC_WORMHOLE_BTCB]: BTCSVG,
    [MAINNET_BASE_COINS.ETH_CELER_WBTC]: BTCSVG,
    [MAINNET_BASE_COINS.BSC_WORMHOLE_ADA]: ADASVG,
    [MAINNET_BASE_COINS.NATIVE_WORMHOLE_WBNB]: BNBSVG,
    [MAINNET_BASE_COINS.NATIVE_WORMHOLE_SOL]: SOLSVG,
    [MAINNET_BASE_COINS.NATIVE_WORMHOLE_WAVAX]: AVAXSVG,
    [MAINNET_BASE_COINS.NATIVE_WORMHOLE_CELO]: CELOSVG,
    [MAINNET_BASE_COINS.NATIVE_WORMHOLE_WMATIC]: MATICSVG,
    [MAINNET_BASE_COINS.NATIVE_WORMHOLE_WFTM]: FTMSVG,
    [MAINNET_BASE_COINS.BSC_WORMHOLE_DOGE]: DOGESVG,
    [MAINNET_BASE_COINS.BSC_WORMHOLE_FLOKI]: FLOKISVG,
    [MAINNET_BASE_COINS.FUD]:
      'data:image/jpeg;base64,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',
  },
};

export const WORMHOLE_TOKENS_TYPE: Record<Network, ReadonlyArray<string>> = {
  [Network.TESTNET]: [],
  [Network.MAINNET]: [
    MAINNET_BASE_COINS.BSC_WORMHOLE_ADA,
    MAINNET_BASE_COINS.BSC_WORMHOLE_BTCB,
    MAINNET_BASE_COINS.BSC_WORMHOLE_DOGE,
    MAINNET_BASE_COINS.BSC_WORMHOLE_ETH,
    MAINNET_BASE_COINS.BSC_WORMHOLE_FLOKI,
    MAINNET_BASE_COINS.BSC_WORMHOLE_USDC,
    MAINNET_BASE_COINS.BSC_WORMHOLE_USDT,
    MAINNET_BASE_COINS.ETH_WORMHOLE_USDC,
    MAINNET_BASE_COINS.ETH_WORMHOLE_USDT,
    // MAINNET_BASE_COINS.NATIVE_WORMHOLE_CELO,
    MAINNET_BASE_COINS.NATIVE_WORMHOLE_ETH,
    MAINNET_BASE_COINS.NATIVE_WORMHOLE_SOL,
    MAINNET_BASE_COINS.NATIVE_WORMHOLE_WAVAX,
    MAINNET_BASE_COINS.NATIVE_WORMHOLE_WBNB,
    // MAINNET_BASE_COINS.NATIVE_WORMHOLE_WFTM,
    // MAINNET_BASE_COINS.NATIVE_WORMHOLE_WMATIC,
  ],
};

export const CELER_TOKENS_TYPE: Record<Network, ReadonlyArray<string>> = {
  [Network.TESTNET]: [],
  [Network.MAINNET]: [
    MAINNET_BASE_COINS.ETH_CELER_USDC,
    MAINNET_BASE_COINS.ETH_CELER_USDT,
    MAINNET_BASE_COINS.ETH_CELER_WBTC,
    MAINNET_BASE_COINS.ETH_CELER_WETH,
  ],
};

export const WORMHOLE_TOKENS: Record<Network, Array<CoinDataWithChainInfo>> = {
  [Network.TESTNET]: [],
  [Network.MAINNET]: [
    { ...COINS[Network.MAINNET].ETH_WORMHOLE_USDC, chain: 'ETH' },
    { ...COINS[Network.MAINNET].ETH_WORMHOLE_USDT, chain: 'ETH' },
    { ...COINS[Network.MAINNET].NATIVE_WORMHOLE_ETH, chain: 'ETH' },
    { ...COINS[Network.MAINNET].NATIVE_WORMHOLE_WBNB, chain: 'BSC' },
    { ...COINS[Network.MAINNET].BSC_WORMHOLE_USDC, chain: 'BSC' },
    { ...COINS[Network.MAINNET].BSC_WORMHOLE_USDT, chain: 'BSC' },
    { ...COINS[Network.MAINNET].BSC_WORMHOLE_ETH, chain: 'BSC' },
    { ...COINS[Network.MAINNET].BSC_WORMHOLE_ADA, chain: 'BSC' },
    { ...COINS[Network.MAINNET].BSC_WORMHOLE_BTCB, chain: 'BSC' },
    { ...COINS[Network.MAINNET].BSC_WORMHOLE_DOGE, chain: 'BSC' },
    { ...COINS[Network.MAINNET].BSC_WORMHOLE_FLOKI, chain: 'BSC' },
    { ...COINS[Network.MAINNET].NATIVE_WORMHOLE_SOL, chain: 'SOL' },
    // COINS[Network.MAINNET].NATIVE_WORMHOLE_CELO,
    { ...COINS[Network.MAINNET].NATIVE_WORMHOLE_WAVAX, chain: 'AVA' },
    // COINS[Network.MAINNET].NATIVE_WORMHOLE_WFTM,
    // COINS[Network.MAINNET].NATIVE_WORMHOLE_WMATIC,
  ],
};

export const CELER_TOKENS: Record<Network, Array<CoinDataWithChainInfo>> = {
  [Network.TESTNET]: [],
  [Network.MAINNET]: [
    { ...COINS[Network.MAINNET].ETH_CELER_USDC, chain: 'ETH' },
    { ...COINS[Network.MAINNET].ETH_CELER_USDT, chain: 'ETH' },
    { ...COINS[Network.MAINNET].ETH_CELER_WBTC, chain: 'ETH' },
    { ...COINS[Network.MAINNET].ETH_CELER_WETH, chain: 'ETH' },
  ],
};

export const STRICT_TOKENS_TYPE: Record<Network, ReadonlyArray<string>> = {
  [Network.TESTNET]: [
    TESTNET_BASE_COINS.SUI,
    TESTNET_BASE_COINS.BNB,
    TESTNET_BASE_COINS.BTC,
    TESTNET_BASE_COINS.ETH,
    TESTNET_BASE_COINS.USDC,
    TESTNET_BASE_COINS.USDT,
    ...WORMHOLE_TOKENS_TYPE[Network.TESTNET],
    ...CELER_TOKENS_TYPE[Network.TESTNET],
  ],
  [Network.MAINNET]: [
    MAINNET_BASE_COINS.SUI,
    ...WORMHOLE_TOKENS_TYPE[Network.MAINNET],
    ...CELER_TOKENS_TYPE[Network.MAINNET],
  ],
};

export const STRICT_TOKENS: Record<Network, Array<CoinData>> = {
  [Network.TESTNET]: [
    COINS[Network.TESTNET].SUI,
    COINS[Network.TESTNET].BNB,
    COINS[Network.TESTNET].BTC,
    COINS[Network.TESTNET].ETH,
    COINS[Network.TESTNET].USDC,
    COINS[Network.TESTNET].USDT,
    ...WORMHOLE_TOKENS[Network.TESTNET],
    ...CELER_TOKENS[Network.TESTNET],
  ],
  [Network.MAINNET]: [
    COINS[Network.MAINNET].SUI,
    COINS[Network.MAINNET].FUD,
    ...WORMHOLE_TOKENS[Network.MAINNET],
    ...CELER_TOKENS[Network.MAINNET],
  ],
};
