export interface IApiDocumentationObject {
  name: string,
  type: string,
  description: string,
  enum?: IEnum[],
  child?: IApiDocumentationObject[];
}

interface IEnum {
  name: string,
  description: string
}
