"use client";

import Link from "next/link";
import React, {useEffect, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";

const VerifyEmailPage = () => {
    const [token, setToken] = useState("");
    const [error, setError] = useState(false);
    const [verified, setVerified] = useState(false);

    const verifyEmail = async () => {
        try {
            await axios.post("/api/users/verifyEmail", { token });
            setVerified(true);
            toast.success("Email verified successfully!");
        } catch (error: any) {
            setError(true);
            console.log(error.response?.data);
            const errorMsg = error.response?.data?.error || error.message || "Email verification failed";
            toast.error(errorMsg);
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, [])

    useEffect(() => {
        if(token.length > 0){
            verifyEmail();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);


    return (
        <div className=" flex justify-center align-center items-center flex-col gap-4 h-screen">
            <h1 className="text-4xl mb-20 p-2 font-semibold bg-amber-500 text-black rounded">{error ? "Error Occurred" : verified ? "Email Verified" : "Verifying Email..."}</h1>
            {error && <p className="text-red-500">The verification link is invalid or has expired.</p>}
            {verified && <p className="text-green-500">Your email has been successfully verified. You can now <Link href="/login" className="text-blue-500 underline">login</Link>.</p>}
        </div>
    )
}
export default VerifyEmailPage;