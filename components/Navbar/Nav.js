import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, MoonIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useTheme } from "next-themes";

const themes = ["halloween", "light", "luxury", "corporate", "forest"];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = (props) => {
  const { theme, setTheme } = useTheme();
  const [activeNavigation, setActiveNavigation] = useState([
    { name: "Profile", href: "#", current: true },
    { name: "Experience", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Abilities", href: "#", current: false },
  ]);

  useEffect(() => {
    setActiveNavigation([
      { name: "Profile", href: "#", current: props.isProfileVisible },
      { name: "Abilities", href: "#", current: props.isAbilitiesVisible },
      { name: "Experience", href: "#", current: props.isExperienceVisible },
      { name: "Projects", href: "#", current: props.isProjectsVisible },
    ]);
  }, [
    props.isProfileVisible,
    props.isAbilitiesVisible,
    props.isExperienceVisible,
    props.isProfileVisible,
  ]);

  return (
    <Disclosure
      as="nav"
      style={{ fontFamily: "Ubuntu Mono" }}
      className="sticky top-0 bg-base-100"
    >
      {({ open }) => (
        <>
          <div className=" px-2 lg:px-8 mx-auto" style={{ maxWidth: "1600px" }}>
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-base-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
                <div className="flex-shrink-0 flex xl:mr-auto rounded-box bg-primary">
                  <h1
                    className=" font-extrabold text-2xl text-primary-content px-2"
                    style={{ fontFamily: "Orbitron" }}
                  >
                    H
                  </h1>
                </div>
                <div className="hidden lg:block  ml-auto lg:ml-auto">
                  <div className="flex space-x-4">
                    {activeNavigation?.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "border-b-2 border-primary text-primary"
                            : "text-md hover:text-primary-focus"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3">
                  <div>
                    <Menu.Button className="flex text-sm rounded-full hover:bg-base-300 p-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current lg:mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        ></path>
                      </svg>
                      <h1 className="text-center text-xl hidden lg:flex">
                        Change Theme
                      </h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1792 1792"
                        className="inline-block w-4 h-4 ml-1 fill-current mt-2"
                      >
                        <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
                      </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg py-1 bg-base-300 p-4 flex flex-col">
                      {themes.map((themeName) => (
                        <Menu.Item key={themeName}>
                          {({ active }) => (
                            <button
                              className={
                                theme === themeName
                                  ? "bg-primary-focus rounded-box text-left px-2 p-1 text-primary-content m-1 "
                                  : " text-left px-2 p-1 m-1"
                              }
                              onClick={() => setTheme(themeName)}
                            >
                              {themeName}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className=" lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
              {activeNavigation?.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "border-b-2 border-primary  text-primary"
                      : "text-md hover:text-primary-focus",
                    "px-3 font-medium w-auto"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
