import { walletClient } from "./config";
import { ankrTokenContractAbi, ankrContractAddress, ethBridgeContractAbi, ethBridgeContractAddress } from "./contract";

const ankrTokenAuthorization = await walletClient.signAuthorization({
  account: walletClient.account,
  contractAddress: ankrContractAddress
});

const ethBridgeAuthorization = await walletClient.signAuthorization({
  account: walletClient.account,
  contractAddress: ethBridgeContractAddress
});

const hashApprove = await walletClient.writeContract({
  abi: ankrTokenContractAbi,
  address: ankrContractAddress,
  authorizationList: [ankrTokenAuthorization],
  functionName: "approve",
  args: [ethBridgeContractAddress, "100"]
});

const hashDeposit = await walletClient.writeContract({
  abi: ethBridgeContractAbi,
  address: ethBridgeContractAddress,
  authorizationList: [ethBridgeAuthorization],
  functionName: "deposit",
  args: [10, walletClient.account.address]
});

console.log({ hashApprove, hashDeposit });
