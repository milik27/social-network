import axios from 'axios'

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '1b3a19eb-954e-40d8-a1b9-e3f5192c09ad',
  },
})

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCapctha {
  CaptchaIsRequired = 10,
}

export type DefaultResponseType<D = {}, RC = ResultCodeEnum> = {
  resultCode: RC
  messages: Array<string>
  data: D
}
export type GetItemsType<I> = {
  items: Array<I>
  totalCount: number
  error: string | null
}
