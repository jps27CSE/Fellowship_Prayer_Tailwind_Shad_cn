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
      throw authError;
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
      });

    if (userError) {
      throw userError;
    }

    return { authData, userData };
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
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
