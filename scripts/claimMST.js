const hre = require("hardhat");
const { htlcAddress, required, signerFor, swapId } = require("./utils");

async function main() {
  const bob = await signerFor("bob");
  const htlc = await hre.ethers.getContractAt("SimpleHTLC", htlcAddress(), bob);
  const tx = await htlc.claim(swapId("mst"), required("SWAP_PREIMAGE"));
  await tx.wait();
  console.log(`Bob claimed MST. Transaction: ${tx.hash}`);
}

main().catch((error) => { console.error(error.message || error); process.exitCode = 1; });
