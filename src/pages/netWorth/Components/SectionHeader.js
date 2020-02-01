import React, { Component } from 'react'
import styled from "styled-components"
import { connect } from 'react-redux'
import {ChevronIcon} from "style/Icons"

 class SectionHeader extends Component {
    state = {
        sectionOpen: false,
    }
    //decides if the section is open or closed. 

    toggleState = ()=> {
        const show = this.state.sectionOpen
        this.setState({
            sectionOpen: !show
        })
    }
    //changes state between open and closed


      renderTotal = (section) => {
            switch(section) {
                case("cashAssets"): return <CatagoryTotal 
                                            onClick={(event) => this.toggleItem(event)}>
                                            ${(this.props.netWorthState.asset["cashAssetsTotal"]()).toLocaleString()}
                                            </CatagoryTotal>
                case("retirementAssets"): return <CatagoryTotal 
                                            onClick={(event) => this.toggleItem(event)}>
                                            ${(this.props.netWorthState.asset["retirementAssetsTotal"]()).toLocaleString()}
                                            </CatagoryTotal>
                case("propertyAssets"): return <CatagoryTotal 
                                            onClick={(event) => this.toggleItem(event)}>
                                            ${(this.props.netWorthState.asset["propertyAssetsTotal"]()).toLocaleString()}
                                            </CatagoryTotal>
                case("unsecuredDebt"): return <CatagoryTotal 
                                            onClick={(event) => this.toggleItem(event)}>
                                            ${(this.props.netWorthState.liability["unsecuredDebtTotal"]()).toLocaleString()}
                                            </CatagoryTotal>
                case("securedDebt"): return <CatagoryTotal 
                                            onClick={(event) => this.toggleItem(event)}>
                                            ${(this.props.netWorthState.liability["securedDebtTotal"]()).toLocaleString()}
                                            </CatagoryTotal>
                case("otherDebt"): return <CatagoryTotal 
                                            onClick={(event) => this.toggleItem(event)}>
                                            ${(this.props.netWorthState.liability["otherDebtTotal"]()).toLocaleString()}
                                            </CatagoryTotal>
                default: return <CatagoryTotal 
                                            onClick={(event) => this.toggleItem(event)}>
                                            ${"banana"}</CatagoryTotal>
            }
        }
        //switch statement looks at the props passed and renders the propert title.

    render() 
    
    {
        return (
            <Header
            onClick={() => this.props.toggleState()}
            >
            <Chevron open={this.props.open}/>
                {`${this.props.allTitleProps.label}`}
                {this.renderTotal(this.props.allTitleProps.section)}
            </Header>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        netWorthState: state.netWorthState
    }
}

export default connect(mapStateToProps)(SectionHeader)



//-----------------------------------------------style-----------------------------------------------//


const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.color.slate};
    border-bottom: 1px solid white;
    padding: 1rem;
    font-size: ${props => props.theme.fontSize.medium};
    color: ${props => props.theme.color.ice};
    cursor: pointer;
    &:hover {
        opacity: 0.96;
    }
`

const CatagoryTotal = styled.div`
    font-size: ${props => props.theme.fontSize.small};
    margin-top: -.3rem;

`

const Chevron = styled(ChevronIcon)`
    transition: all .2s ease-in;
    transform: ${props => props.open ? "rotate(90deg)" : null };
`


//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//

// The section header displays the section title and the total value of the entire section. 
// It is clickable to expand and reveal the section or hide it. 