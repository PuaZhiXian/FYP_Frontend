export interface IAdminUserDetails {
  id: 2,
  fullName: string,
  email: string,
  username: string,
  organisation: string,
  status: string,
  activatedTime: Date,
  lastLoginTime: Date,
  projectLength: number,
  numberAccessControl: number;
  imgUrl?: string
}
