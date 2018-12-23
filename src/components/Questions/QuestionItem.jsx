import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { addScore } from '../../store/actions';
import { connect } from 'react-redux';


class QuestionItem extends Component {

  handleClick = () => {
      this.props.dispatch(addScore(this.props.answer.isCorrect));
  }
  render() {
      console.log('quesitem',this.props);
    return (
      <div onClick={this.handleClick}>
        <div dangerouslySetInnerHTML={ { __html: this.props.answer.content } } />
      </div>
    )
  }
}

export default connect()(QuestionItem)
