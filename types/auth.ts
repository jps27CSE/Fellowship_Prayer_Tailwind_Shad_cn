import { User } from "@/types/user";

export interface AuthUser {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string | null;
  role: string;
  profile_image?: string;
  phone?: string;
  notification_preferences?: Record<string, never>;
  birthday_month?: number;
  birthday_day?: number;
  created_at: string;
  last_login?: string;
}
export interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
}
