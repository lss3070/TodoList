import React, { MouseEvent, useContext } from "react";

import Header from "./Header";
import styled from "styled-components";
import {TodosStateContext,useTodosDispatch} from "./context";

const Container =styled.div``


const Screen:React.FunctionComponent=()=>{
   

    const dispatch = useTodosDispatch();

    const onClick = (e: MouseEvent) => {
        dispatch({
          type: 'Click',
        });
      };
    return(
        <div>
            <Header user=""/>
            <h1>Frist Screen</h1>
            <button onClick={onClick}>Click!!</button>
        </div>
       
    )
}


export default Screen;