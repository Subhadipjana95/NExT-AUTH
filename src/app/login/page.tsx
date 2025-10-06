"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const loginPage = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [disabledButton, setDisabledButton] = React.useState(false);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [user]);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login Successful", response.data);
      toast.success("Login Successful");
      router.push("/profile");

    } catch (error: any) {
      console.log("Login failed", error);
      const errorMessage =
        error.response?.data?.error || error.message || "Login failed";
      toast.error(errorMessage);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" flex justify-center align-center items-center flex-col gap-4 h-screen">
        <h1 className="text-4xl mb-20 p-2 font-semibold bg-blue-500 text-black rounded">
          {loading ? "Loading..." : "Login Page"}
        </h1>
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
            {disabledButton ? "Login" : "Fill the boxes"}
          </button>
        </div>

        <div>
          Don't have an account?
          <Link href="/signup" className="text-amber-500 ml-2 cursor-pointer">
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default loginPage;
