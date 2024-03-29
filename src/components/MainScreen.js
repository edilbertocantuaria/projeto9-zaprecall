import { useState } from "react";
import styled from "styled-components";
import logoImage from "../assets/logo.png"
import CardsRender from "./CardsRender";

export default function MainScreen(props) {
    const {flips} = props
    const [questionShown, setQuestionShown] = useState([]);
    const [revealedCard, setRevealedCard] = useState([]);

    function revealQuestion(i) {
        const newCardRevealed = [...revealedCard, i];
        setRevealedCard(newCardRevealed);


        const newQuestionRevealed = [...questionShown, i];
        setQuestionShown(newQuestionRevealed);

    }

    function showingQuestionAgain(i) {
        const newQuestionShown = questionShown.filter((element) => element !== i);
        setQuestionShown(newQuestionShown);

        const newRevealedCard = revealedCard.filter((element) => element !== i);
        setRevealedCard(newRevealedCard);


    }


    function countFlipened(i){
        flips();

        return
    }


    return (
        <Main>
            <Logo>
                <ImgLogo src={logoImage} />
                ZapRecall
            </Logo>
            <Cards>
                <CardsRender
                    
                    questionShown={questionShown}
                    revealedCard={revealedCard}
                    
                    revealQuestion={revealQuestion}
                    showingQuestionAgain={showingQuestionAgain}
                    countFlipened={countFlipened}
                />
            </Cards>
        </Main>
    )
}


const Main = styled.div`
width: 100%;
min-height:90vh;
background-color: #FB6B6B;

display: flex;
flex-direction: column;
align-items: center;
justify-items: center;
`
const Logo = styled.div`
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
const ImgLogo = styled.img`
width: 52px;
height: 60px;
`
const Cards = styled.div` 
//height: 100%;
min-height:70vh;
display: flex;
flex-direction: column;
align-items: space-between;
justify-content: space-around;
justify-items: center;

`