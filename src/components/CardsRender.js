import styled from "styled-components";
import questions from "../mock"
import showQuestion from "../assets/seta_play.png"
import showAnswer from "../assets/seta_virar.png"
import { useState } from "react";

export default function CardsRender(props){
     const {questionShown, revealedCard, revealQuestion} = props
     const [ revealedAnswer, setRevealedAnswer] = useState([])

     // função que vai exibir: o número da pergunta, a pergunta e a resposta
     function correctStatement(i){
        if (questionShown.includes(i)){
            return(
                revealedAnswer[i] ? questions[i].answer : questions[i].question)
            
        } else {
            return(`Pergunta ${i+1}`)
                    }
     } 

     // função que vai substituir as setas
     function correctArrow(i){
        if (questionShown.includes(i)){
            return (
            <img 
            src={showAnswer}
            alt="arrow to play" 
            onClick={()=> revealAnswer(i)} 
            data-test="turn-btn"/>
            )
        } else{
            return (
                <img 
                src={showQuestion}
                alt="arrow to play" 
                onClick={()=> revealQuestion(i)} 
                data-test="play-btn"/>
            )
        }
    }

    function revealAnswer(i){
        const updatingRevealedAnswer =[...revealedAnswer];
        updatingRevealedAnswer[i]=true;
        setRevealedAnswer(updatingRevealedAnswer)
    }

    return(
        questions.map ((_, i)=> 
    <Card 
        key={"question number" +i} 
        data-test="flashcard" 
        text={questions[i].question}
        backgroundColor={revealedCard.includes(i) ? "#FFFFD4" : "#FFFFFF"}>
        <QuestionNumber data-test="flashcard-text">
            {correctStatement(i)}
        </QuestionNumber>
            <Button
            displayButton={revealedAnswer[i] ? "none" : "flex"}
            >
            {correctArrow(i)}
            </Button>
            
     </Card>  
     )

    )
}

const Card = styled.div`
width: 80vw;
height: 10.8vh;

//background-color: #FFFFFF;
background-color: ${props => props.backgroundColor};
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-bottom: 20px;
padding: 15px;

display: flex;
align-items: center;
justify-content: space-between;
`
const QuestionNumber = styled.div`
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
color: #333333;
`
const Button = styled.div`
display: ${props => props.displayButton};
align-items: center;
justify-content: center;
background-color: ${props => props.backgroundColor};

border: none;
background-collor: none;
`