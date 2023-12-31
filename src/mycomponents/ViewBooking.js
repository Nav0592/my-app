import React from "react";
import NavMenu from "./NavMenu";
import axios from "axios";
import { useEffect, useState } from "react";




function ViewBooking(){
   const[users, setUsers] = useState([]);
   useEffect(() => {
      axios.get("http://localhost:4000/users")
      .then((response) => {
            console.log(response.data)
            setUsers(response.data);
         })
     .catch((error) =>{ })
   },[])
   

    return(
        <>
           <div className="container">
                <div className="booking-list">
                    <h3>List of all Bookings</h3>
                     <div className="group">
                      {console.log(users)}
                        {
                            users.map((users)=> {
                              return (
                                <div className="item">
                                    <h4>Booking Id: {users.id}</h4> 
                                    <p>Service Name: {users.username}</p>
                                    <button className="btn btn-success">Delete</button>
                                </div> 
                              )
                            })  
                        }
                      
                     </div>   
                </div>
           </div> 
        </>
    );
}

export default ViewBooking;