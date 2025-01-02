import React from 'react'
import DashboardLayout from "@/components/layout/dashboard-layout";

const Requests = () => {
    return (
       <DashboardLayout>
           <div className='p-6'>
                <h1 className="text-2xl font-bold">Requests</h1>
                <p>Here you can manage and view requests.</p>
           </div>
       </DashboardLayout>
    )
}
export default Requests
