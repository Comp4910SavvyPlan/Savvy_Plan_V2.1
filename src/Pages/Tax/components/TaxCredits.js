import React, { Component } from 'react'
import styled from "styled-components"
import MiniRangeBar from "UI/MiniRangeBar/miniRangeBar"

export default class TaxCredits extends Component {

     miniRenderRangeBars = (miniRangeBarPropsArray) => {
         return miniRangeBarPropsArray.map(propsObject => <MiniRangeBar id={propsObject.name}
                                                                   key={propsObject.name}
                                                                   setValue={this.props.setIncome}
                                                                   rangeBarProps={propsObject}
                                                                   />
          )
      }

    render() {
        return (

            <MiniRangeBarWrapper>
            {this.miniRenderRangeBars(this.props.creditsRangeBarValues)}
            </MiniRangeBarWrapper>
        )
    }
}

//-----------------------------------------------STYLES-----------------------------------------------//

const MiniRangeBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
// 

