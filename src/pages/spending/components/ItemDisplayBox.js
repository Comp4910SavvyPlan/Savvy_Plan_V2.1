import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";
import { Close, PlusIcon } from "style/Icons";
import { removeSpending_action } from "redux/spending/spending_actions";

//displays the items the users have added, such as "car" or "checking account"

const ItemDisplay = ({ value, removeSpending_action, item, setItemId }) => {

  //Individual item that is added
  const { label, subCategory, id } = item;
  const removeItem = () => {
    removeSpending_action(item); //This removes the item from the reducer
  };
  return (
    <ItemLeft label={label} subCategory={subCategory}>
      <Text onClick={() => setItemId(id)}>
        {" "}
        {/*When the item is clicked the id is set which fills out the edit form with the items details */}
        <H2>{label}</H2>
        <H2>{value / 1000}K</H2>
      </Text>
      <Exit onClick={() => removeItem()} />{" "}
      {/*If the x is clicked the item is removed */};
    </ItemLeft>
  );
};

const ItemDisplayBox = ({
  category,
  count,
  section,
  reference,
  setAddFormSubCategory,
  subCategory,
  spending_reducer,
  removeSpending_action,
  setItemId
}) => {
  //Box wrapping the items being added

  //arrays

  const arrayOfitemsFixedHousing = Object.values(
    spending_reducer["fixed"]
  ).filter(d => d.subCategory === "fixedHousingCosts"); //Pulls out all the items added and turns them into an array

  const arrayOfitemsVariableHousing = Object.values(
    spending_reducer["variable"]
  ).filter(d => d.subCategory === "variableHousingCosts"); //Pulls out all the items added and turns them into an array

  const arrayOfitemsFixedTransportation = Object.values(
    spending_reducer["fixed"]
  ).filter(d => d.subCategory === "fixedTransportationCosts"); //Pulls out all the items added and turns them into an array

  const arrayOfitemsVariableTransportation = Object.values(
    spending_reducer["variable"]
  ).filter(d => d.subCategory === "variableTransportationCosts"); //Pulls out all the items added and turns them into an array

  const arrayOfitemsFixedLifestyle = Object.values(
    spending_reducer["fixed"]
  ).filter(d => d.subCategory === "fixedLifestyleCosts"); //Pulls out all the items added and turns them into an array

  const arrayOfitemsVariableLifestyle = Object.values(
    spending_reducer["variable"]
  ).filter(d => d.subCategory === "variableLifestyleCosts"); //Pulls out all the items added and turns them into an array

  const arrayOfitemsFixedLargeEvents = Object.values(
    spending_reducer["fixed"]
  ).filter(d => d.subCategory === "fixedLargeEventsCosts"); //Pulls out all the items added and turns them into an array

  const arrayOfitemsVariableLargeEvents = Object.values(
    spending_reducer["variable"]
  ).filter(d => d.subCategory === "variableLargeEventsCosts"); //Pulls out all the items added and turns them into an array

  //total values

  const totalValueFixedHousing =
    arrayOfitemsFixedHousing.length > 0
      ? arrayOfitemsFixedHousing
        .map(d => d.currentValue.financialValue)
        .reduce((acc, num) => acc + num)
      : 0; //Sums the value of the category

  const totalValueVariableHousing =
    arrayOfitemsVariableHousing.length > 0
      ? arrayOfitemsVariableHousing
        .map(d => d.currentValue.financialValue)
        .reduce((acc, num) => acc + num)
      : 0; //Sums the value of the category

  const totalValueFixedTransportation =
    arrayOfitemsFixedTransportation.length > 0
      ? arrayOfitemsFixedTransportation
        .map(d => d.currentValue.financialValue)
        .reduce((acc, num) => acc + num)
      : 0; //Sums the value of the category

  const totalValueVariableTransportation =
    arrayOfitemsVariableTransportation.length > 0
      ? arrayOfitemsVariableTransportation
        .map(d => d.currentValue.financialValue)
        .reduce((acc, num) => acc + num)
      : 0; //Sums the value of the category

  const totalValueFixedLifestyle =
    arrayOfitemsFixedLifestyle.length > 0
      ? arrayOfitemsFixedLifestyle
        .map(d => d.currentValue.financialValue)
        .reduce((acc, num) => acc + num)
      : 0; //Sums the value of the category

  const totalValueVariableLifestyle =
    arrayOfitemsVariableLifestyle.length > 0
      ? arrayOfitemsVariableLifestyle
        .map(d => d.currentValue.financialValue)
        .reduce((acc, num) => acc + num)
      : 0; //Sums the value of the category

  const totalValueFixedLargeEvents =
    arrayOfitemsFixedLargeEvents.length > 0
      ? arrayOfitemsFixedLargeEvents
        .map(d => d.currentValue.financialValue)
        .reduce((acc, num) => acc + num)
      : 0; //Sums the value of the category

  const totalValueVariableLargeEvents =
    arrayOfitemsVariableLargeEvents.length > 0
      ? arrayOfitemsVariableLargeEvents
        .map(d => d.currentValue.financialValue)
        .reduce((acc, num) => acc + num)
      : 0; //Sums the value of the category

  return (
    <Wrapper>
      {subCategory === "fixedHousingCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {/*The header passes subCategory to Styled-components so the color can change*/}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedHousing / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableHousing / 1000}</h2>
          {/*Shows the total value for that subCategory */}
        </Header>
      ) : subCategory === "variableHousingCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {/*The header passes subCategory to Styled-components so the color can change*/}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedHousing / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableHousing / 1000}</h2>
          {/*Shows the total value for that subCategory */}
        </Header>
      ) : subCategory === "fixedTransportationCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {/*The header passes subCategory to Styled-components so the color can change*/}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedTransportation / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableTransportation / 1000}</h2>
          {/*Shows the total value for that subCategory */}
        </Header>
      ) : subCategory === "variableTransportationCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {/*The header passes subCategory to Styled-components so the color can change*/}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedTransportation / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableTransportation / 1000}</h2>
          {/*Shows the total value for that subCategory */}
        </Header>
      ) : subCategory === "fixedLifestyleCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {/*The header passes subCategory to Styled-components so the color can change*/}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedLifestyle / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableLifestyle / 1000}</h2>
          {/*Shows the total value for that subCategory */}
        </Header>
      ) : subCategory === "variableLifestyleCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {/*The header passes subCategory to Styled-components so the color can change*/}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedLifestyle / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableLifestyle / 1000}</h2>
          {/*Shows the total value for that subCategory */}
        </Header>
      ) : subCategory === "fixedLargeEventsCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {/*The header passes subCategory to Styled-components so the color can change*/}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedLargeEvents / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableLargeEvents / 1000}</h2>
          {/*Shows the total value for that subCategory */}
        </Header>
      ) : subCategory === "variableLargeEventsCosts" ? (
        <Header subCategory={subCategory}>
          {" "}
          {/*The header passes subCategory to Styled-components so the color can change*/}
          <h2>{_.startCase(subCategory)}</h2>
          <h2>{"Fixed: " + totalValueFixedLargeEvents / 1000}k</h2>
          <h2>{"Variable: " + totalValueVariableLargeEvents / 1000}</h2>
          {/*Shows the total value for that subCategory */}
        </Header>
      ) : null}

      {subCategory === "fixedHousingCosts" ? (
        <Container>
          {arrayOfitemsFixedHousing.map(item => {
            return (
              <Left>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}

          {arrayOfitemsVariableHousing.map(item => {
            return (
              <Right>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
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
          {arrayOfitemsFixedHousing.map(item => {
            return (
              <Left>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}

          {arrayOfitemsVariableHousing.map(item => {
            return (
              <Right>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
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
          {arrayOfitemsFixedTransportation.map(item => {
            return (
              <Left>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}

          {arrayOfitemsVariableTransportation.map(item => {
            return (
              <Right>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
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
          {arrayOfitemsFixedTransportation.map(item => {
            return (
              <Left>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}

          {arrayOfitemsVariableTransportation.map(item => {
            return (
              <Right>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
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
          {arrayOfitemsFixedLifestyle.map(item => {
            return (
              <Left>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}

          {arrayOfitemsVariableLifestyle.map(item => {
            return (
              <Right>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
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
          {arrayOfitemsFixedLifestyle.map(item => {
            return (
              <Left>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}

          {arrayOfitemsVariableLifestyle.map(item => {
            return (
              <Right>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
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
          {arrayOfitemsFixedLargeEvents.map(item => {
            return (
              <Left>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}

          {arrayOfitemsVariableLargeEvents.map(item => {
            return (
              <Right>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
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
          {arrayOfitemsFixedLargeEvents.map(item => {
            return (
              <Left>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
                  key={item.id}
                  removeSpending_action={removeSpending_action}
                  value={item.currentValue.financialValue}
                  setItemId={setItemId}
                />
              </Left>
            );
          })}

          {arrayOfitemsVariableLargeEvents.map(item => {
            return (
              <Right>
                <ItemDisplay //Maps through the items showing each one
                  item={item} //Passes all props it has recived as "item" which is used to remove it or set the id when clicked
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
  spending_reducer: state.spending_reducer
});

export default connect(mapStateToProps, { removeSpending_action })(
  ItemDisplayBox
);

//-----------------------------------------------STYLES-----------------------------------------------//

const Header = styled.div`
  width: 100%;
  background: ${props =>
    props.subCategory === "fixedHousingCosts"
      ? props.theme.color.blue
      : props =>
        props.subCategory === "variableHousingCosts"
          ? props.theme.color.blue
          : props =>
            props.subCategory === "fixedTransportationCosts"
              ? props.theme.color.steelBlue
              : props =>
                props.subCategory === "variableTransportationCosts"
                  ? props.theme.color.steelBlue
                  : props =>
                    props.subCategory === "fixedLifestyleCosts"
                      ? props.theme.color.green
                      : props =>
                        props.subCategory === "variableLifestyleCosts"
                          ? props.theme.color.green
                          : props =>
                            props.subCategory ===
                              "fixedLargeEventsCosts"
                              ? props.theme.color.salmon
                              : props =>
                                props.subCategory ===
                                  "variableLargeEventsCosts"
                                  ? props.theme.color.salmon
                                  : null};
  height: 6rem;
  color: ${props => props.theme.color.ice};
  border-bottom: ${props => props.theme.border.primary};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem 0.5rem 2rem;
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
const ItemLeft = styled.div`
  margin: 0.5rem 0rem 0.5rem 1rem;
  padding: 0.8rem 4.5rem 0.8rem 4rem;
  width: 28rem;
  display: flex;
  position: relative;
  height: ${props => (props.label.length > 20 ? "7rem" : "4rem")};
  background: ${props =>
    props.subCategory === "fixedHousingCosts"
      ? props.theme.color.blue
      : props =>
        props.subCategory === "variableHousingCosts"
          ? props.theme.color.blue
          : props =>
            props.subCategory === "fixedTransportationCosts"
              ? props.theme.color.steelBlue
              : props =>
                props.subCategory === "variableTransportationCosts"
                  ? props.theme.color.steelBlue
                  : props =>
                    props.subCategory === "fixedLifestyleCosts"
                      ? props.theme.color.green
                      : props =>
                        props.subCategory === "variableLifestyleCosts"
                          ? props.theme.color.green
                          : props =>
                            props.subCategory ===
                              "fixedLargeEventsCosts"
                              ? props.theme.color.salmon
                              : props =>
                                props.subCategory ===
                                  "variableLargeEventsCosts"
                                  ? props.theme.color.salmon
                                  : null};
  border-radius: 5px;
  color: white;
  border: ${props => props.theme.border.primary};
  cursor: pointer;
`;
const Container = styled.div`
  min-height: 10rem;
  max-height: 50rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  justify-content: flex-start;
  overflow: scroll;
`;

const LeftContainer = styled.div`
  min-height: 10rem;
  max-height: 50rem;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  justify-content: flex-start;
  overflow: scroll;
`;

const RightContainer = styled.div`
  min-height: 10rem;
  max-height: 50rem;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  justify-content: flex-start;
  overflow: scroll;
`;

const H2 = styled.h2`
font-size: 1.4rem
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
const Add = styled(PlusIcon)`
  width: 4rem;
  color: grey;
  display: flex;
  position: absolute;
  top: 0.8rem;
  left: 0rem;
`;
const DarkAdd = styled(Add)`
  width: 4rem;
  color: white;
  display: flex;
  position: relative;
  color: grey;
  cursor: pointer;
`;

const Right = styled.div`
  margin: 0.5rem 0rem 0.5rem 1rem;
  width: 28rem;
  height: 100%;
  padding: 0rem;
`;

const Left = styled.div`
  margin: 0.5rem 0rem 0.5rem 1rem;
  width: 28rem;
  height: 100%;
  padding: 0rem;
`;
