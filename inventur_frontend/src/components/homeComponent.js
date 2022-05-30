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
                                <h2>Overview</h2>
                                <button className="button">Search</button>
                                <h5>My lending list</h5>
                                <table>
                                    <thead>
                                    <tr>
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
                                    <tr>
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
                                    <tr>
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
                                    <tr>
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


                            <p></p>
                                <h2>Search</h2>
                                <div>Object Name:</div>
                                <Input
                                        type="text"
                                        className=""
                                        name="search"
                                    />
                    <GetAllObjectsInTable/>
                </Form>
            </div>
        );
    }
}