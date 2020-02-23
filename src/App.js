import './App.css';


import React, { Component } from 'react';
import ChannelTile from "./components/ChannelTile";
import Navbar from "./components/Navbar";
const API = 'https://rest-api.elisaviihde.fi/rest/epg/channels';
const APIsc = 'https://rest-api.elisaviihde.fi/rest/epg/schedule?channelId=';
let channelIDs = [37, 38, 39, 40, 41, 42, 44, 47, 169, 183, 181, 6, 251, 256, 258, 295, 331, 26, 15, 259, 260, 263, 264, 296, 297, 298, 299];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            schedule: [],
            everySchedule: []
        };
    }
      componentDidMount() {
          fetch(API )
              .then(response => response.json())
              .then(data => this.setState({ channels: data.channels }));
          console.log(this.state.channels);
/*
          fetch(APIsc + channelId )
              .then(response => response.json())
              .then(data => this.setState({ schedule: data.schedule }));
*/

    }
/*
    getAllIds(){
        this.state.channels.map(hit =>
            <li key={hit.toString()}>
                {channelIDs.push(hit.id)}
            </li>

        );
        console.log(channelIDs);
    }

    getSchedule(channelID) {
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

        return (
            <div>
            <Navbar/>
            <ul>
                {channels.map(hit =>
                    <div className="channelTile" key={hit.toString()}>
                        <p><img src={hit.logos[5].url} alt={hit.name} /> </p>
                        <ChannelTile  channelId={hit.id}/>
                    </div>
                )}
            </ul>
            </div>
        );
    }
}
export default App;
