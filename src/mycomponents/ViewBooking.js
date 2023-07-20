import NavMenu from "./NavMenu";
import axios from "axios";
import { useEffect, useState } from "react";
import UserInfo from "./Userinfo";




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
                        {
                            users.map((users)=> {
                              return (
                                <UserInfo userProp={users}/>
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