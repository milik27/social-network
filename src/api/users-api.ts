import { DefaultResponseType, GetItemsType, instance } from '@src/api/api'
import { UserType } from '@src/types/users'

export const usersAPI = {
  async getUsers(count: number, page: number, term?: string, friend?: boolean) {
    const res = await instance.get<GetItemsType<UserType>>('/users', { params: { count, page, term, friend } })
    return res.data
  },
  async follow(userId: number) {
    const res = await instance.post<DefaultResponseType>(`/follow/${userId}`)
    return res.data
  },
  async unfollow(userId: number) {
    const res = await instance.delete<DefaultResponseType>(`/follow/${userId}`)
    return res.data
  },
}
