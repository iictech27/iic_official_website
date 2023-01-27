import { Listbox, Transition } from "@headlessui/react";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { Fragment, useState } from "react";

const modes = [{ name: "light" }, { name: "dark" }, { name: "system" }];

export default function ModeToggle() {
  const [selected, setSelected] = useState(modes[0]);
  const { theme, setTheme } = useTheme();
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative flex cursor-default rounded-lg border-2 bg-white p-2 text-left text-black focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white sm:text-sm">
          {theme === "light" ? (
            <SunIcon className="h-5 w-5" aria-hidden="true" />
          ) : theme === "dark" ? (
            <MoonIcon className="h-5 w-5" aria-hidden="true" />
          ) : theme === "system" ? (
            <ComputerDesktopIcon className="h-5 w-5" aria-hidden="true" />
          ) : null}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute right-0 mt-1 max-h-60 w-28 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {modes.map((mode, modeIdx) => (
              <Listbox.Option
                key={modeIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-zinc-100 text-zinc-900" : "text-gray-900"
                  }`
                }
                onClick={() => setTheme(`${mode.name}`)}
                value={mode}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {mode.name === "light"
                        ? "Light"
                        : mode.name === "dark"
                        ? "Dark"
                        : "System"}
                    </span>
                    {mode.name === "light" ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-600">
                        <SunIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : mode.name === "dark" ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-600">
                        <MoonIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : mode.name === "system" ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-600">
                        <ComputerDesktopIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
