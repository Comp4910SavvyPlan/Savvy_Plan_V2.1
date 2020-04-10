import React, { useState } from "react";
import styled from "styled-components";
import Header from "pages/spending/components/Header";
import ControlPanel from "pages/spending/components/ControlPanel";
import chart from "assets/images/spending_chart.png";
import circle_chart from "assets/images/spending_chart_circle.png";
import SpendingBarChart from "charts/spending/SpendingBarChart"

const Main = () => {
  const [display, setDisplay] = useState("fixed")

  return (
    <>
      <Header
        display={display}
        setDisplay={setDisplay}
      />
      <ChartWrapper>
        <SpendingBarChart/>
      </ChartWrapper>
      <ControlPanel
        display={display}
      />
    </>
  );
};

export default Main;

//-----------------------------------------------STYLES-----------------------------------------------//

const ChartWrapper = styled.div`
  grid-area: b;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

const CircleChartPlaceHolder = styled.div`
  width: 30%;
  height: 90%;
`;
const ChartPlaceHolder = styled.div`
  width: 70%;
  height: 100%;
`;
