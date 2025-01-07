"use client";

interface RequestChurchAdminButtonProps {
  churchRequestStatus: string | null;
}

const RequestChurchAdminButton: React.FC<RequestChurchAdminButtonProps> = ({
  churchRequestStatus,
}) => {
  if (churchRequestStatus === "pending") {
    return (
      <button
        disabled
        className="bg-gray-400 dark:bg-gray-600 text-white py-2 px-4 rounded-xl w-full sm:w-auto cursor-not-allowed"
      >
        Church Admin Request Pending
      </button>
    );
  }

  if (churchRequestStatus === null) {
    return (
      <button className="bg-green-500 dark:bg-green-700 text-white py-2 px-4 rounded-xl w-full sm:w-auto hover:bg-green-600 dark:hover:bg-green-600">
        Request Church Admin
      </button>
    );
  }

  return null; // Do not show the button if the status is approved or rejected.
};

export default RequestChurchAdminButton;
