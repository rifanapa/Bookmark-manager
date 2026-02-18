import Link from "next/link";
import HeaderButtons from "./HeaderButtons";
import AuthContextProvider from "@/lib/context/AuthContext";

export default function Header({title}) {
    return <nav className="flex justify-between p-4 border-b bg-gradient-to-r from-gray-600 via-amber-400 to-white-500">
        <div className="flex gap-2 items-center">
            <img className="h-13 rounded-full" src="/bookmark logo.png" alt="" />
            <h1 style={{fontFamily:"fangsong", fontWeight:"bolder"}} className="font-extrabold text-3xl text-amber-950 text-shadow-lg ">{title ?? "Bookmark Manager"}</h1>
        </div>
        <div>
            <AuthContextProvider>
                < HeaderButtons />
            </AuthContextProvider>
          
        </div>
    </nav>
    
}