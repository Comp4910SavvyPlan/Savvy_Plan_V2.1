import React, {useState} from "react"
import styled from "styled-components"
import Header from "pages/spending/components/Header"
import ControlPanel from "pages/spending/components/ControlPanel"
import Main from "pages/spending/components/Main"


const Spending = () => {

    return (
        <Page>
          <Main/>
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
