import styled from "styled-components";
import questions from "../mock"
import showQuestion from "../assets/seta_play.png"

export default function CardsRender(){
console.log(questions.length);

    return(
        questions.map ((_, i)=> 
    <Card key={"question number" +i}>
        <QuestionNumber>
            Pergunta {i+1}
        </QuestionNumber>
        <img src={showQuestion} alt="arrow to play"/>
     </Card>  
     )

    )
}

const Card = styled.div`
width: 80vw;
height: 10.8vh;

background-color: #FFFFFF;
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