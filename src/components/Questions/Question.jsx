import React, { Component } from 'react'
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import './Question.css';
import Header from '../Header/Header';
import QuestionItem from './QuestionItem';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      marginTop:10,
    },

    button: {
        margin: theme.spacing.unit,                                                 
      }
  });

class Question extends Component {
  
   handleNext = () => {
       if(this.props.question.id < this.props.len - 1 ){
            this.props.history.push(`/questions/${this.props.question.id + 1}`)
       } else {
            this.props.history.push('/result')
       }
        
    }
  
  render() {
    const { classes } = this.props;
    console.log('quest',this.props);
    return (
      <div>
      <Header/>
      <div className="paper">
                <Paper className={classes.root} elevation={7}>
                    <p dangerouslySetInnerHTML={ { __html: this.props.question.question } } />
                    <div>
                        {
                        this.props.question.answers.map((answer, index) => 
                            <QuestionItem key={index} answer={answer}/>
                        )
                        }
                    </div>
                    <Button onClick={this.handleNext} variant="contained" color="primary" className={classes.button}>
                  Next
                     </Button>
                </Paper>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state, Ownprops) => {
    console.log('mapppp',state.questions.questions);
    const question = Object.values(state.questions.questions).filter(question => 
       question.id === parseInt(Ownprops.match.params.id, 10)
        )[0]

        if(!question){
            return{question:null}
        }
      let answers = question.incorrect_answers.map(answer => ({content:answer, isCorrect:false}))
      answers.push({
          content:question.correct_answer,
          isCorrect:true,
      })

      question.answers = answers
      
      
    return {
        len: state.questions.questions.length,
        question: question
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Question))
