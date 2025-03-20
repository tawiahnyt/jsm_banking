/** @format */

import Sidebar from "@/components/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "tawiah", lastname: 'in4k' };
  return (
    <main className='flex h-screen w-full font-inter'>
        <Sidebar user={loggedIn} />
        {children}
    </main>
  );
}
