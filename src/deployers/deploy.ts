import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { DeployFunction, DeployResult } from "hardhat-deploy/types";
import Factory from "./abis/UniswapV2Factory";
import Router from "./abis/UniswapV2Router02";
import { ContractFactory } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

async function deployFactoryAndRouter(
  hre: HardhatRuntimeEnvironment,
  signer: SignerWithAddress,
  feeToSetter: SignerWithAddress
) {
//   const { deployments, getNamedAccounts } = hre;
//   const { deploy } = deployments;
//   const config = {
//     log: true,
//     from: signer.address,
//     // gasLimit: 16000000,
//     // maxPriorityFeeGas: "100",
//     // gasPrice: hre.ethers.utils.parseUnits("100", "gwei"),
//     // args: [multisig],
//     args: [feeToSetter.address],
//   };
// deploy()
//   const factory = await deploy("UniswapV2Factory", config)
//   console.log('FACTORY', factory.address, factory.abi)
//   const router = { address: ''};
  const _factory = new ContractFactory(Factory.abi, Factory.bytecode, signer);
  const factory = await _factory.deploy(feeToSetter.address);
  const f = await factory.deployed();
  const factoryReceipt = await factory.deployTransaction.wait()
  console.log('RECEIPT', factoryReceipt)
  console.log(await factory.functions.allPairsLength())
  console.log(factory)

  const _router = new ContractFactory(Router.abi, Router.bytecode, signer);
  const router = await _router.deploy(factory.address, factory.address);
  await router.deployed();

  return { factory, router };
}

export { deployFactoryAndRouter };

