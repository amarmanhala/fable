import React from "react";
import Link from "next/link";
import { Button } from "./Button";

interface NavbarProps {
  title: string;
}

const Navbar = (props: NavbarProps) => {
  return (
    <div className="top-0 sticky">
      <header className="flex flex-row justify-between px-6 sm:px-6 md:px-6 lg:px-6 xl:px-48 py-4 text-white dark:bg-darkHeader bg-lightHeader border-b dark:border-dividerDark border-divider">
        <div className="flex items-center">
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Notes Stories
          </span>
        </div>
        <div>
          <div>
            <Link href="/login">
              <a className="text-textPrimaryDark font-sans font-light tracking-wide text-sm md:text-base ml-4 md:ml-6 dark:hover:text-textPrimaryDark hover:text-textPrimary">
                Login
              </a>
            </Link>
            <Link href="/login">
              <a className="ml-4 md:ml-6">
                <Button title="Sign up" secondary small></Button>
              </a>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
export { Navbar };
