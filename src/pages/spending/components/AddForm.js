import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ExpenseType from "UI/forms/ExpenseType";
import Duration from "UI/forms/Duration";
import FormInput from "UI/forms/Input";
import DateInput from "UI/forms/DateInput";
import RangeBar from "UI/rangeBar/RangeBar";
import MiniRangeBar from "UI/miniRangeBar/MiniRangeBar";
import ButtonLight from "UI/buttons/ButtonLight";
import { addItem_action } from "redux/spending/spending_actions";
import _ from "lodash";
import { individualItem_data } from "pages/spending/data/spending_data";
import DualRangeRangeBar from "UI/dualRangeBar/oldDualRangeBar";

//THe add form is used to add individual items to the users net worth.

const AddForm = ({
  category,
  reference,
  subCategory,
  user_reducer,
  setAddFormSubCategory,
  section,
  spending_reducer,
  expenseTypeArray,
  durationTypeArray,
  currentValueLabel,
  ageLabel1,
  ageLabel2,
  addItem_action
}) => {
  const initialState = individualItem_data(
    category,
    reference,
    section,
    subCategory,
    currentValueLabel,
    ageLabel1,
    ageLabel2
  ); //initial State is found in data

  const [state, setState] = useState({ ...initialState });

  useEffect(() => {
    //ensures state is updated on every page change
    setState({ ...initialState, subCategory: subCategory });
  }, [subCategory]);

  const setValue = (logValue, rangeBarValue, rangeBarProps) => {
    //receives numbers from range bar and sets them in state
    setState({
      ...state,
      [rangeBarProps.name]: {
        ...state[rangeBarProps.name],
        financialValue: logValue,
        rangeBarValue: rangeBarValue
      }
    });
  };

  console.log(spending_reducer);

  const setDate = event => {
    setState({
      ...state,
      startDate: {
        //used to store the date added in the mortgage section
        ...state.startDate,
        date: event.target.value
      }
    });
  };

  const userAge = new Date().getFullYear() - user_reducer.birthYear;

  const addItem = () => {
    //Adds the item to the reducer
    setAddFormSubCategory(false);
    const id = (Math.random() * 10000000000).toFixed(); // Creates a unique id
    addItem_action(id, state); // Sets item in reducer
    console.log(state.registration);

    setState({ ...initialState });
  };

  return (
    <>
      <Container subCategory={subCategory}>
        {" "}
        {/* passing in subCategory is used to change the header color */}
        <Left>
          {" "}
          {/* ExpenseType is used to select the account type */}
          <Duration
            array={
              subCategory === "fixedHousingCosts" ||
              "variableHousingCosts" ||
              "fixedTransportationCosts" ||
              "variableTransportationCosts" ||
              "fixedLifestyleCosts" ||
              "variableLifestyleCosts" ||
              "fixedLargeEventsCosts" ||
              "variableLargeEventsCosts"
                ? //? propertyNames_selector.concat("None of These")
                  durationTypeArray
                : null
            } //if it is secored (a mortgage) it has to be linked to the property its secured against
            setValue={value =>
              setState({ ...state, registration: value.toLowerCase() })
            }
            value={1}
            subCategory={subCategory}
          />
        </Left>
        <Center>
          <FormInput
            label="item name"
            value={state.label}
            type={"text"}
            handleChange={e => setState({ ...state, label: e.target.value })} //sets the state in the local state
          />

          <RangeBar
            rangeBarProps={state.currentValue} //Every Add item has a range bar to set its value
            setValue={setValue}
          />
        </Center>
        <Right>
          <MiniRangeBarWrapper>
            {subCategory === "fixedTransportationCosts" ||
            "variableTransportationCosts" ||
            "fixedLifestyleCosts" ||
            "variableLifestyleCosts" ? ( //If its a liability we want to know its amortization
              <MiniRangeBar rangeBarProps={state.age1} setValue={setValue} />
            ) : subCategory === "largeEventsCosts" ? (
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

//-----------------------------------------------STYLES-----------------------------------------------//

const Left = styled.div`
  width: 30rem;
  height: 100%;
  padding: 2rem;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  right: 2rem;
`;
const ButtonLeftWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  left: 2rem;
`;
const MiniRangeBarWrapper = styled.div`
  position: absolute;
  right: 3rem;
  top: 1rem;
`;
const Right = styled.div`
  width: 30rem;
  padding: 2rem;
`;
const Center = styled.div`
  width: 45rem;
  padding: 2rem;
`;
const Container = styled.div`
  width: 94rem;
  border-radius: 5px;
  overflow: hidden;
  height: 33rem;
  
  /*${props =>
    props.subCategory === "securedDebt"
      ? "33rem"
      : "30rem"}; //mortgage requires more height because there are more inputs
  */
  border: ${props => props.theme.border.primary};
  position: relative;
  display: flex;
  background: ${props => props.theme.color.ice};
`;

const SelectorTitleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0.5rem;
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.color.slate};
`;
