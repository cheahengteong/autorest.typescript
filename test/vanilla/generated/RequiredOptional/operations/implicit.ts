/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/implicitMappers";
import * as Parameters from "../models/parameters";
import { AutoRestRequiredOptionalTestServiceContext } from "../autoRestRequiredOptionalTestServiceContext";

/** Class representing a Implicit. */
export class Implicit {
  private readonly client: AutoRestRequiredOptionalTestServiceContext;

  /**
   * Create a Implicit.
   * @param {AutoRestRequiredOptionalTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestRequiredOptionalTestServiceContext) {
    this.client = client;
  }

  /**
   * Test implicitly required path parameter
   * @param pathParameter
   * @param [options] The optional parameters
   * @returns Promise<Models.ImplicitGetRequiredPathResponse>
   */
  getRequiredPath(pathParameter: string, options?: msRest.RequestOptionsBase): Promise<Models.ImplicitGetRequiredPathResponse>;
  /**
   * @param pathParameter
   * @param callback The callback
   */
  getRequiredPath(pathParameter: string, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param pathParameter
   * @param options The optional parameters
   * @param callback The callback
   */
  getRequiredPath(pathParameter: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  getRequiredPath(pathParameter: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.ImplicitGetRequiredPathResponse> {
    return this.client.sendOperationRequest(
      {
        pathParameter,
        options
      },
      getRequiredPathOperationSpec,
      callback) as Promise<Models.ImplicitGetRequiredPathResponse>;
  }

  /**
   * Test implicitly optional query parameter
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putOptionalQuery(options?: Models.ImplicitPutOptionalQueryOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  putOptionalQuery(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  putOptionalQuery(options: Models.ImplicitPutOptionalQueryOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putOptionalQuery(options?: Models.ImplicitPutOptionalQueryOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putOptionalQueryOperationSpec,
      callback);
  }

  /**
   * Test implicitly optional header parameter
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putOptionalHeader(options?: Models.ImplicitPutOptionalHeaderOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  putOptionalHeader(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  putOptionalHeader(options: Models.ImplicitPutOptionalHeaderOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putOptionalHeader(options?: Models.ImplicitPutOptionalHeaderOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putOptionalHeaderOperationSpec,
      callback);
  }

  /**
   * Test implicitly optional body parameter
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putOptionalBody(options?: Models.ImplicitPutOptionalBodyOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  putOptionalBody(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  putOptionalBody(options: Models.ImplicitPutOptionalBodyOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putOptionalBody(options?: Models.ImplicitPutOptionalBodyOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putOptionalBodyOperationSpec,
      callback);
  }

  /**
   * Test implicitly required path parameter
   * @param [options] The optional parameters
   * @returns Promise<Models.ImplicitGetRequiredGlobalPathResponse>
   */
  getRequiredGlobalPath(options?: msRest.RequestOptionsBase): Promise<Models.ImplicitGetRequiredGlobalPathResponse>;
  /**
   * @param callback The callback
   */
  getRequiredGlobalPath(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getRequiredGlobalPath(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  getRequiredGlobalPath(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.ImplicitGetRequiredGlobalPathResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getRequiredGlobalPathOperationSpec,
      callback) as Promise<Models.ImplicitGetRequiredGlobalPathResponse>;
  }

  /**
   * Test implicitly required query parameter
   * @param [options] The optional parameters
   * @returns Promise<Models.ImplicitGetRequiredGlobalQueryResponse>
   */
  getRequiredGlobalQuery(options?: msRest.RequestOptionsBase): Promise<Models.ImplicitGetRequiredGlobalQueryResponse>;
  /**
   * @param callback The callback
   */
  getRequiredGlobalQuery(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getRequiredGlobalQuery(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  getRequiredGlobalQuery(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.ImplicitGetRequiredGlobalQueryResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getRequiredGlobalQueryOperationSpec,
      callback) as Promise<Models.ImplicitGetRequiredGlobalQueryResponse>;
  }

  /**
   * Test implicitly optional query parameter
   * @param [options] The optional parameters
   * @returns Promise<Models.ImplicitGetOptionalGlobalQueryResponse>
   */
  getOptionalGlobalQuery(options?: msRest.RequestOptionsBase): Promise<Models.ImplicitGetOptionalGlobalQueryResponse>;
  /**
   * @param callback The callback
   */
  getOptionalGlobalQuery(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getOptionalGlobalQuery(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  getOptionalGlobalQuery(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.ImplicitGetOptionalGlobalQueryResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getOptionalGlobalQueryOperationSpec,
      callback) as Promise<Models.ImplicitGetOptionalGlobalQueryResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getRequiredPathOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "reqopt/implicit/required/path/{pathParameter}",
  urlParameters: [
    Parameters.pathParameter
  ],
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putOptionalQueryOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "reqopt/implicit/optional/query",
  queryParameters: [
    Parameters.queryParameter
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putOptionalHeaderOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "reqopt/implicit/optional/header",
  headerParameters: [
    Parameters.queryParameter
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putOptionalBodyOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "reqopt/implicit/optional/body",
  requestBody: {
    parameterPath: [
      "options",
      "bodyParameter"
    ],
    mapper: {
      serializedName: "bodyParameter",
      type: {
        name: "String"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getRequiredGlobalPathOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "reqopt/global/required/path/{required-global-path}",
  urlParameters: [
    Parameters.requiredGlobalPath
  ],
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getRequiredGlobalQueryOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "reqopt/global/required/query",
  queryParameters: [
    Parameters.requiredGlobalQuery
  ],
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOptionalGlobalQueryOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "reqopt/global/optional/query",
  queryParameters: [
    Parameters.optionalGlobalQuery
  ],
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
