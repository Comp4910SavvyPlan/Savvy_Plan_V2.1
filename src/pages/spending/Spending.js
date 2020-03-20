import React, { useState } from "react";
import styled from "styled-components";
import Header from "pages/spending/components/Header";
import ControlPanel from "pages/spending/components/ControlPanel";
import { connect } from "react-redux";
import ButtonLight from "UI/buttons/ButtonLight";
import { spendingWizard_data } from "pages/spending/data/spending_data";
import WelcomePage from "pages/spending/components/WelcomePage";
import Main from "pages/spending/components/Main";
import AddForm from "pages/spending/components/AddForm";
import ItemDisplayBox from "pages/spending/components/ItemDisplayBox";

const Spending = (
  {
    spending_reducer
  }
) => {
  const [count, setCount] = useState(0);
 console.log(spending_reducer)
  const renderAddForm = data => {
    return data.map(d =>
      d.count === count ? (
        <AddPage key={d.subCategory}>
          <DisplayWrapper>
            {" "}
            {}
            <ItemDisplayBox
              category={d.category}
              reference={d.reference}
              subCategory={d.subCategory}
              section={d.section}
              setItemId={() => null}
            />
          </DisplayWrapper>
          <AddFormWrapper>
            {" "}
            {}
            <AddForm
              category={d.category}
              reference={d.reference}
              subCategory={d.subCategory}
              section={d.section}
              currentValueLabel={d.currentValueLabel}
              ageLabel1={d.ageLabel1}
              ageLabel2={d.ageLabel2}
              expenseTypeArray={d.expenseTypeArray}
              durationTypeArray={d.durationTypeArray}
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
      ) : count < 9 ? (
        <>
          {renderAddForm(spendingWizard_data)} {}
        </>
      ) : (
        <Main />
      )}
      <Buttons>
        {" "}
        {/* Fixed plan buttons enabling the toggling back and forth*/}
        <ButtonLight
          backward
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
        />
        <ButtonLight
          forward
          onClick={() => setCount(count < 9 ? count + 1 : 9)}
        />
      </Buttons>
    </Page>
  );
};

const mapStateToProps = state => ({
  spending_reducer: state.spending_reducer
});


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
