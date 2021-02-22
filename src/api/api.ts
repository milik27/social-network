import axios from 'axios'

export const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.API_URL,
  headers: {
    'API-KEY': process.env.API_KEY,
  },
})

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10,
}

export type DefaultResponseType<D = never, RC = ResultCodeEnum> = {
  resultCode: RC
  messages: Array<string>
  data: D
}
export type GetItemsType<I> = {
  items: Array<I>
  totalCount: number
  error: string | null
}
