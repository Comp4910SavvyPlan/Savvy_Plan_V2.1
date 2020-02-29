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
  setAddFormSubCategory,
  subCategory,
  spending_reducer,
  removeSpending_action,
  setItemId
}) => {
  //Box wrapping the items being added

  //var prev = Object.values(spending_reducer[count - 1]);
  //var next = Object.values(spending_reducer[count + 1]);

  const arrayOfitemsF = Object.values(spending_reducer["fixed"]).filter(
    d => d.subCategory === subCategory && d.section === section
  ); //Pulls out all the items added and turns them into an array

  const arrayOfitemsV = Object.values(spending_reducer["variable"]).filter(
    d => d.subCategory === subCategory
  ); //Pulls out all the items added and turns them into an array

  //const arrayOfitemsPrev = prev
  //  .values(spending_reducer["fixed"])
  //  .filter(d => d.subCategory === subCategory); //Pulls out all the items added and turns them into an array

  //const arrayOfitemsNext = next
  //  .values(spending_reducer["fixed"])
  //  .filter(d => d.subCategory === subCategory); //Pulls out all the items added and turns them into an array

  const totalValueV =
    arrayOfitemsV.length > 0
      ? arrayOfitemsV
          .map(d => d.currentValue.financialValue)
          .reduce((acc, num) => acc + num)
      : 0; //Sums the value of the category

  const totalValueF =
    arrayOfitemsF.length > 0
      ? arrayOfitemsF
          .map(d => d.currentValue.financialValue)
          .reduce((acc, num) => acc + num)
      : 0; //Sums the value of the category

  return (
    <Wrapper>
      <Header subCategory={subCategory}>
        {" "}
        {/*The header passes subCategory to Styled-components so the color can change*/}
        <h2>{_.startCase(subCategory)}</h2>
        <h2>{"Fixed: " + totalValueF / 1000}k</h2>
        <h2>{"Variable: " + totalValueV / 1000}</h2>
        {/*Shows the total value for that subCategory */}
      </Header>

      <Container>
        {arrayOfitemsF.map(item => {
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

        {arrayOfitemsV.map(item => {
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

        <DarkAdd onClick={() => setAddFormSubCategory(subCategory)} />
      </Container>
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
  height: 4rem;
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
  margin: 0.5rem 0rem 0.5rem 50rem;
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
