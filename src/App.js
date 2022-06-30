import React from "react";
import { Containder, Header, List, Listitem, Logo } from "./Componet/styled/Profile.styled";

 const App=()=>{

  return(
  <Containder>
  <Header>
    <Logo>
        Hello
    </Logo>
    <List>
        <ul>
          <Listitem>Data1</Listitem>
          <Listitem>Data2</Listitem>
          <Listitem>Data3</Listitem>
          <Listitem>Data4</Listitem>
        </ul>
        
    </List>
  </Header>
  </Containder>
  )
 }
 export default App;