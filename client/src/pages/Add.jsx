import React from "react";

function Add() {
  return (
    <div className="mt-10 border rounded-2xl w-[600px] mx-auto p-8 shadow-2xl shadow-lime-200">
      <h1 className="text-3xl font-bold text-center">Add New Book</h1>
      <form className="flex flex-col justify-center items-center gap-y-5 mt-10">
        <input
          type="text"
          placeholder="Title"
          className="border px-4 py-2 w-[450px] rounded-md border-amber-400 shadow-lg shadow-amber-100"
        />
        <input
          type="text"
          placeholder="Price"
          className="border px-4 py-2 w-[450px] rounded-md border-amber-400 shadow-lg shadow-amber-100"
        />
        <textarea
          rows={5}
          placeholder="Description"
          className="border px-4 py-2 w-[450px] rounded-md border-amber-400 shadow-lg shadow-amber-100"
        />
        <input
          type="file"
          placeholder="Title"
          className="border px-4 py-2 w-[450px] rounded-md border-amber-400 shadow-lg shadow-amber-100"
        />
        <button className="bg-amber-400 font-semibold px-5 py-2 rounded-2xl">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default Add;
