export interface userAuth {
  id: number;
  email: string;
  token: string;
  username: string;
  bio?: string | null;
  image?: string | null;
}