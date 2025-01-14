"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { supabase } from "@/lib/supabase";
import { useAuthContext } from "@/providers/authProvider";
import { Skeleton } from "@/components/ui/skeleton";
import { Group, PrayerMeetingFormData } from "@/types/prayer_meeting_create";
import { bannerImageUpload } from "@/lib/bannerImageUpload";
import { useRouter } from "next/navigation";

const CreatePrayerMeeting = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<PrayerMeetingFormData>({
    defaultValues: {
      scheduledTime: "",
      meetingUrl: "",
      speakerUserId: "",
      moderatorUserId: "",
      worshiperUserId: "",
      specialSongUserId: "",
      banner: "",
      description: "",
      groupId: "",
    },
  });

  const router = useRouter();

  const [availableGroups, setAvailableGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchUserAndGroups = async () => {
      if (user) {
        try {
          const { data, error } = await supabase
            .from("groups")
            .select("*")
            .eq("admin_id", user.id);

          if (error) {
            console.error("Error fetching groups: ", error.message);
          } else {
            setAvailableGroups(data);
          }
        } catch (error) {
          console.log("Error fetching groups", error.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserAndGroups();
  }, [user]);

  // Log available groups for debugging
  useEffect(() => {
    console.log(availableGroups); // Debug log to check groups
  }, [availableGroups]);

  const onSubmit = async (data: PrayerMeetingFormData) => {
    console.log("Form Data:", data); // Ensure form data is logged

    try {
      let bannerImageUrl = null;

      if (data.banner && data.banner[0]) {
        const file = data.banner[0];

        // Log file details
        console.log("Uploading banner image:", file);

        bannerImageUrl = await bannerImageUpload(file);

        // Log the result of the banner image upload
        if (!bannerImageUrl) {
          console.error("Failed to get banner image URL");
          throw new Error("Failed to upload banner image.");
        }

        console.log("Banner image uploaded successfully:", bannerImageUrl);
      }

      // Find selected group
      const selectedGroup = availableGroups.find(
        (group) => String(group.id) === String(data.groupId),
      );

      if (selectedGroup) {
        const meetingData = {
          meeting_name: selectedGroup.name,
          meeting_url: data.meetingUrl,
          banner_image_url: bannerImageUrl,
          description: data.description,
          speaker_user: data.speakerUserId,
          worshiper_user: data.worshiperUserId,
          special_song_user: data.specialSongUserId,
          moderator_user: data.moderatorUserId,
          admin_id: user?.id,
        };

        // Log the meeting data before inserting into Supabase
        console.log("Meeting Data to be inserted:", meetingData);

        const { error } = await supabase.from("meetings").insert([meetingData]);

        if (error) {
          console.error(
            "Error inserting meeting into Supabase:",
            error.message,
          );
          throw new Error(error.message);
        }

        console.log("Meeting created successfully:", meetingData);

        // Redirect to the events page
        router.push("/dashboard/events");
      } else {
        console.error("Selected group not found.");
        throw new Error("Group not found.");
      }
    } catch (error) {
      console.error("Error creating meeting:", error.message);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
          Create Prayer Meeting
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {/* Group Selector Section */}
          <div className="md:col-span-2">
            <label
              htmlFor="groupId"
              className="block font-medium text-gray-900 dark:text-white"
            >
              Select Group
            </label>
            <select
              id="groupId"
              {...register("groupId", {
                required: "Group selection is required",
              })}
              className={`w-full p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 ${
                errors.groupId ? "border-red-500" : ""
              }`}
            >
              <option value="">Select a group</option>
              {availableGroups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
            {errors.groupId && (
              <p className="text-red-500 text-sm">{errors.groupId.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="scheduledTime"
              className="block font-medium text-gray-900 dark:text-white"
            >
              Scheduled Time
            </label>
            <input
              id="scheduledTime"
              {...register("scheduledTime", {
                required: "Scheduled time is required",
              })}
              type="datetime-local"
              className={`w-full p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 ${
                errors.scheduledTime ? "border-red-500" : ""
              }`}
            />
            {errors.scheduledTime && (
              <p className="text-red-500 text-sm">
                {errors.scheduledTime.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="meetingUrl"
              className="block font-medium text-gray-900 dark:text-white"
            >
              Meeting URL
            </label>
            <input
              id="meetingUrl"
              {...register("meetingUrl", {
                required: "Meeting URL is required",
              })}
              type="url"
              placeholder="Enter meeting URL"
              className={`w-full p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 ${
                errors.meetingUrl ? "border-red-500" : ""
              }`}
            />
            {errors.meetingUrl && (
              <p className="text-red-500 text-sm">
                {errors.meetingUrl.message}
              </p>
            )}
          </div>

          {/* Banner Image Section */}
          <div>
            <label
              htmlFor="banner"
              className="block font-medium text-gray-900 dark:text-white"
            >
              Banner Image
            </label>
            <input
              id="banner"
              {...register("banner")}
              type="file"
              accept="image/*"
              className="w-full p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
            />
          </div>

          {/* Description Section */}
          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="block font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              rows="4"
              placeholder="Enter description"
              className={`w-full p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 ${
                errors.description ? "border-red-500" : ""
              }`}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Role Assignments Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Role Assignments
            </h3>
          </div>

          <div>
            <label
              htmlFor="speakerUserId"
              className="block font-medium text-gray-900 dark:text-white"
            >
              Speaker User
            </label>
            <input
              id="speakerUserId"
              {...register("speakerUserId")}
              type="text"
              placeholder="Assign Speaker user"
              className="w-full p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
            />
          </div>

          <div>
            <label
              htmlFor="worshiperUserId"
              className="block font-medium text-gray-900 dark:text-white"
            >
              Worshiper User
            </label>
            <input
              id="worshiperUserId"
              {...register("worshiperUserId")}
              type="text"
              placeholder="Assign Worshiper user"
              className="w-full p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
            />
          </div>

          <div>
            <label
              htmlFor="specialSongUserId"
              className="block font-medium text-gray-900 dark:text-white"
            >
              Special Song User
            </label>
            <input
              id="specialSongUserId"
              {...register("specialSongUserId")}
              type="text"
              placeholder="Assign Special Song user"
              className="w-full p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
            />
          </div>

          <div>
            <label
              htmlFor="moderatorUserId"
              className="block font-medium text-gray-900 dark:text-white"
            >
              Moderator User
            </label>
            <input
              id="moderatorUserId"
              {...register("moderatorUserId")}
              type="text"
              placeholder="Assign Moderator user"
              className="w-full p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
            />
          </div>

          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md"
            >
              Create Meeting
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreatePrayerMeeting;
