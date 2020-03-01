import React, { useState } from "react";
import styled from "styled-components";
import SelectorButtonVertical from "UI/buttons/SelectorButtonVertical";
import {connect} from "react-redux"

const Header = ({display, setDisplay}) => {
  
  return (
    <HeaderWrapper>
      <Title>
        <h1>Spending</h1>
      </Title>
      <CatagorySelection>
          <SelectorWrapper>
               <SelectorButtonVertical visible={display === "fixed"} onClick={() => setDisplay("variable")}/>
          </SelectorWrapper>
          <Catagories>
              <Catagory display={"fixed"} onClick={() => setDisplay("fixed")}>
                  <h2>Fixed</h2>
                  <span>
                  22k
                  </span>
              </Catagory>
              <Catagory display={"variable"} onClick={() => setDisplay("variable")} style={{color: "#F29278"}}>
                  <h2>Variable</h2>
                  <span>
                  18k - 27k
                  </span>
              </Catagory>
          </Catagories>
      </CatagorySelection>
    </HeaderWrapper>
  );
};

export default Header;

//-----------------------------------------------style-----------------------------------------------//

const HeaderWrapper = styled.div`
  grid-area: a;
   {
    /*Grid-area set in Income, "a" positions it at the top */
  }
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.color.slate};
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 30rem;
  & span {
    position: absolute;
    right: 1rem;
    font-size: 3rem;
  }
`;

const Catagory = styled.div`
    border-bottom: ${props => (props.display ? "1px solid grey" : 0)}
    cursor: pointer;
    padding: 1rem;
    text-align: left;
    display: flex;
    flex-direction: row;
    position: relative;
    width: 20rem;
    & span {
        position: absolute;
        right: 1rem;
    }
`;
const Catagories = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const CatagorySelection = styled.div`
  display: flex;
`;

const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 3rem;
  height: 10rem;
`;
