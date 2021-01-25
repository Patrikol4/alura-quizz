import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'


const BackgroundImage = styled.div`
background-image: url(${db.bg});
flex: 1;
background-size: cover;
background-position: center;

`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;



export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz sobre jogos em geral</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Aceite e este desafio e veja se você manja do mundo dos games</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Contato</h1>
            <p>Entre em contato pelo e-mail : Quiz@quiz.com</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </BackgroundImage>


  );
}
