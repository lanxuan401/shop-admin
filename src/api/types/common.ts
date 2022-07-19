export interface ILoginInfo {
    logo_square: string
    logo_rectangle:string
    login_logo: string
    slide: string[]
}

export interface IUserInfo {
  id: number
  account: string
  head_pic: string
}

export interface IMenu {
  path: string
  title: string
  icon: string
  header: string
  is_header: number
  children?: IMenu[]
}
