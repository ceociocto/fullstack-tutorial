export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface AuthPayload {
  token: string;
  user: User;
}

export interface LoginVariables {
  email: string;
  password: string;
} 