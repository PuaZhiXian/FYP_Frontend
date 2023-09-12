import {IApiDocumentationObject} from "./i-api-documentation-object";

export interface IApiCategory {
  name: string
  items: ISingleApiCollection[]
}

export interface ISingleApiCollection {
  name: string
  description: string
  object: apiObject
  apis: ISingleApi[]
}

interface ISingleApi {
  name: string
  description: string,
  method: string,
  endpoint: string,
  requestCode: string,
  parameter?: IApiDocumentationObject[],
  return: string,
  responseJson: string
}

interface apiObject {
  attributes: IApiDocumentationObject[],
  json: string
}
