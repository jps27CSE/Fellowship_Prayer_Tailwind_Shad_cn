"use client";
import { useForm } from "react-hook-form";
import DashboardLayout from "@/components/layout/dashboard-layout";

const CreatePrayerMeeting = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      meetingName: "",
      scheduledTime: "",
      meetingType: "online", // Default to online
      meetingUrl: "",
      status: "pending",
      speakerUserId: "",
      moderatorUserId: "",
      worshiperUserId: "",
      specialSongUserId: "",
      openingPrayerUserId: "",
      thanksPrayerUserId: "",
      bibleTxUserId: "",
      prayerForSpeakerUserId: "",
      closingSongUserId: "",
      closingPrayerUserId: "",
      benedictionUserId: "",
      thanksFromPrayerMeetingUserId: "",
      fellowshipUserId: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data); // handle form submission logic
  };

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
          {/* Meeting Info Section */}
          <div>
            <label
              htmlFor="meetingName"
              className="block font-medium text-gray-900 dark:text-white"
            >
              Meeting Name
            </label>
            <input
              id="meetingName"
              {...register("meetingName", {
                required: "Meeting name is required",
              })}
              type="text"
              placeholder="Enter meeting name"
              className={`w-full p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 ${errors.meetingName ? "border-red-500" : ""}`}
            />
            {errors.meetingName && (
              <p className="text-red-500 text-sm">
                {errors.meetingName.message}
              </p>
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
              className={`w-full p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 ${errors.scheduledTime ? "border-red-500" : ""}`}
            />
            {errors.scheduledTime && (
              <p className="text-red-500 text-sm">
                {errors.scheduledTime.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="meetingType"
              className="block font-medium text-gray-900 dark:text-white"
            >
              Meeting Type
            </label>
            <select
              id="meetingType"
              {...register("meetingType", {
                required: "Meeting type is required",
              })}
              className={`w-full p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 ${errors.meetingType ? "border-red-500" : ""}`}
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
            {errors.meetingType && (
              <p className="text-red-500 text-sm">
                {errors.meetingType.message}
              </p>
            )}
          </div>

          {watch("meetingType") === "online" && (
            <div>
              <label
                htmlFor="meetingUrl"
                className="block font-medium text-gray-900 dark:text-white"
              >
                Meeting URL
              </label>
              <input
                id="meetingUrl"
                {...register("meetingUrl")}
                type="url"
                placeholder="Enter meeting URL"
                className="w-full p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="status"
              className="block font-medium text-gray-900 dark:text-white"
            >
              Status
            </label>
            <select
              id="status"
              {...register("status", { required: "Status is required" })}
              className="w-full p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="completed">Completed</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status.message}</p>
            )}
          </div>

          {/* Role Assignments Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Role Assignments
            </h3>
          </div>

          {[
            "speaker",
            "moderator",
            "worshiper",
            "specialSong",
            "openingPrayer",
            "thanksPrayer",
            "bibleTx",
            "prayerForSpeaker",
            "closingSong",
            "closingPrayer",
            "benediction",
            "thanksFromPrayerMeeting",
            "fellowship",
          ].map((role) => (
            <div key={role}>
              <label
                htmlFor={`${role}UserId`}
                className="block font-medium capitalize text-gray-900 dark:text-white"
              >
                {role.replace(/([A-Z])/g, " $1")} User
              </label>
              <input
                id={`${role}UserId`}
                {...register(`${role}UserId`)}
                type="text"
                placeholder={`Assign ${role.replace(/([A-Z])/g, " $1")} user`}
                className="w-full p-2 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
              />
            </div>
          ))}

          {/* Submit Section */}
          <div className="mt-6 text-center md:col-span-2">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none"
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
