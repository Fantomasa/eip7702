import { createWalletClient, http } from "viem";
import { sepolia } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

const EOA_PK = process.env.EOA_PK;
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;

if (!EOA_PK || !SEPOLIA_RPC_URL) {
  throw new Error("Missing required environment variables. Check README.md for setup instructions.");
}

export const relay = privateKeyToAccount(EOA_PK as `0x${string}`);

export const walletClient = createWalletClient({
  account: relay,
  chain: sepolia,
  transport: http(SEPOLIA_RPC_URL)
});
