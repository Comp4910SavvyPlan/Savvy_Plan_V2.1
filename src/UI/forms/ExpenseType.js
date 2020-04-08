import React, { useState } from "react";
import styled from "styled-components";
import _ from "lodash";

const ExpenseType = ({ value, setValue, array, subCategory }) => {
  const [selected, select] = useState(value);
  const handleSelect = value => {
    select(value);
    setValue(value);
  };

  return (
    <Container>
      <Label>Expense Type</Label>
      <SelectWrapper>
        {array.map(d => (
          <SelectValue
            key={d}
            selected={selected === d}
            subCategory={subCategory}
            onClick={() => handleSelect(d)}
          >
            {d === "tfsa" || d === "rrsp" ? d.toUpperCase() : _.startCase(d)}
          </SelectValue>
        ))}
      </SelectWrapper>
    </Container>
  );
};

export default ExpenseType;

//-----------------------------------------------STYLE-----------------------------------------------//

const Container = styled.div`
  overflow-y: none;
  width: 25rem;
  height: 17rem;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  margin-top: -1.6rem;
`;

const SelectWrapper = styled.div`
  height: 18rem;
  background: white;
  font-size: 1.4rem;
  overflow: scroll;
  background: white;
  border-radius: 5px;
  border: 0.7px solid ${props => props.theme.color.lightGrey};
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.6rem;
  font-weight: normal;
  color: ${props => props.theme.color.darkGrey};
  width: 25rem;
  height: 4rem;
  padding: 1rem;
  font-weight: 700;
  text-align: left;
`;

const SelectValue = styled.div`
    padding: 2rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: ${props => (props.selected ? "white" : props.theme.color.slate)};
    font-size: 1.6rem;
    background: ${props =>
    props.selected
      ? props =>
        props.subCategory === "fixedHousingCosts" || props.subCategory === "variableHousingCosts"
          ? props.theme.color.steelBlue
          : props =>
            props.subCategory === "fixedTransportationCosts" || props.subCategory === "variableTransportationCosts"
              ? props.theme.color.green
              : props =>
                props.subCategory === "fixedLifestyleCosts" || props.subCategory === "variableLifestyleCosts"
                  ? props.theme.color.blue
                  : props =>
                    props.subCategory === "fixedLargeEventsCosts" || props.subCategory === "variableLargeEventsCosts"
                      ? props.theme.color.lightGrey
                      : props.theme.color.blue
      : "white"};
    text-align: center;
    &:hover {
        background: ${props =>
    props.selected
      ? props =>
        props.subCategory === "fixedHousingCosts" || props.subCategory === "variableHousingCosts"
          ? props.theme.color.steelBlue
          : props =>
            props.subCategory === "fixedTransportationCosts" || props.subCategory === "variableTransportationCosts"
              ? props.theme.color.green
              : props =>
                props.subCategory === "fixedLifestyleCosts" || props.subCategory === "variableLifestyleCosts"
                  ? props.theme.color.blue
                  : props =>
                    props.subCategory === "fixedLargeEventsCosts" || props.subCategory === "variableLargeEventsCosts"
                      ? props.theme.color.lightGrey
                      : props.theme.color.blue
      : props.theme.color.ice};
        color: ${props => (props.selected ? "white" : props.theme.color.slate)};
        cursor: pointer;
    }
`;
