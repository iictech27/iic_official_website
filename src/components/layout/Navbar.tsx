/* eslint-disable @next/next/no-html-link-for-pages */
import Logo from "@/components/core/Logo";
import MobileNav from "@/components/layout/MobileNav";
import ModeToggle from "@/components/ModeToggle";
import Link from "next/link";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Activity", href: "/activity" },
  { name: "Startup", href: "/startup" },
  { name: "Gallery", href: "/gallery" },
  { name: "Faculty", href: "/faculty" },
  { name: "Alumni", href: "/alumni" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 bg-white shadow dark:bg-black sm:bg-transparent sm:shadow-sm sm:backdrop-blur-md dark:sm:bg-transparent">
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
              className="text-sm font-medium text-zinc-600 transition-colors duration-150 ease-linear hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:min-w-0 lg:justify-end">
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
