import { supabase } from "@/lib/supabase";

export const registerUser = async (
  email: string,
  password: string,
  name: string,
  role: string,
  phone: string,
  profile_image: string,
  birthday_day: number,
  birthday_month: number,
) => {
  try {
    // Sign up the user with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      return { success: false, error: authError.message };
    }

    // Insert the user into the users table with the auth_uuid
    const { data: userData, error: userError } = await supabase
      .from("users")
      .insert({
        auth_uuid: authData.user.id,
        email,
        name,
        role,
        phone,
        profile_image,
        birthday_day,
        birthday_month,
        created_at: new Date().toISOString(),
        prayer_group_request_status: null,
        church_request_status: null,
        notification_preferences: {
          meeting_reminders: true,
          role_assignments: true,
          prayer_request_updates: true,
          group_announcements: true,
        },
      });

    if (userError) {
      return { success: false, error: userError.message };
    }

    return { authData, userData };
  } catch (error) {
    console.error("Error registering user:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    // Sign in the user with Supabase Auth
    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (authError) {
      throw authError;
    }

    // Fetch the user data from the users table using auth_uuid
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("auth_uuid", authData.user.id)
      .single();

    if (userError) {
      throw userError;
    }

    return { authData, userData };
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};
