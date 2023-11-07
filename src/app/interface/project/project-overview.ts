export interface ProjectOverview {
  project_name: string,
  description: string,
  id: string,
  createdAt: Date,
  token: string,
  apiCollection: number[],
  view: boolean
}
