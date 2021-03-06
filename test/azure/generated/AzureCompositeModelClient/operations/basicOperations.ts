/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/basicOperationsMappers";
import * as Parameters from "../models/parameters";
import { AzureCompositeModelContext } from "../azureCompositeModelContext";

/** Class representing a BasicOperations. */
export class BasicOperations {
  private readonly client: AzureCompositeModelContext;

  /**
   * Create a BasicOperations.
   * @param {AzureCompositeModelContext} client Reference to the service client.
   */
  constructor(client: AzureCompositeModelContext) {
    this.client = client;
  }

  /**
   * Get complex type {id: 2, name: 'abc', color: 'YELLOW'}
   * @param [options] The optional parameters
   * @returns Promise<Models.BasicGetValidResponse>
   */
  getValid(options?: coreHttp.RequestOptionsBase): Promise<Models.BasicGetValidResponse>;
  /**
   * @param callback The callback
   */
  getValid(callback: coreHttp.ServiceCallback<Models.Basic>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getValid(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.Basic>): void;
  getValid(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.Basic>, callback?: coreHttp.ServiceCallback<Models.Basic>): Promise<Models.BasicGetValidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getValidOperationSpec,
      callback) as Promise<Models.BasicGetValidResponse>;
  }

  /**
   * Please put {id: 2, name: 'abc', color: 'Magenta'}
   * @param complexBody Please put {id: 2, name: 'abc', color: 'Magenta'}
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putValid(complexBody: Models.Basic, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param complexBody Please put {id: 2, name: 'abc', color: 'Magenta'}
   * @param callback The callback
   */
  putValid(complexBody: Models.Basic, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param complexBody Please put {id: 2, name: 'abc', color: 'Magenta'}
   * @param options The optional parameters
   * @param callback The callback
   */
  putValid(complexBody: Models.Basic, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putValid(complexBody: Models.Basic, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putValidOperationSpec,
      callback);
  }

  /**
   * Get a basic complex type that is invalid for the local strong type
   * @param [options] The optional parameters
   * @returns Promise<Models.BasicGetInvalidResponse>
   */
  getInvalid(options?: coreHttp.RequestOptionsBase): Promise<Models.BasicGetInvalidResponse>;
  /**
   * @param callback The callback
   */
  getInvalid(callback: coreHttp.ServiceCallback<Models.Basic>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getInvalid(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.Basic>): void;
  getInvalid(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.Basic>, callback?: coreHttp.ServiceCallback<Models.Basic>): Promise<Models.BasicGetInvalidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getInvalidOperationSpec,
      callback) as Promise<Models.BasicGetInvalidResponse>;
  }

  /**
   * Get a basic complex type that is empty
   * @param [options] The optional parameters
   * @returns Promise<Models.BasicGetEmptyResponse>
   */
  getEmpty(options?: coreHttp.RequestOptionsBase): Promise<Models.BasicGetEmptyResponse>;
  /**
   * @param callback The callback
   */
  getEmpty(callback: coreHttp.ServiceCallback<Models.Basic>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getEmpty(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.Basic>): void;
  getEmpty(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.Basic>, callback?: coreHttp.ServiceCallback<Models.Basic>): Promise<Models.BasicGetEmptyResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getEmptyOperationSpec,
      callback) as Promise<Models.BasicGetEmptyResponse>;
  }

  /**
   * Get a basic complex type whose properties are null
   * @param [options] The optional parameters
   * @returns Promise<Models.BasicGetNullResponse>
   */
  getNull(options?: coreHttp.RequestOptionsBase): Promise<Models.BasicGetNullResponse>;
  /**
   * @param callback The callback
   */
  getNull(callback: coreHttp.ServiceCallback<Models.Basic>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getNull(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.Basic>): void;
  getNull(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.Basic>, callback?: coreHttp.ServiceCallback<Models.Basic>): Promise<Models.BasicGetNullResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNullOperationSpec,
      callback) as Promise<Models.BasicGetNullResponse>;
  }

  /**
   * Get a basic complex type while the server doesn't provide a response payload
   * @param [options] The optional parameters
   * @returns Promise<Models.BasicGetNotProvidedResponse>
   */
  getNotProvided(options?: coreHttp.RequestOptionsBase): Promise<Models.BasicGetNotProvidedResponse>;
  /**
   * @param callback The callback
   */
  getNotProvided(callback: coreHttp.ServiceCallback<Models.Basic>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getNotProvided(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.Basic>): void;
  getNotProvided(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.Basic>, callback?: coreHttp.ServiceCallback<Models.Basic>): Promise<Models.BasicGetNotProvidedResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNotProvidedOperationSpec,
      callback) as Promise<Models.BasicGetNotProvidedResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/basic/valid",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Basic
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/basic/valid",
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.Basic,
      required: true
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

const getInvalidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/basic/invalid",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Basic
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getEmptyOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/basic/empty",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Basic
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getNullOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/basic/null",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Basic
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getNotProvidedOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/basic/notprovided",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Basic
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
