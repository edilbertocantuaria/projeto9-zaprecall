import styled from "styled-components";
import questions from "../mock"
import showQuestion from "../assets/seta_play.png"
import showAnswer from "../assets/seta_virar.png"
import { useState } from "react";

export default function CardsRender(props) {
    const { questionShown, revealedCard, revealQuestion, showingQuestionAgain } = props;
    const [revealedAnswer, setRevealedAnswer] = useState([]);
     const [deleteQuestion, setDeleteQuestion] = useState([]);
     const [statusCard, setStatusCard] = useState([]);
    //const [teste, setTeste] = useState([]);


    function correctStatement(i) {
        if (questionShown.includes(i)) {

            return (revealedAnswer[i] ? questions[i].answer : questions[i].question)

        } else {
            return (`Pergunta ${i + 1}`)
        }
    }

    // função que vai substituir as setas
    function correctArrow(i) {
        if (questionShown.includes(i)) {
            return (
                <img
                    src={showAnswer}
                    alt="arrow to play"
                    onClick={() => revealAnswer(i)}
                    data-test="turn-btn" />
            )
        } else {
            return (
                <img
                    src={showQuestion}
                    alt="arrow to play"
                    onClick={() => revealQuestion(i)}
                    data-test="play-btn" />
            )
        }
    }

    function revealAnswer(i) {
        const updatingRevealedAnswer = [...revealedAnswer];
        updatingRevealedAnswer[i] = true;
        setRevealedAnswer(updatingRevealedAnswer)
    }

    function wrongAnswer(i) {
        console.log(`Resposta da questão ${i + 1}: errado `)
        hiddenZapsOptions(i)

        const newStatusCard = [...statusCard, "wrong"];
        setStatusCard(newStatusCard);
        console.log(statusCard)

    }

    function partialAnswer(i) {
        console.log(`Resposta da questão ${i + 1}: parcial `)
        hiddenZapsOptions(i)
    }

    function rightAnswer(i) {
        console.log(`Resposta da questão ${i + 1}: certa `)
        hiddenZapsOptions(i)
    }

    function hiddenZapsOptions(i) {
        showingQuestionAgain(i);
        revealedAnswer[i] = false;

        const newDeleteQuestion = [...deleteQuestion, i];
        setDeleteQuestion(newDeleteQuestion);

    }

    return (
        questions.map((_, i) =>
            <Card
                key={"question number" + i}
                data-test="flashcard"
                text={questions[i].question}
                //fontColor={}
                backgroundColor={revealedCard.includes(i) ? "#FFFFD4" : "#FFFFFF"}

            >
                <Question
                    fontSize={revealedCard.includes(i) ? "18px" : "16px"}
                    fontWeight={revealedCard.includes(i) ? "400" : "700"}
                    data-test="flashcard-text"
                    lineThrough={deleteQuestion.includes(i) ? "line-through" : "none"}
                    //fontColor={}
                    
                    >
                    {correctStatement(i)}
                    <ZapsOptions
                        zapsOptionDisplay={!revealedAnswer[i] ? "none" : "flex"}>
                        <NotRemembered data-test="no-btn" onClick={() => wrongAnswer(i)}>Não lembrei</NotRemembered>
                        <AlmostRemembered data-test="partial-btn" onClick={() => partialAnswer(i)}>Quase não lembrei</AlmostRemembered>
                        <Remembered data-test="zap-btn" onClick={() => rightAnswer(i)}>Zap!</Remembered>
                    </ZapsOptions>

                </Question>
                <ArrowButton
                    displayButton={deleteQuestion.includes(i)? "none" : "flex"}
                >
                    {correctArrow(i)}
                </ArrowButton>

            </Card>
        )

    )
}

const Card = styled.div`
width: 80vw;
min-height: 10.8vh;

background-color: ${props => props.backgroundColor};
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-bottom: 20px;
padding: 15px;

display: flex;
align-items: center;
justify-content: space-between;
`
const Question = styled.div`
font-family: 'Recursive';
font-style: normal;
text-decoration-line: ${props => props.lineThrough};
font-weight: ${props => props.fontWeight};
font-size: ${props => props.fontSize};
color: #333333;
//color: ${props => props.fontColor}
`
const ArrowButton = styled.div`
display: ${props => props.displayButton};
align-items: center;
justify-content: center;
background-color: ${props => props.backgroundColor};

border: none;
background-collor: none;
`

const ZapsOptions = styled.div`
width: 75vw;
margin-top: 10px;

font-weight: 400;
font-size: 12px;
color: #FFFFFF;

display: ${props => props.zapsOptionDisplay};
align-items: center;
justify-content: space-between;
text-align: center;

`

const NotRemembered = styled.div`
width: 22.7%;
height: 37.17px;
background: #FF3030;
border-radius: 5px;

display: flex;
align-items: center;
justify-content: center;
`
const AlmostRemembered = styled.div`
width: 22.7%;
height: 37.17px;
background: #FF922E;
border-radius: 5px;

display: flex;
align-items: center;
justify-content: center;
`
const Remembered = styled.div`
width: 22.7%;
height: 37.17px;
background: #2FBE34;
border-radius: 5px;

display: flex;
align-items: center;
justify-content: center;
`