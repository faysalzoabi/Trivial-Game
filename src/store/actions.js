export const ADD_SCORE = 'addscore'
export const ADD_QUESTIONS = 'addQuestions';


export const addScore = (score) => ({
    type:ADD_SCORE,
    payload:score
})

export const addQuestions = (questions) => {
    return {
        type:ADD_QUESTIONS,
        payload:questions
    }
}


export const fetchQuestions = () => (dispatch, getState) => {
    return fetch('https://opentdb.com/api.php?amount=3')
    .then(res => res.json())
    .then(data => dispatch(addQuestions(data.results)))
    
}