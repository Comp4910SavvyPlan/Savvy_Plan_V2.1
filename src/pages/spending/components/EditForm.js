import React from "react"
import styled from "styled-components"
import {connect} from "react-redux"
import FormInput  from "UI/forms/Input"
import DateInput from "UI/forms/DateInput"
import RangeBar  from "UI/rangeBar/RangeBar"
import MiniRangeBar  from "UI/miniRangeBar/MiniRangeBar"
import ButtonLight from "UI/buttons/ButtonLight"
import {setSpendingValue_action, changeLabel_action} from "redux/spending/spending_actions"
import _ from "lodash"

//test

const EditForm = ({
    category,
    subCategory,
    setItemId,
    itemId,
    spending_reducer,
    setSpendingValue_action,
    changeLabel_action,
    setDisplay }) => {

    const item = spending_reducer[category][itemId]                                             //uses the item id provided to go into the reducer and gather all the users details


    const setValue = (logValue, rangeBarValue, rangeBarProps) => {                              //sets the value in the reducer
        setSpendingValue_action(logValue, rangeBarValue, category, rangeBarProps, itemId)
    }

    const changeLabel = (e) => {                                                                //changes the label in the reducer
        changeLabel_action(e, item, itemId)
    }

    return (
        <>
        <Wrapper>
            <Header subCategory={subCategory}>
            <h2>{_.startCase(subCategory)}</h2>
            </Header>
        <Container subCategory={subCategory}>

                <Left>                                                                            {/*This div is empty and is used to push out the other divs to the same locations as the add form */}
                </Left>

                <Center>
                  <FormInput
                    label="item name"
                    value={item.label}
                    type={"text"}
                    handleChange={changeLabel}
                  />

                  <RangeBar
                    rangeBarProps={item.currentValue}
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
                      <MiniRangeBar rangeBarProps={item.age1} setValue={setValue} />
                      <MiniRangeBar rangeBarProps={item.age2} setValue={setValue} />
                    </>
                  ) : null}
                </MiniRangeBarWrapper>
                  <ButtonWrapper>
                          <ButtonLight
                              text={"back"}
                              onClick={() => {
                                setItemId(false)
                                setDisplay('fixed')
                              }
                              }
                          />
                  </ButtonWrapper>
                </Right>
            </Container>

        </Wrapper>
        </>

    )

}

const mapStateToProps = (state) => ({
    spending_reducer: state.spending_reducer
})

export default connect(mapStateToProps, {setSpendingValue_action, changeLabel_action})(EditForm)


//-----------------------------------------------STYLES-----------------------------------------------//


const Wrapper = styled.div`
    width: 100rem;
    border-radius: 5px;
    overflow: hidden;
    border: ${props => props.theme.border.primary};
`
const Header = styled.div`
    width: 100%;
    background: ${props => props.subCategory === "fixedHousingCosts" ? props.theme.color.blue :
                  props => props.subCategory === "fixedTransportationCosts" ? props.theme.color.steelBlue :
                  props => props.subCategory === "fixedLifestyleCosts" ? props.theme.color.green :
                  props => props.subCategory === "fixedLargeEventsCosts" ? props.theme.color.salmon :
                  props => props.subCategory === "variableHousingCosts" ? props.theme.color.blue :
                  props => props.subCategory === "variableTransportationCosts" ? props.theme.color.steelBlue :
                  props => props.subCategory === "variableLifestyleCosts" ? props.theme.color.green :
                  props => props.subCategory === "variableLargeEventsCosts" ? props.theme.color.salmon :
    null};
    height: 4rem;
    color: ${props => props.theme.color.ice};
`
const Left = styled.div`
    width: 30rem;
    height: 100%;
    padding: 2rem;
`
const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 2rem;
`
const MiniRangeBarWrapper = styled.div`
    position: absolute;
    right: 3rem;
    top: 1rem;
`
const Right = styled.div`
    width: 30rem;
    padding: 2rem;
`
const Center = styled.div`
    width: 45rem;
    padding: 2rem;
`
const Container = styled.div`
height: ${props => props.subCategory === "securedDebt" ? "33rem" : "30rem"};                                                    //mortgage requires more height because there are more inputs
    display: flex;
    position: relative;
`
