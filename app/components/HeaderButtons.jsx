"use client"
import { useAuth } from "@/lib/context/AuthContext";
import Link from "next/link";

export default function HeaderButtons(){
    const{
        user,
        handleLogout,
    }= useAuth();
    return <div className="flex items-center gap-2">
        {!user && <Link href={'/login'}>
            <button style={{backgroundColor:"black", color:"white"}} className=" px-3 py-2 rounded-md cursor-pointer">
                Login
            </button>
            </Link>}

            {user && <Link href={'/dashboard'}>
            <div className="text-pink-800 text-xl text-shadow-lg font-stretch-155% font-bold">
                {user?.displayName}
                </div>
            </Link>}

          {user && 
            <button style={{backgroundColor:"black", color:"white"}} onClick={handleLogout} className="  px-3 py-2 rounded-md cursor-pointer">
                Logout
            </button>
         }    
    </div>
}