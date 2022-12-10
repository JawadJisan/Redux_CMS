import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [activeStatus, setActiveStatus] = useState(1);
  return (
    <div className="p-10">
      <div className="container mx-auto bg-white p-10">
        <div className="flex items-center gap-2">
          <Link to="/" className="cursor-pointer">
            <BiArrowBack size={20} />
          </Link>
          <h1 className="my-3 text-xl">Dashboard</h1>
        </div>
        <div className="sm:hidden relative w-11/12 mx-auto rounded">
          <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-selector"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#A0AEC0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="8 9 12 5 16 9" />
              <polyline points="16 15 12 19 8 15" />
            </svg>
          </div>
          <select
            aria-label="Selected tab"
            className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10"
          >
            <option className="text-sm text-gray-600">inactive </option>
            <option className="text-sm text-gray-600">inactive </option>
            <option selected className="text-sm text-gray-600">
              Active{" "}
            </option>
            <option className="text-sm text-gray-600">inactive </option>
            <option className="text-sm text-gray-600">inactive </option>
          </select>
        </div>
        <div className="justify-between flex-wrap hidden sm:block bg-white rounded shadow">
          <div className="xl:w-full xl:mx-0 pl-5 pr-5 h-12">
            <ul className="flex">
              <Link
                to="/dashboard/blog-list"
                onClick={() => setActiveStatus(1)}
                className={
                  activeStatus === 1
                    ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                    : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">
                  {activeStatus === 1 ? "Blog List" : "Blog List"}
                </span>
                {activeStatus === 1 && (
                  <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
                )}
              </Link>
              <Link
                to="/dashboard/add-blog"
                onClick={() => setActiveStatus(2)}
                className={
                  activeStatus === 2
                    ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                    : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">
                  {activeStatus === 2 ? "Add Blog" : "Add Blog"}
                </span>
                {activeStatus === 2 && (
                  <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
                )}
              </Link>
              <Link
                to="/dashboard/profile"
                onClick={() => setActiveStatus(3)}
                className={
                  activeStatus === 3
                    ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                    : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">
                  {activeStatus === 3 ? "Profile" : "Profile"}
                </span>
                {activeStatus === 3 && (
                  <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
                )}
              </Link>
              <li
                onClick={() => setActiveStatus(4)}
                className={
                  activeStatus === 4
                    ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                    : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">
                  {activeStatus === 4 ? "Active" : "Inactive"}
                </span>
                {activeStatus === 4 && (
                  <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="py-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
