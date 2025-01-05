"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { getFromLocalStorage, saveToLocalStorage } from "@/lib/localStorage";
import toast from "react-hot-toast";
import { LoginFormData } from "@/types/auth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const token = getFromLocalStorage("userId");

  useEffect(() => {
    if (token) {
      router.push("/dashboard");
    }
  }, []);

  const onsubmit = async (data: LoginFormData) => {
    setLoading(true);
    setErrorMessage(null); // Clear any previous error message

    const { email, password } = data;

    try {
      const { data: userData, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.status === 400) {
          toast.error("Please check your credentials");
        } else {
          setErrorMessage(error.message);
        }
        setLoading(false);
        return;
      }

      if (userData?.user) {
        saveToLocalStorage("userId", userData?.user?.id);
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center min-h-screen py-10 bg-gray-900 dark:bg-gray-900 transition-colors duration-300">
      {/* Left side - Form */}
      <div className="w-full xl:w-1/2 flex justify-center items-center py-6 px-4">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center md:text-4xl text-gray-100">
            Log In to Your Account
          </h2>
          <p className="text-sm text-center text-gray-400 mt-2">
            Welcome back! Please enter your details to continue.
          </p>

          {/* Caution Message */}
          <div className="p-4 mt-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded">
            <p>
              <strong>Important:</strong> If this is your first login, please
              check your email for a confirmation link. Confirm your email
              before attempting to log in.
            </p>
          </div>

          <form className="space-y-5 mt-6" onSubmit={handleSubmit(onsubmit)}>
            {/* Email field */}
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
                {...register("email", { required: "Email is required" })}
                className="mt-2 w-full p-3 border rounded-lg shadow-sm bg-gray-800 border-gray-700 text-gray-200  rounded-xl"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password field */}
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
                {...register("password", { required: "Password is required" })}
                className="mt-2 w-full p-3 border rounded-lg shadow-sm bg-gray-800 border-gray-700 text-gray-200  rounded-xl"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full py-3 mt-5 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-xl"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>

            {/* Sign Up Link */}
            <p className="text-sm text-center text-gray-400 mt-4">
              Don&#39;t have an account?{" "}
              <Link
                href="/register"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden xl:block w-1/2 h-full">
        <img
          src="/login.jpg"
          alt="side image"
          className="h-full w-full object-cove rounded-xl"
        />
      </div>
    </div>
  );
};

export default Login;
