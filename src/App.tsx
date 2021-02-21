import React,{useState} from 'react';
import {TodosContextProvider} from './context';
import Screen from "./Screen";

function App() {

  return (
    <TodosContextProvider>
      <Screen />
    </TodosContextProvider>
  );
}

export default App;
