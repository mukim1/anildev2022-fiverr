import type { NextPage } from "next";
import Layout from "../components/Layouts/Layout";
import { useCtx } from "../Contexts/GContext";
import Image from "next/image";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
// import { Book } from "../data/book";
import { Tab } from "../components/Tabs/Tab";
import { Book } from "../Types/Book";

const Home: NextPage = () => {
  const { reading, setReading, finished, setFinished } = useCtx();
  const [tab, SetTab] = useState("Currently reading");
  const isReading = tab === "Currently reading";

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
      <h2 className="text-xl lg:text-4xl font-semibold pt-2 mb-10 text-gray-700 tracking-wide font-serif">
        My Library
      </h2>

      <Tab
        items={["Currently reading", "Finished", ""]}
        value={tab}
        setValue={SetTab}
      />

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
            <div className="p-3 tracking-wide border">
              <h3 className="text-lg font-bold text-gray-700">{b.title}</h3>
              <h5 className="text-base text-gray-600 my-2 font-semibold">
                {b.author}
              </h5>
              <h5 className="text-gray-600 flex items-center gap-x-1">
                <AiOutlineClockCircle size={22} />
                <span>{b.time}-Minutes read</span>
              </h5>
            </div>
            <button
              className="w-full py-2 text-blue-600 text-lg font-semibold border"
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
