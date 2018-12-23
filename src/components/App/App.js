import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import './App.css';
import Header from '../Header/Header';
import { fetchQuestions } from "../../store/actions";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,                                                 
  }
});                                                                                                                                                          

class App extends Component {

  componentDidMount(){
    this.props.dispatch(fetchQuestions());
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header/>
        <div className="App-intro">
          <Link to = 'questions/0'>
              <Button variant="contained" color="primary" className={classes.button}>
                  Start
              </Button>
          </Link>
        </div>
      </div>
    );
  }
}

const maptStateToProps = (state) => {
  return{
    questions: state.questions
  }
}

export default connect(maptStateToProps)(withStyles(styles)(App));
