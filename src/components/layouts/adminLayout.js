/* This example requires Tailwind CSS v2.0+ */

import React, { Fragment, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react/dist";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import Logo from "../../assets/img/logo_white.svg";

import "../../assets/css/app.css";
import "../../assets/css/custom.css";
import "../../assets/fonts/Inter-roman.var.woff2";

import { adminNavItem } from "../../Config";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
var navigation = [
  {
    name: "Dashboard",
    href: "/home",
    current: true,
    subMenu: false,
  },
  {
    name: "Users",
    href: "/blogs",
    current: false,
    subMenu: true,
    subMenuItem: [
      { name: "Create User", href: "#" },
      { name: "All Users", href: "/all-users" },
    ],
  },
  { name: "Microfranchises", href: "/contact", current: false, subMenu: false },
  { name: "Transactions", href: "/contact", current: false, subMenu: false },
];
var userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminLayout(props) {
  const [navItem, setNavItem] = useState(navigation);

  return (
    <Fragment>
      <div className="min-h-full">
        <div className="bg-gray-800 pb-32">
          <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <div className="border-b border-gray-700">
                    <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-8 w-4rem"
                            src={Logo}
                            alt="Workflow"
                          />
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {navItem.map((item, index) =>
                              item.subMenu ? (
                                <Menu as="div" className="ml-3 relative">
                                  <div>
                                    <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                      <span className="sr-only">
                                        Open user menu
                                      </span>
                                      <a
                                        className={classNames(
                                          item.current
                                            ? "bg-gray-900 text-white b-bottom-1"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                          "px-3 py-2 text-sm font-medium d-flex"
                                        )}
                                        aria-current={
                                          item.current ? "page" : undefined
                                        }
                                      >
                                        {item.name}
                                        <ChevronDownIcon className="chevrondownicon" />
                                      </a>
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
                                    <Menu.Items className="b-left-2 origin-top-right absolute mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                      {item.subMenuItem.map((item) => (
                                        <Menu.Item key={item.name}>
                                          {({ active }) => (
                                            <Link
                                              to={item.href}
                                              onClick={() => {
                                                var shallowNavitem = [
                                                  ...navItem,
                                                ];
                                                var shallowNavitemInvert = shallowNavitem.filter(
                                                  (i) => {
                                                    if (i.current == true) {
                                                      i.current = false;
                                                    }
                                                    return i;
                                                  }
                                                );
                                                let shallowItem = {
                                                  ...shallowNavitemInvert[
                                                    index
                                                  ],
                                                  current: true,
                                                };

                                                shallowNavitem[
                                                  index
                                                ] = shallowItem;
                                                setNavItem(shallowNavitem);
                                              }}
                                              key={item.name}
                                              className={classNames(
                                                active ? "bg-gray-100" : "",
                                                "block px-4 py-2 text-sm text-gray-700 hover"
                                              )}
                                            >
                                              {item.name}
                                            </Link>
                                          )}
                                        </Menu.Item>
                                      ))}
                                    </Menu.Items>
                                  </Transition>
                                </Menu>
                              ) : (
                                <Link
                                  to={item.href}
                                  onClick={() => {
                                    var shallowNavitem = [...navItem];
                                    var shallowNavitemInvert = shallowNavitem.filter(
                                      (i) => {
                                        if (i.current == true) {
                                          i.current = false;
                                        }
                                        return i;
                                      }
                                    );
                                    let shallowItem = {
                                      ...shallowNavitemInvert[index],
                                      current: true,
                                    };

                                    shallowNavitem[index] = shallowItem;
                                    setNavItem(shallowNavitem);
                                  }}
                                  key={item.name}
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-900 text-white b-bottom-1"
                                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                    "px-3 py-2  text-sm font-medium"
                                  )}
                                  aria-current={
                                    item.current ? "page" : undefined
                                  }
                                >
                                  {item.name}
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          <button
                            type="button"
                            className="relative bg-gray-800 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                          >
                            <span className="sr-only">View notifications</span>
                            <div className="BellNofic"></div>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>

                          {/* Profile dropdown */}
                          <Menu as="div" className="ml-3 relative">
                            <div>
                              <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
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
                              <Menu.Items className="b-right-2 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <MenuIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                  <div className="px-2 py-3 space-y-1 sm:px-3">
                    {navItem.map((item, index) =>
                      !item.subMenu ? (
                        <Link
                          to={item.href}
                          onClick={() => {
                            var shallowNavitem = [...navItem];
                            var shallowNavitemInvert = shallowNavitem.filter(
                              (i) => {
                                if (i.current == true) {
                                  i.current = false;
                                }
                                return i;
                              }
                            );
                            let shallowItem = {
                              ...shallowNavitemInvert[index],
                              current: true,
                            };

                            shallowNavitem[index] = shallowItem;
                            setNavItem(shallowNavitem);
                          }}
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white b-bottom-1"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2   d-block"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <Menu as="div" className="relative">
                          <div>
                            <Menu.Button className="width-100 bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <a
                                className={classNames(
                                  item.current
                                    ? "bg-gray-900 text-white b-bottom-1"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                  "px-3 py-2 text-sm font-medium d-flex width-100"
                                )}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                                <ChevronDownIcon className="chevrondownicon" />
                              </a>
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
                            <Menu.Items className="b-left-2 origin-top-right absolute mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {item.subMenuItem.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <a
                                      onClick={() => {
                                        var shallowNavitem = [...navItem];
                                        var shallowNavitemInvert = shallowNavitem.filter(
                                          (i) => {
                                            if (i.current == true) {
                                              i.current = false;
                                            }
                                            return i;
                                          }
                                        );
                                        let shallowItem = {
                                          ...shallowNavitemInvert[index],
                                          current: true,
                                        };

                                        shallowNavitem[index] = shallowItem;
                                        setNavItem(shallowNavitem);
                                      }}
                                      key={item.name}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700 hover"
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      )
                    )}
                  </div>
                  <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-white">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium leading-none text-gray-400">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto bg-gray-800 flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 px-2 space-y-1">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="bg-baceColor rounded-lg shadow px-5 py-6 sm:px-6">
              <Outlet />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </Fragment>
  );
}
