import AuthContextProvider from "@/lib/context/AuthContext";
import Header from "../components/Header";
import SignInButton from "./components/SignInButton";
export default function Page(){
    return <main className="flex flex-col w-screen">
        <Header title={'Login'} />
       <div className="p-10 flex justify-center w-full">
          <AuthContextProvider>
            <SignInButton />
            </AuthContextProvider>
       </div>
    </main>
}