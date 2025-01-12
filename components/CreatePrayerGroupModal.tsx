"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useAuthContext } from "@/providers/authProvider";
import { uploadPrayerGroupLogo } from "@/lib/prayerGroupLogoUpload";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

export default function CreatePrayerGroupModal() {
  const [category, setCategory] = useState("weekly");
  const [customBranding, setCustomBranding] = useState("{}");
  const [image, setImage] = useState<File | null>(null);
  const { user } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleFormSubmit = async (data: any) => {
    try {
      setLoading(true); // Start loading
      let imageUrl = "";
      if (image) {
        imageUrl = await uploadPrayerGroupLogo(image);
      }

      const parsedBranding = JSON.parse(customBranding);
      const groupData = {
        ...data,
        category,
        custom_branding: parsedBranding,
        member_count: 0,
        logo_url: imageUrl,
        admin_id: user?.id,
        admin_name: user?.name,
        created_at: new Date(),
        updated_at: new Date(),
      };

      const { data: insertedData, error } = await supabase
        .from("groups")
        .insert([groupData]);

      if (error) {
        throw new Error(`Error inserting group data: ${error.message}`);
      }

      toast.success("Prayer Group created successfully!");
      reset();
      setImage(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error creating group:", error);
      toast.error("Failed to create prayer group. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={(open) => setIsModalOpen(open)}>
      <DialogTrigger asChild>
        <button className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 rounded-xl flex items-center space-x-2">
          <PlusCircle className="w-5 h-5" />
          <span>Create Prayer Group</span>
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 w-full max-w-md z-50">
        <DialogHeader>
          <DialogTitle className="text-gray-900 dark:text-white">
            Create Prayer Group
          </DialogTitle>
          <DialogDescription className="text-gray-700 dark:text-gray-300">
            Fill in the details below to create a new prayer group.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4 ">
          <div>
            <Label htmlFor="name" className="text-gray-900 dark:text-white">
              Group Name
            </Label>
            <Input
              id="name"
              placeholder="Enter group name"
              {...register("name", { required: "Group name is required" })}
              className="dark:bg-gray-700 dark:text-white dark:border-gray-600  rounded-xl"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="region" className="text-gray-900 dark:text-white">
              Region
            </Label>
            <Input
              id="region"
              placeholder="Enter group region (optional)"
              {...register("region")}
              className="dark:bg-gray-700 dark:text-white dark:border-gray-600  rounded-xl"
            />
          </div>
          <div>
            <Label htmlFor="category" className="text-gray-900 dark:text-white">
              Category
            </Label>
            <Select
              onValueChange={(value) => setCategory(value)}
              defaultValue="weekly"
            >
              <SelectTrigger className=" bg-white text-black border rounded-xl shadow-sm hover:bg-gray-50 focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white dark:border-gray-600">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black rounded-xl shadow-lg dark:bg-gray-700 dark:text-white dark:border-gray-600">
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="special events">Special Events</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="image" className="text-gray-900 dark:text-white">
              Group Logo
            </Label>
            <div className="mt-2">
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="border border-gray-300 p-2 dark:bg-gray-700 dark:border-gray-600 rounded-xl"
              />
            </div>
            {image && (
              <div className="mt-2">
                <p className="text-gray-600 dark:text-gray-300">
                  Image preview:
                </p>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Uploaded Preview"
                  className="w-32 h-32 object-cover mt-2 rounded-full"
                />
              </div>
            )}
          </div>
          <DialogFooter>
            <Button
              type="submit"
              disabled={loading} // Disable button during submission
              className={`${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white dark:bg-blue-700 dark:hover:bg-blue-800 rounded-xl`}
            >
              {loading ? "Creating..." : "Create Group"}{" "}
              {/* Show loading text */}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
