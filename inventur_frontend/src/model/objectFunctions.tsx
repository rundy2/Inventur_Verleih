import {dummyObject, Object, ObjectState} from "../model/model";
import ObjectService from "../services/objectService";
import AddService from "../services/AddService";
import {AxiosResponse} from "axios";
import React, {useEffect, useState} from "react";
import objectService from "../services/objectService";
import Home from "../components/homeComponent";
import homeComponent from "../components/homeComponent";

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

export function GetAllObjectsInArray(){
        const [objects, setObjects] = useState<Object[]>(() => dummyObject);
        const [loaded, setLoaded] = useState<boolean>(() => false);

        useEffect(() => {
            if (loaded) {
                return;
            }
            ObjectService.getAllObjects().then((response: AxiosResponse<Object[]>) => {
                console.log(response.data);
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
                                <button className="button" name="btnUpdateState" id={object.id.toString()} type="button" onClick={()=>handleUpdateState(object.id,object.state)}>Borrow/Return</button>
                            </td>
                            <td>
                                <button className="button">Details</button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>


    )
}

function handleUpdateState(id:number, state:number){
    console.log("Id: "+id);
    console.log("State: "+state);
    if(state==1){
        ObjectService.updateState(id, 0);
    }
    else ObjectService.updateState(id, 1);

    return 1;
}

export function GetAllObjectsInTable(){

    return(GetObjectsInTable(GetAllObjectsInArray()));
}

export function AddObject(object:Object){
    return AddService.addObject(object);
}