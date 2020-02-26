import './App.css';


import React from 'react';
import ChannelTile from "./components/ChannelTile";
import Navbar from "./components/Navbar";
const API = 'https://rest-api.elisaviihde.fi/rest/epg/channels';
const APIsc = 'https://rest-api.elisaviihde.fi/rest/epg/schedule?channelId=';   //Not used as the function was moved to ChannelTile.js
let channelIDs = [37, 38, 39, 40, 41, 42, 44, 47, 169, 183, 181, 6, 251, 256, 258, 295, 331, 26, 15, 259, 260, 263, 264, 296, 297, 298, 299];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            schedule: [],       //Not used, was supposed to hold one schedule at a time which it gets from the API
            everySchedule: []   //Not used, was supposed to hold all schedules in an array
        };
    }
      componentDidMount() {
          fetch(API )
              .then(response => response.json())
              .then(data => this.setState({ channels: data.channels }));
          console.log(this.state.channels);
/*
          fetch(APIsc + channelId )   // I first thought I could get both channels and schedules in this component but I changed it so that Channeltiles get the schedules themselves
              .then(response => response.json())
              .then(data => this.setState({ schedule: data.schedule }));
*/
    }
/*
    getAllIds(){                        // Get the id's of all channels and save to channelIDs
        this.state.channels.map(hit =>
            <li key={hit.toString()}>
                {channelIDs.push(hit.id)}
            </li>

        );
        console.log(channelIDs);
    }

    getSchedule(channelID) {            // Get the schedule for today for the channelID given
        console.log("trying to get schedule for "+channelID);
        fetch(APIsc + channelID )
            .then(response => response.json())
            .then(data => this.setState(previousState => ({
                everySchedule: [...previousState.everySchedule, data]
            })));
        console.log(this.state.everySchedule)
    }
    getEverySchedule(){
        for(var i=0;i<27;i++){
            this.getSchedule(channelIDs[i]);
            console.log(i)
        }
    }
*/

    render() {
        const {channels} = this.state;
 //   this.getAllIds();
   // this.getSchedule(37);

        return (            //Make a channeltile for each channel, get the logo, send its id as props
            <div>
            <Navbar/>
            <ul>
                {channels.map(hit =>
                    <div className="channelTile" key={hit.toString()}>
                        <p><img src={hit.logos[5].url} alt={hit.name} /> </p>
                        <div className="scroller"><ChannelTile  channelId={hit.id}/></div>
                    </div>
                )}
            </ul>
            </div>
        );
    }
}
export default App;
