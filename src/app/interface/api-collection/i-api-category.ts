import {IApiDocumentationObject} from "./i-api-documentation-object";

export interface IApiCategory {
  id: number
  category_name: string
  api_collections: ISingleApiCollection[]
}

export interface ISingleApiCollection {
  id: number
  api_collection_name: string
  description: string
  object_id: apiObject
  api_ids: ISingleApi[]
}

interface ISingleApi {
  id: number
  api_name: string
  api_description: string,
  api_method: string,
  api_endpoint: string,
  api_req_code: string,
  api_param_ids?: IApiDocumentationObject[],
  api_return: string,
  api_response_json: string
}

interface apiObject {
  id: number
  attr_ids: IApiDocumentationObject[],
  object: string
}
