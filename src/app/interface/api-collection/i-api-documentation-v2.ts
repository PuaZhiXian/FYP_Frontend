export interface IApiDocumentationV2 {
  name: string
  items: IApiItems[]
}

interface IApiItems {
  name: string
  anchor: Anchor[]
}

interface Anchor {
  name: string
}
