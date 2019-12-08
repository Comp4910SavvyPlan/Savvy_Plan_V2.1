import React, { Component } from 'react'
import Header from "./Header"
import Footer from "./Footer"
import {Route} from "react-router-dom"
import Dashboard from "../Dashboard/Dashboard"
import TaxApp from "../Dashboard/Tax/TaxApp"
import NetWorthApp from "../Dashboard/NetWorth/NetWorthApp"
import CreditScoreApp from "../Dashboard/CreditScore/CreditScoreApp"
import LifetimeIncomeApp from "../Dashboard/LifetimeIncome/LifetimeIncomeApp"
import SavingsPlanApp from "../Dashboard/SavingsPlan/SavingsPlanApp"
import SpendingApp from "../Dashboard/Spending/SpendingApp"
import PropertyApp from "../Dashboard/Property/PropertyApp"
import DebtApp from "../Dashboard/Debt/DebtApp"
import UserAccountApp from "../UserAccount/UserAccountApp"
import {ThemeProvider} from "styled-components"
import { lightTheme} from "../Styles/Themes"
import styled from "styled-components"
import LeftNavBar from "./Navigation/LeftNavBar"
import RightVideoSelector from "./Navigation/RightVideoSelector"

export default class Layout extends Component {

   state = {
       theme: lightTheme,
   }

 
    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
            <>
            <Header/>
            <LeftNavBar/>
            <GridContainer>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/UserAccount" component={UserAccountApp}/>
                    <Route path="/NetWorth" component={NetWorthApp}/>
                    <Route path="/Tax" component={TaxApp}/>
                    <Route path="/LifeTimeIncome" component={LifetimeIncomeApp}/>  
                    <Route path="/SavingsPlan" component={SavingsPlanApp}/>              
                    <Route path="/CreditScore" component={CreditScoreApp}/>              
                    <Route path="/Spending" component={SpendingApp}/>
                    <Route path="/Property" component={PropertyApp}/>
                    <Route path="/Debt" component={DebtApp}/>
            </GridContainer>
            <RightVideoSelector/>
            <Footer/>
            </>
            </ThemeProvider>
        )
    }
}


//
//------------------STYLES---------------------------------------------------------------
 const GridContainer = styled.div`
    height: 100vh;
    margin: 2px auto;
    width: 85vw;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1;
    grid-template-areas: 

    " m m m m m m m m m m m m m"

    /* The Grid container holds the grid item "m" for "main" and "f" for footer. When a sub-app is clicked
     on its grid location becomes m placing it in the "main position" */
`

const Right = styled.div`
    position: absolute;
    top: 10rem;
    right: 2rem;
`

    //-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
    // This is the switch board of the app. The header and footer are rendred and always present. Then the 
    // center panel can be changed using routing to move through and visit various sub apps such as the net worth
    // calculator. 