"use client";
import React, { useState } from "react";



export default function Example() {
  const [search, setSearch] = useState("");
  const [adds, setAdds] = useState([]);

  const handleSubmit = async () => {
    const res = await fetch(
      `http://localhost:3000/api/search/?search=${search}`
    );
    const lists = await res.json();
    setAdds(lists);
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col flex-wrap items-center w-full mb-20 text-center">
            <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              Search For Locals
            </h1>
            <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
              ✨meet locals from that place, and get in contact with them🫡
            </p>
          </div>

          <div className="flex gap-5 mx-96 md:mx-96 sm:mx-96">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered input-primary md:max-w-md lg:max-w-lg"
              style={{ minWidth: "12rem" }} // Set a minimum width for mobile screens
            />

            <button onClick={handleSubmit} className="btn btn-outline">
              Search
            </button>
          </div>
          <ul role="list" className="divide-y divide-gray-100">
            {adds.map((add) => (
              <li key={add.email} className="flex justify-between py-5 gap-x-6">
                <div className="flex gap-x-4">
                  {/* <img
                    className="flex-none w-12 h-12 rounded-full bg-gray-50"
                    src={person.imageUrl}
                    alt=""
                  /> */}
                  <div className="flex-auto min-w-0">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {add.name}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
                      {add.email}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {add.address}
                  </p>
                  {/* {list.lastSeen ? (
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Last seen{" "}
                      <time dateTime={person.lastSeenDateTime}>
                        {person.lastSeen}
                      </time>
                    </p>
                  ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <div className="flex-none p-1 rounded-full bg-emerald-500/20">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <p className="text-xs leading-5 text-gray-500">Online</p>
                    </div>
                  )} */}
                  <p className="text-sm leading-6 text-gray-900">
                    {add.number}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
