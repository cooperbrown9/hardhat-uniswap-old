// tslint:disable-next-line no-implicit-dependencies
import { assert } from "chai";
import path from "path";

import { ExampleHardhatRuntimeEnvironmentField } from "./ExampleHardhatRuntimeEnvironmentField";

import { useEnvironment } from "./helpers";

describe("Integration tests examples", function () {
  describe("Hardhat Runtime Environment extension", function () {
    useEnvironment("hardhat-project");

    it("Should add the example field", function () {
      assert.instanceOf(
        this.hre.example,
        ExampleHardhatRuntimeEnvironmentField
      );
    });

    it("The example field should say hello", function () {
      assert.equal(this.hre.example.sayHello(), "hello");
    });
  });

  describe("HardhatConfig extension", function () {
    useEnvironment("hardhat-project");

    it("Should add the newPath to the config", function () {
      assert.equal(
        this.hre.config.paths.newPath,
        path.join(process.cwd(), "asd")
      );
    });
  });
});

describe("Unit tests examples", function () {
  describe("ExampleHardhatRuntimeEnvironmentField", function () {
    describe("sayHello", function () {
      useEnvironment("hardhat-project");
      it("Should say hello", async function () {
        const field = new ExampleHardhatRuntimeEnvironmentField();
        assert.equal(field.sayHello(), "hello");
        // console.log(this.hre.tasks)
        
      });
    });
  });
});
