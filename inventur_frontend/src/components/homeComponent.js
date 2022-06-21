import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import ObjectService from "../services/objectService";
import {GetAllObjectsInArray, GetAllObjectsInTable, GetObjectsInTable, SearchInObjects} from "../model/objectFunctions";

import './home.css';
import {dummyObject, Object, ObjectState} from "../model/model";

export default class Home extends Component{

constructor(props) {
    super(props);
    this.onChangeSearchWord = this.onChangeSearchWord.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
        searchWord: "",
        objects: dummyObject,
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

    render(){
        return(

            <div className="Form-Group">
                <Form>
                                <p></p>
                                <h2 id="header" className="header">Overview</h2>

                                <h5 id="list" className="list">My lending list</h5>
                                <div className="topitems">
                                    <table>
                                        <thead>
                                    <tr className="tableHeader">
                                        <th>Object</th>
                                        <th>Return Until</th>
                                        <th>Room</th>
                                        <th>Locker</th>
                                        <th>Compartment</th>
                                        <th>Note</th>
                                        <th></th>
                                    </tr>

                                    </thead>
                                    <tbody>
                                    <tr className="data">

                                        <td>[Object]</td>
                                        <td>[ReturnDate]</td>
                                        <td>[Room]</td>
                                        <td>[Locker]</td>
                                        <td>[Compartment]</td>
                                        <td>[Note]</td>
                                        <td>
                                            <button className="button">Return</button>
                                        </td>
                                    </tr>
                                    <tr className="data">
                                        <td>[Object]</td>
                                        <td>[ReturnDate]</td>
                                        <td>[Room]</td>
                                        <td>[Locker]</td>
                                        <td>[Compartment]</td>
                                        <td>[Note]</td>
                                        <td>
                                            <button className="button">Return</button>
                                        </td>
                                    </tr>
                                    <tr className="data">
                                        <td>[Object]</td>
                                        <td>[ReturnDate]</td>
                                        <td>[Room]</td>
                                        <td>[Locker]</td>
                                        <td>[Compartment]</td>
                                        <td>[Note]</td>
                                        <td>
                                            <button className="button">Return</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
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
                                <button className="button" onClick={this.handleSearch}>Search</button>

                            <this.handleSearch/>
                    </Form>
            </div>

        );
    }
}
//{GetObjectsInTable(this.state.objects)}