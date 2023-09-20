export interface IApiDocumentationObject {
  attr_name: string,
  attr_type: string,
  attr_description: string,
  enum?: IEnum[],
  child_attr_ids?: IApiDocumentationObject[];
}

interface IEnum {
  name: string,
  description: string
}
