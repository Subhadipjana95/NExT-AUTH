"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const loginPage = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};

  return (
    <>
      <div className=" flex justify-center align-center items-center flex-col gap-4 h-screen">
        <h1 className="text-4xl mb-20 p-2 font-semibold bg-blue-500 text-black rounded">Login Page</h1>
        <div className=" w-[20%] flex flex-col gap-4 rounded-lg p-3 border border-gray-600">
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
            onClick={onLogin}
            className="bg-gray-700 w-full text-white p-2 rounded-md mt-2 hover:bg-gray-600 transition-all duration-300"
          >
            Login
          </button>
        </div>

        <div>
          Don't have an account?
          <Link
            href="/signup"
            className="text-amber-500 ml-2 cursor-pointer"
          >
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default loginPage;
