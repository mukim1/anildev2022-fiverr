import { useForm } from "@mantine/form";
import React from "react";
import { useCtx } from "../../Contexts/GContext";
// import { Book } from "../../data/book";

import { Modal } from "../Modals/Modal";
import { NativeSelect, TextInput } from "@mantine/core";
import { AddBook, Cancel } from "../Buttons/Buttons";
import { Book } from "../../Types/Book";

interface Props {
  open: boolean;
  setOpen: any;
}

const Addbook = ({ open, setOpen }: Props) => {
  const { setBooks, setReading } = useCtx();

  const form = useForm({
    initialValues: {
      book_title: "",
      book_image: "/images/logo.svg",
      book_author: "",
      minutes_read: "",
      category: "",
    },

    validate: (values) => {
      return {
        book_title: values.book_title === "" ? "Book title is required" : null,
        book_image: !values.book_image && "Book image is required",
        book_author: !values.book_author && "Book author is required",
        minutes_read: !values.minutes_read && "Minutes read is required",
        // category: !values.category && "Category is required",
      };
    },
  });

  const newbook = {
    id: Math.floor(Math.random() * 1000),
    title: form.values.book_title,
    subtitle:
      "10 Surefire Ways to Design a Workplace That Is Good for People, Great for Business, and Just Might Change the World",
    author: form.values.book_author,
    time: form.values.minutes_read,
    reads: "1.9k",
    status: "pending",
    trending: false,
    latest: false,
    audio: true,
    synopsis:
      "Bring Your Human to Work is a manual for leaders, managers, employees of all ages and across industries, offering ten ways to transform your workplace (and your job search) by applying one simple truth to everything you do: Smart companies honor relationships.",
    for: "If you care about people as much as profits, this book is full of useful ideas for making work life better.",
    aboutAuthor:
      "Erica is a workplace strategist who has worked for the past twenty-five years with some of the most iconic brands in the world as a consultant, speaker, author, and professional dot-connector. She helps top-of-the-class businesses, organizations, and individuals improve their performance by honoring relationships in every context, always with an eye toward high-tech for human touch.",
    imgSrc: "/images/logo.svg",
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    form.validate();
    if (!form.validate().hasErrors) {
      setBooks((p: Book[]) => [...p, newbook]);
      setReading((p: Book[]) => [...p, newbook]);
    }
  };

  return (
    <React.Fragment>
      <Modal
        open={open}
        handleClose={() => setOpen(false)}
        clses="md:w-[450px]"
      >
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <h3 className="font-semibold text-2xl tracking-wide leading-6 mt-2 mb-5">
              Add a new book
            </h3>
            {addBookItems?.map((item) => (
              <div key={item.id} className="mb-4">
                <TextInput
                  {...form.getInputProps(item.name)}
                  label={item.label}
                  placeholder={item.placeholder}
                  type={item.type}
                  size="md"
                  labelProps={{
                    className: "text-gray-500 mb-2 mt-1 text-base",
                  }}
                  classNames={{
                    input: "tracking-wider",
                  }}
                />
              </div>
            ))}
            <div className="flex gap-x-3">
              <TextInput
                {...form.getInputProps("minutes_read")}
                label="Minutes read"
                placeholder="Add minutes"
                type="number"
                size="md"
                labelProps={{ className: "text-gray-500 mb-2 mt-1 text-base" }}
                className="w-1/2"
              />
              <NativeSelect
                data={["Career & Success", "Vue", "Angular", "Svelte"]}
                label="Category"
                placeholder="Select a category"
                {...form.getInputProps("category")}
                size="md"
                labelProps={{ className: "text-gray-500 mb-2 mt-1 text-base" }}
                className="w-1/2"
              />
            </div>
          </div>
          <hr />
          <div className="p-6 flex gap-x-3 justify-end">
            <Cancel />
            <AddBook type="submit" cls="px-8">
              Add book
            </AddBook>
          </div>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default Addbook;

const addBookItems = [
  {
    id: 1,
    name: "book_title",
    label: "Book title",
    placeholder: "Add a book title",
    type: "text",
  },
  {
    id: 2,
    name: "book_image",
    label: "Book Image",
    placeholder: "Add a image url",
    type: "text",
  },
  {
    id: 3,
    name: "book_author",
    label: "Book Author",
    placeholder: "Add a book author",
    type: "text",
  },
];
