/**
 * The introductory page explaining the purpose of the User Wizard.
 * Page count 0.
 */

import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";


const Welcome = () => {
  return (
    <Page>
      <h1>We need to get a gauge on how much you need to live comfortably. </h1>
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

//-----------------------------------------------STYLE-----------------------------------------------//

const Page = styled.div`
  width: 120rem;
  height: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const H2 = styled.h2`
  width: 45rem;
`;
