import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";


const Layout =()=>{
    return(
        <>
        <div id="topFix">
            <Header/>
           <TopNavbar/>
        </div>
          
           
           <Outlet/>

           <Footer/>


        </>
    )
}

export default Layout;