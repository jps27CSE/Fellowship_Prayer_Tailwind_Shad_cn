'use client'
import { User, Mail, Phone, Calendar, Key, Edit } from 'lucide-react'; // Import Lucide icons
import DashboardLayout from "@/components/layout/dashboard-layout";
import { useAuthContext } from "@/providers/authProvider";

const Profile = () => {
    const { user } = useAuthContext();
    console.log(user)

    const userData = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        profile_image: 'https://via.placeholder.com/150',
        role: 'member',
        phone_number: '123-456-7890',
        birthday: 'January 15, 1990',
        created_at: '2022-07-01T10:30:00Z',
        prayer_group_request_status: 'rejected', // or 'approved', 'rejected'
        church_request_status: 'pending', // or 'pending', 'rejected'
        notification_preferences: {
            meeting_reminders: true,
            role_assignments: true,
            prayer_request_updates: false,
            group_announcements: true
        }
    }

    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 mb-6">
                    {/* Profile Section */}
                    <div className="text-center mb-6">
                        <div className="relative inline-block">
                            <img
                                src={user?.profile_image}
                                alt="Profile"
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md cursor-pointer">
                                <Edit className="text-gray-500 dark:text-gray-400" size={20} />
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{user?.name}</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-2">{user?.email}</p>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">Role: {user?.role}</p>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-start sm:justify-center">
                            <User className="mr-2 text-gray-500 dark:text-gray-400" />
                            <p className="text-gray-600 dark:text-gray-300">Phone: {user?.phone}</p>
                        </div>
                        <div className="flex items-center justify-start sm:justify-center">
                            <Calendar className="mr-2 text-gray-500 dark:text-gray-400" />
                            <p className="text-gray-600 dark:text-gray-300">Birthday: {userData.birthday}</p>
                        </div>
                        <div className="flex items-center justify-start sm:justify-center">
                            <Key className="mr-2 text-gray-500 dark:text-gray-400" />
                            <p className="text-gray-600 dark:text-gray-300">Account Created: {new Date(userData.created_at).toLocaleDateString()}</p>
                        </div>
                    </div>

                    {/* Display prayer group request status */}
                    {userData.prayer_group_request_status === 'pending' && (
                        <div className="bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 p-4 rounded-xl mb-4">
                            <p>Your request to become a Prayer Group Admin is pending.</p>
                        </div>
                    )}

                    {/* Display church request status */}
                    {userData.church_request_status === 'pending' && (
                        <div className="bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 p-4 rounded-xl mb-4">
                            <p>Your request to become a Church Admin is pending.</p>
                        </div>
                    )}

                    {/* Button to request for admin roles */}
                    <div className="mt-4">
                        {userData.role === 'member' && (
                            <div className="flex flex-col sm:flex-row sm:space-x-4">
                                <button className="bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded-xl mb-2 sm:mb-0 w-full sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-600">
                                    Request Prayer Group Admin
                                </button>
                                <button className="bg-green-500 dark:bg-green-700 text-white py-2 px-4 rounded-xl w-full sm:w-auto hover:bg-green-600 dark:hover:bg-green-600">
                                    Request Church Admin
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Profile;
