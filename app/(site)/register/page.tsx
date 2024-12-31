import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center min-h-screen py-10 bg-gray-900 dark:bg-gray-900 transition-colors duration-300">
      {/* Left side - Form */}
      <div className="w-full xl:w-1/2 flex justify-center items-center py-6 px-4">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center md:text-4xl text-gray-100">
            Register Your Account
          </h2>
          <p className="text-sm text-center text-gray-400 mt-2">
            Create your account to join the community!
          </p>

          <form className="space-y-5 mt-6">
            {/* Name field */}
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
                className="mt-2 w-full p-3 border rounded-lg shadow-sm bg-gray-800 border-gray-700 text-gray-200"
              />
            </div>

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
                className="mt-2 w-full p-3 border rounded-lg shadow-sm bg-gray-800 border-gray-700 text-gray-200"
              />
            </div>

            {/* Role field */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-300"
              >
                Role
              </label>
              <div className="relative">
                <select
                  id="role"
                  className="mt-2 w-full p-3 border rounded-lg shadow-sm bg-gray-800 border-gray-700 text-gray-200"
                >
                  <option value="member">Member</option>
                  <option value="group_admin">Group Admin</option>
                </select>
              </div>
            </div>

            {/* Phone field (required) */}
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
                required
                className="mt-2 w-full p-3 border rounded-lg shadow-sm bg-gray-800 border-gray-700 text-gray-200"
              />
            </div>

            {/* Profile Image Upload field */}
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
                className="mt-2 w-full p-3 border rounded-lg shadow-sm bg-gray-800 border-gray-700 text-gray-200"
              />
            </div>

            {/* Birthday field */}
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
                  className="mt-2 w-full p-3 border rounded-lg shadow-sm bg-gray-800 border-gray-700 text-gray-200"
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
                  className="mt-2 w-full p-3 border rounded-lg shadow-sm bg-gray-800 border-gray-700 text-gray-200"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-3 mt-5 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg"
            >
              Register
            </Button>

            {/* Login Link */}
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

      {/* Right side - Image */}
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
