import React, {useState, useEffect } from "react";


let json;
let channelName;
let programName, startTime, endTime;

function ScheduleLiveTile()  {


{


        var xmlhttp = new XMLHttpRequest();
        var url = "https://rest-api.elisaviihde.fi/rest/epg/schedule/live";
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                this.json = JSON.parse(this.response);
                programName=this.json.schedule[1].programs[0].name;
                channelName=this.json.schedule[1].channel.name;
                startTime=this.json.schedule[1].programs[0].startTime;
                endTime=this.json.schedule[1].programs[0].endTime;
                console.log("asd")
            }
        };


        xmlhttp.open("GET", url, true);
        xmlhttp.send();


        return (
            <div>
               <p>{channelName}</p>
                <p>{programName}</p>
                <p>{startTime}</p>
            </div>
        );
    }
}

export default ScheduleLiveTile;