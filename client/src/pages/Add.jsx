import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Add() {
  const [book, setBooks] = useState({
    title: "",
    price: "",
    desc: "",
  });

  const { title, price, desc } = book;
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setBooks((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(book);

    try {
      const res = await axios.post("http://localhost:8800/books", book);
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10 border rounded-2xl w-[600px] mx-auto p-8 shadow-2xl shadow-lime-200">
      <h1 className="text-3xl font-bold text-center">Add New Book</h1>
      <form
        className="flex flex-col justify-center items-center gap-y-5 mt-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          name="title"
          onChange={(e) => handleOnChange(e)}
          className="border px-4 py-2 w-[450px] rounded-md border-amber-400 shadow-lg shadow-amber-100"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          name="price"
          onChange={(e) => handleOnChange(e)}
          className="border px-4 py-2 w-[450px] rounded-md border-amber-400 shadow-lg shadow-amber-100"
        />
        <textarea
          rows={5}
          placeholder="Description"
          value={desc}
          name="desc"
          onChange={(e) => handleOnChange(e)}
          className="border px-4 py-2 w-[450px] rounded-md border-amber-400 shadow-lg shadow-amber-100"
        />
        {/* <input
          type="file"
          placeholder="Title"
          className="border px-4 py-2 w-[450px] rounded-md border-amber-400 shadow-lg shadow-amber-100"
        /> */}
        <button className="bg-lime-400 font-semibold w-[450px]  py-3 rounded-2xl">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default Add;
