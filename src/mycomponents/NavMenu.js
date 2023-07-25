import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavMenu({setShowForm}){
    return(
        <>
               <header className="header">
                    <div className="logo">MY CAR CARE</div>
                    <nav className="nav">
                        <Link to="/createbooking">Create Booking </Link> |
                        <Link to="/viewbooking"> View Booking  </Link> 
                    </nav>
                    <div className="accmenu">
                        <Link to="/login">Login</Link>
                    </div>
                </header>
                
                       
                <Outlet/>

                <footer>
                    @ CAR-care services copy rights.
                </footer>
        </>
    );
}

export default NavMenu;