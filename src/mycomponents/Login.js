import {useState} from "react";

function Login(){

    const[data, setData] = useState({ uname:"" , psw:"" });
    const[authMsg, setAuthMsg] = useState("");
    const[userMsg, setUserMsg]  = useState("");  

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
        if (data.uname === "" || data.psw === "") {
            setAuthMsg("Please provide values for both!!!")
        }else if(data.uname === 'admin' && data.psw === '1234'){
            setAuthMsg("WElcome Boss!!!");
        }else{
            setAuthMsg("Hat Choor!!!");
        }
    }

    return(
        <>
            <h1>Please Enter your credentials..</h1>   
            <form onSubmit={handleClick}>
                <div className ="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text"  name="uname" value={data.username} onChange={handleChange} placeholder="Enter Username" required />
                       
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" onChange={handleChange} placeholder="Enter Password" name="psw" value={data.password} required />

                    <input type="submit"  value="login" onClick={handleClick}></input>
                    {(authMsg != "")? <p className="result">{authMsg}</p> : null}
                </div>
            </form>
        </>
    );
}

export default Login;