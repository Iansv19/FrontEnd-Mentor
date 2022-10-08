import React,{useState} from "react";
import NoteBody from "./NoteBody";
import dataList from "../dataList";
import Message from "./Message";

function App(){

    const[actualNumber, setActualNumber] = useState(dataList.length);
    const[isReadAll, setReadAll] = useState(false);

    function readNotification(){
        setActualNumber(() =>{
            return(
                actualNumber-1
                )
          })
    }
    
    function readAll(){
        setReadAll(true);
        setActualNumber(0);
    }
    return(

        <div className="principalBody container-fluid">
        <div className="top">
        <button type="button">
        Notifications <span class="badge">{actualNumber}</span>
        </button>
        <button className="all-read" onClick={readAll}>Mark all as read</button>
        </div>
            <div>
            <NoteBody 
                onNotification={readNotification}
                circuleImg={"../../../images/avatar-mark-webber.webp"}
                name={dataList[0].name}
                text={dataList[0].text}
                specificText={dataList[0].notificationObject}
                time={dataList[0].time}
                readStatus={isReadAll}
            /> 
            <NoteBody 
                onNotification={readNotification}
                circuleImg={"../../../images/avatar-angela-gray.webp"}
                name={dataList[1].name}
                text={dataList[1].text}
                time={dataList[1].time}
                readStatus={isReadAll}
            />
            <NoteBody 
                onNotification={readNotification}
                circuleImg={"../../../images/avatar-jacob-thompson.webp"}
                name={dataList[2].name}
                text={dataList[2].text}
                specificText={dataList[2].notificationObject}
                time={dataList[2].time}
                readStatus={isReadAll}
            />
            <NoteBody
                onNotification={readNotification}
                circuleImg={"../../../images/avatar-rizky-hasanuddin.webp"}
                name={dataList[3].name}
                text={dataList[3].text}
                time={dataList[3].time}
                readStatus={isReadAll}
            />
            <Message />
            <NoteBody 
                onNotification={readNotification}
                circuleImg={"../../../images/avatar-kimberly-smith.webp"}
                name={dataList[4].name}
                text={dataList[4].text}
                time={dataList[4].time}
                readStatus={isReadAll}
            />
            <NoteBody
                onNotification={readNotification} 
                circuleImg={"../../../images/avatar-nathan-peterson.webp"}
                name={dataList[5].name}
                text={dataList[5].text}
                specificText={dataList[5].notificationObject}
                time={dataList[5].time}
                readStatus={isReadAll}
            />
            <NoteBody 
                onNotification={readNotification}
                circuleImg={"../../../images/avatar-anna-kim.webp"}
                name={dataList[6].name}
                text={dataList[6].text}
                specificText={dataList[6].notificationObject}
                time={dataList[6].time}
                readStatus={isReadAll}
            />
            </div>
        </div>
    )
}

export default App;