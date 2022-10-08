import React, { useState } from "react";

function Message (){

    const[isCheck, setCheck] = useState(false);

    function messageChecked(){
        setCheck(true)
    }
    return(
        <div >
            <p className="message" onClick={messageChecked} style={{backgroundColor: isCheck ? "hsl(210, 60%, 98%)" : "hsl(211, 68%, 94%)"}}>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks
             now i'm already having a lots of fun and improving my game</p>
            
        </div>
    )
}

export default Message;