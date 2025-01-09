import { supabase } from "@/lib/supabase";

export const adminApprove = async (id: string, type: string) => {
  try {
    const updates =
      type === "prayerGroup"
        ? {
            prayer_group_request_status: "approved",
            is_prayer_group_admin: true,
            role: "group_admin",
          }
        : {
            church_request_status: "approved",
            is_church_admin: true,
            role: "group_admin",
          };

    const { error } = await supabase.from("users").update(updates).eq("id", id);

    if (error) {
      console.error("Error approving request:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error in adminApprove:", error);
    return false;
  }
};

export const adminReject = async (id: string, type: string) => {
  try {
    const updates =
      type === "prayerGroup"
        ? { prayer_group_request_status: null }
        : { church_request_status: null };

    const { error } = await supabase.from("users").update(updates).eq("id", id);

    if (error) {
      console.error("Error rejecting request:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error in adminReject:", error);
    return false;
  }
};
