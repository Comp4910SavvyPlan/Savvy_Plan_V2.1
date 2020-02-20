import React, { useState } from "react";
import styled from "styled-components";
import Header from "pages/spending/components/Header";
import ControlPanel from "pages/spending/components/ControlPanel";
import { connect } from "react-redux";
import ButtonLight from "UI/buttons/ButtonLight";

const Spending = () => {
  const [count, setCount] = useState(1);

  const renderAddForm = data => {
    return data.map(d =>
      d.count === count ? (
        <AddPage key={d.subCategory}>
          <DisplayWrapper>
            {" "}
            {}
            <ItemDisplayBox
              category={d.category}
              subCategory={d.subCategory}
              setItemId={() => null}
            />
          </DisplayWrapper>
          <AddFormWrapper>
            {" "}
            {}
            <AddForm
              category={d.category}
              subCategory={d.subCategory}
              bookValueLabel={d.bookValueLabel}
              currentValueLabel={d.currentValueLabel}
              interestRateLabel={d.interestRateLabel}
              accountTypeArray={d.accountTypeArray}
              setAddFormSubCategory={() => null}
            />{" "}
            {}
          </AddFormWrapper>
        </AddPage>
      ) : null
    );
  };

  return (
    <Page>
      {count === 0 ? (
        <WelcomePage />
      ) : count < 6 ? (
        <>
          {renderAddForm(spendingWizard_data)} {}
        </>
      ) : null}
      <Buttons>
        {" "}
        {/* Fixed plan buttons enabling the toggling back and forth*/}
        <ButtonLight
          backward
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
        />
        <ButtonLight forward onClick={() => setCount(count + 1)} />
      </Buttons>
    </Page>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Spending);

//-----------------------------------------------STYLES-----------------------------------------------//

const Page = styled.div`
  ${props => props.theme.pageBaseStyles}
  grid-template-rows: minmax(7rem, 10rem) minmax(21rem, 22rem) minmax(28rem, 40rem);
  width: 100%;
  position: relative;
  grid-template-areas:
    "a a a a a a a a a a a a"
    "b b b b b b b b b b b b"
    "c c c c c c c c c c c c";
`;
const AddPage = styled(Page)``;

const Charts = styled.div`
  grid-area: b;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;
const SunBurstChartPlaceHolder = styled.div`
  width: 30%;
  height: 90%;
`;
const ProjectionChartPlaceHolder = styled.div`
  width: 70%;
  height: 100%;
`;

const Buttons = styled.div`
  position: absolute;
  width: 141rem;
  top: 30rem;
  left: -10rem;
  z-index: 100;
  display: flex;
  justify-content: space-between;
`;

const DisplayWrapper = styled.div`
  grid-area: a;
  width: 80%;
  margin-left: 10%;
  height: 20rem;
`;

const AddFormWrapper = styled.div`
  grid-area: c;
  width: 80%;
  margin-left: 10%;
  border-radius: 5px;
  overflow: hidden;
  height: 35rem;
`;
