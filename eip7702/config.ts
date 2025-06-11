import { createWalletClient, http } from "viem";
import { sepolia } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.EOA_PK || !process.env.SEPOLIA_RPC_URL) {
  throw new Error("Missing required environment variables. Check README.md for setup instructions.");
}

export const relay = privateKeyToAccount(process.env.EOA_PK as `0x${string}`);

export const walletClient = createWalletClient({
  account: relay,
  chain: sepolia,
  transport: http(process.env.SEPOLIA_RPC_URL)
});
