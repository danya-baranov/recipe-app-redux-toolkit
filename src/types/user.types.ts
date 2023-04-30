export interface IUser {
  id: number;
  name: string;
}

export interface IUserInitialState {
  user: IUser;
  isLoading: boolean;
  error: string | null;
}
