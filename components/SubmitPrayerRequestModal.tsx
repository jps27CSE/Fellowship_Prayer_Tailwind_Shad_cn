import { PlusCircle } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"; // Import ShadCN components
import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from "@/lib/supabase";
import { useAuthContext } from "@/providers/authProvider";
import toast from "react-hot-toast"; // Ensure supabase is properly configured

interface PrayerRequestForm {
  title: string;
  category: string;
  prayer_description: string;
}

const SubmitPrayerRequestModal = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();
  const [open, setOpen] = useState(false); // State to manage the modal visibility
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PrayerRequestForm>();

  const onSubmit: SubmitHandler<PrayerRequestForm> = async (data) => {
    setLoading(true);

    if (!user) {
      alert("You must be logged in to submit a prayer request.");
      setLoading(false);
      return;
    }

    const user_id = user.id;
    const created_at = new Date().toISOString();

    try {
      const { error } = await supabase
        .from("prayer_requests")
        .insert([{ ...data, user_id, created_at }]);

      if (error) throw error;

      toast.success("Prayer request submitted successfully!");
      reset(); // Reset the form after successful submission
      setOpen(false); // Close the modal after submitting
    } catch (error) {
      console.error("Error submitting prayer request:", error);
      alert("Failed to submit prayer request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => setOpen(true)} // Open modal when button is clicked
          className="flex items-center rounded-xl text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 space-x-2"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Submit Prayer Request</span>
        </button>
      </DialogTrigger>
      <DialogContent className="dark:bg-gray-800 dark:text-gray-100">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">
            Submit Prayer Request
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium dark:text-gray-200">
              Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              className="w-full p-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter a title for your prayer request"
            />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium dark:text-gray-200">
              Category
            </label>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full p-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Select a category</option>
              <option value="health">Health</option>
              <option value="work">Work</option>
              <option value="family">Family</option>
            </select>
            {errors.category && (
              <p className="text-sm text-red-500 mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Prayer Description */}
          <div>
            <label className="block text-sm font-medium dark:text-gray-200">
              Prayer Request Details
            </label>
            <textarea
              {...register("prayer_description", {
                required: "Prayer description is required",
              })}
              className="w-full p-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows={4}
              placeholder="Describe your prayer request"
            />
            {errors.prayer_description && (
              <p className="text-sm text-red-500 mt-1">
                {errors.prayer_description.message}
              </p>
            )}
          </div>

          <DialogFooter>
            <button
              type="submit"
              className={`px-4 py-2 rounded-xl text-white ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SubmitPrayerRequestModal;
