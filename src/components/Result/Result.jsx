import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Result.css';

export class Result extends Component {
  render() {
    return (
      <div className="Result">
        <h4>Game Finished</h4>
        <p>{`Your score is ${this.props.score}`}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        score: state.scores.scores.filter(score => score).length
    }
}   
export default connect(mapStateToProps)(Result)
