import './App.css';
import QuestionSet from './components/QuestionSet';
import { questions } from './data';
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <Container style={{paddingTop: '1em'}}>
    <QuestionSet questions={questions} />
    </Container>
  );
}

export default App;
