import Footer from '@/components/App/Footer'
import Sidebar from '@/components/App/AppSidebar'
import TopBar from '@/components/App/TopBar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <>
            <SidebarProvider>
                <Sidebar />
                <main>
                    <TopBar />
                    <Outlet />
                    <Footer />
                </main>
            </SidebarProvider>
        </>
    )
}

export default AppLayout