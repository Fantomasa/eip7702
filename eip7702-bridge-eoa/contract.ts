export const bridgeEOAContractAddress = "0x8344e757B8014cE237F93c4DF53c00eF4B7D9e1d";
export const bridgeContractAddress = "0xbBCB75FD3ceE0c4A96E6646dD5E0f8075E0c8525";

export const bridgeContractAbi = [
  { type: "constructor", inputs: [{ name: "_ankrAddress", type: "address", internalType: "address" }], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "DEFAULT_ADMIN_ROLE",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "ankrAddress",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "claim",
    inputs: [
      { name: "_message", type: "bytes", internalType: "bytes" },
      { name: "_signatures", type: "bytes[]", internalType: "bytes[]" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "deposit",
    inputs: [
      { name: "_amount", type: "uint256", internalType: "uint256" },
      { name: "_recipient", type: "address", internalType: "address" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "depositEIP7702",
    inputs: [
      { name: "_amount", type: "uint256", internalType: "uint256" },
      { name: "_recipient", type: "address", internalType: "address" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getRoleAdmin",
    inputs: [{ name: "role", type: "bytes32", internalType: "bytes32" }],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "grantRole",
    inputs: [
      { name: "role", type: "bytes32", internalType: "bytes32" },
      { name: "account", type: "address", internalType: "address" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "hasRole",
    inputs: [
      { name: "role", type: "bytes32", internalType: "bytes32" },
      { name: "account", type: "address", internalType: "address" }
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      { name: "_initialOwner", type: "address", internalType: "address" },
      { name: "_validatorThreshold", type: "uint256", internalType: "uint256" },
      { name: "_validators", type: "address[]", internalType: "address[]" },
      { name: "_sourceChainId", type: "uint256", internalType: "uint256" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "isValidator",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  { type: "function", name: "pause", inputs: [], outputs: [], stateMutability: "nonpayable" },
  { type: "function", name: "paused", inputs: [], outputs: [{ name: "", type: "bool", internalType: "bool" }], stateMutability: "view" },
  {
    type: "function",
    name: "processedNonces",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "renounceRole",
    inputs: [
      { name: "role", type: "bytes32", internalType: "bytes32" },
      { name: "callerConfirmation", type: "address", internalType: "address" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "revokeRole",
    inputs: [
      { name: "role", type: "bytes32", internalType: "bytes32" },
      { name: "account", type: "address", internalType: "address" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setSourceChainId",
    inputs: [{ name: "_sourceChainId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setValidator",
    inputs: [
      { name: "_validator", type: "address", internalType: "address" },
      { name: "_isValidator", type: "bool", internalType: "bool" }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setValidatorThreshold",
    inputs: [{ name: "_validatorThreshold", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "sourceChainId",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view"
  },
  { type: "function", name: "unpause", inputs: [], outputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "validatorThreshold",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [{ name: "version", type: "uint64", indexed: false, internalType: "uint64" }],
    anonymous: false
  },
  {
    type: "event",
    name: "Paused",
    inputs: [{ name: "account", type: "address", indexed: false, internalType: "address" }],
    anonymous: false
  },
  {
    type: "event",
    name: "RoleAdminChanged",
    inputs: [
      { name: "role", type: "bytes32", indexed: true, internalType: "bytes32" },
      { name: "previousAdminRole", type: "bytes32", indexed: true, internalType: "bytes32" },
      { name: "newAdminRole", type: "bytes32", indexed: true, internalType: "bytes32" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RoleGranted",
    inputs: [
      { name: "role", type: "bytes32", indexed: true, internalType: "bytes32" },
      { name: "account", type: "address", indexed: true, internalType: "address" },
      { name: "sender", type: "address", indexed: true, internalType: "address" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RoleRevoked",
    inputs: [
      { name: "role", type: "bytes32", indexed: true, internalType: "bytes32" },
      { name: "account", type: "address", indexed: true, internalType: "address" },
      { name: "sender", type: "address", indexed: true, internalType: "address" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "SourceChainIdChanged",
    inputs: [{ name: "sourceChainId", type: "uint256", indexed: true, internalType: "uint256" }],
    anonymous: false
  },
  {
    type: "event",
    name: "TokensClaimed",
    inputs: [
      { name: "recipient", type: "address", indexed: true, internalType: "address" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
      { name: "nonce", type: "uint256", indexed: true, internalType: "uint256" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "TokensDeposited",
    inputs: [
      { name: "from", type: "address", indexed: true, internalType: "address" },
      { name: "recipient", type: "address", indexed: true, internalType: "address" },
      { name: "chainId", type: "uint256", indexed: false, internalType: "uint256" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
      { name: "nonce", type: "uint256", indexed: false, internalType: "uint256" }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [{ name: "account", type: "address", indexed: false, internalType: "address" }],
    anonymous: false
  },
  {
    type: "event",
    name: "ValidatorThresholdUpdated",
    inputs: [{ name: "validatorThreshold", type: "uint256", indexed: false, internalType: "uint256" }],
    anonymous: false
  },
  {
    type: "event",
    name: "ValidatorUpdated",
    inputs: [
      { name: "validator", type: "address", indexed: true, internalType: "address" },
      { name: "isValidator", type: "bool", indexed: false, internalType: "bool" }
    ],
    anonymous: false
  },
  { type: "error", name: "AccessControlBadConfirmation", inputs: [] },
  {
    type: "error",
    name: "AccessControlUnauthorizedAccount",
    inputs: [
      { name: "account", type: "address", internalType: "address" },
      { name: "neededRole", type: "bytes32", internalType: "bytes32" }
    ]
  },
  { type: "error", name: "ECDSAInvalidSignature", inputs: [] },
  { type: "error", name: "ECDSAInvalidSignatureLength", inputs: [{ name: "length", type: "uint256", internalType: "uint256" }] },
  { type: "error", name: "ECDSAInvalidSignatureS", inputs: [{ name: "s", type: "bytes32", internalType: "bytes32" }] },
  { type: "error", name: "EnforcedPause", inputs: [] },
  { type: "error", name: "ExpectedPause", inputs: [] },
  { type: "error", name: "InvalidChainId", inputs: [{ name: "chainId", type: "uint256", internalType: "uint256" }] },
  { type: "error", name: "InvalidInitialization", inputs: [] },
  { type: "error", name: "InvalidRecipient", inputs: [{ name: "recipient", type: "address", internalType: "address" }] },
  {
    type: "error",
    name: "InvalidSignatures",
    inputs: [
      { name: "validSignatures", type: "uint256", internalType: "uint256" },
      { name: "threshold", type: "uint256", internalType: "uint256" }
    ]
  },
  { type: "error", name: "InvalidSourceChainId", inputs: [{ name: "sourceChainId", type: "uint256", internalType: "uint256" }] },
  { type: "error", name: "MessageAlreadyApproved", inputs: [{ name: "messageHash", type: "bytes32", internalType: "bytes32" }] },
  { type: "error", name: "NonceAlreadyProcessed", inputs: [{ name: "nonce", type: "uint256", internalType: "uint256" }] },
  { type: "error", name: "NotInitializing", inputs: [] },
  { type: "error", name: "NotValidator", inputs: [{ name: "validator", type: "address", internalType: "address" }] },
  { type: "error", name: "SafeERC20FailedOperation", inputs: [{ name: "token", type: "address", internalType: "address" }] },
  { type: "error", name: "ZeroAddress", inputs: [] },
  { type: "error", name: "ZeroAmount", inputs: [] }
];
