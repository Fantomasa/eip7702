import { parseEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { walletClient } from "./config";
import { contractAddress, abi } from "./contract";
import dotenv from "dotenv";

dotenv.config();

const eoa = privateKeyToAccount(process.env.EOA_PK as `0x${string}`);

const authorization = await walletClient.signAuthorization({
  account: eoa,
  contractAddress
});

const hash = await walletClient.writeContract({
  abi,
  address: contractAddress,
  authorizationList: [authorization],
  functionName: "approveAndTransfer",
  args: [
    {
      recipient: eoa.address,
      amount: parseEther("1")
    }
  ]
});

console.log(hash);
