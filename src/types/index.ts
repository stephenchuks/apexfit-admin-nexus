
export type Role = 'super-admin' | 'branch-admin' | 'staff' | 'trainer';

export interface RoleOption {
  id: Role;
  label: string;
  path: string;
  description: string;
}
