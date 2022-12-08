import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import Factory from "./abis/UniswapV2Factory";
import Router from "./abis/UniswapV2Router02";
import { ContractFactory } from "ethers";

async function deployFactoryAndRouter(
  signer: SignerWithAddress,
  feeToSetter: SignerWithAddress
) {
  const _factory = new ContractFactory(Factory.abi, Factory.bytecode, signer);
  const factory = await _factory.deploy(feeToSetter.address);
  await factory.deployed();

  const _router = new ContractFactory(Router.abi, Router.bytecode, signer);
  const router = await _router.deploy(factory.address, factory.address);
  await router.deployed();

  return { factory, router };
}

export { deployFactoryAndRouter };