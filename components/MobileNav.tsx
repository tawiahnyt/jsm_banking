/** @format */

<<<<<<< HEAD
'use client'
=======
"use client";
>>>>>>> 296cf462311a6519f7b26acbf2700501e4b83173

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
<<<<<<< HEAD

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname()
=======
import Footer from "./Footer";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
>>>>>>> 296cf462311a6519f7b26acbf2700501e4b83173
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
<<<<<<< HEAD
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className="cursor-pointer items-center gap-1 flex px-4"
=======
        <SheetContent side="left" className="border-none bg-white p-4">
          <Link
            href="/"
            className="cursor-pointer items-center gap-2 flex"
>>>>>>> 296cf462311a6519f7b26acbf2700501e4b83173
          >
            <Image
              src={"/icons/logo.svg"}
              width={34}
              height={34}
              alt="Horizon Logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
<<<<<<< HEAD
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
=======
              <nav className="flex h-full flex-col gap-6 pt-10 text-white">
>>>>>>> 296cf462311a6519f7b26acbf2700501e4b83173
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
<<<<<<< HEAD
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />
=======
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
>>>>>>> 296cf462311a6519f7b26acbf2700501e4b83173
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "!text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
<<<<<<< HEAD

                USER
              </nav>
            </SheetClose>

            FOOTER
=======
                USER
              </nav>
            </SheetClose>
            <Footer user={user} type='mobile' />
>>>>>>> 296cf462311a6519f7b26acbf2700501e4b83173
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
