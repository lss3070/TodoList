import React,{useContext} from "react";
import {UserContext} from "./context";
import styled from "styled-components";


interface IProps{
    user:string;
}

const Header:React.FunctionComponent<IProps> =()=>{
    const context = useContext(UserContext);
    console.log(context);
    return(
        <header>
            <a href="#">Home</a>Hello,
        </header>
    )
}



export default Header;