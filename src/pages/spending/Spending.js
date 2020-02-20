import React, { useState } from "react";
import styled from "styled-components";
import Header from "pages/spending/components/Header";
import ControlPanel from "pages/spending/components/ControlPanel";
import { connect } from "react-redux";

const Spending = () => {
  const [monthly, toggleMonthly] = useState(true);
  /*
  return (
    <Page>
      <Header monthly={monthly} toggleMonthly={toggleMonthly} />
      <ChartWrapper></ChartWrapper>
      <ControlPanel />

      <Wizard />
    </Page>
  );
*/
  return (
    <Page>
      <ChartWrapper></ChartWrapper>
    </Page>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Spending);

//-----------------------------------------------STYLES-----------------------------------------------//

const Page = styled.div`
  ${props => props.theme.pageBaseStyles}
  grid-template-rows: minmax(12rem, 14rem)  minmax(24rem, 28rem);
  grid-template-areas:
    "a a a a a a a a a a a a"
    "b b b b b b b b b b b b"
    "c c c c c c c c c c c c";
`;

const ChartWrapper = styled.div`
  grid-area: b;
`;
