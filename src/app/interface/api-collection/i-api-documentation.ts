import {IApiPayloadParameter} from "./i-api-payload-parameter";

export interface IApiDocumentation {
  category: string,
  apis: docs[]
}

export interface docs {
  method: string,
  name: string,
  description: string,
  requestPayload: IApiPayloadParameter[],
  responseParameter: IApiPayloadParameter[],

}
