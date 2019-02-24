import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Label } from '../FormComponents/FormComponents';
import './Input.css'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAnswer: ''
        }
    }

    componentWillReceiveProps = (nextP) => {
        const { userAnswer } = this.state;
        const { answer, addPoints } = this.props;
        
        // if the user sent the answers compares with the correct answer and if it is right to add a point
        if (nextP.shouldSubmit) {
            if (userAnswer.toLowerCase() === answer.toLowerCase())
                addPoints();
        } else {
            this.setState({ userAnswer: '' })
        }
    }

    // save user response in userAnswer
    setAnswer = (event) => {
        this.setState({ userAnswer: event.target.value })
    }

    render() {
        const { question, answer, shouldSubmit } = this.props;
        const { userAnswer } = this.state;
        return (
            <div>
                <Label className='question-label'> {question} </Label>
                <input {...{ className: 'answer-input', value: userAnswer, disabled: shouldSubmit, type: 'text', onChange: this.setAnswer }} />
                <Label className='answer-label' > {shouldSubmit && 'Resposta: ' + answer} </Label>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addPoints: () => dispatch({ type: 'ADD' }),
});

Input.propTypes = {
    key: PropTypes.number,
    question: PropTypes.string,
    answer: PropTypes.string,
    shouldSubmit: PropTypes.bool
}

export default connect(null, mapDispatchToProps)(Input);