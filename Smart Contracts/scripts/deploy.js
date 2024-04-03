const { ethers } = require("hardhat");

async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    const hello_world = await HelloWorld.deploy("Hello World!");
    console.log("Contract Deployed to address:", hello_world.address);
}

main()
    .then(() => process.exit(0))
    .catch((error => {
        console.error(error);
        process.exit(1);
    }));
