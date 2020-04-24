/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const contentType: coreHttp.OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    defaultValue: "application/octet-stream",
    serializedName: "Content-Type",
    isConstant: true,
    type: {
      name: "String"
    }
  }
};

export const data: coreHttp.OperationParameter = {
  parameterPath: "data",
  mapper: {
    serializedName: "data",
    required: true,
    type: {
      name: "Stream"
    }
  }
};

export const contentType1: coreHttp.OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    defaultValue: "text/plain",
    serializedName: "Content-Type",
    isConstant: true,
    type: {
      name: "String"
    }
  }
};

export const data1: coreHttp.OperationParameter = {
  parameterPath: "data",
  mapper: {
    serializedName: "data",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const $host: coreHttp.OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const excluded: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "excluded"],
  mapper: {
    serializedName: "excluded",
    type: {
      name: "Sequence",
      element: { type: { name: "String" }, serializedName: "Post0ItemsItem" }
    }
  }
};

export const thing: coreHttp.OperationURLParameter = {
  parameterPath: "thing",
  mapper: {
    serializedName: "thing",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const excluded1: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "excluded"],
  mapper: {
    serializedName: "excluded",
    type: {
      name: "Sequence",
      element: { type: { name: "String" }, serializedName: "Post1ItemsItem" }
    }
  }
};
