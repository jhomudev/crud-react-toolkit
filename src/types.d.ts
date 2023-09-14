export type UserId = string

export interface User{
  name: string
  email: string
  github:string
}

export interface UserWithId extends User{
  readonly id: UserId
}
