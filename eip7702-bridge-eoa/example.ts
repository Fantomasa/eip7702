import { parseUnits } from "viem";
import { walletClient } from "./config";
import { bridgeContractAbi, bridgeContractAddress, bridgeEOAContractAddress } from "./contract";

// Different recipient address (using the one from .env)
const recipientAddress = process.env.EOA_TO_ADDRESS;

if (!recipientAddress) {
  throw new Error("Missing EOA_TO_ADDRESS in .env");
}

const authorization = await walletClient.signAuthorization({
  account: walletClient.account,
  contractAddress: bridgeEOAContractAddress
});

// Transfer 0.01 tokens (assuming 18 decimals)
const amount = parseUnits("0.01", 18);

const hash = await walletClient.writeContract({
  abi: bridgeContractAbi,
  address: bridgeContractAddress,
  authorizationList: [authorization],
  functionName: "depositEIP7702",
  args: [amount, recipientAddress]
});

console.log({ hash });
