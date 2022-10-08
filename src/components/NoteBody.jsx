import React,{useState} from "react";
import NotificationPicture from "./NotificationPicture";

function NoteBody (props){

    const [isReaded, setReaded] = useState(false);
    
    function handleNotification(){
        props.onNotification();
        setReaded(true);
    }

    return(
        
        <div className="notificationBody" onClick={isReaded? null : handleNotification} style={{backgroundColor: props.readStatus ? "hsl(210, 60%, 98%)" : isReaded ? "hsl(210, 60%, 98%)" : "hsl(205, 33%, 90%)"}}>
            <div className={props.text === "commend on your picture"? "notification-details" : "div"}>
            <img className="profilePicture" src={props.circuleImg} alt="chess_img" />
            <p><a className="name" href="www.google.com">{props.name}</a> {props.text} <a href="www.google.com">{props.specificText}</a> {props.readStatus ? null : isReaded ? null : <b className="doteIcon">•</b>} {props.text === "commend on your picture" ? <NotificationPicture /> : null}</p>
            <p className="time">{props.time}</p>
            </div>
            
        </div>
    )
}

export default NoteBody;