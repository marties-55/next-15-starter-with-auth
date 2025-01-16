"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoSettingsOutline } from "react-icons/io5";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import { sidebarMenuData } from "../../../constan/generalData";
import { Separator } from "../ui/separator";
import { Toggle } from "../ui/toggle";
import { ToggleTheme } from "./toggle-theme";

export function SidebarComponents() {
  const path = usePathname();
  const isMobile = useIsMobile();
  type Role = "user" | "admin" | "superadmin";
  const role: Role = "superadmin";
  const { open, setOpen, setOpenMobile, openMobile } = useSidebar();

  const dontShowingOn = ["login", "register"];
  return (
    !dontShowingOn.some((segment) => path.includes(segment)) && (
      <Sidebar collapsible={isMobile ? "offcanvas" : "icon"}>
        <SidebarHeader className="flex flex-row items-center w-full">
          <div className="w-full  group-data-[collapsible=icon]:hidden">
            <Image
              src={"/assets/logo.PNG"}
              alt="logo-default-examps"
              height={100}
              width={200}
              className="my-2 h-8 w-fit mx-auto "
            />
          </div>
          <Toggle
            onClick={() => {
              setOpen(!open);
              setOpenMobile(!openMobile);
            }}
            className="w-fit"
          >
            {!open ? (
              <TbLayoutSidebarRightCollapse />
            ) : (
              <TbLayoutSidebarLeftCollapse />
            )}
          </Toggle>
        </SidebarHeader>
        <Separator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarMenuData
                  .filter((acces) => acces.roleAcces.includes(role))
                  .map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={path == item.url}>
                        <a href={item.url}>
                          <span>{item.icon}</span>
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                      <SidebarMenuAction className="peer-data-[active=true]/menu-button:opacity-100 " />
                    </SidebarMenuItem>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/admin/setting">
                      <span>
                        <IoSettingsOutline />
                      </span>
                      <span>Setting</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup className="relative mt-auto px-0">
            <SidebarGroupLabel>Theme</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="group-data-[state=open]:"
                  >
                    <ToggleTheme />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  );
}
