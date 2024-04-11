import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./layout/Header";
import { useEffect } from "react";

export default function App() {
  const bookList = [
    {
      id: "abc1",
      name: "Alice's Wonderland",
      quantity: 0,
      price: 400,
      url: "https://beautifulbooks.info/wp-content/uploads/2020/12/fao-carrol-alice-cover.jpg",
    },
    {
      id: "abc2",
      name: "The Little Mermaid",
      quantity: 0,
      price: 400,
      url: "https://beautifulbooks.info/wp-content/uploads/2020/12/fao-andersen-little-mermaid-cover.jpg",
    },
    {
      id: "abc3",
      name: "Peter Pan",
      quantity: 0,
      price: 400,
      url: "https://beautifulbooks.info/wp-content/uploads/2020/12/fao-barrie-peter-pan-cover.jpg",
    },
    {
      id: "abc4",
      name: "Robin Hood",
      quantity: 0,
      price: 400,
      url: "https://beautifulbooks.info/wp-content/uploads/2020/12/fao-pyle-robin-hood-cover.jpg",
    },
    {
      id: "abc5",
      name: "Wizard of Oz",
      quantity: 0,
      price: 400,
      url: "https://beautifulbooks.info/wp-content/uploads/2020/12/fao-baum-wizard-of-oz-cover.jpg",
    },
    {
      id: "abc6",
      name: "Sherlock Holmes",
      quantity: 0,
      price: 400,
      url: "https://beautifulbooks.info/wp-content/uploads/2020/12/fao-doyle-sherlock-holmes-cover.jpg",
    },
    {
      id: "abc7",
      name: "F. Schwarz Classic Collection",
      quantity: 0,
      price: 2000,
      url: "https://beautifulbooks.info/wp-content/uploads/2020/12/fao-schwarz-children-hestia-header.jpg",
    },
  ];
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(bookList);
  }, []);

  return (
    <>
      <Header />

      <div className="book-list">
        {list.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}
