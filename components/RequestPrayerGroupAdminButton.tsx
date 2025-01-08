"use client";

interface RequestPrayerGroupAdminButtonProps {
  prayerGroupRequestStatus: string | null;
  onClick: () => Promise<void>;
  loading: boolean;
}

const RequestPrayerGroupAdminButton: React.FC<
  RequestPrayerGroupAdminButtonProps
> = ({ prayerGroupRequestStatus, onClick, loading }) => {
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
      <button
        onClick={onClick} // Trigger the onClick function (async function)
        disabled={loading} // Disable the button while loading
        className="bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded-xl w-full sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-600"
      >
        {loading ? "Submitting..." : "Request Prayer Group Admin"}
      </button>
    );
  }

  return null; // Do not show the button if the status is approved or rejected.
};

export default RequestPrayerGroupAdminButton;
