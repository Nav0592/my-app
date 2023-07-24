import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavMenu({setShowForm}){
    return(
        <>
               <header className="header">
                    <div className="logo">MY CAR CARE</div>
                    <nav className="nav">
                        <Link style={myStyle} to="home">Home</Link> |
                        <Link style={myStyle} to="about"> About Us </Link> 
                        
                    </nav>
                </header>
                
                       
                <Outlet/>

                <footer>
                    @ CAR-care services copy rights.
                </footer>
        </>
    );
}

export default NavMenu;