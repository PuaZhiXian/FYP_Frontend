export interface IApiDocumentation {
  category: string,
  apis: docs[]
}

interface docs {
  method: string,
  name: string
}
