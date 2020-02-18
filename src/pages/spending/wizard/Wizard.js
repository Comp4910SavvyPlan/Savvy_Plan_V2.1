import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ButtonLight from "UI/buttons/ButtonLight";
import WelcomePage from "pages/spending/wizard/WelcomePage";

const Wizard = () => {
  const [count, setCount] = useState(0);

  return (
    <Page>
      {count === 0 ? <WelcomePage /> : null}
      <Buttons>
        <ButtonLight backward onClick={() => (setCount > 0 ? count - 1 : 0)} />
        <ButtonLight forward onClick={() => setCount(count + 1)} />
      </Buttons>
    </Page>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Wizard);

//Styles

const Page = styled.div`
  grid-area: b;
  width: 100%;
  height: 40rem;
  display: grid;
  text-align: center;
`;
const Buttons = styled.div`
  position: absolute;
  top: 64rem;
  left: 38%;
  width: 15rem;
  display: flex;
  justify-content: center;
  margin-top: 7rem;
  margin-left: 11rem;
`;
