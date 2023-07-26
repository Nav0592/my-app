import {useState} from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";

function CreateAccount(){

    const[data, setData] = useState({ firstname:"" , lastname:"" , email:"" , username:"" , password:"" });
    const[authMsg, setAuthMsg] = useState("");
    const[userMsg, setUserMsg]  = useState("");  
    const[userCheck, setUserName] = useState(localStorage.getItem('username')?localStorage.getItem('username'):'');
    const navigate = useNavigate();

    function handleChange(event){
           setData({ ...data, [event.target.name]: event.target.value })

           switch(event.target.name){
                case "uname": 
                if (event.target.value.length < 3)
                console.log("Username must have more than 3 character");
                break;
           }
    }

    function handleClick(event){
        event.preventDefault();
        // if (data.uname === "" || data.psw === "") {
        //     setAuthMsg("Please provide values for both userName and password!!!")
        // }else if(data.uname === 'admin' && data.psw === '1234'){
        //     setAuthMsg("WElcome Boss!!!");
        // }else{
        //     setAuthMsg("Hat Choor!!!");
        // }

        axios.post("http://localhost:4000/users",data)
        .then((response) => {
            setAuthMsg("Data Addded successfully"+ response.data.id);
            localStorage.setItem('username',response.data.username);
            setUserName(response.data.username);
            navigate('/viewbooking');
        })
        .catch((error) =>{setAuthMsg("Data not set") })
    }
   
    return(
        <>
         <div className="container">
            <form onSubmit={handleClick}>
                    
                    <label htmlFor="firstname"><b>First name</b></label>
                    <input type="text"  name="firstname" value={data.firstname} onChange={handleChange} placeholder="Enter First Name" required />
                   
                    <label htmlFor="Lastname"><b>Last name</b></label>
                    <input type="text"  name="lastname" value={data.lastname} onChange={handleChange} placeholder="Enter Last Name" required />
                    
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email"  name="email" value={data.email} onChange={handleChange} placeholder="Enter Email" required />
                    

                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text"  name="username" value={data.username} onChange={handleChange} placeholder="Enter Username" required />
                       
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" onChange={handleChange} name="password" value={data.password} required />

                    <input type="submit"  value="Create" onClick={handleClick}></input>
                    {(authMsg != "")? <p className="result">{authMsg}</p> : null}
             </form>
        </div>
        </>
    );
}

export default CreateAccount;