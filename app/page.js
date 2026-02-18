
import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
   <main>
      <Header />
      <div className="min-h-screen bg-contain bg-top bg-no-repeat "
      style={{backgroundImage: "url('/backgrnd img.png')"}}>

      </div>
   </main>
   
  );
}
