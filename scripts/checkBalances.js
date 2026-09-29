const hre = require("hardhat");
const { required } = require("./utils");

async function main() {
  const alice = required("ALICE_ADDRESS");
  const bob = required("BOB_ADDRESS");
  const token = await hre.ethers.getContractAt([
    "function decimals() view returns (uint8)",
    "function balanceOf(address) view returns (uint256)"
  ], required("MST_ADDRESS"));
  const decimals = await token.decimals();
  for (const [name, address] of [["Alice", alice], ["Bob", bob]]) {
    const [eth, mst] = await Promise.all([hre.ethers.provider.getBalance(address), token.balanceOf(address)]);
    console.log(`${name} (${address})`);
    console.log(`  ETH: ${hre.ethers.formatEther(eth)}`);
    console.log(`  MST: ${hre.ethers.formatUnits(mst, decimals)}`);
  }
}

main().catch((error) => { console.error(error.message || error); process.exitCode = 1; });
