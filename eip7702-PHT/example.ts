import { walletClient } from "./config";
import { phtTokenContractAbi, phtContractAddress } from "./contract";

const authorization = await walletClient.signAuthorization({
  account: walletClient.account,
  contractAddress: phtContractAddress
});

const hash = await walletClient.writeContract({
  abi: phtTokenContractAbi,
  address: phtContractAddress,
  authorizationList: [authorization],
  functionName: "transfer",
  args: [walletClient.account.address, "100"]
});

console.log({ hash });
