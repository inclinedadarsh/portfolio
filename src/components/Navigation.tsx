"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Menu, X, Github, Twitter } from "lucide-react";
import profileLogo from "@/assets/logo_image.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((value) => !value);

  return (
    <nav className="mt-5 font-space-grotesk flex items-center nav-container">
      <div className="flex gap-4 items-center min-w-fit grow">
        <Image
          src={profileLogo}
          alt="Profile pic of Adarsh Dubey"
          className="rounded-full border-2 border-dashed border-white"
          width={50}
          height={50}
        />
        <div className="flex gap-2 items-center px-3 py-2 bg-muted-1 rounded-full h-fit">
          <span className="w-3 h-3 bg-green rounded-full"></span>
          <span>Available for work</span>
        </div>
      </div>
      <button
        aria-label="Menu button"
        className="lg:hidden"
        onClick={toggleMenu}
      >
        <Menu />
      </button>
      <div
        className={`absolute lg:static top-0 ${
          isOpen ? "left-0" : "left-full"
        } transition-[left] z-10 w-full h-screen lg:h-fit bg-background flex flex-col lg:flex-row lg:items-center lg:grow gap-10 lg:gap-6 px-5 lg:px-0`}
      >
        <div className="lg:hidden flex justify-between items-center mt-[9px]">
          <span className="font-medium text-lg text-primary">Adarsh Dubey</span>
          <button
            aria-label="Menu button"
            className="lg:hidden"
            onClick={toggleMenu}
          >
            <X />
          </button>
        </div>
        <div className="lg:ml-6 flex gap-4 mt-10 lg:mt-0">
          <Link
            className="p-3 rounded-full bg-muted-2 hover:bg-muted-1 focus-visible:bg-muted-1 transition-colors"
            href="https://github.com/inclinedadarsh"
          >
            <Github width={20} height={20} strokeWidth={1.5} />
          </Link>
          <Link
            className="p-3 rounded-full bg-muted-2 hover:bg-muted-1 focus-visible:bg-muted-1 transition-colors"
            href="https://github.com/inclinedadarsh"
          >
            <Twitter width={20} height={20} strokeWidth={1.5} />
          </Link>
        </div>
        <ul className="flex flex-col lg:flex-row gap-6 text-lg lg:ml-auto">
          <li>
            <Link
              href="/"
              className="flex gap-3 hover:text-primary focus-visible:text-primary transition-colors"
            >
              <span className="text-primary">1.</span>Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex gap-3 hover:text-primary focus-visible:text-primary transition-colors"
            >
              <span className="text-primary">2.</span>Work
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex gap-3 hover:text-primary focus-visible:text-primary transition-colors"
            >
              <span className="text-primary">3.</span>About
            </Link>
          </li>
        </ul>
        <button
          aria-label="Copy email button"
          className="lg:ml-6 py-3 px-7 rounded-md border-2 border-primary font-medium text-primary hover:bg-muted-1 focus-visible:bg-muted-1 transition-colors"
        >
          Say Hello
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
