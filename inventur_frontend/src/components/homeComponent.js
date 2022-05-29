import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import AuthService from "../services/authService";
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
                                <h5 id="list" className="list">My lending list</h5>
                                <div className="form-group" className="topitems">
                                    <table>
                                    <tr className="tableHeader">
                                        <th>Object</th>
                                        <th>Return Until</th>
                                        <th>Room</th>
                                        <th>Locker</th>
                                        <th>Compartment</th>
                                        <th>Note</th>
                                        <th></th>
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
                                <table>
                                    <tr className="tableHeader">
                                        <th>Object</th>
                                        <th>Return Date</th>
                                        <th>Room</th>
                                        <th>Locker</th>
                                        <th>Compartment</th>
                                        <th>Availability</th>
                                        <th>Note</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    <tr className="data">
                                        <td>[Object]</td>
                                        <td>[ReturnDate]</td>
                                        <td>[Room]</td>
                                        <td>[Locker]</td>
                                        <td>[Compartment]</td>
                                        <td>[Availability]</td>
                                        <td>[Note]</td>
                                        <td>
                                            <button className="button">Borrow/Return</button>
                                        </td>
                                        <td>
                                            <button className="button">Details</button>
                                        </td>
                                    </tr>
                                </table>
                            </Form>
            </div>
        );
    }
}