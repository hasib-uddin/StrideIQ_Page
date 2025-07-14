'use client'

import { useState, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    Popover,
    PopoverGroup,
    Transition,
    Dialog,
    Disclosure,
    DisclosureButton,
    DisclosurePanel
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon,
    ChartBarIcon,
    CreditCardIcon
} from '@heroicons/react/24/outline'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white w-[100%] fixed top-0 left-0 z-1000 border-b">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <Image
                            src="/img/logo.png"
                            alt="Your Company"
                            width={70}
                            height={70}
                            className="w-auto h-[40px]"
                        />
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex md:hidden px-8">
                    {mobileMenuOpen ? (
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    ) : (
                       
                         <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <Bars3Icon className="h-6 w-6" />
                        </button>
                    )}



                </div>

                {/* Desktop Nav */}
                <PopoverGroup className="hidden lg:flex lg:gap-x-12 ">
                    <Link href="/" className="text-sm font-semibold text-gray-900">
                        Home
                    </Link>

                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <Popover.Button className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                                    Products
                                    <ChevronDownIcon className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                                </Popover.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute z-10 mt-3 w-[350px] rounded-md bg-white shadow-lg ring-1 ring-gray-200">
                                        <div className="py-1 px-4 space-y-2">
                                            <div className="flex items-start gap-3 rounded-xl hover:bg-gray-50  p-2">
                                                <div className="bg-gray-100 p-2 rounded-xl">
                                                    <CreditCardIcon className="h-5 w-5 text-gray-600" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-900 hover:text-orange-600">Corporate Card</p>
                                                    <p className="text-sm text-gray-500">Smart business cards for your team</p>
                                                </div>
                                            </div>

                                            {/* Expense Management */}
                                            <div className="flex items-start gap-3 rounded-xl hover:bg-gray-50 p-3 transition">
                                                <div className="bg-gray-100 p-2 rounded-xl">
                                                    <ChartBarIcon className="h-5 w-5 text-gray-600" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-900 hover:text-orange-600">Expense Management</p>
                                                    <p className="text-sm text-gray-500">Track and manage business expenses</p>
                                                </div>
                                            </div>

                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                </PopoverGroup>

                <div className="hidden md:flex md:flex-1 md:justify-end">
                    <button type="button" class="text-gray-900 bg-gradient-to-r from-[#f64c00]  via-[#f64c00] to-[#ff8300] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2 text-center">Join WaitList</button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="" />
                <Dialog.Panel className="fixed z-50 w-full bg-white p-6">
                   
                    <div className="mt-6 space-y-4">
                        <Link href="/" className="block text-base font-semibold text-gray-900">Home</Link>

                        {/* Mobile dropdown */}
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <DisclosureButton className="flex w-full items-center justify-between text-base font-semibold text-gray-900 py-2">
                                        Products
                                        <ChevronDownIcon className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
                                    </DisclosureButton>
                                    <DisclosurePanel className="pl-4 space-y-2">
                                        <div className="py-1 px-4 space-y-2">
                                            <div className="flex items-start gap-3 rounded-xl hover:bg-gray-50  p-2">
                                                <div className="bg-gray-100 p-2 rounded-xl">
                                                    <CreditCardIcon className="h-5 w-5 text-gray-600" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-900 hover:text-orange-600">Corporate Card</p>
                                                    <p className="text-sm text-gray-500">Smart business cards for your team</p>
                                                </div>
                                            </div>

                                            {/* Expense Management */}
                                            <div className="flex items-start gap-3 rounded-xl hover:bg-gray-50 p-3 transition">
                                                <div className="bg-gray-100 p-2 rounded-xl">
                                                    <ChartBarIcon className="h-5 w-5 text-gray-600" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-900 hover:text-orange-600">Expense Management</p>
                                                    <p className="text-sm text-gray-500">Track and manage business expenses</p>
                                                </div>
                                            </div>

                                        </div>

                                    </DisclosurePanel>
                                </>
                            )}
                        </Disclosure>

                        <button type="button" class="text-gray-900 bg-gradient-to-r from-[#f64c00]  via-[#f64c00] to-[#ff8300] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2 text-center">Join WaitList</button>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}


