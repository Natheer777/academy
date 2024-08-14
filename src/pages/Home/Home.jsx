import { useEffect } from "react";
import { Navbar, Header, Contact, Footer} from "../../sections/index";


export default function Home() {
  useEffect(() =>{
    document.title = "Sawa Group";
  },[])
  return (
    <>
    
    <Navbar />
      <Header />
      <Contact />
      <Footer />
    </>
  )
}
