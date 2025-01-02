import DashboardLayout from '@/components/layout/dashboard-layout';

export default function EventsPage() {
    return (
        <DashboardLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold">Events</h1>
                <p>Here you can manage and view events.</p>
            </div>
        </DashboardLayout>
    );
}
