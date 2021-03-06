import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route } from "react-router-dom";
import Dashboard from "pages/dashboard/Dashboard";
import TaxApp from "pages/taxPosition/TaxApp";
<<<<<<< HEAD
import NetWorth from "pages/netWorth/NetWorth1";
=======
import NetWorth from "pages/netWorth/netWorth";
>>>>>>> teamBranch
import CreditScoreApp from "pages/credit/CreditScoreApp";
import Income from "pages/income/Income";
import Savings from "pages/savings/Savings";
import PropertyApp from "pages/property/PropertyApp";
import Assumptions from "pages/assumptions/Assumptions";
import Login from "pages/login/Login";
import LandingPage from "pages/landingPage/LandingPage";
<<<<<<< HEAD
=======
import Plan from "pages/plan/Plan";
>>>>>>> teamBranch
import OnboardingProcess from "pages/onboarding/OnboardingProcess";
import SignUp from "pages/login/SignUp";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "style/Themes";
import styled from "styled-components";
import LeftNavBar from "./navigation/LeftNavBar";
import RightVideoSelector from "./navigation/RightVideoSelector";
import WithSpinner from "HOC/withSpinner/WithSpinner";
import { connect } from "react-redux";
import Spending from "pages/spending/Spending";

const DashboardWithSpinner = WithSpinner(Dashboard);
const TaxAppWithSpinner = WithSpinner(TaxApp);
// const SavingsWithSpinner = WithSpinner(Savings);
// const IncomeWithSpinner = WithSpinner(Income);

const Layout = ({ auth, state }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <Header auth={auth} />
        <LeftNavBar />

        <GridContainer>
          <Route path="/Assumptions" component={Assumptions} />
<<<<<<< HEAD
=======
          <Route path="/Plan" component={Plan} />
>>>>>>> teamBranch
          <Route path="/Onboarding" component={OnboardingProcess} />
          <Route
            exact
            path="/"
            render={props => (
              <DashboardWithSpinner isLoading={auth} {...props} />
            )}
          />
<<<<<<< HEAD
          <Route path="/NetWorth" component={newNetWorth} />
=======
          <Route path="/NetWorth" component={NetWorth} />
>>>>>>> teamBranch
          <Route
            path="/Tax"
            render={props => <TaxAppWithSpinner isLoading={auth} {...props} />}
          />
<<<<<<< HEAD
          <Route path="/income" component={Income} />
          <Route path="/Savings" component={Savings} />
          <Route path="/CreditScore" component={CreditScoreApp} />
          <Route path="/Spending" component={Spending} />

          <Route path="/Property" component={PropertyApp} />
          <Route exact path="/landingpage" component={LandingPage} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
        </GridContainer>
        <RightVideoSelector />
        <Footer />
      </>
    </ThemeProvider>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    state: state,
    profile: state.firebase.profile
  };
};

=======
          <Route path="/LifeTimeIncome" component={Income} />
          <Route path="/SavingsPlan" component={Savings} />
          <Route path="/CreditScore" component={CreditScoreApp} />
          <Route path="/Spending" component={Spending} />
          <Route path="/Property" component={PropertyApp} />
          <Route exact path="/landingpage" component={LandingPage} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
        </GridContainer>
        <RightVideoSelector />
        <Footer />
      </>
    </ThemeProvider>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    state: state,
    profile: state.firebase.profile
  };
};

>>>>>>> teamBranch
export default connect(mapStateToProps)(Layout);
//
//------------------style---------------------------------------------------------------
const GridContainer = styled.div`
  height: 100vh;
  margin: 4px auto;
  width: 100vw;
  display: grid;
  grid-template-rows: 98vh;
  overflow: scroll;
  color: ${props => props.theme.color.slate};
<<<<<<< HEAD
  background: #fcfcfc;
=======
>>>>>>> teamBranch
  grid-template-areas: "m";

  /* The Grid container holds the grid item "m" for "main" and "f" for footer. When a sub-app is clicked
     on its grid location becomes m placing it in the "main position" */
`;

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
// This is the switch board of the app. The header and footer are rendred and always present. Then the
// center panel can be changed using routing to move through and visit various sub apps such as the net worth
// calculator.
