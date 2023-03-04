import styled from "styled-components";

export default function FooterScreen (){
    return(
        <Footer data-test="footer">
            0/4 CONCLUÍDOS
        </Footer>
    )
}


const Footer = styled.div`
height: 10vh;
background: #FFFFFF;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
