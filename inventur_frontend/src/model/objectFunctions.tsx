import {dummyObject, Object, ObjectState} from "../model/model";
import ObjectService from "../services/objectService";
import AddService from "../services/addService";
import {AxiosResponse} from "axios";
import React, {useEffect, useState} from "react";
import objectService from "../services/objectService";
import Home from "../components/homeComponent";
import homeComponent from "../components/homeComponent";
import {Button} from "react-bootstrap";
import {DatePipe, formatDate} from "@angular/common";

export function SearchInObjects(searchWord:String){
    let objects = GetAllObjectsInArray();
    let newObjects = dummyObject;
    let count = 0;

    for(let i = 0; i < objects.length; i++){
        if(objects[i].name.toLowerCase().includes(searchWord.toLowerCase())){
            newObjects[count] = objects[i];
            count ++;
        }
    }
    newObjects.length = count;

    return newObjects;
}

export function GetLendObjectsInTable(objects:Object[]){
    return(
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
            {
                objects.map((object)=>{
                    return(
                <tr className="data" key={object.id.toString()}>

                <td>{object.name}</td>
                <td>[ReturnDate]</td>
                <td>{object.roomName}</td>
                <td>{object.storageName}</td>
                <td>{object.sectionName}</td>
                <td>[Note]</td>
                <td>
                <button className="button" type="button" onClick={()=>handleUpdateState(object.id,object.state)}>Return</button>
                </td>
                </tr>
                )
                })
            }
            </tbody>
        </table>
    );
}

export function GetMyLendObjects(){
    const [objects, setObjects] = useState<Object[]>(()=>dummyObject);
    const [loaded, setLoaded] = useState<boolean>(()=>false);

    useEffect(()=>{
        if(loaded){return;}
        ObjectService.getObjectsByUser().then((response: AxiosResponse<Object[]>) =>{
            setLoaded(true)
            setObjects(response.data)
        }).catch((error)=>{
            console.error("error: ",error)
        });
        setLoaded(false);
    })

    return objects;
}

export function GetObjectById(id:number){
    const [object, setObject] = useState<Object>(() => dummyObject[0]);
    const [loaded, setLoaded] = useState<boolean>(() => false);

    useEffect(() => {
        if(loaded){
            return;
        }
        ObjectService.getObjectById(id).then((response: AxiosResponse<Object>) =>{
            setLoaded(true)
            setObject(response.data)
        }).catch((error) => {
            console.error("error: ",error)
        });
        setLoaded(false);
    })
    return object;
}

export function GetAllObjectsInArray(){
        const [objects, setObjects] = useState<Object[]>(() => dummyObject);
        const [loaded, setLoaded] = useState<boolean>(() => false);

        useEffect(() => {
            if (loaded) {
                return;
            }
            ObjectService.getAllObjects().then((response: AxiosResponse<Object[]>) => {
                setLoaded(true)
                setObjects(response.data)
            }).catch((error) => {
                console.error("error: ", error)
            });
            setLoaded(false);

        })

        return objects;
}

export function GetObjectsInTable(objects:Object[]){
    return(
        <table id="dataTable">
            <thead>
            <tr className="tableHeader">
                <th>Object</th>
                <th>Room</th>
                <th>Locker</th>
                <th>Compartment</th>
                <th>Availability</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                objects.map((object) => {
                    return (
                        <tr key={object.id.toString()} className="id" id={object.id.toString()}>
                            <td>{object.name}</td>
                            <td>{object.roomName}</td>
                            <td>{object.storageName}</td>
                            <td>{object.sectionName}</td>
                            <td className="state">{ObjectState[object.state]}</td>
                            <td>
                                <button className="button" name="btnUpdateState" id={object.id.toString()} type="button" onClick={()=>handleUpdateState(object.id,object.state)}>{(object.state == 1)? ("Borrow"):("Return")}</button>
                            </td>
                            <td>
                                <button className="button" type="button" onClick={()=>handleObjectDetails(object.id)}>Details</button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>


    )
}

export function handleDeleteObjectById(objectId:number){
    objectService.deleteObjectById(objectId).then(
        ()=>{
            window.location.replace("/home");
        }
    )
}

export function GetObjectDetailsTable(object:Object){
    console.log("LendDate: "+ object.lendDate);
    return (
        <div id="Head">
            <header>
                <h1>{object.name}</h1>
            </header>
            <main>
                <div id="objectInfo">
                    <li> Room: {object.roomName}</li>
                    <li> Locker: {object.storageName}</li>
                    <li> Compartment: {object.sectionName}</li>
                </div>
                <br/>
                <div id="objectHistory">
                    <li>Object History</li>
                </div>
                <table className="dataTable1">
                    <thead>
                    <tr>
                        <th>Lend By</th>
                        <th>Lend Date</th>
                        <th>Return Date</th>
                        <th>Notes</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{object.lendBy}</td>
                        <td>{(object.lendDate)?(object.lendDate.toString()):("")}</td>
                        <td>[Return Date]</td>
                        <td>[Note]</td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <Button onClick={()=>handleDeleteObjectById(object.id)}>Delete from Database</Button>
            </main>
        </div>
    );
}

function handleObjectDetails(id:number){
    window.location.replace("/details/"+id);
}

function handleUpdateState(id:number, state:number){
    if(state==1){
        ObjectService.updateState(id, 0).then(
            ()=>{
                window.location.reload();
            }
        );
    }
    else ObjectService.updateState(id, 1).then(
        ()=>{
            window.location.reload();
        }
    );

    return 1;
}

export function GetAllObjectsInTable(){

    return(GetObjectsInTable(GetAllObjectsInArray()));
}

export function AddObject(object:Object){
    return AddService.addObject(object);
}