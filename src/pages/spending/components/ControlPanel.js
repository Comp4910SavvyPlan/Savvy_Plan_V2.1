import React, { useState } from "react";
import styled from "styled-components";
import { removeItem_action } from "redux/spending/spending_actions";
import EditForm from "pages/netWorth/components/EditForm";
import ItemDisplayBox from "pages/spending/components/ItemDisplayBox";
import { spendingWizard_data } from "pages/spending/data/spending_data";

const ControlPanel = ({ setCount, display, spending_reducer }) => {
  const [itemId, setItemId] = useState(); //If the user wants to change something this sets the id of the item they want to change

  const [addFormSubCategory, setAddFormSubCategory] = useState(); //If wants to add something this sets the category of the item theyd like to add
  const addFormDetails = spendingWizard_data.find(
    d => d.subCategory === addFormSubCategory
  ); //Provides the add form with the details to render

  const category = display; //Display is either fixed or variable and is used to show either of those
  const subCategory = itemId
    ? spending_reducer[category][itemId].subCategory
    : "housingCosts"; //if we have an id we get the subCategory from the reducer, otherwise we set it to housingCosts

  const reference = itemId
    ? spending_reducer[category][itemId].reference
    : "housingCosts";

  return (
    <Wrapper>
      <Sections>
        {itemId ? (
          <EditForm
            itemId={itemId} //Clicking add takes the id of the item being added and sets it in the local state
            category={category}
            reference={reference}
            subCategory={subCategory}
            setItemId={setItemId}
          />
        ) : (
          //:
          //addFormSubCategory ?
          //<AddForm category={addFormDetails.category} subCategory=(addFormDetails.subcategory)
          <>
            {spendingWizard_data.map((
              d //if neither add or edit forms are clicked then it renders out the item display
            ) =>
              d.category === display ? (
                <Section key={d.subCategory}>
                  <ItemDisplayBox //Displays all the fixed or variables they have added
                    category={d.category}
                    item={d}
                    reference={d.reference}
                    section={d.section}
                    subCategory={d.subCategory}
                    setCount={setCount}
                    setItemId={setItemId}
                    setAddFormSubCategory={setAddFormSubCategory}
                  />
                </Section>
              ) : null
            )}
          </>
        )}
      </Sections>
    </Wrapper>
  );
};

export default ControlPanel;

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
