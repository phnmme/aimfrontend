import Image from "next/image";
import Link from "next/link";
import Dashboard from "./dashboard/page";
import Nav from "./nav/page";
import Act from "./act/page";

export default function Home() {
  return (
   <div className="flex">
    
    <Nav></Nav>
    {/* <Dashboard></Dashboard> */}
    <Act></Act>
    
    

   </div>
  );
}


