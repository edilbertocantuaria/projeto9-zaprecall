import { useState } from "react";
import styled from "styled-components";
import questions from "../mock"
import showQuestion from "../assets/seta_play.png"
import showAnswer from "../assets/seta_virar.png"

export default function CardsRender(props){
     const {questionShown, revealedCard, revealQuestion} = props

     const [revealedAnswer, setRevealedAnswer] = useState([]);
    
     function correctStatement(i){
        if (questionShown.includes(i)){
            if (revealedAnswer.includes(i)){
                console.log(questions[i].answer)
                return (questions[i].answer)  
            }
            else {
                return(questions[i].question)
            }
            
        } else {
            return(`Pergunta ${i+1}`)
                    }
     }

     function correctArrow(i) {
        if (questionShown.includes(i)) {
          if (revealedAnswer.includes(i)) {
            return (
              <img
                src={showQuestion}
                alt="arrow to play"
                onClick={() => setRevealedAnswer(revealedAnswer.filter((j) => j !== i))}
                data-test="play-btn"
              />
            );
          } else {
            return (
              <img
                src={showAnswer}
                alt="arrow to play"
                onClick={() => setRevealedAnswer([...revealedAnswer, i])}
                data-test="turn-btn"
              />
            );
          }
        } else {
          return (
            <img
              src={showQuestion}
              alt="arrow to play"
              onClick={() => revealQuestion(i)}
              data-test="play-btn"
            />
          );
        }
      }

    // function revealAnswer(i){
    //     console.log("entrou na função de revelar a resposta")
    //     const answer = questions[i].answer
    //     setRevealedAnswer(answer);
        
    //     // setCorrectStatement(answer)
    // }

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
            {correctArrow(i)}
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