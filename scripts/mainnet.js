const hre = require("hardhat");

async function main() {
  const record = await hre.ethers.getContractFactory("record");
  const contract = await record.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});