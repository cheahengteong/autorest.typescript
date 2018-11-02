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
import * as Mappers from "../models/parameterGroupingMappers";
import * as Parameters from "../models/parameters";
import { AutoRestParameterGroupingTestServiceContext } from "../autoRestParameterGroupingTestServiceContext";

/** Class representing a ParameterGrouping. */
export class ParameterGrouping {
  private readonly client: AutoRestParameterGroupingTestServiceContext;

  /**
   * Create a ParameterGrouping.
   * @param {AutoRestParameterGroupingTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestParameterGroupingTestServiceContext) {
    this.client = client;
  }

  /**
   * Post a bunch of required parameters grouped
   * @param parameterGroupingPostRequiredParameters Additional parameters for the operation
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postRequired(parameterGroupingPostRequiredParameters: Models.ParameterGroupingPostRequiredParameters, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param parameterGroupingPostRequiredParameters Additional parameters for the operation
   * @param callback The callback
   */
  postRequired(parameterGroupingPostRequiredParameters: Models.ParameterGroupingPostRequiredParameters, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param parameterGroupingPostRequiredParameters Additional parameters for the operation
   * @param options The optional parameters
   * @param callback The callback
   */
  postRequired(parameterGroupingPostRequiredParameters: Models.ParameterGroupingPostRequiredParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postRequired(parameterGroupingPostRequiredParameters: Models.ParameterGroupingPostRequiredParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        parameterGroupingPostRequiredParameters,
        options
      },
      postRequiredOperationSpec,
      callback);
  }

  /**
   * Post a bunch of optional parameters grouped
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postOptional(options?: Models.ParameterGroupingPostOptionalOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postOptional(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  postOptional(options: Models.ParameterGroupingPostOptionalOptionalParams, callback: msRest.ServiceCallback<void>): void;
  postOptional(options?: Models.ParameterGroupingPostOptionalOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      postOptionalOperationSpec,
      callback);
  }

  /**
   * Post parameters from multiple different parameter groups
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postMultiParamGroups(options?: Models.ParameterGroupingPostMultiParamGroupsOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postMultiParamGroups(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  postMultiParamGroups(options: Models.ParameterGroupingPostMultiParamGroupsOptionalParams, callback: msRest.ServiceCallback<void>): void;
  postMultiParamGroups(options?: Models.ParameterGroupingPostMultiParamGroupsOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      postMultiParamGroupsOperationSpec,
      callback);
  }

  /**
   * Post parameters with a shared parameter group object
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postSharedParameterGroupObject(options?: Models.ParameterGroupingPostSharedParameterGroupObjectOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postSharedParameterGroupObject(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  postSharedParameterGroupObject(options: Models.ParameterGroupingPostSharedParameterGroupObjectOptionalParams, callback: msRest.ServiceCallback<void>): void;
  postSharedParameterGroupObject(options?: Models.ParameterGroupingPostSharedParameterGroupObjectOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      postSharedParameterGroupObjectOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const postRequiredOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "parameterGrouping/postRequired/{path}",
  urlParameters: [
    Parameters.path
  ],
  queryParameters: [
    Parameters.query0
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.customHeader0
  ],
  requestBody: {
    parameterPath: [
      "parameterGroupingPostRequiredParameters",
      "body"
    ],
    mapper: {
      required: true,
      serializedName: "body",
      type: {
        name: "Number"
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

const postOptionalOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "parameterGrouping/postOptional",
  queryParameters: [
    Parameters.query1
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.customHeader1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postMultiParamGroupsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "parameterGrouping/postMultipleParameterGroups",
  queryParameters: [
    Parameters.queryOne,
    Parameters.queryTwo
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.headerOne,
    Parameters.headerTwo
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postSharedParameterGroupObjectOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "parameterGrouping/sharedParameterGroupObject",
  queryParameters: [
    Parameters.queryOne
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.headerOne
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
