import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Books() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:8800/books");
      setBooks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8800/books/${id}`);
      console.log(res.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => {
          return (
            <div
              key={book.id}
              className="my-10 mx-5 border rounded-lg text-center py-7 bg-linear-to-r from-amber-400 to-green-400 shadow-lg"
            >
              <h3 className="text-2xl font-semibold">Title : {book.title}</h3>
              <p>
                <span className="font-semibold">Description :</span> {book.desc}
              </p>
              <p>
                <span className="font-semibold">Price :</span>{" "}
                <span className="font-medium">${book.price} only</span>
              </p>
              <button className="border px-3 rounded-sm bg-blue-500 text-white my-3 font-semibold mr-10">
                <Link to={`/update/${book.id}`}>Edit</Link>
              </button>
              <button
                className="border px-3 rounded-sm bg-red-500 text-white my-3 font-semibold"
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link
          to="/add"
          className="border border-amber-400 px-4 py-2 rounded-lg bg-amber-400 font-semibold animate-bounce"
        >
          Add New Book
        </Link>
      </div>
    </div>
  );
}

export default Books;
