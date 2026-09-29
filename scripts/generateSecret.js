const { randomBytes } = require("node:crypto");
const { ethers } = require("hardhat");

async function main() {
  const preimage = `0x${randomBytes(32).toString("hex")}`;
  const hashlock = ethers.keccak256(ethers.solidityPacked(["bytes32"], [preimage]));
  console.log("Store SWAP_PREIMAGE privately. Both locks use the SWAP_HASHLOCK.");
  console.log(`SWAP_PREIMAGE=${preimage}`);
  console.log(`SWAP_HASHLOCK=${hashlock}`);
}

main().catch((error) => { console.error(error.message || error); process.exitCode = 1; });
