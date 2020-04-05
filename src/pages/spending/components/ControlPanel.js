import React, { useState } from "react";
import styled from "styled-components";
import {connect} from "react-redux"
import ButtonLight from "UI/buttons/ButtonLight";
import _ from "lodash";
import { removeSpending_action } from "redux/spending/spending_actions";
import EditForm from "pages/spending/components/EditForm";
import ItemDisplayBox from "pages/spending/components/MainItemDisplayBox";
import AddForm from "pages/spending/components/AddForm";
import { spendingWizard_data } from "pages/spending/data/spending_data";

const ControlPanel = ({ setCount, display, spending_reducer }) => {

  const [itemId, setItemId] = useState();                                         //If the user wants to change something this sets the id of the item they want to change

  const [addFormSubCategory, setAddFormSubCategory] = useState();                 //If wants to add something this sets the category of the item theyd like to add

  const addFormDetails = spendingWizard_data.find(
    d => d.subCategory === addFormSubCategory
  );                                                                              //Provides the add form with the details to render

  const category = display;                                                       //Display is either fixed or variable and is used to show either of those
  const subCategory = itemId
    ? spending_reducer[category][itemId].subCategory
    : "housingCosts";                                                             //if we have an id we get the subCategory from the reducer, otherwise we set it to housingCosts

  const [subCount, setSubCount] = useState(0);

  return (
    <Wrapper>
      <Sections>
        {itemId ? (
          <EditForm
            itemId={itemId}                                                      //Clicking add takes the id of the item being added and sets it in the local state
            category={category}
            subCategory={subCategory}
            setItemId={setItemId}
          />
        ) : addFormSubCategory ? (
          <AddForm
            //AddForm is shown based on count number
            category={addFormDetails.category}
            reference={addFormDetails.reference}
            subCategory={addFormDetails.subCategory}
            section={addFormDetails.section}
            currentValueLabel={addFormDetails.currentValueLabel}
            ageLabel1={addFormDetails.ageLabel1}
            ageLabel2={addFormDetails.ageLabel2}
            expenseTypeArray={addFormDetails.expenseTypeArray}
            durationTypeArray={addFormDetails.durationTypeArray}
            setAddFormSubCategory={setAddFormSubCategory}
          />
        ) : (
          <>
            {
              spendingWizard_data.map(
                                                                                  //if neither add or edit forms are clicked then it renders out the item display
              d => (
              d.category === display ?
              (
                                                                                  //only display first 3 out of 4 subcategories
                d.category === "fixed" ?
                (

                (((d.subCategory === 'fixedHousingCosts') || (d.subCategory === 'fixedTransportationCosts') || (d.subCategory === 'fixedLifestyleCosts')) && (subCount === 0)) ?
                  <Section key={d.subCategory}>
                    <ItemDisplayBox                                               //Displays all the fixed or variables they have added
                      category={d.category}
                      item={d}
                      subCategory={d.subCategory}
                      setCount={setCount}
                      setItemId={setItemId}
                      setAddFormSubCategory={setAddFormSubCategory}
                      />
                  </Section>
                :
                                                                                  //only display last 3 out of 4 subcategories
                (((d.subCategory === 'fixedTransportationCosts') || (d.subCategory === 'fixedLifestyleCosts') || (d.subCategory === 'fixedLargeEventsCosts')) && (subCount === 1)) ?
                  <Section key={d.subCategory}>
                    <ItemDisplayBox                                               //Displays all the fixed or variables they have added
                      category={d.category}
                      item={d}
                      subCategory={d.subCategory}
                      setCount={setCount}
                      setItemId={setItemId}
                      setAddFormSubCategory={setAddFormSubCategory}
                      />
                  </Section>

                  : null
                )

                : d.category === "variable" ?
                (

                (((d.subCategory === 'variableHousingCosts') || (d.subCategory === 'variableTransportationCosts') || (d.subCategory === 'variableLifestyleCosts')) && (subCount === 0)) ?
                  <Section key={d.subCategory}>
                    <ItemDisplayBox                                               //Displays all the fixed or variables they have added
                      category={d.category}
                      item={d}
                      subCategory={d.subCategory}
                      setCount={setCount}
                      setItemId={setItemId}
                      setAddFormSubCategory={setAddFormSubCategory}
                      />
                  </Section>
                :
                                                                                  //only display last 3 out of 4 subcategories
                (((d.subCategory === 'variableTransportationCosts') || (d.subCategory === 'variableLifestyleCosts') || (d.subCategory === 'variableLargeEventsCosts')) && (subCount === 1)) ?
                  <Section key={d.subCategory}>
                    <ItemDisplayBox                                               //Displays all the fixed or variables they have added
                      category={d.category}
                      item={d}
                      subCategory={d.subCategory}
                      setCount={setCount}
                      setItemId={setItemId}
                      setAddFormSubCategory={setAddFormSubCategory}
                      />
                  </Section>

                  : null
                )

                : null
              )
               : null
            ))
          }
          </>
        )}
      </Sections>
      <Buttons>
        {" "}
        <ButtonLight backward onClick={() => setSubCount(subCount === 1 ? subCount - 1 : 0)} />
        <ButtonLight forward onClick={() => setSubCount(subCount === 0 ? subCount + 1 : 1)} />
        {console.log(subCount)}
      </Buttons>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  spending_reducer: state.spending_reducer
});

export default connect(mapStateToProps, { removeSpending_action })(
  ControlPanel
);

//-----------------------------------------------style-----------------------------------------------//

const Wrapper = styled.div`
  grid-area: c;
  width: 98%;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1rem;
`;
const Sections = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
`;

const Section = styled.div`
  width: 30%;
  margin: 1rem;
`;

const Buttons = styled.div`
  position: absolute;
  width: 20rem;
  top: 65rem;
  left: 50rem;
  z-index: 100;
  display: flex;
  justify-content: space-between;
`;
