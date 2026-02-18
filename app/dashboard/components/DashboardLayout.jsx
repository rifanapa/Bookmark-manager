"use client"
import Header from "@/app/components/Header";
import{useAuth} from "@/lib/context/AuthContext";
import Link from "next/link";

export default function DashboardLayout({children}){
    const{
        user,
        isLoading
    }= useAuth();

    if(isLoading){
        return <h3>Loading....</h3>
    }

    if(!user){
        return <div>
            <Header title={'Dashboard'}/>
           <div style={{marginLeft:"650px", marginTop:"100px"}}>
             <h1 style={{fontFamily:"fangsong", fontSize:"30px"}}>You are not logged in!</h1>
            <Link href={'/login'}>
            <button style={{color:"blue", marginLeft:"110px", cursor:"pointer"}} className="text-blue-600 hover:underline">Login</button>
            </Link>
           </div>
        </div>
    }
    return <>{children}</>
}