export type LoginArgs = {
  email: string
  password: string
  rememberMe: boolean
}

export type LoginResponse = {
  accessToken: string
  refreshToken: string
}

export type getUser = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type createUser = {
  email: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}
