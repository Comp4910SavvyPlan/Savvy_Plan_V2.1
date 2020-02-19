import React from "react"
import styled from "styled-components"
//import ItemDisplayBox from "pages/spending/components/ItemDisplayBox"


const ControlPanel = () => {
    return (
        <Wrapper>
            <Sections>
              <Section>
                control panel
              </Section>
            </Sections>
        </Wrapper>
    )
}

export default ControlPanel


//-----------------------------------------------style-----------------------------------------------//

const Wrapper = styled.div`
    grid-area: c;
    width: 98%;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 1rem;

`
const Sections = styled.div`
    display: flex;
    padding: 1rem;

    justify-content: center;
`
const Section = styled.div`
    width: 30%;
    margin: 1rem;
`
