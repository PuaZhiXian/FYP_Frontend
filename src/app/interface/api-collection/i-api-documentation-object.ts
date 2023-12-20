export interface IApiDocumentationObject {
  attr_name: string,
  attr_type: string,
  attr_description: string,
  child_attr_ids?: IApiDocumentationObject[];
}
