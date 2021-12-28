import './App.css';
import { Component } from 'react';
import QuestionSet from './components/QuestionSet';
import { Grid } from 'semantic-ui-react';
import { questions } from './data';



function App() {
  return (
    <QuestionSet questions={questions} />
  );
}

export default App;
