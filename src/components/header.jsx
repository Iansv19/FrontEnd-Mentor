import React,{useState} from "react";

function Header (props){

    const[isReadPush, setReadPush] = useState(false);
    function readAllbutton(){
        setReadPush(true);
        props.readAllAction(isReadPush);
    }
 return(
    <div>
        <h1>Notifications {props.counting}</h1>
        <h3 onClick={readAllbutton}>Mark all as read</h3>
    </div>
 )
}

export default Header;