import { supabase } from "@/lib/supabase";

// Utility function to update the request status
const updateRequestStatus = async (
  authUuid: string,
  field: string,
  status: string,
) => {
  try {
    // Fetch user by authUuid to ensure the user exists
    const { data, error: fetchError } = await supabase
      .from("users")
      .select("auth_uuid")
      .eq("auth_uuid", authUuid)
      .single();

    if (fetchError || !data) {
      const errorMessage = fetchError
        ? fetchError.message
        : "No user found with the provided authUuid";
      console.error(errorMessage);
      return { success: false, error: errorMessage };
    }

    console.log("User found:", data);

    // Proceed with updating the request status
    const { error } = await supabase
      .from("users")
      .update({ [field]: status })
      .eq("auth_uuid", authUuid);

    if (error) {
      console.error("Supabase update error:", error.message);
      return { success: false, error: error.message };
    }

    console.log(`${field} request submitted successfully`);
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error submitting ${field} request:`, error.message);
      return { success: false, error: error.message };
    } else {
      console.error("Unexpected error:", error);
      return { success: false, error: "An unexpected error occurred" };
    }
  }
};

// Function to handle requesting Prayer Group Admin
export const requestPrayerGroupAdmin = async (authUuid: string) => {
  if (!authUuid) {
    console.error("authUuid is required");
    return { success: false, error: "authUuid is required" };
  }

  return updateRequestStatus(
    authUuid,
    "prayer_group_request_status",
    "pending",
  );
};

// Function to handle requesting Church Admin
export const requestChurchAdmin = async (authUuid: string) => {
  if (!authUuid) {
    console.error("authUuid is required");
    return { success: false, error: "authUuid is required" };
  }

  return updateRequestStatus(authUuid, "church_request_status", "pending");
};
