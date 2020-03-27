/**
 * Displays header and spending items.
 */

import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { Close } from "style/Icons";
import { removeSpending_action } from "redux/spending/spending_actions";
import {
  fixedHousing_selector,
  variableHousing_selector,
  fixedTransportation_selector,
  variableTransportation_selector,
  fixedLifestyle_selector,
  variableLifestyle_selector,
  fixedLargeEvents_selector,
  variableLargeEvents_selector
} from "redux/spending/spending_selectors";

const ItemDisplay = ({ value, removeSpending_action, item, setItemId }) => {
  //Individual item that is added
  const { label, subCategory, id, category } = item;
  const removeItem = () => {
    removeSpending_action(item);
  };
  //Displays item name, value and "X" in box.
  return (
    <Item label={label} subCategory={subCategory}>
      <Text onClick={() => setItemId(id)}>
        {" "}
        {}
        <H2>{label}</H2>
        <H2>{value / 1000}K</H2>
      </Text>
      <Exit onClick={() => removeItem()} /> {};
    </Item>
  );
};

const ItemDisplayBox = ({
  subCategory,
  removeSpending_action,
  setItemId,
  fixedHousing_selector,
  variableHousing_selector,
  fixedTransportation_selector,
  variableTransportation_selector,
  fixedLifestyle_selector,
  variableLifestyle_selector,
  fixedLargeEvents_selector,
  variableLargeEvents_selector
}) => {
  //Total of each fixed or variable spending subCategory.
  const totalValueFixedHousing =
    fixedHousing_selector.length > 0
      ? fixedHousing_selector
          .map(d => d.currentValue.financialValue)
          .reduce((acc, num) => acc + num)
      : 0;

  const totalValueVariableHousing =
    variableHousing_selector.length > 0
      ? variableHousing_selector
          .map(d => d.currentValue.financialValue)
          .reduce((acc, num) => acc + num)
      : 0;

  const totalValueFixedTransportation =
    fixedTransportation_selector.length > 0
      ? fixedTransportation_selector
          .map(d => d.currentValue.financialValue)
          .reduce((acc, num) => acc + num)
      : 0;

  const totalValueVariableTransportation =
    variableTransportation_selector.length > 0
      ? variableTransportation_selector
          .map(d => d.currentValue.financialValue)
          .reduce((acc, num) => acc + num)
      : 0;

  const totalValueFixedLifestyle =
    fixedLifestyle_selector.length > 0
      ? fixedLifestyle_selector
          .map(d => d.currentValue.financialValue)
          .reduce((acc, num) => acc + num)
      : 0;

  const totalValueVariableLifestyle =
    variableLifestyle_selector.length > 0
      ? variableLifestyle_selector
          .map(d => d.currentValue.financialValue)
          .reduce((acc, num) => acc + num)
      : 0;

  const totalValueFixedLargeEvents =
    fixedLargeEvents_selector.length > 0
      ? fixedLargeEvents_selector
          .map(d => d.currentValue.financialValue)
          .reduce((acc, num) => acc + num)
      : 0;

  const totalValueVariableLargeEvents =
    variableLargeEvents_selector.length > 0
      ? variableLargeEvents_selector
          .map(d => d.currentValue.financialValue)
          .reduce((acc, num) => acc + num)
      : 0;

  return (
    <Wrapper>
      {//Headers for each spending subCategory, includes name and totals.
      subCategory === "fixedHousingCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedHousing / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableHousing / 1000}</h2>
          {}
        </Header>
      ) : subCategory === "variableHousingCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedHousing / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableHousing / 1000}</h2>
          {}
        </Header>
      ) : subCategory === "fixedTransportationCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedTransportation / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableTransportation / 1000}</h2>
          {}
        </Header>
      ) : subCategory === "variableTransportationCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedTransportation / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableTransportation / 1000}</h2>
          {}
        </Header>
      ) : subCategory === "fixedLifestyleCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedLifestyle / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableLifestyle / 1000}</h2>
          {}
        </Header>
      ) : subCategory === "variableLifestyleCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedLifestyle / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableLifestyle / 1000}</h2>
          {}
        </Header>
      ) : subCategory === "fixedLargeEventsCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedLargeEvents / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableLargeEvents / 1000}</h2>
          {}
        </Header>
      ) : subCategory === "variableLargeEventsCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedLargeEvents / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableLargeEvents / 1000}</h2>
          {}
        </Header>
      ) : null}

      {//Item display for each spending subCategory, includes item info.
      subCategory === "fixedHousingCosts" ? (
        <Container>
          {fixedHousing_selector.map(item => {
            return (
              <Left>
                <h4>{"Fixed"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}
          {variableHousing_selector.map(item => {
            return (
              <Right>
                <h4>{"Variable"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Right>
            );
          })}
        </Container>
      ) : null}

      {subCategory === "variableHousingCosts" ? (
        <Container>
          {fixedHousing_selector.map(item => {
            return (
              <Left>
                <h4>{"Fixed"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}

          {variableHousing_selector.map(item => {
            return (
              <Right>
                <h4>{"Variable"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Right>
            );
          })}
        </Container>
      ) : subCategory === "fixedTransportationCosts" ? (
        <Container>
          {fixedTransportation_selector.map(item => {
            return (
              <Left>
                <h4>{"Fixed"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}

          {variableTransportation_selector.map(item => {
            return (
              <Right>
                <h4>{"Variable"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Right>
            );
          })}
        </Container>
      ) : subCategory === "variableTransportationCosts" ? (
        <Container>
          {fixedTransportation_selector.map(item => {
            return (
              <Left>
                <h4>{"Fixed"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}

          {variableTransportation_selector.map(item => {
            return (
              <Right>
                <h4>{"Variable"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Right>
            );
          })}
        </Container>
      ) : subCategory === "fixedLifestyleCosts" ? (
        <Container>
          {fixedLifestyle_selector.map(item => {
            return (
              <Left>
                <h4>{"Fixed"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}

          {variableLifestyle_selector.map(item => {
            return (
              <Right>
                <h4>{"Variable"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Right>
            );
          })}
        </Container>
      ) : subCategory === "variableLifestyleCosts" ? (
        <Container>
          {fixedLifestyle_selector.map(item => {
            return (
              <Left>
                <h4>{"Fixed"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}

          {variableLifestyle_selector.map(item => {
            return (
              <Right>
                <h4>{"Variable"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Right>
            );
          })}
        </Container>
      ) : subCategory === "fixedLargeEventsCosts" ? (
        <Container>
          {fixedLargeEvents_selector.map(item => {
            return (
              <Left>
                <h4>{"Fixed"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}

          {variableLargeEvents_selector.map(item => {
            return (
              <Right>
                <h4>{"Variable"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Right>
            );
          })}
        </Container>
      ) : subCategory === "variableLargeEventsCosts" ? (
        <Container>
          {fixedLargeEvents_selector.map(item => {
            return (
              <Left>
                <h4>{"Fixed"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}

          {variableLargeEvents_selector.map(item => {
            return (
              <Right>
                <h4>{"Variable"}</h4>
                <ItemDisplay
                  item={item}
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Right>
            );
          })}
        </Container>
      ) : null}
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  fixedHousing_selector: fixedHousing_selector(state),
  variableHousing_selector: variableHousing_selector(state),
  fixedTransportation_selector: fixedTransportation_selector(state),
  variableTransportation_selector: variableTransportation_selector(state),
  fixedLifestyle_selector: fixedLifestyle_selector(state),
  variableLifestyle_selector: variableLifestyle_selector(state),
  fixedLargeEvents_selector: fixedLargeEvents_selector(state),
  variableLargeEvents_selector: variableLargeEvents_selector(state)
});

export default connect(mapStateToProps, { removeSpending_action })(
  ItemDisplayBox
);

//-----------------------------------------------STYLE-----------------------------------------------//

const Header = styled.div`
  width: 100%;
  background: ${props =>
    props.subCategory === "fixedHousingCosts" ||
    props.subCategory === "variableHousingCosts"
      ? props.theme.color.steelBlue
      : props =>
          props.subCategory === "fixedTransportationCosts" ||
          props.subCategory === "variableTransportationCosts"
            ? props.theme.color.green
            : props =>
                props.subCategory === "fixedLifestyleCosts" ||
                props.subCategory === "variableLifestyleCosts"
                  ? props.theme.color.blue
                  : props =>
                      props.subCategory === "fixedLargeEventsCosts" ||
                      props.subCategory === "variableLargeEventsCosts"
                        ? props.theme.color.salmon
                        : props.theme.color.blue};
  height: 6rem;
  color: ${props => props.theme.color.ice};
  border-bottom: ${props => props.theme.border.primary};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem 0.5rem 2rem;
`;

const Item = styled.div`
  margin: 0.5rem 0rem 0.5rem 0.25rem;
  padding: 0.8rem 1.5rem 0.8rem 1.5rem;
  width: 28rem;
  display: flex;
  position: relative;
  height: ${props => (props.label.length > 20 ? "7rem" : "4rem")};
  background: ${props =>
    props.subCategory === "fixedHousingCosts" ||
    props.subCategory === "variableHousingCosts"
      ? props.theme.color.steelBlue
      : props =>
          props.subCategory === "fixedTransportationCosts" ||
          props.subCategory === "variableTransportationCosts"
            ? props.theme.color.green
            : props =>
                props.subCategory === "fixedLifestyleCosts" ||
                props.subCategory === "variableLifestyleCosts"
                  ? props.theme.color.blue
                  : props =>
                      props.subCategory === "fixedLargeEventsCosts" ||
                      props.subCategory === "variableLargeEventsCosts"
                        ? props.theme.color.salmon
                        : props.theme.color.blue};
  border-radius: 5px;
  color: white;
  border: ${props => props.theme.border.primary};
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 30rem;
  border-radius: 5px;
  border: ${props => props.theme.border.primary};
  overflow: hidden;
  margin-bottom: 1rem;
  background: ${props => props.theme.color.ice};
`;

const Container = styled.div`
  min-height: 10rem;
  max-height: 25rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  justify-content: flex-start;
  overflow: scroll;
`;

const H2 = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
`;

const Text = styled.div`
  width: 25rem;
  display: flex;
  height: 3rem;
  justify-content: space-between;
  z-index: 200;
`;

const Exit = styled(Close)`
  width: 1.3rem;
  height: 1.3rem;
  color: ${props => props.theme.color.grey};
  display: flex;
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  z-index: 500;
`;

const Left = styled.div`
  margin: 0.5rem 0rem 0.5rem 1rem;
  width: 28rem;
  height: 100%;
  padding: 0rem;
`;

const Right = styled.div`
  margin: 0.5rem 0rem 0.5rem 1rem;
  width: 28rem;
  height: 100%;
  padding: 0rem;
`;
