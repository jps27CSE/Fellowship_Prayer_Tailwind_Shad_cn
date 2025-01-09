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

export default function CreatePrayerGroupModal({ onSubmit }) {
  const [category, setCategory] = useState("weekly"); // Default category
  const [customBranding, setCustomBranding] = useState("{}"); // Placeholder for custom branding
  const [image, setImage] = useState(null); // State for image file

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file); // Convert image to base64 data
    }
  };

  const handleFormSubmit = (data) => {
    // Parse custom branding if needed
    const parsedBranding = JSON.parse(customBranding);
    const groupData = {
      ...data,
      category,
      custom_branding: parsedBranding, // Adding custom branding
      member_count: 0, // Initial member count is 0
      logo_url: image, // Adding the image URL (base64 data)
    };
    console.log("Group Data:", groupData);
    // onSubmit(groupData);
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-blue-500 text-white py-2 px-4  hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 rounded-xl flex items-center space-x-2">
          <PlusCircle className="w-5 h-5" /> {/* Add the icon */}
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
          {/* Group Name */}
          <div>
            <Label htmlFor="name" className="text-gray-900 dark:text-white ">
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

          {/* Region */}
          <div>
            <Label htmlFor="region" className="text-gray-900 dark:text-white ">
              Region
            </Label>
            <Input
              id="region"
              placeholder="Enter group region (optional)"
              {...register("region")}
              className="dark:bg-gray-700 dark:text-white dark:border-gray-600  rounded-xl"
            />
          </div>

          {/* Category */}
          <div>
            <Label
              htmlFor="category"
              className="text-gray-900 dark:text-white "
            >
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

          {/* Image Upload */}
          <div>
            <Label htmlFor="image" className="text-gray-900 dark:text-white">
              Group Logo
            </Label>

            {/* Add spacing between label and input */}
            <div className="mt-2">
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="border border-gray-300  p-2 dark:bg-gray-700 dark:border-gray-600  rounded-xl"
              />
            </div>

            {/* Display image preview if an image is selected */}
            {image && (
              <div className="mt-2">
                <p className="text-gray-600 dark:text-gray-300">
                  Image preview:
                </p>
                <img
                  src={image}
                  alt="Uploaded Preview"
                  className="w-32 h-32 object-cover mt-2 rounded-full"
                />
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 rounded-xl"
            >
              Create Group
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
