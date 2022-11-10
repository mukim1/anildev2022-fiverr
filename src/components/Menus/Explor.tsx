import React from "react";
import { Section } from "../Layouts/Layout";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { exploreItems } from "../../data/explore";
import { Menu } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";

const Explor = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        className="hidden md:flex items-center gap-x-2"
        onClick={handleClick}
      >
        <span>Explor</span>
        <IoIosArrowDown size={12} />
      </button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={1}
        sx={{ mt: 2.5, p: 0 }}
      >
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
      </Menu>
    </div>
  );
};

export default Explor;
