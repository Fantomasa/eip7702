# EIP-7702 Examples

This repository contains examples of using EIP-7702 for token interactions on Ethereum. It includes examples for:

- Basic EIP-7702 token transfers
- PHT token interactions
- Bridge contract interactions

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:

```bash
# Your private key for the Externally Owned Account (EOA)
# Example: 0x123...abc
EOA_PK=your_private_key_here
```

## Project Structure

```
├── eip7702/          # Basic EIP-7702 implementation
├── eip7702-PHT/      # PHT token specific implementation
└── eip7702-bridge/   # Bridge contract implementation
```

## Running Examples

Each directory contains an `example.ts` file that demonstrates the functionality:

```bash
# Run basic EIP-7702 example
npx ts-node eip7702/example.ts

# Run PHT token example
npx ts-node eip7702-PHT/example.ts

# Run bridge example
npx ts-node eip7702-bridge/example.ts
```

## Security

- Never commit your `.env` file or expose your private keys
- The `.env` file is ignored by Git for security
- Always use environment variables for sensitive data

## Network

The examples are configured to run on Sepolia testnet. Make sure you have test ETH in your wallet before running the examples.
