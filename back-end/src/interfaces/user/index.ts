export interface IUserRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
  isAdm: boolean;
}

export interface IUserCreate {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  isAdm: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  isActive?: boolean;
}
