import { useState } from "react";
import styled from "styled-components";
import logoImage from "../assets/logo.png"
import CardsRender from "./CardsRender";

export default function MainScreen (){
    const [questionShown, setQuestionShown] = useState([]);
    const [revealedCard, setRevealedCard] = useState([]);
    const [revealedAnswer, setRevealedAnswer] = useState([])

    function revealQuestion(i){
        
        const newCardRevealed =[...revealedCard, i];
        setRevealedCard(newCardRevealed);

        const newQuestionRevealed =[...questionShown, i]
        setQuestionShown(newQuestionRevealed);   
    }

    return(
        <Main>
            <Logo>
                <ImgLogo src={logoImage}/>
                ZapRecall
            </Logo>        
            <Cards>
                <CardsRender
                      questionShown={questionShown}
                      revealedCard={revealedCard}
                      revealQuestion={revealQuestion}
                />
            </Cards>
        </Main>
    )
}


const Main = styled.div`
width: 100%;
background-color: #FB6B6B;

display: flex;
flex-direction: column;
align-items: center;
justify-items: center;
`
const Logo= styled.div`
width:255.61px;
height: 60px;
margin-top: 40px;
margin-bottom: 48px;

font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
color: #FFFFFF;

display: flex;
align-items:center;
justify-content: space-around;
`
const ImgLogo=styled.img`
width: 52px;
height: 60px;
`
const Cards = styled.div` 
height: 100%;
display: flex;
flex-direction: column;
align-items: space-between;
justify-items: center;

`