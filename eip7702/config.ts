import { createWalletClient, http } from "viem";
import { sepolia } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import dotenv from "dotenv";

dotenv.config();

const rpcUrl = process.env.SEPOLIA_RPC_URL;
if (!rpcUrl) {
  throw new Error("SEPOLIA_RPC_URL is not set");
}

export const relay = privateKeyToAccount(process.env.EOA_PK as `0x${string}`);

export const walletClient = createWalletClient({
  account: relay,
  chain: sepolia,
  transport: http(rpcUrl)
});
