/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/core-http";
import * as coreHttp from "@azure/core-http";

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * An interface representing IntWrapper.
 */
export interface IntWrapper {
  value: number;
}

/**
 * An interface representing IntOptionalWrapper.
 */
export interface IntOptionalWrapper {
  value?: number;
}

/**
 * An interface representing StringWrapper.
 */
export interface StringWrapper {
  value: string;
}

/**
 * An interface representing StringOptionalWrapper.
 */
export interface StringOptionalWrapper {
  value?: string;
}

/**
 * An interface representing ArrayWrapper.
 */
export interface ArrayWrapper {
  value: string[];
}

/**
 * An interface representing ArrayOptionalWrapper.
 */
export interface ArrayOptionalWrapper {
  value?: string[];
}

/**
 * An interface representing Product.
 */
export interface Product {
  id: number;
  name?: string;
}

/**
 * An interface representing ClassWrapper.
 */
export interface ClassWrapper {
  value: Product;
}

/**
 * An interface representing ClassOptionalWrapper.
 */
export interface ClassOptionalWrapper {
  value?: Product;
}

/**
 * An interface representing AutoRestRequiredOptionalTestServiceOptions.
 */
export interface AutoRestRequiredOptionalTestServiceOptions extends ServiceClientOptions {
  /**
   * number of items to skip
   */
  optionalGlobalQuery?: number;
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface ImplicitPutOptionalQueryOptionalParams extends coreHttp.RequestOptionsBase {
  queryParameter?: string;
}

/**
 * Optional Parameters.
 */
export interface ImplicitPutOptionalHeaderOptionalParams extends coreHttp.RequestOptionsBase {
  queryParameter?: string;
}

/**
 * Optional Parameters.
 */
export interface ImplicitPutOptionalBodyOptionalParams extends coreHttp.RequestOptionsBase {
  bodyParameter?: string;
}

/**
 * Optional Parameters.
 */
export interface ExplicitPostOptionalIntegerParameterOptionalParams extends coreHttp.RequestOptionsBase {
  bodyParameter?: number;
}

/**
 * Optional Parameters.
 */
export interface ExplicitPostOptionalIntegerPropertyOptionalParams extends coreHttp.RequestOptionsBase {
  value?: number;
}

/**
 * Optional Parameters.
 */
export interface ExplicitPostOptionalIntegerHeaderOptionalParams extends coreHttp.RequestOptionsBase {
  headerParameter?: number;
}

/**
 * Optional Parameters.
 */
export interface ExplicitPostOptionalStringParameterOptionalParams extends coreHttp.RequestOptionsBase {
  bodyParameter?: string;
}

/**
 * Optional Parameters.
 */
export interface ExplicitPostOptionalStringPropertyOptionalParams extends coreHttp.RequestOptionsBase {
  value?: string;
}

/**
 * Optional Parameters.
 */
export interface ExplicitPostOptionalStringHeaderOptionalParams extends coreHttp.RequestOptionsBase {
  bodyParameter?: string;
}

/**
 * Optional Parameters.
 */
export interface ExplicitPostOptionalClassParameterOptionalParams extends coreHttp.RequestOptionsBase {
  bodyParameter?: Product;
}

/**
 * Optional Parameters.
 */
export interface ExplicitPostOptionalClassPropertyOptionalParams extends coreHttp.RequestOptionsBase {
  value?: Product;
}

/**
 * Optional Parameters.
 */
export interface ExplicitPostOptionalArrayParameterOptionalParams extends coreHttp.RequestOptionsBase {
  bodyParameter?: string[];
}

/**
 * Optional Parameters.
 */
export interface ExplicitPostOptionalArrayPropertyOptionalParams extends coreHttp.RequestOptionsBase {
  value?: string[];
}

/**
 * Optional Parameters.
 */
export interface ExplicitPostOptionalArrayHeaderOptionalParams extends coreHttp.RequestOptionsBase {
  headerParameter?: string[];
}

/**
 * Contains response data for the getRequiredPath operation.
 */
export type ImplicitGetRequiredPathResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the getRequiredGlobalPath operation.
 */
export type ImplicitGetRequiredGlobalPathResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the getRequiredGlobalQuery operation.
 */
export type ImplicitGetRequiredGlobalQueryResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the getOptionalGlobalQuery operation.
 */
export type ImplicitGetOptionalGlobalQueryResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the postRequiredIntegerParameter operation.
 */
export type ExplicitPostRequiredIntegerParameterResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the postRequiredIntegerProperty operation.
 */
export type ExplicitPostRequiredIntegerPropertyResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the postRequiredIntegerHeader operation.
 */
export type ExplicitPostRequiredIntegerHeaderResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the postRequiredStringParameter operation.
 */
export type ExplicitPostRequiredStringParameterResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the postRequiredStringProperty operation.
 */
export type ExplicitPostRequiredStringPropertyResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the postRequiredStringHeader operation.
 */
export type ExplicitPostRequiredStringHeaderResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the postRequiredClassParameter operation.
 */
export type ExplicitPostRequiredClassParameterResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the postRequiredClassProperty operation.
 */
export type ExplicitPostRequiredClassPropertyResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the postRequiredArrayParameter operation.
 */
export type ExplicitPostRequiredArrayParameterResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the postRequiredArrayProperty operation.
 */
export type ExplicitPostRequiredArrayPropertyResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the postRequiredArrayHeader operation.
 */
export type ExplicitPostRequiredArrayHeaderResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};
