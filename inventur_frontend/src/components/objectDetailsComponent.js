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
            <div>
            <Container className="p-4">
                    <h1 className="header">Ausgeliehene Objekte</h1>
                    <table>
                    </table>

            </Container>

            <Table Inventarliste>
                <thead>
                <tr>
                    <th>Objekt</th>
                    <th>Rückgabe bis</th>
                    <th>Zimmer</th>
                    <th>Schrank</th>
                    <th>Fach</th>
                    <th>Anmerkung</th>
                    <th>#</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Werners IPhone5s</td>
                    <td>20.12.2021</td>
                    <td>Z902</td>
                    <td>Schrank#1</td>
                    <td>1 Links</td>
                    <td></td>
                    <td><Button variant="dark">Zurück</Button>{' '}</td>
                </tr>
                <tr>
                    <td>Fernbedienung Beamer</td>
                    <td>19.12.2021</td>
                    <td>Z902</td>
                    <td>Schrank#1</td>
                    <td>2 Rechts</td>
                    <td>OK Knopf reagiert schwer</td>
                    <td><Button variant="Zurückgeben">Dark</Button>{' '}</td>
                </tr>
                </tbody>
            </Table>
            </div>
        );
    }
}