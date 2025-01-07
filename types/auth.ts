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
  auth_uuid: string; // Authenticated user's unique ID
  id: string; // Database ID
  name: string;
  email: string | null;
  role: string; // e.g., "member", "admin", etc.
  profile_image?: string; // URL to the profile image
  phone?: string; // Optional phone number
  notification_preferences?: {
    role_assignments?: boolean;
    meeting_reminders?: boolean;
    group_announcements?: boolean;
    prayer_request_updates?: boolean;
  };
  birthday_month?: number; // Optional month of birth
  birthday_day?: number; // Optional day of birth
  created_at: string; // Timestamp of user creation
  last_login?: string | null; // Timestamp of last login
  church_request_status?: string | null; // Church-related request status
  prayer_group_request_status?: string | null; // Prayer group-related request status
  is_church_admin?: boolean; // Whether the user is a church admin
  is_prayer_group_admin?: boolean; // Whether the user is a prayer group admin
}

export interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
}
