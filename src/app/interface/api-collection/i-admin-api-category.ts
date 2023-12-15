import {IAdminApiCollection} from "./i-admin-api-collection";

export interface IAdminApiCategory {
  id: number,
  isActive: boolean,
  category_name: string,
  image_url: string,
  api_collections: IAdminApiCollection[]
}
