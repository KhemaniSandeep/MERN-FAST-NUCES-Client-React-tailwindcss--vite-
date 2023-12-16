
// Navigation.jsx

import React, { useState, useEffect, useRef } from 'react';
import LMS1 from '../assets/LMS1.jpg'
import ME from '../assets/ME.svg'

export default function Navigation({ onSwitchAuthMode }) {
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
    const [isNotificationMenuOpen, setNotificationMenuOpen] = useState(false);

    const profileMenuRef = useRef(null);
    const notificationMenuRef = useRef(null);

    // handling of dropdown menus when clicked anywhere on a page
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                profileMenuRef.current &&
                !profileMenuRef.current.contains(event.target)
            ) {
                setProfileMenuOpen(false);
            }

            if (
                notificationMenuRef.current &&
                !notificationMenuRef.current.contains(event.target)
            ) {
                setNotificationMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen);
        setNotificationMenuOpen(false);
    };

    const toggleNotificationMenu = () => {
        setNotificationMenuOpen(!isNotificationMenuOpen);
        setProfileMenuOpen(false);
    };
    return (
        <nav className="bg-gray-800 shadow-md rounded-full mt-1.5 ml-1 mr-1 fixed inset-x-0 top-0 z-20">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    {/* Mobile menu button*/}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            <svg
                                className="hidden h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Logo and page items */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className=" ml-3 mr-5 flex flex-shrink-0 items-center ">
                            <img
                                className="h-10 w-auto rounded-full "
                                src={LMS1}
                                alt="LMS Portal"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <a
                                    href="#"
                                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                >
                                    Products
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                >
                                    Check List
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                >
                                    About
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Login and sign up buttons */}
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">

                            <div className=" hidden sm:block">
                                <button className="text-gray-300 mr-3 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                onClick={() => onSwitchAuthMode('login')}>
                                    Login
                                </button>
                                <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                onClick={() => onSwitchAuthMode('signup')}>
                                    Sign Up
                                </button>

                            </div>
                        </div>
                    </div>

                     {/* Notification dropdown */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative ml-0 mr-3" ref={notificationMenuRef}>
                            <button
                                type="button"
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                onClick={toggleNotificationMenu}
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                    />
                                </svg>
                            </button>
                            {isNotificationMenuOpen && (
                                <div
                                    className="absolute right-1.5 z-10 mt-2 w-96 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition duration-300"
                                    role="menu"
                                    tabIndex={-1}
                                >
                                    {/* Your Notification List */}
                                    <ul role="list" className="divide-y divide-gray-100 ml-5 mr-5 " >
                                        <li className="flex justify-between gap-x- py-5">
                                            <div className="flex min-w-0 gap-x-4">
                                                <img
                                                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                                        Leslie Alexander
                                                    </p>
                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                                        leslie.alexander@example.com
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p className="text-sm leading-6 text-gray-900">Co-Founder / CEO</p>
                                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                                    Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex justify-between gap-x-6 py-5">
                                            <div className="flex min-w-0 gap-x-4">
                                                <img
                                                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                                        Michael Foster
                                                    </p>
                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                                        michael.foster@example.com
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p className="text-sm leading-6 text-gray-900">Co-Founder / CTO</p>
                                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                                    Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex justify-between gap-x-6 py-5">
                                            <div className="flex min-w-0 gap-x-4">
                                                <img
                                                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                                        Dries Vincent
                                                    </p>
                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                                        dries.vincent@example.com
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p className="text-sm leading-6 text-gray-900">Business Relations</p>
                                                <div className="mt-1 flex items-center gap-x-1.5">
                                                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                    </div>
                                                    <p className="text-xs leading-5 text-gray-500">Online</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex justify-between gap-x-6 py-5">
                                            <div className="flex min-w-0 gap-x-4">
                                                <img
                                                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                                        Lindsay Walton
                                                    </p>
                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                                        lindsay.walton@example.com
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p className="text-sm leading-6 text-gray-900">Front-end Developer</p>
                                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                                    Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex justify-between gap-x-6 py-5">
                                            <div className="flex min-w-0 gap-x-4">
                                                <img
                                                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                                        Courtney Henry
                                                    </p>
                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                                        courtney.henry@example.com
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p className="text-sm leading-6 text-gray-900">Designer</p>
                                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                                    Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex justify-between gap-x-6 py-5">
                                            <div className="flex min-w-0 gap-x-4">
                                                <img
                                                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                                        Tom Cook
                                                    </p>
                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                                        tom.cook@example.com
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p className="text-sm leading-6 text-gray-900">Director of Product</p>
                                                <div className="mt-1 flex items-center gap-x-1.5">
                                                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                    </div>
                                                    <p className="text-xs leading-5 text-gray-500">Online</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>


                                </div>
                            )}


                        </div>

                        {/* Profile dropdown */}
                        <div className="relative ml-3" ref={profileMenuRef}>
                            <div>
                                <button
                                    type="button"
                                    className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button"
                                    aria-expanded={isProfileMenuOpen}
                                    aria-haspopup="true"
                                    onClick={toggleProfileMenu}
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src={ME}
                                        alt=""
                                    />
                                </button>
                            </div>
                            {isProfileMenuOpen && (
                                <div
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition duration-300"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                    tabIndex={-1}
                                >
                                    {/* Active: "bg-gray-100", Not Active: "" */}
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700"
                                        role="menuitem"
                                        tabIndex={-1}
                                        id="user-menu-item-0"
                                    >
                                        Your Profile
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700"
                                        role="menuitem"
                                        tabIndex={-1}
                                        id="user-menu-item-1"
                                    >
                                        Settings
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700"
                                        role="menuitem"
                                        tabIndex={-1}
                                        id="user-menu-item-2"
                                    >
                                        Sign out
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a
                        href="#"
                        className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                        aria-current="page"
                    >
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Team
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Projects
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Calendar
                    </a>
                </div>
            </div>
        </nav>

    );
}






