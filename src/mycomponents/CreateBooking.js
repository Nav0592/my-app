import { useState } from "react";
import axios from "axios";

function CreateBooking(){

    const[data, setData] = useState({ service:"" , email:"", date:'' });
    
    const[emailMsg, setEmailMsg] = useState("");

    const[dateMsg, setDateMsg] = useState("");

    const[finalMsg, setFinalMsg] = useState("");

    function handleChange(event){
           setData({ ...data, [event.target.name]: event.target.value })
           switch(event.target.name){
                case "email": 
                 if (!/^\S+@\S+\.\S+$/.test(event.target.value))
                     setEmailMsg("Enter a valid email id");
                  else
                    setEmailMsg("");  
                break;
                case "date":
                    let  CurrentDate = new Date();
                    let GivenDate = new Date(event.target.value);
                  
                    if (GivenDate < CurrentDate)
                        setDateMsg("Only Future date are valid");
                    else
                         setDateMsg("");
                break;
           }
        }

        function handleClick(event){
            event.preventDefault();
            axios.post("http://localhost:4000/booking",data)
            .then((response) => {setFinalMsg("DAta Addded successfully"+ response.data.id) })
            .catch((error) =>{setFinalMsg("DAta not set") })
        }


        function SubmitButton(){
            let  CurrentDate = new Date();
             let GivenDate = new Date(data.date);
            if (data.email && GivenDate > CurrentDate ){
              return <button type="button"  onClick={handleClick}>Book</button>
            } else {
                setFinalMsg("");
              return <button type="button" disabled>Book</button>
            };
          };

    return(
        <>
           <div className="container">
               <form>
                      <h3>Book Your Service</h3>
                        <label htmlFor="service"><b>Type of Service</b></label>
                        <select name="service">
                            <option value="wash">Washimg</option>
                            <option value="danting">Danting</option>
                            <option value="cleaning">Cleaning</option>
                        </select>
                       <label htmlFor="email"><b>Email Id</b></label>
                        <input onChange={handleChange} type="text" placeholder="Enter your email" name="email" required />
                        <p className="error alert">{emailMsg}</p>

                        <label htmlFor="date"><b>Booking date</b></label>
                        <input type="date" onChange={handleChange} placeholder="mm/dd/yyy" name="date" required />
                        <p className="error alert">{dateMsg}</p>

                        <SubmitButton />
                        <p className="success-msg">{finalMsg}</p>
                </form>
           </div> 
        </>
    );
}

export default CreateBooking;