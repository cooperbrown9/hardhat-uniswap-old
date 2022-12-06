import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import Factory from "./abis/UniswapV2Factory";
import { ContractFactory } from "ethers";

async function deployFactory(
  signer: SignerWithAddress,
  feeToSetter: SignerWithAddress
) {
  const _factory = new ContractFactory(Factory.abi, Factory.bytecode, signer);
  const factory = await _factory.deploy(feeToSetter.address);
  await factory.deployed();
  console.log(factory.address)
  return { factory };
}

export { deployFactory };