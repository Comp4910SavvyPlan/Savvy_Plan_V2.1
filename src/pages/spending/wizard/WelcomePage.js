import React, { useState } from "react";
import styled from "styled-components";
import ControlPanel from "pages/netWorth/components/ControlPanel";
import Header from "pages/netWorth/components/Header";
import { connect } from "react-redux";

const Welcome = () => {
  return (
    <Page>
      <h1>We’ll need to gauge on how much you need to live comfortably. </h1>
      <H2>
        In this section we will examine your spending and estimate how it might
        change over time.{" "}
      </H2>
      <h1>Lets Get Started</h1>
    </Page>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Welcome);

//Styles

const Page = styled.div`
  width: 100%;
  height: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const H2 = styled.h2`
  width: 45rem;
`;
