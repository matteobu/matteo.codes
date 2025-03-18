import Image from 'next/image';
import Link from 'next/link';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { FaGithub } from 'react-icons/fa';
import { Fragment } from 'react';

const Header = () => {
  return (
    <header className="bg-lightblue w-full py-4 px-8 mt-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-3xl font-extrabold">
            <Link href="/">matteo.codes</Link>
          </h1>
        </div>

        <nav className="flex space-x-6">
          <Link
            href="/"
            className="text-xl font-bold hover:text-[var(--light-blue)] cursor-pointer"
          >
            main
          </Link>

          <Menu as="div" className="relative">
            <div>
              <MenuButton className="text-xl font-bold hover:text-[var(--light-blue)] cursor-pointer">
                projects
              </MenuButton>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 w-48 mt-2 origin-center bg-[var(--light-gray)] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-1 border-[var(-border-light)]">
                <div>
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="/whichfilm"
                        className={`${
                          focus
                            ? 'bg-[var(--light-blue)] text-[var(--text-light)]'
                            : 'text-[var(--text-light)]'
                        } block px-4 py-2 text-sm cursor-pointer`}
                      >
                        whichfilm?
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="/table-relationships"
                        className={`${
                          focus
                            ? 'bg-[var(--light-blue)] text-[var(--text-light)]'
                            : 'text-[var(--text-light)]'
                        } block px-4 py-2 text-sm cursor-pointer`}
                      >
                        table rel. plugin
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="/resume"
                        className={`${
                          focus
                            ? 'bg-[var(--light-blue)] text-[var(--text-light)]'
                            : 'text-[var(--text-light)]'
                        } block px-4 py-2 text-sm cursor-pointer`}
                      >
                        my awesome resume
                      </Link>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>

          <Link
            href="/contacts"
            className="text-xl font-bold hover:text-[var(--light-blue)] cursor-pointer"
          >
            about
          </Link>
          <Link
            href="https://github.com/matteobu"
            className="flex items-center text-xl font-bold hover:text-[var(--light-blue)] space-x-2 cursor-pointer"
          >
            <span>github</span>
            <FaGithub className="text-xl" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
