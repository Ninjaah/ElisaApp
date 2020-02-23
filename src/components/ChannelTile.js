import React, {Component} from "react";


const API = 'https://rest-api.elisaviihde.fi/rest/epg/schedule?channelId=';
let channelId;
class ChannelTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: [],
        };
    }
    componentDidMount() {
        fetch(API + this.props.channelId)
            .then(response => response.json())
            .then(data => this.setState({ schedule: data.schedule }));

        /*
        fetch(APIsc + channelId )
            .then(response => response.json())
            .then(data => this.setState({ schedule: data.schedule }));
            */

    }


    render() {

           return this.state.schedule.map((schedule) =>
               schedule.programs.map((program) =>
                   (<ul>{program.startTime.slice(11, 16) + " " + program.name}</ul>)
               ));
    }
}

        export default ChannelTile;