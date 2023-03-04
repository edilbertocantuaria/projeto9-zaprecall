import styled from "styled-components";
import logoImage from "../assets/logo.png"
import showQuestion from "../assets/seta_play.png"

export default function MainScreen (){
    return(
        <Main>
            <Logo>
                <ImgLogo src={logoImage}/>
                ZapRecall
            </Logo>
            
            <Cards>
                    <Card>
                    <QuestionNumber>
                        Frente
                    </QuestionNumber>
                    <img src={showQuestion} alt="arrow to play"/>
                    </Card>  

                <Card>Pergunta aqui</Card>
                <Card>Pergunta aqui</Card>
                <Card>Pergunta aqui</Card>
                <Card>Pergunta aqui</Card>
                <Card>Pergunta aqui</Card>
            </Cards>
        </Main>
    )
}


const Main = styled.div`
width: 100%;
// height: 90vh;
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