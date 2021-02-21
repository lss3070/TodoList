import React,{useContext,useState} from "react";
import {TodosStateContext} from "./context";
import styled from "styled-components";


interface IProps{
    user:string;
}

const Header:React.FunctionComponent<IProps> =()=>{
    const context = useContext(TodosStateContext);
    
    return(
        <header>
            <a href="#">Home</a>Hello, {context&&context.user}, you are {context.loggedIn?"logged in": "anonymous"}
            
        </header>
    )
}



export default Header;