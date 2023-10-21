import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex flex-col ${inter.className}`}>
      <header className="Header flex justify-between h-16 items-center px-4">
        <div className="LogoSection h-10 flex items-center">
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
      <div className="flex justify-center flex-1 bg-red-400">
        <div className="flex h-full w-screen max-w-5xl bg-slate-400">
          <section className="flex-auto w-56 h-full bg-red-600"></section>
          <section className="flex-auto w-64 h-full bg-red-200"></section>
        </div>
      </div>
    </main>
  );
}
