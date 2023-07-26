import React from "react";
import {useEffect, useState} from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function NavMenu({setShowForm}){
    const[userCheck, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("username");
        if (loggedInUser) {
            setUserName(loggedInUser);
        }
      }, []);

    function logOut(event){
        event.preventDefault();
        localStorage.removeItem('username');
        setUserName("");
        navigate('/login');
    }
    return(
        <>
               <header className="header">
                    <div className="logo"><img src="./car_logo.jpg"/></div>
                    <nav className="nav">
                        <Link to="/createbooking">Service Booking </Link> |
                        <Link to="/viewbooking"> View Booking  </Link> 
                    </nav>
                    <div className="accmenu">
                        
                        {(userCheck !='')? <a href="#" onClick={logOut}>{userCheck}</a>
                        :<Link className='login_account' to="/login">Login</Link>
                        
                        }
                        
                        {(userCheck !='')? null
                        :<Link className='create_account' to="/create-account">| Craete Account</Link>
                        
                        }
                    </div>
                </header>
                
                       
                <Outlet/>

                <footer className={'footer'}>
                    @2023 CAR-care services copy rights.
                </footer>
        </>
    );
}

export default NavMenu;