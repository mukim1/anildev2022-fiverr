import React from "react";
import { Menu } from "@mantine/core";
import { IoIosArrowDown } from "react-icons/io";
import { Section } from "../Layouts/Layout";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { exploreItems } from "../../data/explore";

const Explor = () => {
  return (
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
                  <h3 className="text-gray-500 ml-5 mt-2 mb-3">{item.title}</h3>
                  {item.items.map((subItem) => (
                    <Link href={subItem.link} key={subItem.id}>
                      <a className="flex items-center gap-x-2 py-1">
                        {subItem.icon ? subItem.icon : <FiHome />}
                        <span className="text-gray-500 hover:text-blue-500">
                          {subItem.title}
                        </span>
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
  );
};

export default Explor;
