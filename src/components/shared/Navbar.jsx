"use client"
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdOutlineLogin } from "react-icons/md"
import { useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { TbCategory } from "react-icons/tb";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-md fixed top-0 w-full z-100">
        <div className="max-w-7xl mx-auto py-2  flex items-center justify-between">

          <div>
            <Image
              src={'/assets/logo.png'}
              alt="SportNest"
              width={200}
              height={200}
            />
          </div>
          {/* Center - Nav Links (desktop) */}
          <ul className="hidden md:flex items-center gap-8">
            <li><Link href={'/'} className="text-gray-600 hover:text-green-800 font-medium transition flex items-center gap-1 hover:underline"><BiHome/> Home</Link></li>
            <li><Link href={'/all-facilities'} className="text-gray-600 hover:text-green-800 font-medium transition flex items-center gap-1 hover:underline"> <TbCategory /> All Facilities</Link></li>
            <li><Link href={'/add-facilities'} className="text-gray-600 hover:text-green-800 font-medium transition flex items-center gap-1 hover:underline"> <TbCategory /> Add Facilities</Link></li>
          </ul>

          {/* Right - Login Button (desktop) */}
          <Link className="hover:scale-105 duration-300" href={'/login'}>
            <Button className={'md:inline-flex hidden rounded-xs border border-green-800 text-green-800'} variant="outline">
              <MdOutlineLogin />
              Login
            </Button>
          </Link>

          {/* Hamburger (mobile) */}
          <button className="md:hidden text-2xl text-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col px-6 pb-4 gap-3">
            <Link href={'/'} className="text-gray-700 font-medium hover:text-gray-900">Home</Link>
            <Link href={'/all-facilities'} className="text-gray-700 font-medium hover:text-gray-900">All Facilities</Link>
            <Link href={'/login'}>
              <Button className={' rounded-xs border border-green-800 text-green-800'} variant="outline">
                <MdOutlineLogin />
                Login
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

