"use client";
import { useState } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";

const CreatePrayerMeeting = () => {
  const [formData, setFormData] = useState({
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // handle form submission logic
  };

  return (
    <DashboardLayout>
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-8xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create Prayer Meeting
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {/* Meeting Info Section */}
          <div>
            <label htmlFor="meetingName" className="block font-medium">
              Meeting Name
            </label>
            <input
              id="meetingName"
              name="meetingName"
              type="text"
              value={formData.meetingName}
              onChange={handleChange}
              placeholder="Enter meeting name"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="scheduledTime" className="block font-medium">
              Scheduled Time
            </label>
            <input
              id="scheduledTime"
              name="scheduledTime"
              type="datetime-local"
              value={formData.scheduledTime}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="meetingType" className="block font-medium">
              Meeting Type
            </label>
            <select
              id="meetingType"
              name="meetingType"
              value={formData.meetingType}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          {formData.meetingType === "online" && (
            <div>
              <label htmlFor="meetingUrl" className="block font-medium">
                Meeting URL
              </label>
              <input
                id="meetingUrl"
                name="meetingUrl"
                type="url"
                value={formData.meetingUrl}
                onChange={handleChange}
                placeholder="Enter meeting URL"
                className="w-full p-2 border rounded-md"
              />
            </div>
          )}

          <div>
            <label htmlFor="status" className="block font-medium">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Role Assignments Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold">Role Assignments</h3>
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
                className="block font-medium capitalize"
              >
                {role.replace(/([A-Z])/g, " $1")} User
              </label>
              <input
                id={`${role}UserId`}
                name={`${role}UserId`}
                type="text"
                value={formData[`${role}UserId`]}
                onChange={handleChange}
                placeholder={`Assign ${role.replace(/([A-Z])/g, " $1")} user`}
                className="w-full p-2 border rounded-md"
              />
            </div>
          ))}

          {/* Submit Section */}
          <div className="mt-6 text-center md:col-span-2">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
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
