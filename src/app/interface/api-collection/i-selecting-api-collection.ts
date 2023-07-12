export interface ISelectingApiCollection {
  category: string,
  collections: collectionsDetail[];
}

interface collectionsDetail {
  id: string,
  name: string,
  description: string
}
