import Sidebar from './sidebar';
import Header from './header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Full-width Header */}
            <Header />

            {/* Sidebar and Main Content */}
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
}
