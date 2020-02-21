import React from "react"
import styled from "styled-components"
import SelectorButtonVertical from "UI/buttons/SelectorButtonVertical"


const Header = ({monthly, toggleMonthly}) => {
    return (
        <HeaderWrapper>
            <Title>
                <h1>
                    Spending
                </h1>
            </Title>
            <CatagorySelection>
                <SelectorButton visible={monthly} onClick={() => toggleMonthly(!monthly)} />
                  <Catagories>
                      <Catagory display={monthly} onClick={() => toggleMonthly(!monthly)}>
                          <h2>Fixed</h2>
                          <span>
                            22 k
                          </span>
                      </Catagory>
                      <Catagory display={!monthly} onClick={() => toggleMonthly(!monthly)}>
                          <h2>Variable</h2>
                          <span>
                            18 k - 27 k
                          </span>
                      </Catagory>
                  </Catagories>
            </CatagorySelection>
        </HeaderWrapper>
    )
}

export default Header


//-----------------------------------------------style-----------------------------------------------//

const HeaderWrapper = styled.div`
    grid-area: a;                                                                                             {/*Grid-area set in Income, "a" positions it at the top */}
    display: flex;
    flex-direction: row;
    color: ${props => props.theme.color.slate};
    padding: 2rem;
    display: flex;
    justify-content: space-between;
`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 30rem;
    & span {
        position: absolute;
        right: 1rem;
        font-size: 3rem;
    }
`

const Catagory = styled.div`
    border-bottom: ${props => props.display ? "1px solid grey" : 0}
    cursor: pointer;
    padding: 1rem;
    text-align: left;
    display: flex;
    flex-direction: row;
    position: relative;
    width: 20rem;
    & span {
        position: absolute;
        right: 1rem;
    }

`
const Catagories = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`
const CatagorySelection = styled.div`
    display: flex;
`
