import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const baseURL = "http://localhost:4000/users";

function Login(){
    const navigate = useNavigate();
    const[newData, setData] = useState({ username:"" , password:"" });
    const[authMsg, setAuthMsg] = useState("");
    const[userMsg, setUserMsg]  = useState("");  
    const[userCheck, setUserName] = useState('');
   
    function loginChange(event){
        setData({ ...newData, [event.target.name]: event.target.value })
    }
    function handleLogin(event){
        event.preventDefault();
        axios.get(baseURL)
        .then((response) => {
            console.log(response.data);
            console.log(newData.username);
            const account = response.data.find((user) => user.username === newData.username);
            if(account.username != newData.username){
                setAuthMsg("Please check username");
            }
           else if (account && account.password != newData.password) {
                setAuthMsg("Please check password");
            }
            else if(account.username == newData.username && account.password == newData.password){
                setAuthMsg("Login successfully"+ account.username);
                localStorage.setItem('username',account.username);
                setUserName(account.username);
                navigate('/viewbooking');
            }
        })
        .catch((error) =>{setAuthMsg("Please check username & password correctly.") })
    }
   
    return(
        <>
         <div className="container">
            <form onSubmit={handleLogin}>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" onChange={loginChange} name="username" value={newData.username} placeholder="Enter Username" required />
                       
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" onChange={loginChange} name="password" value={newData.password} required />

                    <input type="submit"  value="login" onClick={handleLogin}></input>
                    {(authMsg != "")? <p className="result">{authMsg}</p> : null}
             </form>
        </div>
        </>
    );
}

export default Login;