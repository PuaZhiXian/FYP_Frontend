import {IApiPayloadParameter} from "./i-api-payload-parameter";

export interface IApiDocumentation {
  category: string,
  apis: docs[]
}

interface docs {
  method: string,
  name: string,
  requestPayload: IApiPayloadParameter[],
  responseParameter: IApiPayloadParameter[],

}
