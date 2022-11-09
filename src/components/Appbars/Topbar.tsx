import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiBarChart2, FiHome, FiSearch } from "react-icons/fi";
import { Section } from "../Layouts/Layout";
import Link from "next/link";
import Addbook from "../AddBook/Addbook";
import { Button, Drawer, Group, Menu } from "@mantine/core";
import { exploreItems } from "../../data/explore";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const [isExplor, setIsExplor] = useState(false);

  return (
    <div className="fixed top-0 w-full z-10 bg-white dark:bg-gray-800 dark:text-white">
      <Section cls="h-16 flex justify-between items-center">
        <div className="flex gap-x-5 items-center">
          <Link href={"/"}>
            <Image src={"/images/logo.svg"} width={120} height={60} />
          </Link>
          <span>
            <FiSearch />
          </span>

          <Menu shadow={"xl"} offset={20}>
            <Menu.Target>
              <button className="hidden md:flex items-center gap-x-2">
                <span>Explor</span>
                <IoIosArrowDown size={12} />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <div className="w-screen">
                <Section>
                  <div className="lg:flex pb-10">
                    {exploreItems.map((item) => (
                      <div className="flex-1" key={item.id}>
                        <h3 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h3>
                        <hr className="mt-2 mb-4" />
                        {item.items.map((subItem) => (
                          <Link href={subItem.link} key={subItem.id}>
                            <a className="flex items-center gap-x-2 text-gray-600 hover:text-blue-500 py-1">
                              {subItem.icon ? subItem.icon : <FiHome />}
                              {subItem.title}
                            </a>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </Section>
              </div>
            </Menu.Dropdown>
          </Menu>

          <button className="hidden md:block">My Library</button>
        </div>

        <div className="hidden md:flex gap-x-5 items-center">
          <button
            onClick={() => setOpen(true)}
            className="bg-[#2CE080] rounded-sm px-4 py-2"
          >
            + Add a book
          </button>
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
