import * as prettier from "prettier";
import { CodeModel } from "@azure-tools/codemodel";
import { Project, IndentationText } from "ts-morph";
import { Host } from "@azure-tools/autorest-extension-base";
import { ClientContextFileGenerator } from "./generators/clientContextFileGenerator";
import { generateClient } from "./generators/clientFileGenerator";
import { generateModels } from "./generators/modelsGenerator";
import { generateMappers } from "./generators/mappersGenerator";
import { StaticFilesGenerator } from "./generators/staticFilesGenerator";
import { generatePackageJson } from "./generators/static/packageFileGenerator";

const prettierTypeScriptOptions: prettier.Options = {
  parser: "typescript",
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 100,
  semi: true,
  singleQuote: false,
  tabWidth: 2
};

const prettierJSONOptions: prettier.Options = {
  parser: "json",
  tabWidth: 2,
  semi: false,
  singleQuote: false
};

export class TypescriptGenerator {
  private codeModel: CodeModel;
  private host: Host;
  private project: Project;

  constructor(codeModel: CodeModel, host: Host) {
    this.codeModel = codeModel;
    this.host = host;
    this.project = new Project({
      useVirtualFileSystem: true,
      manipulationSettings: {
        indentationText: IndentationText.TwoSpaces
      }
    });
  }

  public async process(): Promise<void> {
    const packageName = await this.host.GetValue("package-name");
    const packageVersion = await this.host.GetValue("package-version");

    let generators = [
      (_codeModel: CodeModel, project: Project) =>
        generatePackageJson(packageName, packageVersion, project),
      generateClient,
      new ClientContextFileGenerator(this.codeModel, this.host),
      new StaticFilesGenerator(this.codeModel, this.host),
      generateModels,
      generateMappers
    ];

    for (const generator of generators) {
      if (typeof generator === "function") {
        await generator(this.codeModel, this.project);
      } else {
        await generator.process();
      }
    }

    // TODO: Get this from the "license-header" setting:
    //   await this.host.GetValue("license-header");
    const licenseHeader = `
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
`;

    // Save the source files to the virtual filesystem
    this.project.saveSync();
    const fs = this.project.getFileSystem();

    // Loop over the files
    for (const file of this.project.getSourceFiles()) {
      const filePath = file.getFilePath();
      const isJson = /\.json$/gi.test(filePath);
      let fileContents = fs.readFileSync(filePath);

      // Add the license header, if any
      if (licenseHeader && !isJson) {
        fileContents = `${licenseHeader.trimLeft()}\n${fileContents}`;
      }

      // Write the file to the AutoRest host
      this.host.WriteFile(
        filePath.substr(1), // Get rid of the leading slash '/'
        prettier.format(
          fileContents,
          isJson ? prettierJSONOptions : prettierTypeScriptOptions
        )
      );
    }
  }
}
