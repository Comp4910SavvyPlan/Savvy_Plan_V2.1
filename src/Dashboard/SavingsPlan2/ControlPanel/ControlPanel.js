import React from 'react'
import styled from "styled-components"
import Withdrawals from "./Components/Withdrawals"
import Contributions from"./Components/Contributions"
import InvestmentFactors from "./Components/InvestmentFactors"
import ButtonDark from "../../../UI/Buttons/ButtonDark"
import { NavLink} from "react-router-dom"

const ControlPanel = () => {

        return (
            <ControlPanelWrapper>
                <Left>
                <h2>Savings Contributions </h2>
                     <Contributions />
                </Left>
                <Center>
                <h2>Future Withdrawals </h2>
                     <Withdrawals />
                </Center>
                <Right>
                     <Title>Investment Returns</Title>
                     <InvestmentFactors/>
                </Right>
                <ButtonWrapper to="/SavingsPlan">
                        <ButtonDark text={'Next'}/>
                </ButtonWrapper>
            </ControlPanelWrapper>
        )

    }

    export default ControlPanel
//-----------------------------------------------STYLES-----------------------------------------------//

const ControlPanelWrapper = styled.div`
    grid-area: d;
    display: flex;
    color: ${props => props.theme.color.slate};
    border-top: ${props => props.theme.border.primary};
    padding-top: 2rem;
`

const Left = styled.div`
    flex: 1;
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`
const Title = styled.div `
    font-size: ${props => props.theme.fontSize.medium};
    text-align: center;
    font-weight: 300;
   
` 

const ButtonWrapper = styled(NavLink)`
    position: absolute;
    bottom: -10rem;
    right: 2rem;
`