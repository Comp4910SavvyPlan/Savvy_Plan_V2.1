/**
 * Used to add items to the Spending subcategory.
 * Appears on pages 1 - 8.
 */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Duration from "UI/forms/Duration";
import FormInput from "UI/forms/Input";
import RangeBar from "UI/rangeBar/RangeBar";
import MiniRangeBar from "UI/miniRangeBar/MiniRangeBar";
import ButtonLight from "UI/buttons/ButtonLight";
import { addItem_action } from "redux/spending/spending_actions";
import { individualItem_data } from "pages/spending/data/spending_data";

const AddForm = ({
  category,
  reference,
  subCategory,
  section,
  user_reducer,
  setAddFormSubCategory,
  durationTypeArray,
  currentValueLabel,
  ageLabel1,
  ageLabel2,
  addItem_action
}) => {
  //Initial State taken from spending_data.js
  const initialState = individualItem_data(
    category,
    reference,
    section,
    subCategory,
    currentValueLabel,
    ageLabel1,
    ageLabel2
  ); //initial State is found in data
  console.log(section);
  console.log(initialState);
  const [state, setState] = useState({ ...initialState });

  //Updates state on page change
  useEffect(() => {
    setState({ ...initialState, subCategory: subCategory });
  }, [subCategory]);

  //Sets range bar value in state
  const setValue = (logValue, rangeBarValue, rangeBarProps) => {
    setState({
      ...state,
      [rangeBarProps.name]: {
        ...state[rangeBarProps.name],
        financialValue: logValue,
        rangeBarValue: rangeBarValue
      }
    });
  };

  //Adds item to the reducer
  const addItem = () => {
    setAddFormSubCategory(false);
    const id = (Math.random() * 10000000000).toFixed(); // Creates a unique id
    addItem_action(id, state); // Sets item in reducer
    setState({ ...initialState });
  };

  return (
    <>
      <Container subCategory={subCategory}>
        {" "}
        {}
        <Left>
          {" "}
          {}
          <Duration
            //Specifies duration options based on subCategory
            array={
              subCategory === "fixedHousingCosts" ||
              subCategory === "variableHousingCosts" ||
              subCategory === "fixedTransportationCosts" ||
              subCategory === "variableTransportationCosts" ||
              subCategory === "fixedLifestyleCosts" ||
              subCategory === "variableLifestyleCosts" ||
              subCategory === "fixedLargeEventsCosts" ||
              subCategory === "variableLargeEventsCosts"
                ? durationTypeArray
                : null
            }
            setValue={value =>
              setState({ ...state, registration: value.toLowerCase() })
            }
            value={1}
            subCategory={subCategory}
          />
        </Left>
        <Center>
          <FormInput
            //Sets the state in the local state.
            label="item name"
            value={state.label}
            type={"text"}
            handleChange={e => setState({ ...state, label: e.target.value })}
          />
          <RangeBar
            //Item value is set via this range bar.
            rangeBarProps={state.currentValue}
            setValue={setValue}
          />
        </Center>
        <Right>
          <MiniRangeBarWrapper>
            {//Single range bar for housing, transportation and lifestyle
            subCategory === "fixedHousingCosts" ||
            subCategory === "variableHousingCosts" ||
            subCategory === "fixedTransportationCosts" ||
            subCategory === "variableTransportationCosts" ||
            subCategory === "fixedLifestyleCosts" ||
            subCategory === "variableLifestyleCosts" ||
            subCategory === "fixedLargeEventsCosts" ||
            subCategory === "variableLargeEventsCosts" ? (
              <>
                <MiniRangeBar rangeBarProps={state.age1} setValue={setValue} />
                <MiniRangeBar rangeBarProps={state.age2} setValue={setValue} />
              </>
            ) : null}
          </MiniRangeBarWrapper>

          <ButtonWrapper>
            <ButtonLight text={"Add"} onClick={() => addItem()} />
          </ButtonWrapper>
        </Right>
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  user_reducer: state.user_reducer,
  spending_reducer: state.spending_reducer
});

export default connect(mapStateToProps, {
  addItem_action
})(AddForm);

//-----------------------------------------------STYLE-----------------------------------------------//

//Duration
const Left = styled.div`
  width: 30rem;
  height: 100%;
  padding: 2rem;
`;

//Item name, cost range bar
const Center = styled.div`
  width: 45rem;
  padding: 2rem;
`;

//Duration range bars
const Right = styled.div`
  width: 30rem;
  padding: 2rem;
`;

const Container = styled.div`
  width: 94rem;
  border-radius: 5px;
  overflow: hidden;
  height: 33rem;
  border: ${props => props.theme.border.primary};
  position: relative;
  display: flex;
  background: ${props => props.theme.color.ice};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  right: 2rem;
`;

const MiniRangeBarWrapper = styled.div`
  position: absolute;
  right: 3rem;
  top: 1rem;
`;
