import React, {Component} from "react";
import './objectDetails.css';
import {GetObjectById, GetObjectDetailsTable} from "../model/objectFunctions";
import {dummyObject} from "../model/model";

/** this component shows more information about a specific object*/
class ObjectDetails extends Component{

    constructor(props){
        super(props);
        this.onLoad = this.onLoad.bind(this);
        this.state = {
            object:dummyObject[0],
            loading:false,
        }
    }
    /**returns a table of information about the object*/
onLoad(e){
        this.state.object = GetObjectById(window.location.href.split('/')[4]);
    return GetObjectDetailsTable(this.state.object);
}
/**here is what you see*/
    render(){
        return(
            <this.onLoad/>
        );
    }
}
export default ObjectDetails;