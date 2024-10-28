/* eslint-disable @next/next/no-html-link-for-pages */
import Logo from "@/components/core/Logo";
import MobileNav from "@/components/layout/MobileNav";
import ModeToggle from "@/components/ModeToggle";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/outline"; 

const navigation = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Activity", href: "/activity" },
  { name: "Startup", href: "/startup" },
  { name: "Gallery", href: "/gallery" },
  { name: "Faculty", href: "/faculty" },
  { name: "Alumni", href: "/alumni" },
  { name: "Contact", href: "/contact" },
  { name: "Partners", href: "/partner" },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 bg-white shadow dark:bg-black sm:bg-transparent sm:shadow-sm sm:backdrop-blur-md dark:sm:bg-transparent" style={{ marginTop: "-8rem" }}>
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-6 sm:p-0 sm:py-3"
        aria-label="Global"
      >
        <div className="flex lg:min-w-0" aria-label="Global">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">IIC TMSL</span>
            <Logo className="h-7 w-auto text-[#0A1E59] dark:text-white" />
          </a>
        </div>
        <div className="flex space-x-4 lg:hidden">
          <ModeToggle />
          <MobileNav navigation={navigation} />
        </div>
        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition-colors duration-150 ease-linear hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300 pt-3"
            >
              {item.name === "T-shirts" ? (
                <span className="bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent">{item.name}</span>
              ) : (item.name)}
            </Link>
          ))}

          <Link href="/countdown">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Hackathon
            </button>
          </Link>
        </div>
        <div className="hidden lg:flex lg:min-w-0 lg:justify-end items-center space-x-4">
  <ModeToggle />

  <Link href="/account">
    <div className="flex items-center justify-center w-8 h-8 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-md mr-0"> {/* Added mr-2 for margin-right */}
      <UserCircleIcon className="w-5 h-5 text-gray-700 dark:text-white" />
    </div>
  </Link>
</div>
      </nav>
    </div>
  );
}
