const hre = require("hardhat");
const { htlcAddress, signerFor, swapId } = require("./utils");
async function main() {
  const alice = await signerFor("alice");
  const htlc = await hre.ethers.getContractAt("SimpleHTLC", htlcAddress(), alice);
  const tx = await htlc.refund(swapId("mst")); await tx.wait();
  console.log(`MST refunded to Alice. Transaction: ${tx.hash}`);
}
main().catch((error) => { console.error(error.message || error); process.exitCode = 1; });
