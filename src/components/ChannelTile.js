import React from "react";


const API = 'https://rest-api.elisaviihde.fi/rest/epg/schedule?channelId=';
class ChannelTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: [],       //Schedule for this particular channel
        };
    }
    componentDidMount() {
        fetch(API + this.props.channelId)   // Gets the schedule for its channel
            .then(response => response.json())
            .then(data => this.setState({ schedule: data.schedule }));

        /*
        fetch(APIsc + channelId )
            .then(response => response.json())
            .then(data => this.setState({ schedule: data.schedule }));
            */

    }


    render() {  // Loops through the programs in the schedule and prints the time, gives the line "ended" as classname if the ending time is behind current time


           return this.state.schedule.map((schedule) =>
               schedule.programs.map((program) =>
                   (program.endTimeUTC < Date.now()) ? (
                       <ul className={"ended"}>{program.startTime.slice(11, 16) + " " + program.name}</ul>) : (
                       <ul>{program.startTime.slice(11, 16) + " " + program.name}</ul>)
               ));
    }
}

        export default ChannelTile;