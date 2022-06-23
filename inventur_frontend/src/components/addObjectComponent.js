import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import {Button, FormLabel} from "react-bootstrap";
import AddService from "../services/addService";

const required = value =>{
    if(!value){
        return(
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class AddObject extends Component{
    constructor(props) {
        super(props);
        this.handleAddObject = this.handleAddObject.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onRoomChange = this.onRoomChange.bind(this);
        this.onStorageChange = this.onStorageChange.bind(this);
        this.onSectionChange = this.onSectionChange.bind(this);
        this.state={
            oname:"",
            room:"",
            storage:"",
            section:""
        };
    }

    onNameChange(e){
        this.setState({
            oname: e.target.value
        });
    }
    onRoomChange(e){
        this.setState({
            room: e.target.value
        });
    }
    onStorageChange(e){
        this.setState({
            storage: e.target.value
        });
    }
    onSectionChange(e){
        this.setState({
            section: e.target.value
        });
    }

    handleAddObject(e){
        return AddService.addObject(this.state.oname,
                                    this.state.room,
                                    this.state.storage,
                                    this.state.section);
    }

    render(){
    return(
        <div>
            <Form name="addObject">
                <FormLabel>Name: </FormLabel>
                <Input name="oname" validations={[required]} onChange={this.onNameChange}/>

                <FormLabel>Room: </FormLabel>
                <Input name="room" validations={[required]} onChange={this.onRoomChange}/>

                <FormLabel>Storage</FormLabel>
                <Input name="storage" validations={[required]} onChange={this.onStorageChange}/>

                <FormLabel>Section</FormLabel>
                <Input name="section" validations={[required]} onChange={this.onSectionChange}/>

                <br/>
                <Button type="button" onClick={this.handleAddObject}>Add Object</Button>
            </Form>
        </div>
    )
    }
}
