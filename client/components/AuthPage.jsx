"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import {Button} from "./ui/button";


const AuthPage = () => {
    const { data } = useSession()
    console.log('session data : ', data);

    const logIn = async() => {
        console.log("Signing in Google");
        await signIn("google");
    }

    const logOut = async() => {
        console.log("Signing out of Google");
        await signOut();
    }

    return (
        <div className='m-10'>
            <Button variant={"outline"} className='bg-blue-300' onClick={logIn}>
                Sign IN
            </Button>
            <Button variant={"destructive"} onClick={logOut}>
                Sign Out
            </Button>

        </div>
    )
}
export default AuthPage