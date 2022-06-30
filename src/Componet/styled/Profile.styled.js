import styled from "styled-components";

export const Containder = styled.div`
  width: 100%;
`;
export const Header = styled.div`
  padding: 20px 0px;
  background-color: black;
  color: white;
`;
export const Logo = styled.div`
  width: 20%;
  display: inline-block;
`;
export const List = styled.div`
  width: 80%;
  display: inline-block;
  text-align:right;
`;
export const Listitem = styled.li`
  text-decoration: none;
  display: inline-block;
  padding: 0px 48px;
  cursor: pointer;
  font-size: medium;
  &:hover {
    color: blue;
  }
  
`;
