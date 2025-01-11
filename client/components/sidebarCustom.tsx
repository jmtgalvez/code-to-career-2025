"use client";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconAward,
  IconBook2,
  IconHome,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { ChartArea, ShieldIcon, UsersRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function SidebarCustom() {
  const [open, setOpen] = useState(false);

  // Hide Sidebar

  const linksUser = [
    {
      label: "Home",
      href: "/homepage",
      icon: (
        <IconHome className="text-blue-400 dark:text-textColor size-7 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserBolt className="text-blue-400 dark:text-textColor size-7 flex-shrink-0" />
      ),
    },
    {
      label: "Leaderboards",
      href: "/leaderboards",
      icon: (
        <IconAward className="text-blue-400 dark:text-textColor size-7 flex-shrink-0" />
      ),
    },

    {
      label: "Learn",
      href: "/courses",
      icon: (
        <IconBook2 className="text-blue-400 dark:text-textColor size-7 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-blue-400 dark:text-textColor size-7 flex-shrink-0" />
      ),
      //   onClick: handleClickSignOut,
    },
  ]; //Customize links based on user routes

  return (
    <div className="hidden lg:flex min-h-screen">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>{open ? <Logo /> : <LogoIcon />}</>
            <div className="mt-8 flex flex-col gap-2">
              {linksUser.map((link, idx) => (
                <SidebarLink
                  // pl-5
                  className="hover:bg-slate-800 rounded-sm "
                  key={idx}
                  link={link}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <ShieldIcon className="h-8 w-8 text-blue-400" />

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-semibold text-2xl text-blue-400 dark:text-textColor whitespace-pre"
      >
        Globe Connect
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <ShieldIcon className="h-8 w-8 text-blue-400" />
    </Link>
  );
};
