import React from "react";
import styled from "styled-components";
import StyleButton from "./Component/Button/Button";

const Profile = () => {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: green;
  `;
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;
  
  const FeatureWrapper = styled.section`
    background-color: #f9f9f9;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const FeatureButton = styled.button`
    border-radius: 20px;
    background-color: #0f111c;
    display: inline-block;
    color: #fff;
    padding: 18px 30px;
    font-size: 20px;
    outline: none;
    cursor: pointer;
    border: none;
  `;
  const Input = styled.input.attrs((props) => ({
    type: "text",
    size: props.size || "1em",
  }))`
    border: 2px solid palevioletred;
    margin: ${(props) => props.size};
    padding: ${(props) => props.size};
  `;
  const PasswordInput = styled(Input).attrs({
    type: "password",
  })`
    // similarly, border will override Input's border
    border: 2px solid aqua;
  `;
  return (
    <div>
    <FeatureWrapper>
    <FeatureButton> Explore Components</FeatureButton>
    <FeatureButton> Explore Components</FeatureButton>
    <FeatureButton> Explore Components</FeatureButton>
  </FeatureWrapper>
      <Wrapper>
        <Title>Hello</Title>
      </Wrapper>
      
         <br/>
      <StyleButton>Style Button</StyleButton>
      <br />
      <StyleButton variant="outline">Style-Button</StyleButton>
      <br />
      <div>
        <Input placeholder="A bigger text input" size="2em" />
        <br />

        <PasswordInput placeholder="A bigger password input" size="2em" />
      </div>
    </div>
  );
};

export default Profile;
