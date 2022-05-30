import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import ObjectService from "../services/objectService";
import { GetAllObjectsInTable } from "../model/objectFunctions";

import './home.css';

export default class Home extends Component{

constructor(props){
    super(props);
}

    render(){
        return(
            <div className="Form-Group">
                <Form>
                                <p></p>
                                <h2 id="header" className="header">Overview</h2>
                                <button className="button">Search</button>
                                <h5>My lending list</h5>

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
                                <button className="button">Alle Elemente</button>
                                </div>

                            <p></p>
                                <h2 id="list" className="list">Search</h2>
                                    <Input
                                        type="text"
                                        className="input1"
                                        name="search"
                                        placeholder="Object Name"
                                    />
                    <GetAllObjectsInTable/>
                </Form>
            </div>
        );
    }
}