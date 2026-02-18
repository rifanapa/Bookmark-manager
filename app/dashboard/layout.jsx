import AuthContextProvider from "@/lib/context/AuthContext";
import DashboardLayout from "./components/DashboardLayout";

export default function Layout({children}){
    return <>
    <AuthContextProvider>
    <DashboardLayout>
        {children}
    </DashboardLayout>
    </AuthContextProvider>
    </>
}