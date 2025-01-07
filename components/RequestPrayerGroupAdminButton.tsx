"use client";

interface RequestPrayerGroupAdminButtonProps {
  prayerGroupRequestStatus: string | null;
}

const RequestPrayerGroupAdminButton: React.FC<
  RequestPrayerGroupAdminButtonProps
> = ({ prayerGroupRequestStatus }) => {
  if (prayerGroupRequestStatus === "pending") {
    return (
      <button
        disabled
        className="bg-gray-400 dark:bg-gray-600 text-white py-2 px-4 rounded-xl w-full sm:w-auto cursor-not-allowed"
      >
        Prayer Group Admin Request Pending
      </button>
    );
  }

  if (prayerGroupRequestStatus === null) {
    return (
      <button className="bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded-xl w-full sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-600">
        Request Prayer Group Admin
      </button>
    );
  }

  return null; // Do not show the button if the status is approved or rejected.
};

export default RequestPrayerGroupAdminButton;
