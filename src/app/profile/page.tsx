"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const profilePage = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      console.log("Logout successful", response.data);
      toast.success("Logout successful");
      router.push("/login");
      
    } catch (error: any) {
      console.log("Logout failed", error.message);
      toast.error(error.message || "Logout failed");
    }
  }

  return (
    <>
      <button 
      className="absolute top-5 right-5 bg-[#333] text-rose-500 border-[0.8px] border-[#555] px-2 py-1 rounded-md cursor-pointer hover:bg-[#444] hover:text-rose-600 transition-all duration-300"

      onClick={logout}
      >
        Logout
      </button>
      <div className=" flex justify-center align-center items-center h-screen">
        <h1 className="text-4xl">Profile Page</h1>
      </div>
    </>
  );
};

export default profilePage;
