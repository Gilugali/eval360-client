import { LogIn } from '@vicons/ionicons5'

export enum UserRole {
  SUPER_ADMIN = 'super-admin',
  ORGANIZATION_ADMIN = 'organization-admin',
  FIELD_OFFICER = 'field-officer',
  PROJECT_MANAGER = 'project-manager',
  MONITORING_EVALUATION = 'monitoring-evaluation',
  EXECUTIVE_DIRECTOR = 'executive-director',
}

export const routesNames = {
  LOGIN: 'Login',
  UNAUTHORIZED: 'Unauthorized',
  NOT_FOUND: 'NotFound',
  FORGOT_PASSWORD: 'ForgotPassword',
  RESET_PASSWORD: 'ResetPassword',
  SUPER_ADMIN_DASHBOARD: 'SuperAdminDashboard',
  ORGANIZATION_ADMIN_DASHBOARD: 'OrganizationAdminDashboard',
  FIELD_OFFICER_DASHBOARD: 'FieldOfficerDashboard',
  PROJECT_MANAGER_DASHBOARD: 'ProjectManagerDashboard',
  MONITORING_EVALUATION_DASHBOARD: 'MonitoringEvaluationDashboard',
  EXECUTIVE_DIRECTOR_DASHBOARD: 'ExecutiveDirectorDashboard',
  PROFILE: 'Profile',
}
export interface IRouteMeta {
  requiredRoles: UserRole[]
  title?: string
}
