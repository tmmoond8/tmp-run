import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex flex-col ${inter.className} p-20`}>
      <Link href="/calendar">calendar</Link>
      <Link href="/ihome">ihome</Link>
    </main>
  );
}
