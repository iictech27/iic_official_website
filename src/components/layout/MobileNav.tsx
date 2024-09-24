import type { NavigationProps } from "@/types/nav";
import { Dialog, Transition } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

export default function MobileNav({
  navigation,
}: {
  navigation: NavigationProps[];
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  /* Closing the menu when the route changes. */
  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars2Icon className="h-7 w-7" aria-hidden="true" />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-24">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl dark:bg-zinc-900">
                      <div className="flex-1 overflow-y-auto py-6 px-8">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                            Menu
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-zinc-700"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-7 w-7"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list" className="">
                              {navigation.map((item) => (<>
                                <Link
                                key={item.name}
                                href={item.href}
                                className="-mx-3 block rounded-lg py-4 px-3 text-2xl font-semibold leading-7 text-zinc-900 hover:bg-zinc-400/10 dark:text-zinc-100"
                                >
                                {item.name === "T-shirts" ? (
                                  <span className="bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent">{item.name}</span>
                                ):(item.name)}              
                              </Link>
                              </>))}
                              <Link href="/countdown"><button type="button"  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 text-xl dark:focus:ring-purple-800 font-medium rounded-lg  px-3 py-2.5 text-center me-2 mb-2">Hackathon</button></Link>
                          {/* <Link href="/TShirtStore">   <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">T-Shirts</button></Link> */}

                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
