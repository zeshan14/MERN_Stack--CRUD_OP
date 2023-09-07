import { useState } from "react"

import { addUser} from "../service/api"

import styled from "@emotion/styled"

import { FormGroup, FormControl, InputLabel, Input, Typography, Styled, Button } from "@mui/material"

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div{
    margin-top:20px;
    margin-bottom:20px;
    }
`

const defaultValue = {
    FirstName:"",
    LastName:"",
    Street:"",
    Address:"",
    City:"",
    State:"",
    Email:"",
    Phone:""
}

const AddUser = () => {


    const [user, setUser] = useState(defaultValue);


    const onValueChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
    }

    const addUserDetails = async() => {
        await addUser(user);

    }



    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="First-name" />
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name ='Last-name'/>
            </FormControl>
            <FormControl>
                <InputLabel>Street</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'street'/>
            </FormControl>
            <FormControl>
                <InputLabel>Address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Address"/>
            </FormControl>
            <FormControl>
                <InputLabel>City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="City"/>
            </FormControl>
            <FormControl>
                <InputLabel>State</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="State"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Phone"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    );
}


export default AddUser;