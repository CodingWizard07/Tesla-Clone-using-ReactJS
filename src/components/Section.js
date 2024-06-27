import { Buttons } from '@testing-library/user-event/dist/cjs/system/pointer/buttons.js'
import React from 'react'
import styled from  "styled-components"
import Fade from 'react-reveal/Fade'


function Section({ title , description, leftBtnTxt, rightBtnTxt , backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
        <ItemText>
            <h1>{ title }</h1>
            <p>{ description }</p>
        </ItemText>
        </Fade>
        <Button>
            <Fade bottom>
                <ButtonGroup>   
                    <LeftButton>
                        { leftBtnTxt }
                    </LeftButton>
                    { rightBtnTxt &&
                        <RightButton>
                        {rightBtnTxt}
                        </RightButton> 
                    }
                </ButtonGroup>
            </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            
        </Button>




    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    z-index:10;
    width:100vw;
    height:100vh;
    background-image: ${props => `url("/images/${props.bgImage}")`}; 
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between; //vertical due to change in direction
    align-items:center; // horsizontal for same
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
    z-index:-1;
`


const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    
    color:white;
    background-color: #171a20cc;
    height:40px;
    width:256px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size: 12px;
    cursor: pointer;
    margin:8px;
    
    
`


const RightButton = styled(LeftButton)`
    background-color:white;
    opacity:0.65;
    color:black;
`

const Button = styled.div`

`

const DownArrow = styled.img`

    height:40px;
    overflow-x:hidden;
    animation: animateDown infinite 1.5s;
`

