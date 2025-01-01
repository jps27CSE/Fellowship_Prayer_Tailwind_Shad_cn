// Enum for user roles
export enum UserRole {
  ADMIN = "admin",
  MEMBER = "member",
  GUEST = "guest",
  SUPERUSER = "superuser", // Add more roles if needed
}

// Enum for user status
export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
  BANNED = "banned",
}

// Interface for user data stored in Firestore
export interface UserData {
  id: string; // This will be the Firebase user UID
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus; // Status of the user
  group_ids: string[]; // Array of group IDs the user is part of
  profile_image: string; // URL to profile image
  phone: string; // Optional phone number
  notification_preferences: {
    meeting_reminders: boolean;
    role_assignments: boolean;
    prayer_request_updates: boolean;
    group_announcements: boolean;
  };
  birthday_month: number; // Month of the birthday
  birthday_day: number; // Day of the birthday
  created_at: string; // Timestamp of user creation
  last_login: string; // Timestamp of the last login
}

// Interface for data received in the registration form
export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  phone: string;
  profile_image: FileList | null;
  birthday_month: number;
  birthday_day: number;
}

// Interface for User stored in Firestore
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
  lastLogin?: string;
  prayerGroupId?: string;
  avatarUrl?: string;
}
