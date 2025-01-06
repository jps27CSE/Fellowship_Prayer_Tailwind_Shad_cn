"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { RegisterFormData } from "@/types/user";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/authService";
import toast from "react-hot-toast";
import { uploadProfileImage } from "@/lib/profileImageUpload";
import { supabase } from "@/lib/supabase";
import { getFromLocalStorage } from "@/lib/localStorage";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const token = getFromLocalStorage("userId");

  useEffect(() => {
    if (token) {
      router.push("/dashboard");
    }
  }, []);

  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const {
        email,
        password,
        name,
        phone,
        profile_image,
        birthday_day,
        birthday_month,
      } = data;

      // Call the registerUser function with a default role of "member"
      const registerResult = await registerUser(
        email,
        password,
        name,
        "member", // Default role
        phone,
        "",
        birthday_day,
        birthday_month,
      );

      if (!registerResult || registerResult.error) {
        toast.error(registerResult.error || "Registration failed.");
        return;
      }
      if (!registerResult.authData || !registerResult.authData.user) {
        toast.error("Registration failed. User data not found.");
        return;
      }

      // Profile image upload
      let profileImageURL = "";
      if (profile_image?.[0]) {
        profileImageURL = await uploadProfileImage(profile_image[0]);

        const { error: updateError } = await supabase
          .from("users")
          .update({ profile_image: profileImageURL })
          .eq("auth_uuid", registerResult.authData.user.id);

        if (updateError) {
          console.error("Error updating profile image:", updateError);
          toast.error("Failed to save profile image.");
          return;
        }
      }

      toast.success(
        "Registration successful! Check your email for confirmation.",
      );
      router.push("/login");
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("AuthApiError")) {
          toast.error("Invalid email address.");
        } else if (error.message.includes("AuthWeakPasswordError")) {
          toast.error("Password must be at least 6 characters long.");
        } else {
          toast.error(error.message);
        }
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center min-h-screen py-10 bg-gray-900 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full xl:w-1/2 flex justify-center items-center py-6 px-4">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center md:text-4xl text-gray-100">
            Register Your Account
          </h2>
          <p className="text-sm text-center text-gray-400 mt-2">
            Create your account to join the community!
          </p>

          <form className="space-y-5 mt-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="mt-2 w-full p-3 border rounded-lg shadow-sm bg-gray-800 border-gray-700 text-gray-200  rounded-xl"
                {...register("name", { required: "Full Name is required" })}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full p-3 border rounded-lg shadow-sm bg-gray-800 border-gray-700 text-gray-200  rounded-xl"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-full p-3 border shadow-sm bg-gray-800 border-gray-700 text-gray-200  rounded-xl"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300"
              >
                Phone
              </label>
              <Input
                id="phone"
                type="text"
                placeholder="Enter your phone number"
                className="mt-2 w-full p-3 border shadow-sm bg-gray-800 border-gray-700 text-gray-200  rounded-xl"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Profile Image */}
            <div>
              <label
                htmlFor="profile_image"
                className="block text-sm font-medium text-gray-300"
              >
                Profile Image
              </label>
              <Input
                id="profile_image"
                type="file"
                className="mt-2 w-full border  shadow-sm bg-gray-800 border-gray-700 text-gray-200 rounded-xl"
                {...register("profile_image")}
              />
            </div>

            {/* Birthday */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="birthday_month"
                  className="block text-sm font-medium text-gray-300"
                >
                  Birth Month
                </label>
                <Input
                  id="birthday_month"
                  type="number"
                  min="1"
                  max="12"
                  placeholder="MM"
                  className="mt-2 w-full p-3 border shadow-sm bg-gray-800 border-gray-700 text-gray-200  rounded-xl"
                  {...register("birthday_month", {
                    required: "Birth month is required",
                  })}
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="birthday_day"
                  className="block text-sm font-medium text-gray-300"
                >
                  Birth Day
                </label>
                <Input
                  id="birthday_day"
                  type="number"
                  min="1"
                  max="31"
                  placeholder="DD"
                  className="mt-2 w-full p-3 border  shadow-sm bg-gray-800 border-gray-700 text-gray-200  rounded-xl"
                  {...register("birthday_day", {
                    required: "Birth day is required",
                  })}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full py-3 mt-5 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-xl"
              disabled={true}
            >
              {loading ? "Registering..." : "Register"}
            </Button>

            <p className="text-sm text-center text-gray-400 mt-4">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="hidden xl:block w-1/2 h-full">
        <img
          src="/login.jpg"
          alt="side image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
