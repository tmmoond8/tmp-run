import Image from "next/image";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { Tabs } from "./Tabs";

const inter = Inter({ subsets: ["latin"] });

export default function BaseLayout({ children }: PropsWithChildren<{}>) {
  return (
    <main className={`flex flex-col ${inter.className}`}>
      <header className="hidden sm:flex Header flex justify-between h-16 items-center px-4">
        <div className="LogoSection h-10 flex items-cent-er">
          <div className="p-2">
            <img
              className="Logo h-6 w-auto"
              src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008394/noticon/ohybolu4ensol1gzqas1.png"
            />
          </div>
          <span>Users Nickname</span>
        </div>
        <div className="Menus flex items-center gap-x-3">
          <span className="text-gray-200">Change Log</span>
          <span className="text-gray-200">Help</span>
          <span className="text-gray-200">Docs</span>
        </div>
      </header>
      <div className="flex justify-center flex-1 ">
        <div className="flex justify-center h-full w-screen max-w-5xl">
          <section className="hidden md:block flex-auto w-56 h-full bg-red-600"></section>
          <section className="flex flex-col flex-auto w-64 max-w-lg h-full bg-gray-900">
            <div className="flex-1">{children}</div>
            <Tabs />
          </section>
        </div>
      </div>
    </main>
  );
}
