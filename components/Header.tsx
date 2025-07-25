import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TbMoodCrazyHappyFilled } from 'react-icons/tb';

import { RxHamburgerMenu } from 'react-icons/rx';

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { Fragment } from 'react';

const Header = () => {
  return (
    <header className="bg-lightblue w-full py-4 px-8 mt-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-3xl font-extrabold hidden md:block">
            <Link href="/">matteo.codes</Link>
          </h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="text-xl font-bold hover:text-[var(--light-blue)] cursor-pointer"
          >
            main
          </Link>

          <Menu as="div" className="relative">
            <MenuButton className="text-xl font-bold hover:text-[var(--light-blue)] cursor-pointer">
              projects
            </MenuButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 w-48 mt-2 origin-center bg-[var(--light-gray)] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-1 border-[var(--border-light)]">
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
                      href="/tree"
                      className={`${
                        focus
                          ? 'bg-[var(--light-blue)] text-[var(--text-light)]'
                          : 'text-[var(--text-light)]'
                      } block px-4 py-2 text-sm cursor-pointer`}
                    >
                      tree plugin
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
              </MenuItems>
            </Transition>
          </Menu>

          <Link
            href="mailto:matteo.codes@pm.me"
            className="flex items-center text-xl font-bold hover:text-[var(--light-blue)] space-x-2 cursor-pointer"
          >
            <FaEnvelope className="text-xl " />
          </Link>
          <Link
            href="https://github.com/matteobu"
            className="flex items-center text-xl font-bold hover:text-[var(--light-blue)] space-x-2 cursor-pointer"
          >
            <FaGithub className="text-xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/matteo-bucciol/"
            className="flex items-center text-xl font-bold hover:text-[var(--light-blue)] space-x-2 cursor-pointer"
          >
            <FaLinkedin className=" text-xl" />
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=sWblpsLZ-O8&ab_channel=lftkryo"
            className="flex items-center text-xl font-bold hover:text-[var(--light-blue)] space-x-2 cursor-pointer"
          >
            <TbMoodCrazyHappyFilled className=" text-xl" />
          </Link>
          <Menu as="div" className="relative">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 w-48 mt-2 origin-center bg-[var(--light-gray)] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-1 border-[var(--border-light)]">
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
                      href="/tree"
                      className={`${
                        focus
                          ? 'bg-[var(--light-blue)] text-[var(--text-light)]'
                          : 'text-[var(--text-light)]'
                      } block px-4 py-2 text-sm cursor-pointer`}
                    >
                      tree plugin
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
              </MenuItems>
            </Transition>
          </Menu>
        </div>

        {/* Mobile Navigation using Menu for hamburger */}
        <div className="md:hidden">
          <Menu as="div" className="relative">
            <MenuButton className="text-3xl">
              <span className="material-icons">
                <RxHamburgerMenu />
              </span>{' '}
              {/* Hamburger icon */}
            </MenuButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 w-48 mt-2 origin-center bg-[var(--light-gray)] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-1 border-[var(--border-light)]">
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      href="/"
                      className={`${
                        focus
                          ? 'bg-[var(--light-blue)] text-[var(--text-light)]'
                          : 'text-[var(--text-light)]'
                      } block px-4 py-2 text-sm cursor-pointer`}
                    >
                      main
                    </Link>
                  )}
                </MenuItem>
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
                      p: whichfilm
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
                      p: t.r.plugin
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      href="/tree"
                      className={`${
                        focus
                          ? 'bg-[var(--light-blue)] text-[var(--text-light)]'
                          : 'text-[var(--text-light)]'
                      } block px-4 py-2 text-sm cursor-pointer`}
                    >
                      p: tree plugin
                    </Link>
                  )}
                </MenuItem>
                <div className="flex items-center justify-between py-2 ">
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="mailto:matteo.codes@pm.me"
                        className={`${
                          focus
                            ? 'bg-[var(--light-blue)] text-[var(--text-light)]'
                            : 'text-[var(--text-light)]'
                        } block px-4 py-2 text-sm cursor-pointer`}
                      >
                        <FaEnvelope className="text-xl " />
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="https://github.com/matteobu"
                        className={`${
                          focus
                            ? 'bg-[var(--light-blue)] text-[var(--text-light)]'
                            : 'text-[var(--text-light)]'
                        } block px-4 py-2 text-sm cursor-pointer`}
                      >
                        <FaGithub className="text-xl" />
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        href="https://www.linkedin.com/in/matteo-bucciol/"
                        className={`${
                          focus
                            ? 'bg-[var(--light-blue)] text-[var(--text-light)]'
                            : 'text-[var(--text-light)]'
                        } block px-4 py-2 text-sm cursor-pointer`}
                      >
                        <FaLinkedin className=" text-xl" />
                      </Link>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
