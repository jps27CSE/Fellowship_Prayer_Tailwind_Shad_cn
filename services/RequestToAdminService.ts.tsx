import { supabase } from "@/lib/supabase";

export const requestPrayerGroupAdmin = async (authUuid: string) => {
  console.log("Requesting Prayer Group Admin with authUuid:", authUuid);

  if (!authUuid) {
    console.error("authUuid is required");
    return { success: false, error: "authUuid is required" };
  }

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

    // Proceed with updating prayer group request status to "pending"
    const { error } = await supabase
      .from("users")
      .update({ prayer_group_request_status: "pending" })
      .eq("auth_uuid", authUuid);

    if (error) {
      console.error("Supabase update error:", error.message);
      return { success: false, error: error.message };
    }

    console.log("Prayer Group Admin request submitted successfully");
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        "Error submitting prayer group admin request:",
        error.message,
      );
      return { success: false, error: error.message };
    } else {
      console.error("Unexpected error:", error);
      return { success: false, error: "An unexpected error occurred" };
    }
  }
};
