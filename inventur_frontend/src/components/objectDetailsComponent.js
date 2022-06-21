import React, {Component} from "react";
//import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import './objectDetails.css';
import {GetObjectById, GetObjectsInTable} from "../model/objectFunctions";
import {dummyObject} from "../model/model";

class ObjectDetails extends Component{

    constructor(props){
        super(props);
        this.onLoad = this.onLoad.bind(this);
        this.state = {
            object:dummyObject[0],
            loading:false,
        }
    }
onLoad(e){
        this.state.object = GetObjectById(window.location.href.split('/')[4]);
    return <div>loaded</div>
}
    render(){
        return(
            <div id="Head">
            <header>
                <h1>Name: {this.state.object.name}</h1>
            </header>
            <main>
                <div id="Objekt">
                    <li> Zimmer: {this.state.object.roomName}</li>
                </div>
                <div id="Objekt2">
                    <li> Objekt Historie</li>
                </div>
                    <table className="Tabelle">
                        <thead>
                        <tr>
                            <th>Ausgeliehen von</th>
                            <th>Ausgeliehen am</th>
                            <th>Rückgabe am</th>
                            <th>Anmerkung</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>[User]</td>
                                <td>[LendDate]</td>
                                <td>[Return Date]</td>
                                <td>[Note]</td>
                            </tr>
                        </tbody>
                    </table>
            </main>
            </div>

        );
    }
}
export default ObjectDetails;