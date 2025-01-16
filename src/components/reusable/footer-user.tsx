"use client";
import { usePathname } from "next/navigation";
import { LuCopyright } from "react-icons/lu";

export const FooterUser = () => {
  const path = usePathname();
  return ["dashboard"].some((segment) => path.includes(segment)) ? (
    <footer className="md:h-96 h-44 border-t border-muted">
      <div className="md:max-w-[80vw]  mx-auto md:p-8 p-4 h-full flex flex-col">
        About
        <div className="flex items-center space-x-2 text-sm mx-auto mt-auto bottom-0 relative w-fit text-muted-foreground">
          <LuCopyright />
          <p className="font-medium md:text-base text-[11px]">
            Eaxamps 2024 • All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  ) : (
    ""
  );
};
