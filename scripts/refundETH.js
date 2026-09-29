const hre = require("hardhat");
const { htlcAddress, signerFor, swapId } = require("./utils");
async function main() {
  const bob = await signerFor("bob");
  const htlc = await hre.ethers.getContractAt("SimpleHTLC", htlcAddress(), bob);
  const tx = await htlc.refund(swapId("eth")); await tx.wait();
  console.log(`ETH refunded to Bob. Transaction: ${tx.hash}`);
}
main().catch((error) => { console.error(error.message || error); process.exitCode = 1; });
