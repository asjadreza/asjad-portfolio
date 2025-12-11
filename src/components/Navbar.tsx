"use client";

import React from "react";
import {
  HomeIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
export const Navbar = () => {
  return (
    <div>
      {/* Desktop Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs bg-linear-to-b">
        <div className="max-w-460 mx-auto flex items-center md:justify-between justify-center">
          <a className="h-auto flex flex-row items-center" href="/">
            <span className="custom-font">Asjad</span>
          </a>

          <nav className="hidden md:flex gap-6 items-center text-slate-300">
            <a href="#projects" className="hover:text-white transition-colors text-[17px]">
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors text-[17px]"
            >
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors text-[17px]">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* SPACING FIX for desktop */}
      <div className="h-16 md:h-20"></div>

      {/* 🍔 Mobile Floating Menu */}
      <div
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-3
    bg-[#0f0f1a]/70 backdrop-blur-xl rounded-full shadow-lg flex items-center gap-6"
      >
        {/* <a href="/" className="p-2 rounded-full bg-white/10 text-white">
          <HomeIcon className="w-6 h-6" />
        </a> */}

        <a
          href="#projects"
          className="p-2 rounded-full text-slate-300 hover:text-white"
        >
          <BookOpenIcon className="w-6 h-6" />
        </a>

        <a
          href="#experience"
          className="p-2 rounded-full text-slate-300 hover:text-white"
        >
          <BriefcaseIcon className="w-6 h-6" />
        </a>

        <a
          href="#contact"
          className="p-2 rounded-full text-slate-300 hover:text-white"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};
