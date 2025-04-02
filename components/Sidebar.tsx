/** @format */

"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
<<<<<<< HEAD
=======
import Footer from "./Footer";
>>>>>>> 296cf462311a6519f7b26acbf2700501e4b83173

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
<<<<<<< HEAD
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
=======
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2 flex">
>>>>>>> 296cf462311a6519f7b26acbf2700501e4b83173
          <Image
            src={"/icons/logo.svg"}
            width={34}
            height={34}
<<<<<<< HEAD
            alt="Horizon Logo"
=======
            alt="Horizon logo"
>>>>>>> 296cf462311a6519f7b26acbf2700501e4b83173
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
<<<<<<< HEAD

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
=======
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

>>>>>>> 296cf462311a6519f7b26acbf2700501e4b83173
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
<<<<<<< HEAD
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p className={cn('sidebar-label', {'!text-white': isActive} )}>{item.label}</p>
            </Link>
          );
        })}

        USER
      </nav>

      FOOTER
=======
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}
        
        USER
      </nav>
      <Footer user={user}/>
>>>>>>> 296cf462311a6519f7b26acbf2700501e4b83173
    </section>
  );
};

export default Sidebar;
