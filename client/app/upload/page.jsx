"use client"
import React from 'react'
import UploadForm from "../../components/uploadForm";
import {useSession} from "next-auth/react";

const UploadPage = () => {
    const { data } = useSession();
    return (
        <div>{data ? (<UploadForm/>) : (
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
                <h1 className="text-xl font-semibold cursor-pointer text-gray-900">PLease sign in first</h1>
            </div>
        )}</div>

    )
}
export default UploadPage
