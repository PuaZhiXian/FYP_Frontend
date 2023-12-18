export interface IApiDocumentationObject {
  attr_name: string,
  attr_type: string,
  attr_description: string,
  enum_ids?: IEnum[],
  child_attr_ids?: IApiDocumentationObject[];
}

interface IEnum {
  enum_name: string,
  enum_description: string
}
