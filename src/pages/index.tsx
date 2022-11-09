import type { NextPage } from "next";
import Layout from "../components/Layouts/Layout";
import { useCtx } from "../Contexts/GContext";
import Image from "next/image";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Tabs } from "@mantine/core";
import { useState } from "react";
import Link from "next/link";
import { Book, books } from "../data/book";

const Home: NextPage = () => {
  const { reading, setReading, finished, setFinished } = useCtx();
  const [tab, SetTab] = useState("reading");
  const isReading = tab === "reading";

  const handleTabChange = (value: string) => {
    SetTab(value);
  };

  const handleReadUnread = (id: number) => {
    const book = reading.find((b) => b.id === id);
    if (book) {
      setReading((p: Book[]) => p.filter((b) => b.id !== id));
      setFinished((p: Book[]) => [...p, book]);
    } else {
      const book = finished.find((b) => b.id === id);
      if (book) {
        setFinished((p: Book[]) => p.filter((b) => b.id !== id));
        setReading((p: Book[]) => [...p, book]);
      }
    }
  };

  return (
    <Layout>
      <h2 className="text-xl lg:text-4xl font-semibold pt-2 mb-10 text-gray-600 tracking-widest">
        My Library
      </h2>

      <Tabs
        defaultValue="reading"
        onTabChange={(value: string) => handleTabChange(value)}
        className="mb-4"
        color="teal"
      >
        <Tabs.List>
          <Tabs.Tab sx={{ fontSize: "20px" }} value="reading">
            Currently reading {reading.length}
          </Tabs.Tab>
          <Tabs.Tab sx={{ fontSize: "20px" }} value="Finished">
            Finished {finished.length}
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {(isReading ? reading : finished).map((b) => (
          <div
            key={b.id}
            className="shadow rounded-md overflow-hidden cursor-pointer"
          >
            <Link href={`/book/${b.id}`}>
              <Image
                src={b.imgSrc ? b.imgSrc : `/images/Book Images/${b.id}.svg`}
                layout="responsive"
                width={284}
                height={282}
                objectFit="cover"
                className="rounded-sm"
              />
            </Link>
            <div className="p-3">
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <h5 className="text-base text-gray-600">{b.author}</h5>
              <h5 className="text-sm text-gray-600 flex items-center gap-x-1">
                <AiOutlineClockCircle size={16} />
                <span>{b.time} minutes ago</span>
              </h5>
            </div>
            <hr />
            <button
              className="w-full py-1 text-blue-500 text-lg font-semibold"
              onClick={() => handleReadUnread(b.id)}
            >
              {isReading ? "Finish" : "Unread"}
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;

// interface Book {
//   id: number;
//   title: string;
//   sub_title: string;
//   description: string;
//   image: string;
//   time: string;
// }

// export const books = [
//   {
//     id: 1,
//     title: "Bring Your Human to Work",
//     sub_title: "How to Design Your Workplace for Peak Performance",
//     description:
//       "Bring Your Human to Work is a practical guide to creating a workplace that supports the whole person. It’s a book for leaders, managers, and employees who want to create a workplace that supports the whole person.",
//     time: "2h 30m",
//     image: "/images/1.png",
//   },
//   {
//     id: 2,
//     title: "Employee to Entrepreneur",
//     sub_title: "How to Design Your Workplace for Peak Performance",
//     description:
//       "Bring Your Human to Work is a practical guide to creating a workplace that supports the whole person. It’s a book for leaders, managers, and employees who want to create a workplace that supports the whole person.",
//     time: "2h 30m",
//     image: "/images/2.png",
//   },
//   {
//     id: 3,
//     title: "Employee to Entrepreneur",
//     sub_title: "How to Design Your Workplace for Peak Performance",
//     description:
//       "Bring Your Human to Work is a practical guide to creating a workplace that supports the whole person. It’s a book for leaders, managers, and employees who want to create a workplace that supports the whole person.",
//     time: "2h 30m",
//     image: "/images/3.png",
//   },
//   {
//     id: 4,
//     title: "Employee to Entrepreneur",
//     sub_title: "How to Design Your Workplace for Peak Performance",
//     description:
//       "Bring Your Human to Work is a practical guide to creating a workplace that supports the whole person. It’s a book for leaders, managers, and employees who want to create a workplace that supports the whole person.",
//     time: "2h 30m",
//     image: "/images/4.png",
//   },
//   {
//     id: 5,
//     title: "Employee to Entrepreneur",
//     sub_title: "How to Design Your Workplace for Peak Performance",
//     description:
//       "Bring Your Human to Work is a practical guide to creating a workplace that supports the whole person. It’s a book for leaders, managers, and employees who want to create a workplace that supports the whole person.",
//     time: "2h 30m",
//     image: "/images/5.png",
//   },
//   {
//     id: 6,
//     title: "Employee to Entrepreneur",
//     sub_title: "How to Design Your Workplace for Peak Performance",
//     description:
//       "Bring Your Human to Work is a practical guide to creating a workplace that supports the whole person. It’s a book for leaders, managers, and employees who want to create a workplace that supports the whole person.",
//     time: "2h 30m",
//     image: "/images/6.png",
//   },
//   {
//     id: 7,
//     title: "Employee to Entrepreneur",
//     sub_title: "How to Design Your Workplace for Peak Performance",
//     description:
//       "Bring Your Human to Work is a practical guide to creating a workplace that supports the whole person. It’s a book for leaders, managers, and employees who want to create a workplace that supports the whole person.",
//     time: "2h 30m",
//     image: "/images/7.png",
//   },
//   {
//     id: 8,
//     title: "Employee to Entrepreneur",
//     sub_title: "How to Design Your Workplace for Peak Performance",
//     description:
//       "Bring Your Human to Work is a practical guide to creating a workplace that supports the whole person. It’s a book for leaders, managers, and employees who want to create a workplace that supports the whole person.",
//     time: "2h 30m",
//     image: "/images/3.png",
//   },
//   {
//     id: 9,
//     title: "Employee to Entrepreneur",
//     sub_title: "How to Design Your Workplace for Peak Performance",
//     description:
//       "Bring Your Human to Work is a practical guide to creating a workplace that supports the whole person. It’s a book for leaders, managers, and employees who want to create a workplace that supports the whole person.",
//     time: "2h 30m",
//     image: "/images/5.png",
//   },
// ];
