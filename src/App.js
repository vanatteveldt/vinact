import './App.css';
import QuestionSet from './components/QuestionSet';
import { questions } from './data';



function App() {
  return (
    <QuestionSet questions={questions} />
  );
}

export default App;
