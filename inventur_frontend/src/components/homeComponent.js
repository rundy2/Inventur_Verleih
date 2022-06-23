import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import ObjectService from "../services/objectService";
import {GetLendObjectsInTable, GetMyLendObjects, GetObjectsInTable, SearchInObjects} from "../model/objectFunctions";

import './home.css';
import {dummyObject, Object, ObjectState} from "../model/model";

export default class Home extends Component{

constructor(props) {
    super(props);
    this.onChangeSearchWord = this.onChangeSearchWord.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMyLendObjects = this.handleMyLendObjects.bind(this);
    this.state = {
        searchWord: "",
        objects: dummyObject,
        lendObjects: dummyObject,
        loading: false,
    };
}

onChangeSearchWord(e){
    this.setState({
        searchWord: e.target.value
    });
}

handleSearch(e){
    this.state.objects = SearchInObjects(this.state.searchWord);
    return GetObjectsInTable(this.state.objects);
}

handleMyLendObjects(e){
    this.state.lendObjects = GetMyLendObjects();
    return GetLendObjectsInTable(this.state.lendObjects);
}

    render(){
        return(

            <div className="Form-Group">
                <Form>
                                <p></p>
                                <h2 id="header" className="header">Overview</h2>

                                <h5 id="list" className="list">My lending list</h5>
                                <div className="topitems">
                                <this.handleMyLendObjects/>
                                <button className="button">All Elements</button>
                                </div>
                </Form>

                            <p></p>
                    <Form>
                                <h2 id="list" className="list">Search</h2>
                                    <Input
                                        type="text"
                                        className="input1"
                                        name="searchWord"
                                        placeholder="Object Name"
                                        onChange={this.onChangeSearchWord}
                                    />

                            <this.handleSearch/>
                    </Form>
            </div>

        );
    }
}
//{GetObjectsInTable(this.state.objects)}