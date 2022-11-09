import React, { useState } from "react";
import { createContext } from "react";
import { Book, books as initBooks } from "../data/book";

export const Context = createContext<ContextProps | null>({} as ContextProps);
export const useCtx = () => React.useContext(Context) as ContextProps;

const GContext = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [books, setBooks] = useState(initBooks);
  const [reading, setReading] = useState(books as Book[]);
  const [finished, setFinished] = useState([] as Book[]);

  const values = {
    open,
    setOpen,
    reading,
    setReading,
    finished,
    setFinished,
    books,
    setBooks,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default GContext;

interface ContextProps {
  open: boolean;
  setOpen: any;
  reading: Book[];
  setReading: any;
  finished: Book[];
  setFinished: any;
  books: Book[];
  setBooks: any;
}
