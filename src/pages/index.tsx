import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ul className="py-4 px-6">
        <li>
          <Link href="/ihome" passHref>
            ihome
          </Link>
        </li>
        <li>
          <Link href="/calendar" passHref>
            calendar
          </Link>
        </li>
      </ul>
    </main>
  );
}
