import { DefaultResponseType, instance, ResultCodeEnum, ResultCodeForCaptcha } from './api'

type GetAuthDataType = {
  id: number
  email: string
  login: string
}
type LoginDataType = DefaultResponseType<{ userId: number }, ResultCodeEnum | ResultCodeForCaptcha>

export const authAPI = {
  async getAuth() {
    const res = await instance.get<DefaultResponseType<GetAuthDataType>>('auth/me')
    return res.data
  },
  async logOut() {
    const res = await instance.delete<DefaultResponseType>(`auth/login`)
    return res.data
  },
  async login(email: string, password: string, rememberMe: boolean) {
    const res = await instance.post<LoginDataType>(`auth/login`, {
      email,
      password,
      rememberMe,
    })
    return res.data
  },
}
