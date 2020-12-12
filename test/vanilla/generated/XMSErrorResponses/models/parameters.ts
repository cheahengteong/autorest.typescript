/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const petId: coreHttp.OperationURLParameter = {
  parameterPath: "petId",
  mapper: {
    required: true,
    serializedName: "petId",
    type: {
      name: "String"
    }
  }
};
export const whatAction: coreHttp.OperationURLParameter = {
  parameterPath: "whatAction",
  mapper: {
    required: true,
    serializedName: "whatAction",
    type: {
      name: "String"
    }
  }
};