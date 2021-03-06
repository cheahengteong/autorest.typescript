/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestLongRunningOperationTestServiceContext } from "./autoRestLongRunningOperationTestServiceContext";


class AutoRestLongRunningOperationTestService extends AutoRestLongRunningOperationTestServiceContext {
  // Operation groups
  lROs: operations.LROs;
  lRORetrys: operations.LRORetrys;
  lROSADs: operations.LROSADs;
  lROsCustomHeader: operations.LROsCustomHeader;

  /**
   * Initializes a new instance of the AutoRestLongRunningOperationTestService class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, options?: Models.AutoRestLongRunningOperationTestServiceOptions) {
    super(credentials, options);
    this.lROs = new operations.LROs(this);
    this.lRORetrys = new operations.LRORetrys(this);
    this.lROSADs = new operations.LROSADs(this);
    this.lROsCustomHeader = new operations.LROsCustomHeader(this);
  }
}

// Operation Specifications

export {
  AutoRestLongRunningOperationTestService,
  AutoRestLongRunningOperationTestServiceContext,
  Models as AutoRestLongRunningOperationTestServiceModels,
  Mappers as AutoRestLongRunningOperationTestServiceMappers
};
export * from "./operations";
