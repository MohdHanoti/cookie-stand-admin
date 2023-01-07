import React from "react";
import Link from "next/link";
import { useContext } from 'react';
import {ThemeContext} from '../contexts/theme'

export default function Header() {
  const {isDarkTheme, toggleThemeHandler} = useContext(ThemeContext);
  console.log(useContext(ThemeContext));
  return (
    <header >
      <nav className="flex flex-wrap items-center px-3 bg-[#16abff33] py-2 dark:bg-slate-900">
        <Link className="inline-flex items-center px-2 mr-5" href="/">
          <span className="text-xl font-bold tracking-wide text-[#FADE9C] uppercase">
            {" "}
            Cookies Shop{" "}
          </span>
        </Link>
        <section>
          <section>
            <Link
              className="items-center text-xl justify-center w-full px-3 py-2 font-bold- text-[#FADE9C] rounded lg:inline-flex lg:w-auto hover:bg-[#FADE9C] hover:text-[#270D0B]"
              href="/"
            >
              Home
            </Link>
            <button
              type="button"
              className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-300 text-black dark:bg-slate-800 dark:text-white rounded"
              onClick={toggleThemeHandler}
            >
              Toggel Theme
            </button>
          </section>
        </section>
      </nav>
    </header>
  );
}
