import Image from "next/image";
import Link from "next/link";
import Dashboard from "./dashboard/page";
import Nav from "./nav/page";
import Act from "./act/page";
import History from "./history/page";
import Detail from "./detail/page";

export default function Home() {
  return (
   <div className={'flex '}>
    
    <Nav></Nav>
    {/* <Dashboard></Dashboard> */}
    {/* <Act></Act> */}
    {/* <History></History> */}
    <Detail></Detail>
    
    

   </div>
  );
}


