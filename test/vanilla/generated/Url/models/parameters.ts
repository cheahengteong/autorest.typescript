/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const arrayPath: coreHttp.OperationURLParameter = {
  parameterPath: "arrayPath",
  mapper: {
    required: true,
    serializedName: "arrayPath",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  }
};
export const arrayQuery0: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "arrayQuery"
  ],
  mapper: {
    serializedName: "arrayQuery",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Csv
};
export const arrayQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "arrayQuery"
  ],
  mapper: {
    serializedName: "arrayQuery",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Ssv
};
export const arrayQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "arrayQuery"
  ],
  mapper: {
    serializedName: "arrayQuery",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Tsv
};
export const arrayQuery3: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "arrayQuery"
  ],
  mapper: {
    serializedName: "arrayQuery",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: coreHttp.QueryCollectionFormat.Pipes
};
export const base64UrlPath: coreHttp.OperationURLParameter = {
  parameterPath: "base64UrlPath",
  mapper: {
    required: true,
    serializedName: "base64UrlPath",
    type: {
      name: "Base64Url"
    }
  }
};
export const boolPath0: coreHttp.OperationURLParameter = {
  parameterPath: "boolPath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "boolPath",
    defaultValue: true,
    type: {
      name: "Boolean"
    }
  }
};
export const boolPath1: coreHttp.OperationURLParameter = {
  parameterPath: "boolPath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "boolPath",
    defaultValue: false,
    type: {
      name: "Boolean"
    }
  }
};
export const boolQuery0: coreHttp.OperationQueryParameter = {
  parameterPath: "boolQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "boolQuery",
    defaultValue: true,
    type: {
      name: "Boolean"
    }
  }
};
export const boolQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "boolQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "boolQuery",
    defaultValue: false,
    type: {
      name: "Boolean"
    }
  }
};
export const boolQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "boolQuery"
  ],
  mapper: {
    serializedName: "boolQuery",
    type: {
      name: "Boolean"
    }
  }
};
export const bytePath0: coreHttp.OperationURLParameter = {
  parameterPath: "bytePath",
  mapper: {
    required: true,
    serializedName: "bytePath",
    type: {
      name: "ByteArray"
    }
  }
};
export const bytePath1: coreHttp.OperationURLParameter = {
  parameterPath: "bytePath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "bytePath",
    defaultValue: new Uint8Array(0),
    type: {
      name: "ByteArray"
    }
  }
};
export const byteQuery0: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "byteQuery"
  ],
  mapper: {
    serializedName: "byteQuery",
    type: {
      name: "ByteArray"
    }
  }
};
export const byteQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "byteQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "byteQuery",
    defaultValue: new Uint8Array(0),
    type: {
      name: "ByteArray"
    }
  }
};
export const datePath0: coreHttp.OperationURLParameter = {
  parameterPath: "datePath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "datePath",
    defaultValue: new Date('2012-01-01'),
    type: {
      name: "Date"
    }
  }
};
export const datePath1: coreHttp.OperationURLParameter = {
  parameterPath: "datePath",
  mapper: {
    required: true,
    serializedName: "datePath",
    type: {
      name: "Date"
    }
  }
};
export const dateQuery0: coreHttp.OperationQueryParameter = {
  parameterPath: "dateQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "dateQuery",
    defaultValue: new Date('2012-01-01'),
    type: {
      name: "Date"
    }
  }
};
export const dateQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "dateQuery"
  ],
  mapper: {
    serializedName: "dateQuery",
    type: {
      name: "Date"
    }
  }
};
export const dateTimePath0: coreHttp.OperationURLParameter = {
  parameterPath: "dateTimePath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "dateTimePath",
    defaultValue: new Date('2012-01-01T01:01:01Z'),
    type: {
      name: "DateTime"
    }
  }
};
export const dateTimePath1: coreHttp.OperationURLParameter = {
  parameterPath: "dateTimePath",
  mapper: {
    required: true,
    serializedName: "dateTimePath",
    type: {
      name: "DateTime"
    }
  }
};
export const dateTimeQuery0: coreHttp.OperationQueryParameter = {
  parameterPath: "dateTimeQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "dateTimeQuery",
    defaultValue: new Date('2012-01-01T01:01:01Z'),
    type: {
      name: "DateTime"
    }
  }
};
export const dateTimeQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "dateTimeQuery"
  ],
  mapper: {
    serializedName: "dateTimeQuery",
    type: {
      name: "DateTime"
    }
  }
};
export const doublePath0: coreHttp.OperationURLParameter = {
  parameterPath: "doublePath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "doublePath",
    defaultValue: 9999999.999,
    type: {
      name: "Number"
    }
  }
};
export const doublePath1: coreHttp.OperationURLParameter = {
  parameterPath: "doublePath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "doublePath",
    defaultValue: -9999999.999,
    type: {
      name: "Number"
    }
  }
};
export const doubleQuery0: coreHttp.OperationQueryParameter = {
  parameterPath: "doubleQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "doubleQuery",
    defaultValue: 9999999.999,
    type: {
      name: "Number"
    }
  }
};
export const doubleQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "doubleQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "doubleQuery",
    defaultValue: -9999999.999,
    type: {
      name: "Number"
    }
  }
};
export const doubleQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "doubleQuery"
  ],
  mapper: {
    serializedName: "doubleQuery",
    type: {
      name: "Number"
    }
  }
};
export const enumPath: coreHttp.OperationURLParameter = {
  parameterPath: "enumPath",
  mapper: {
    required: true,
    serializedName: "enumPath",
    type: {
      name: "Enum",
      allowedValues: [
        "red color",
        "green color",
        "blue color"
      ]
    }
  }
};
export const enumQuery: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "enumQuery"
  ],
  mapper: {
    serializedName: "enumQuery",
    type: {
      name: "Enum",
      allowedValues: [
        "red color",
        "green color",
        "blue color"
      ]
    }
  }
};
export const floatPath0: coreHttp.OperationURLParameter = {
  parameterPath: "floatPath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "floatPath",
    defaultValue: 103400000000000000000,
    type: {
      name: "Number"
    }
  }
};
export const floatPath1: coreHttp.OperationURLParameter = {
  parameterPath: "floatPath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "floatPath",
    defaultValue: -1.034e-20,
    type: {
      name: "Number"
    }
  }
};
export const floatQuery0: coreHttp.OperationQueryParameter = {
  parameterPath: "floatQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "floatQuery",
    defaultValue: 103400000000000000000,
    type: {
      name: "Number"
    }
  }
};
export const floatQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "floatQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "floatQuery",
    defaultValue: -1.034e-20,
    type: {
      name: "Number"
    }
  }
};
export const floatQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "floatQuery"
  ],
  mapper: {
    serializedName: "floatQuery",
    type: {
      name: "Number"
    }
  }
};
export const globalStringPath: coreHttp.OperationURLParameter = {
  parameterPath: "globalStringPath",
  mapper: {
    required: true,
    serializedName: "globalStringPath",
    type: {
      name: "String"
    }
  }
};
export const globalStringQuery: coreHttp.OperationQueryParameter = {
  parameterPath: "globalStringQuery",
  mapper: {
    serializedName: "globalStringQuery",
    type: {
      name: "String"
    }
  }
};
export const intPath0: coreHttp.OperationURLParameter = {
  parameterPath: "intPath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "intPath",
    defaultValue: 1000000,
    type: {
      name: "Number"
    }
  }
};
export const intPath1: coreHttp.OperationURLParameter = {
  parameterPath: "intPath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "intPath",
    defaultValue: -1000000,
    type: {
      name: "Number"
    }
  }
};
export const intQuery0: coreHttp.OperationQueryParameter = {
  parameterPath: "intQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "intQuery",
    defaultValue: 1000000,
    type: {
      name: "Number"
    }
  }
};
export const intQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "intQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "intQuery",
    defaultValue: -1000000,
    type: {
      name: "Number"
    }
  }
};
export const intQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "intQuery"
  ],
  mapper: {
    serializedName: "intQuery",
    type: {
      name: "Number"
    }
  }
};
export const localStringPath: coreHttp.OperationURLParameter = {
  parameterPath: "localStringPath",
  mapper: {
    required: true,
    serializedName: "localStringPath",
    type: {
      name: "String"
    }
  }
};
export const localStringQuery: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "localStringQuery"
  ],
  mapper: {
    serializedName: "localStringQuery",
    type: {
      name: "String"
    }
  }
};
export const longPath0: coreHttp.OperationURLParameter = {
  parameterPath: "longPath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "longPath",
    defaultValue: 10000000000,
    type: {
      name: "Number"
    }
  }
};
export const longPath1: coreHttp.OperationURLParameter = {
  parameterPath: "longPath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "longPath",
    defaultValue: -10000000000,
    type: {
      name: "Number"
    }
  }
};
export const longQuery0: coreHttp.OperationQueryParameter = {
  parameterPath: "longQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "longQuery",
    defaultValue: 10000000000,
    type: {
      name: "Number"
    }
  }
};
export const longQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "longQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "longQuery",
    defaultValue: -10000000000,
    type: {
      name: "Number"
    }
  }
};
export const longQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "longQuery"
  ],
  mapper: {
    serializedName: "longQuery",
    type: {
      name: "Number"
    }
  }
};
export const pathItemStringPath: coreHttp.OperationURLParameter = {
  parameterPath: "pathItemStringPath",
  mapper: {
    required: true,
    serializedName: "pathItemStringPath",
    type: {
      name: "String"
    }
  }
};
export const pathItemStringQuery: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "pathItemStringQuery"
  ],
  mapper: {
    serializedName: "pathItemStringQuery",
    type: {
      name: "String"
    }
  }
};
export const stringPath0: coreHttp.OperationURLParameter = {
  parameterPath: "stringPath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "stringPath",
    defaultValue: '啊齄丂狛狜隣郎隣兀﨩',
    type: {
      name: "String"
    }
  }
};
export const stringPath1: coreHttp.OperationURLParameter = {
  parameterPath: "stringPath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "stringPath",
    defaultValue: 'begin!*\'();:@ &=+$,/?#[]end',
    type: {
      name: "String"
    }
  }
};
export const stringPath2: coreHttp.OperationURLParameter = {
  parameterPath: "stringPath",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "stringPath",
    defaultValue: '',
    type: {
      name: "String"
    }
  }
};
export const stringPath3: coreHttp.OperationURLParameter = {
  parameterPath: "stringPath",
  mapper: {
    required: true,
    serializedName: "stringPath",
    type: {
      name: "String"
    }
  }
};
export const stringQuery0: coreHttp.OperationQueryParameter = {
  parameterPath: "stringQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "stringQuery",
    defaultValue: '啊齄丂狛狜隣郎隣兀﨩',
    type: {
      name: "String"
    }
  }
};
export const stringQuery1: coreHttp.OperationQueryParameter = {
  parameterPath: "stringQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "stringQuery",
    defaultValue: 'begin!*\'();:@ &=+$,/?#[]end',
    type: {
      name: "String"
    }
  }
};
export const stringQuery2: coreHttp.OperationQueryParameter = {
  parameterPath: "stringQuery",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "stringQuery",
    defaultValue: '',
    type: {
      name: "String"
    }
  }
};
export const stringQuery3: coreHttp.OperationQueryParameter = {
  parameterPath: [
    "options",
    "stringQuery"
  ],
  mapper: {
    serializedName: "stringQuery",
    type: {
      name: "String"
    }
  }
};
export const unixTimeUrlPath: coreHttp.OperationURLParameter = {
  parameterPath: "unixTimeUrlPath",
  mapper: {
    required: true,
    serializedName: "unixTimeUrlPath",
    type: {
      name: "UnixTime"
    }
  }
};