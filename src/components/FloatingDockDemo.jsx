import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About",
      icon: (
        <IconTerminal2 className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Service",
      icon: (
        <IconNewSection className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/service",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="z-50 flex items-center justify-center w-full ">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="fixed left-2 bottom-10 translate-y-0 z-50"
        desktopClassName="fixed bottom-5 translate-y-0 z-[99999]"
        items={links}
      />
    </div>
  );
}
