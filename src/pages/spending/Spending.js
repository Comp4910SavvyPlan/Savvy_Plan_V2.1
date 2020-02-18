import React, {useState} from "react"
import styled from "styled-components"
import Header from "pages/spending/components/Header"
import ControlPanel from "pages/spending/components/ControlPanel"
import chart from "assets/images/spending_chart.png"
import circle_chart from "assets/images/spending_chart_circle.png"


const Spending = () => {

    const [monthly, toggleMonthly] = useState(true)

    return (
        <Page>
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


        </Page>
    )
}

export default Spending


//-----------------------------------------------STYLES-----------------------------------------------//

const Page = styled.div`
    ${props => props.theme.pageBaseStyles}
    grid-template-rows: minmax(7rem, 10rem) minmax(21rem, 22rem) minmax(28rem, 40rem);
    width: 100%;
    position: relative;
    grid-template-areas:
    'a a a a a a a a a a a a'
    'b b b b b b b b b b b b'
    'c c c c c c c c c c c c'
`

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
