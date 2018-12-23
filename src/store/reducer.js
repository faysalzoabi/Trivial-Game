import { ADD_SCORE, ADD_QUESTIONS } from './actions';
import { combineReducers } from 'redux';
import uuid from 'uuid';

const initState = {
    questions:[],
    scores:[]
}
const questions = (state=initState, action) => {
    console.log('quesss',action)
    switch(action.type){
        case ADD_QUESTIONS:
            const newquestions = [...state.questions];
            action.payload.forEach((question, index) => {
                question.id = index;
                newquestions[question.id]= question
            });
            return {
                ...state,
                questions:newquestions
            }
        default:
            return state
    }
}


const scores = (state=initState, action) => {
    console.log('action', action)
    switch (action.type){
        case ADD_SCORE:
          const newscore = [...state.scores];
          console.log('newscore',newscore)
          newscore.push(action.payload);
          console.log('newscore',newscore)
          return {
              ...state,             
              scores:newscore
          }
        default:
          return state;

    }
}

export default combineReducers({
    questions,
    scores,
  });
  

