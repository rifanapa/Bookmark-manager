"use client"

import { useAuth } from "@/lib/context/AuthContext";
import Link from "next/link";

export default function SignInButton(){
    
    const{
        user,
        isLoading,
        error,
        handleSignInWithGoogle,
        handleLogout,
    }= useAuth();

    if(user){
        return <div >
            <h1 style={{color:"gray", fontSize:"50px", fontFamily:"fangsong"}}>Logged In</h1>
            <h1 style={{color:"black", fontSize:"30px", fontFamily:"fangsong"}}>
                {user?.displayName}
            </h1>
            <h1 style={{color:"black", fontSize:"20px", fontFamily:"fangsong"}}>
                {user?.email}
            </h1>
           <Link href={'/dashboard'}>
            <button className="underline text-blue-600 font-bold cursor-pointer">Go To Dashboard</button>
           </Link>
        </div>
    }

    return <>
    {error && <p className="text-red-400">{error}</p>}
    <button 
    style={{backgroundColor:"black", color:"white", cursor:"pointer"}}
    onClick={handleSignInWithGoogle}
    disabled={isLoading}
     className="px-3 py-2 flex gap-2 items-center bg-black text-white rounded-full">
            <img className="h-6 rounded-full" src="/google logo.jpg" alt="" />
            <h1>{isLoading ? "Loading" : "Sign In With Google"}</h1>
        </button>
    </>
}