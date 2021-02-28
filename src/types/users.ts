export type UserType = {
  name: string
  id: number
  photos: {
    small: string | null
    large: string | null
  }
  status: string | null
  followed: boolean
  uniqueUrlName: string | null
}
