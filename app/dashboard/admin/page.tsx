'use client'
import React from 'react'
import DashboardLayout from "@/components/layout/dashboard-layout";
import { User, Settings, Users, FileText, BarChart, CheckCircle, XCircle } from 'lucide-react'; // Importing icons for the UI

const Admin = () => {
    // Mock data for requests
    const prayerGroupRequests = [
        { id: 1, name: 'John Doe', status: 'pending' },
        { id: 2, name: 'Jane Smith', status: 'approved' },
        { id: 3, name: 'Mark Johnson', status: 'rejected' },
    ];

    const churchAdminRequests = [
        { id: 1, name: 'Michael Brown', status: 'pending' },
        { id: 2, name: 'Sara White', status: 'approved' },
    ];

    return (
        <DashboardLayout>
            <div className="max-w-7xl mx-auto p-6">
                {/* Admin Dashboard Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">Manage your app, users, and settings</p>
                </div>

                {/* Admin Dashboard Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Users Section */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Users className="text-gray-500 dark:text-gray-400 mr-3" size={30} />
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Users</h2>
                            </div>
                            <p className="text-3xl font-bold text-blue-500">230</p>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">Total registered users</p>
                    </div>

                    {/* Reports Section */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <FileText className="text-gray-500 dark:text-gray-400 mr-3" size={30} />
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Reports</h2>
                            </div>
                            <p className="text-3xl font-bold text-blue-500">45</p>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">Pending reports</p>
                    </div>

                    {/* Statistics Section */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <BarChart className="text-gray-500 dark:text-gray-400 mr-3" size={30} />
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Statistics</h2>
                            </div>
                            <p className="text-3xl font-bold text-blue-500">8%</p>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">Growth rate in the last month</p>
                    </div>
                </div>

                {/* Admin Actions */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Settings Section */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Settings className="text-gray-500 dark:text-gray-400 mr-3" size={30} />
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Settings</h2>
                            </div>
                        </div>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-xl w-full mt-4 hover:bg-green-600">
                            Configure Settings
                        </button>
                    </div>

                    {/* Manage Users Section */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Users className="text-gray-500 dark:text-gray-400 mr-3" size={30} />
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Manage Users</h2>
                            </div>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-xl w-full mt-4 hover:bg-blue-600">
                            View & Manage Users
                        </button>
                    </div>

                    {/* Reports Management Section */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <FileText className="text-gray-500 dark:text-gray-400 mr-3" size={30} />
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Manage Reports</h2>
                            </div>
                        </div>
                        <button className="bg-yellow-500 text-white py-2 px-4 rounded-xl w-full mt-4 hover:bg-yellow-600">
                            View & Manage Reports
                        </button>
                    </div>
                </div>

                {/* Manage Requests Section */}
                <div className="mt-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Manage Requests</h2>

                        {/* Prayer Group Admin Requests */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Prayer Group Admin Requests</h3>
                            <div className="space-y-4 mt-4">
                                {prayerGroupRequests.map((request) => (
                                    <div key={request.id} className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                        <p className="text-gray-900 dark:text-white">{request.name}</p>
                                        <div className="flex items-center">
                                            <span className={`px-2 py-1 text-sm rounded-full ${request.status === 'pending' ? 'bg-yellow-500 text-yellow-900' : request.status === 'approved' ? 'bg-green-500 text-green-900' : 'bg-red-500 text-red-900'}`}>
                                                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                                            </span>
                                            <div className="ml-4 flex space-x-2">
                                                {request.status === 'pending' && (
                                                    <>
                                                        <button className="text-green-500 hover:text-green-600">
                                                            <CheckCircle size={20} />
                                                        </button>
                                                        <button className="text-red-500 hover:text-red-600">
                                                            <XCircle size={20} />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Church Admin Requests */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Church Admin Requests</h3>
                            <div className="space-y-4 mt-4">
                                {churchAdminRequests.map((request) => (
                                    <div key={request.id} className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                        <p className="text-gray-900 dark:text-white">{request.name}</p>
                                        <div className="flex items-center">
                                            <span className={`px-2 py-1 text-sm rounded-full ${request.status === 'pending' ? 'bg-yellow-500 text-yellow-900' : request.status === 'approved' ? 'bg-green-500 text-green-900' : 'bg-red-500 text-red-900'}`}>
                                                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                                            </span>
                                            <div className="ml-4 flex space-x-2">
                                                {request.status === 'pending' && (
                                                    <>
                                                        <button className="text-green-500 hover:text-green-600">
                                                            <CheckCircle size={20} />
                                                        </button>
                                                        <button className="text-red-500 hover:text-red-600">
                                                            <XCircle size={20} />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </DashboardLayout>
    )
}

export default Admin
