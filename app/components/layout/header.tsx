import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

 // Logo image for the left side
import userProfile from "../../public/user-profile.jpg"; // Replace with your actual user profile image
import Image from "next/image";

function Header() {
    return (
        <header className="flex items-center justify-between p-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-lg">
            <div className="flex items-center space-x-2">
                {/*<Image src={photo} height={30} alt="Logo" className="w-6 h-6" />*/}
                <span className="text-lg font-semibold">Fellowship Prayers</span>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
                        {/* User profile image on the right */}
                        {/*<Image*/}
                        {/*    src={userProfile}*/}
                        {/*    alt="User Profile"*/}
                        {/*    className="w-6 h-6 rounded-full"*/}
                        {/*    width={24}*/}
                        {/*    height={24}*/}
                        {/*/>*/}
                        <span className="sr-only">Open User Menu</span>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 mt-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg rounded-lg">
                    <DropdownMenuLabel className="px-4 py-2 font-semibold">
                        My Account
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}

export default Header;
