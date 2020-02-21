import React, {useEffect} from "react";

import ScheduleLiveTile from './ScheduleLiveTile';
export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('https://rest-api.elisaviihde.fi/rest/epg/schedule/live')
            .then(res => res.json())
            .then((data) => {
            this.setState({ data: data.data })
            })

    }

    render() {


        return (
            <div>
                <ScheduleLiveTile />
            </div>
        );
    }
}

export default Content;