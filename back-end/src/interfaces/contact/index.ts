export interface IContactCreate {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  phone?: string;
}

export interface IContactRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  usersId: string;
}
