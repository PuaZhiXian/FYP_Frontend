export interface ISelectingApiCollection {
  id: number,
  category_name: string,
  api_collections: collectionsDetail[];
}

interface collectionsDetail {
  id: number,
  api_collection_name: string,
  description: string
}
