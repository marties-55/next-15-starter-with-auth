"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePathname } from "next/navigation";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import { useSidebar } from "../ui/sidebar";
import { Toggle } from "../ui/toggle";

export const Header = () => {
  const isMobile = useIsMobile();
  const path = usePathname();
  const { openMobile, setOpenMobile } = useSidebar();
  const dontShowingOn = ["login", "register"];
  return (
    !dontShowingOn.some((segment) => path.includes(segment)) && (
      <header className="h-12 bg-sidebar">
        header
        {isMobile && (
          <Toggle onClick={() => setOpenMobile(!openMobile)} className="w-fit">
            {!open ? (
              <TbLayoutSidebarRightCollapse />
            ) : (
              <TbLayoutSidebarLeftCollapse />
            )}
          </Toggle>
        )}
      </header>
    )
  );
};
