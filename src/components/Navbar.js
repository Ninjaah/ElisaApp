import React, { Component } from "react";


export class Navbar extends React.Component {

    componentWillMount(){
        setInterval(function(){
            this.setState({
                curTime: new Date().toLocaleString()
            })
        }.bind(this), 1000);
    }

    render() {

        var today = new Date();
        var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
        var time = today.getHours()+":"+today.getMinutes();
        return (
            <div className={"navbar"}>
            <h2>Elisa Viihde Ohjelmaopas</h2>
            <p>{date+" "+time}</p>
        </div>
            )
        }
    }


export default Navbar;