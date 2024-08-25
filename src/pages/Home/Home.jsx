import { useEffect } from "react";
import { Navbar, Contact, Footer} from "../../sections/index";


export default function Home() {
  useEffect(() =>{
    document.title = "academy";
  },[])
  return (
    <>
    
    <Navbar />
      <Contact />
      <Footer />
    </>
  )
}
