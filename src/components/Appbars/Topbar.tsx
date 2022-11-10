import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiBarChart2, FiSearch } from "react-icons/fi";
import { Section } from "../Layouts/Layout";
import Link from "next/link";
import Addbook from "../AddBook/Addbook";
import { AddBook } from "../Buttons/Buttons";
import Explor from "../Menus/Explor";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-10 bg-white dark:bg-gray-800 dark:text-white">
      <Section cls="h-16 flex justify-between items-center">
        <div className="flex gap-x-5 items-center font-serif">
          <Link href={"/"}>
            <Image src={"/images/logo.svg"} width={120} height={60} />
          </Link>
          <span>
            <FiSearch />
          </span>
          <Explor />
          <button className="hidden md:block">My Library</button>
        </div>

        <div className="hidden md:flex gap-x-5 items-center">
          <AddBook handleClick={() => setOpen(true)}>+ Add a book</AddBook>
          <div className="flex items-center gap-x-2">
            <div className="w-9 h-9 flex justify-center items-center rounded-full bg-[#2ce080] text-white">
              A
            </div>
            <IoIosArrowDown />
          </div>
        </div>
        <button className="md:hidden">
          <FiBarChart2 size={24} />
        </button>
      </Section>

      <Addbook open={open} setOpen={setOpen} />
    </div>
  );
};

export default Topbar;
