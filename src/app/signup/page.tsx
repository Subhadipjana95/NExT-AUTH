"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

const signupPage = () => {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const onSignup = async () => {};

  return (
    <>
      <div className=" flex justify-center align-center items-center flex-col gap-4 h-screen">
        <h1 className="text-4xl mb-20 p-2 font-semibold bg-amber-500 text-black rounded">Signup Page</h1>
        <div className=" w-[20%] flex flex-col gap-4 rounded-lg p-3 border border-gray-600">
          {/* User Name Input */}
          <div className="flex flex-col gap-2 align-start">
            <label htmlFor="username">User Name</label>
            <input
              className="border border-gray-600 p-2 rounded-md"
              type="text"
              id="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Enter your username"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2 align-start">
            <label htmlFor="email">Email</label>
            <input
              className="border border-gray-600 p-2 rounded-md"
              type="text"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2 align-start">
            <label htmlFor="password">Password</label>
            <input
              className="border border-gray-600 p-2 rounded-md"
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
            />
          </div>

          <button
            onClick={onSignup}
            className="bg-gray-700 w-full text-white p-2 rounded-md mt-2 hover:bg-gray-600 transition-all duration-300"
          >
            Signup
          </button>
        </div>

        <div>
          Already have an account?
          <Link
            href="/login"
            className="text-blue-500 ml-2 cursor-pointer"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default signupPage;
