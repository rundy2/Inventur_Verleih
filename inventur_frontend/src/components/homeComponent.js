import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import AuthService from "../services/authService";

export default class Home extends Component{

constructor(props){
    super(props);
}

    render(){
        return(
                            <Form>
                                <p></p>
                                <h2>Overview</h2>
                                <button className="button">Search</button>
                                <h5>My lending list</h5>
                                <table>
                                    <tr>
                                        <th>Object</th>
                                        <th>Return Until</th>
                                        <th>Room</th>
                                        <th>Locker</th>
                                        <th>Compartment</th>
                                        <th>Note</th>
                                        <th></th>
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
                                </table>


                            <p></p>
                                <h2>Search</h2>
                                <div>Object Name:</div>
                                <Input
                                        type="text"
                                        className=""
                                        name="search"
                                    />
                                <table>
                                    <tr>
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
                                    <tr>
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
        );
    }
}