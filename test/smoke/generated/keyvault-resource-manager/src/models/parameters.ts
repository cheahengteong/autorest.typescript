/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";

export const contentType: coreHttp.OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.VaultCreateOrUpdateParameters
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

export const resourceGroupName: coreHttp.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vaultName: coreHttp.OperationURLParameter = {
  parameterPath: "vaultName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]{3,24}$")
    },
    serializedName: "vaultName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: coreHttp.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2019-09-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: coreHttp.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters1: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.VaultPatchParameters
};

export const resourceGroupName1: coreHttp.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vaultName1: coreHttp.OperationURLParameter = {
  parameterPath: "vaultName",
  mapper: {
    serializedName: "vaultName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vaultName2: coreHttp.OperationURLParameter = {
  parameterPath: "vaultName",
  mapper: {
    serializedName: "vaultName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters2: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.VaultAccessPolicyParameters
};

export const operationKind: coreHttp.OperationURLParameter = {
  parameterPath: "operationKind",
  mapper: {
    serializedName: "operationKind",
    required: true,
    type: {
      name: "Enum",
      allowedValues: ["add", "replace", "remove"]
    }
  }
};

export const top: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const location: coreHttp.OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vaultName3: coreHttp.OperationURLParameter = {
  parameterPath: "vaultName",
  mapper: {
    serializedName: "vaultName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const location1: coreHttp.OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filter: coreHttp.OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    defaultValue: "resourceType eq 'Microsoft.KeyVault/vaults'",
    isConstant: true,
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const vaultName4: coreHttp.OperationParameter = {
  parameterPath: "vaultName",
  mapper: Mappers.VaultCheckNameAvailabilityParameters
};

export const nextLink: coreHttp.OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const nextLink1: coreHttp.OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const nextLink2: coreHttp.OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const nextLink3: coreHttp.OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceGroupName2: coreHttp.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vaultName5: coreHttp.OperationURLParameter = {
  parameterPath: "vaultName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]{3,24}$")
    },
    serializedName: "vaultName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnectionName: coreHttp.OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const properties: coreHttp.OperationParameter = {
  parameterPath: "properties",
  mapper: Mappers.PrivateEndpointConnection
};
