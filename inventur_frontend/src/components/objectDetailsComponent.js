import React, {Component} from "react";
//import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import './objectDetails.css';

export default class ObjectDetails extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="Head">
            <body>
            <header>
                <h1>Werners I-phone 5s</h1>
                <p><img src="https://swroellinghausen.de/wp-content/uploads/2021/05/default-profile.png" alt="Profil"></img>
                    <br></br>
                    Profil
                </p>
            </header>
            <main>
                <div id="Objekt">
                    <li>Zustand: 60%</li>
                    <li> Zimmer: Z902</li>
                </div>
                <div id="Objekt2">
                    <li> Objekt Historie</li>
                    <img src="https://www.refurbished.at/cache/images/refurbished-iphone-5s-space-gray_600x600_BGresize_16777215-tj.webp" alt="Objektbild"></img>
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
                        <td>[User]</td>
                        <td>[Borrowed Date]</td>
                        <td>[Return Date]</td>
                        <td>[Note]</td>
                        </tbody>
                    </table>
            </main>
            </body>
            </div>

        );
    }
}