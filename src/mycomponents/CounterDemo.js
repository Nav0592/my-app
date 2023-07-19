import { useState } from "react";

function CounterDemo(){

    const [count, setCount] = useState(0);
    function increClick(){
        setCount(Number(count)+1);
    }
    function decreClick(){
        if(count>0){
        setCount(Number(count)-1);  
        }else{
            alert("Counter can't be negative");
        }  
    }
    return(
        <>
            <h2>Counter Demo</h2>
             <p>Count : {count}</p>
             <p><button className="btn btn-success" onClick={increClick}>Increment</button> &nbsp;&nbsp;
             <button className="btn btn-success" onClick={decreClick}>Decrement</button></p>   
        </>
    );
}

export default CounterDemo;