/** @format */

import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
<<<<<<< HEAD
import Image from "next/image";
=======
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";
>>>>>>> 296cf462311a6519f7b26acbf2700501e4b83173


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
<<<<<<< HEAD
  const loggedIn = { firstName: "tawiah", lastname: "in4k" };

=======
  const loggedIn = await getLoggedInUser()

  if (!loggedIn) redirect('/')
>>>>>>> 296cf462311a6519f7b26acbf2700501e4b83173
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
<<<<<<< HEAD
          <Image src={"/icons/logo.svg"} width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>{" "}
=======
          <Image
            src={"/icons/logo.svg"}
            width={30}
            height={30}
            alt="menu icon"
          />
          <div>
            <MobileNav user={loggedIn} />
          </div>
>>>>>>> 296cf462311a6519f7b26acbf2700501e4b83173
        </div>
        {children}
      </div>
    </main>
  );
}
