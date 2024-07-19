import { ValidRoles } from ".";

export interface User {
  id: string;
  email: string;
  isActive: boolean;
  roles: ValidRoles[];
}
