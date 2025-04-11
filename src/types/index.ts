export enum UserRole {
  FIELD_OFFICER = 'FIELD_OFFICER',
  PROJECT_MANAGER = 'PROJECT_MANAGER',
  SUPER_ADMIN = 'super_admin',
  ORGANIZATION_ADMIN = 'ORGANIZATION_ADMIN',
  ME = 'MONITORING_EVALUATION',
  ED = 'EXECUTIVE_DIRECTOR',
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}
export enum guestRoles {
  ACCOUNTANT = 'Accountant',
  DONAR = 'Donar',
}

export interface IAuthContext {
  user: IAuthenticateResponse | null
  authenticate: (email: string, password: string) => Promise<void>
  verifyOTP: (email: string, otp: string) => Promise<void>
  loggingIn: boolean
  logout: () => void
  verificationModalOpen: boolean
  loginSuperadmin: (email: string, password: string) => Promise<void>
  verificationCode: string
  verifyingCode: boolean
  setVerificationModalOpen: (open: boolean) => void
  setVerificationCode: (code: string) => void
  setVerifyingCode: (verifying: boolean) => void
}
export interface ILogin {
  email: string
  password: string
}

export interface IRequestOTP {
  email: string
}

export interface IRequestOTPResponse {
  message: string
}
export interface IResetPassword {
  email: string
  token: string
  password: string
}
export interface IResetPasswordResponse {
  message: string
}
export interface IOrganizationResponse {
  id: string
  name: string
  email: string | null
  logo: string | null
  location: string | null
  contact: string | null
  status: string
  createdAt: string
  updatedAt: string
  adminId: string
  adminEmail: string
  admin?: IAdmin
}

export interface IOrganization {
  name: string
  email: string
  logo?: string
  contact?: string
  location: string
}
export interface IUser {
  id: string
  email: string
  firstName: string | null
  lastName: string | null
  contact: string
  profile: string | null
  role: UserRole
  verifiedAt: string
  resetToken: string | null
  status: string
  createdAt: string
  updatedAt: string
  organization: IOrganization
}

export interface Guest {
  name: string
  email?: string
  phoneNumber?: string
  status: UserStatus
  role: guestRoles
}
export interface IRequestMFA {
  email: string
  password: string
}

export interface IAuthenticate {
  email: string
  verificationCode: string
}
export interface IAuthenticateResponse {
  user: IUser
  refresh_token: string
  access_token: string
  message: string
}

export interface IRequestAuthenticationResponse {
  message: string
}

export interface IUserResponseRegister {
  data: IUserResponseRegister[]
  email: string
  firstName: string
  lastName: string
  role: UserRole
  profile: string
  id: string
  status: string
}
export interface IAdmin {
  firstName?: string
  lastName?: string
  email: string
  contact?: string
}

export interface IAdminRegister {
  name: string
  adminEmail: string
  adminContact: string
  contact?: string
}
export interface ActivityTypeRes {
  activityTypes: string[]
}
export interface IActivityTypesRes {
  id: string
  value: string
}

export type partialUser = Pick<IUser, 'firstName' | 'lastName' | 'email' | 'role'>

export interface IOtherUsers {
  role: string
  names: string[]
}

export type otheruser = string[]

export interface IupdateUser {
  email: string
  password: string
  phone: number
  location: string
}
