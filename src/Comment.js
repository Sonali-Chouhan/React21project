// (async () => {
//     const rawResponse = await fetch(
//       "https://react-rails-api-demo.herokuapp.com/api/v1/signup",
//       {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ user: state }),
//       }
//     );
//     const content = await rawResponse.json();

//     const item = content?.token;
//     const user_id = content?.user?.id;
//     localStorage.setItem("Token", item);
//     localStorage.setItem("user_id", user_id);
//   })();

//App.js
// import React, { useState } from "react";
// import "./App.css";
// import Api from "./Base/Base";

// function App() {
//   const [state, setstate] = useState({
//     email: "",
//     password: "",
//     password_confirmation: "",
//   });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//      (async () => {
//          const res=(Api.post,"singup",{user:state}).then((data)=>{
//           console.log("data",data)
          
//           })
//         })();
//   };

//   return (
//     <div className="App">
//       <form>
//         <input
//           type="email"
//           placeholder="Enter Email ...."
//           value={state.email}
//           onChange={(e) => setstate({ ...state, email: e.target.value })}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Enter Password...."
//           value={state.password}
//           onChange={(e) => setstate({ ...state, password: e.target.value })}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Enter Password...."
//           value={state.password_confirmation}
//           onChange={(e) =>
//             setstate({ ...state, password_confirmation: e.target.value })
//           }
//         />
//         <br />
//         <button type="submit" onClick={(e) => handleSubmit(e)}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;
//https://github.com/bradtraversy/huddle_styled_components/commit/7b17790520e7eacddfb0d3d8a148c942f99fe532

//app .js
/*




import React from "react";
//import Header from "./Componet/Header";
//import { Button } from "./Componet/styled/Button.styled";
//import { Container } from "./Componet/styled/Container.styled";
import styled from "styled-components";



function App() {

  const Button=styled.button`
border-radius:50px;
border:none;
cursor: pointer;
font-size: 16px;
font-weight: 700;
padding: 15px 60px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
background-color:#3295a8  ;
color:#fff;
&:hover {
    opacity: 0.9;
    transform: scale(0.98);
    color:#fff;
    background-color:#A9AFB0 
  }`;
  const Wapper=styled.div`
  margin-top: 70px;
  text-align:center;`
  const Main=styled.div`
  border: 2px solid #bfc6c7;
  width: 30%;
  padding:20px 0px;
  margin: 0px 16px;
  display:inline-block;
  text-align:center;
  `;
  const Input = styled.input`
  font-size: 18px;
  width:80%;
  padding: 10px;
  margin: 10px;
  border:2px solid #bfc6c7;
  border-radius: 15px; 
  ::placeholder {
    color: #bfc6c7;
  }
`;;

  return (
   <>
   <Wapper>
   <Main>
   <Input placeholder="for First_Name.." /><br/>
   <Input placeholder="for Last_Name.." /><br/>
   <Input placeholder="for Email_Id.." /><br/>
  
   <br/>
   <Button>Save</Button>
   </Main>
   </Wapper>
   {/* <Header/>
   <Container>
    <h1>Hello</h1>
   </Container> 
   </>
  );
}

export default App;
*/
// import React from 'react'
// import styled from 'styled-components'
// import  textUpper  from 'text-js-upper';
// // import addTwoNums from "add-two-no"
// // import Myfun from "add-two-no"
// import { add } from 'add-two-no';
// // console.log(321321321,textUpper)
// // console.log("gg",addTwoNums)
// // console.log("gg1",Myfun)
// console.log("ff",add(1000,1))
// const App = () => {
  
//   const Container=styled.div`
//   border:1px solid #dee0e0 ;
//   display: flex;
//    padding: 110px 30px; 
//   margin-top: 131px;
//   margin-left: 307px;
//   width: 50%;
//   border-radius:20px;
//   `;
//   const InputForm=styled.div`
//   width: 50%;
//   justify-content:space-between;
//  `;const Heading=styled.div`
// width:50%;
// justify-content:space-between;
// background-image:url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp");
// height:"85vh" ;
// padding:"10px 10px"; 
// background-size:"cover";

//   `;

// const Input = styled.input`
//     color: #000;
//     /* display: flex;
//     justify-content:left; */
//     cursor: pointer;
//     background-color: #fff;
//     border-radius: 15px;
//     border: 2px solid brown;
//     padding: 10px 0px;
//     margin: 5px;
//   `;
//   return (
//     <>
//       <Container>
//           <h3 style={{textUpper}}>hellow</h3>
//       </Container>
     
//     </>
//   )
// }

// export default App
