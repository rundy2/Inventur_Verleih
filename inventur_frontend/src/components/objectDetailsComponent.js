import React, {Component} from "react";
//import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import './objectDetails.css';
import {GetObjectById, GetObjectDetailsTable} from "../model/objectFunctions";
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
    return GetObjectDetailsTable(this.state.object);
}
    render(){
        return(
            <this.onLoad/>
        );
    }
}
export default ObjectDetails;