import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home, Pen, PersonStandingIcon, Settings } from "lucide-react"
import { Link } from "react-router-dom"

const AppSidebar = () => {

    const items = [
        {
            title: "Home",
            url: "#",
            icon: Home,
        },
        {
            title: "About",
            url: "#",
            icon: PersonStandingIcon,
        },
        {
            title: "All Blogs",
            url: "#",
            icon: Pen,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
    ]

    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Blogging Site</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar