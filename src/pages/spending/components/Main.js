import React, {useState} from "react"
import styled from "styled-components"
import Header from "pages/spending/components/Header"
import ControlPanel from "pages/spending/components/ControlPanel"
import chart from "assets/images/spending_chart.png"
import circle_chart from "assets/images/spending_chart_circle.png"

const Main = () => {

    const [monthly, toggleMonthly] = useState(true)

    return (
            <>
            <Header monthly={monthly} toggleMonthly={toggleMonthly}/>
              <ChartWrapper>
                <CircleChartPlaceHolder>
                  <img src={circle_chart}/>
                </CircleChartPlaceHolder>
                <ChartPlaceHolder>
                  <img src={chart}/>
                </ChartPlaceHolder>
              </ChartWrapper>
              <ControlPanel/>
            </>
    )
}

export default Main

//-----------------------------------------------STYLES-----------------------------------------------//

const ChartWrapper = styled.div`
    grid-area: b;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`

const CircleChartPlaceHolder = styled.div`
    width: 30%;
    height: 90%;
`
const ChartPlaceHolder = styled.div`
    width: 70%;
    height: 100%;
`
