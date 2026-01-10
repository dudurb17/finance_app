export type User = null | {
  id?: string;
  name?: string;
  email: string;
  password?: string;
  token?: string;
};

export type UserData = NonNullable<User>;
