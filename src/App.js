import React, {useState, useEffect} from "react";
import NasaList from "./components/NasaList";
import "./App.css";
import styled from 'styled-components';

const ContainerStyling = styled.div`
    background:dimgrey;
`;


function App() {


  return (
    <ContainerStyling className="App">
      <NasaList />
    </ContainerStyling>
  );
}

export default App;
