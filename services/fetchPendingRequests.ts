import { supabase } from "@/lib/supabase";

export const fetchPendingRequests = async () => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .or(
        "prayer_group_request_status.eq.pending,church_request_status.eq.pending",
      );

    if (error) {
      console.error("Error fetching requests:", error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error("Error in fetchPendingRequests:", error);
    return [];
  }
};
