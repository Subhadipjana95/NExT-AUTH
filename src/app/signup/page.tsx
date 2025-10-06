"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const signupPage = () => {
  const router = useRouter();
  
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [disabledButton, setDisabledButton] = React.useState(false);

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
      setDisabledButton(true);
    }else{
      setDisabledButton(false);
    };
   }, [user]);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup successful", response.data);
      toast.success("Signup successful");
      router.push("/login");

    } catch (error: any) {
      console.log("Signup failed", error);
      const errorMessage = error.response?.data?.error || error.message || "Signup failed";
      toast.error(errorMessage);
    }finally{
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" flex justify-center align-center items-center flex-col gap-4 h-screen">
        <h1 className="text-4xl mb-20 p-2 font-semibold bg-amber-500 text-black rounded">{loading ? "Loading..." : "Signup Page"}</h1>
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
            {disabledButton ? "Signup" : "Fill the boxes"}
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
