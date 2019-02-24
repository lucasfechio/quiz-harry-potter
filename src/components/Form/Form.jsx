import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from '../Question/Question';
import { Button, Label } from '../FormComponents/FormComponents';

const QUESTIONS = [
    { question: 'Quantos filmes a série Harry Potter tem?', answer: '8' },
    { question: 'Nome do ator que atua como Harry Potter?', answer: 'Daniel Radcliffe' },
    { question: 'Harry Potter tinha um animal de estimação? Se sim, qual animal era e qual era o nome desse animal?', answer: 'Edwiges' },
    { question: 'Como são chamados as pessoas que não são bruxos?', answer: 'Trouxas' },
    { question: 'Nome da namorada de Harry Potter?', answer: 'Gina Weasley' }
];

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldSubmit: false
        }
    }

    // sets a value (true or false) to the shouldSubmit
    changeShouldSubmit = (value) => {
        const { resetCorrectAnswers } = this.props;
        if (!value)
            resetCorrectAnswers();

        this.setState({ shouldSubmit: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.changeShouldSubmit(true);
    }

    render() {
        const { correctAnswers } = this.props;
        const { shouldSubmit } = this.state;
        return (
            <div>
                {
                    QUESTIONS.map((elem, idx) => {
                        return (
                            <form key={idx} onSubmit={this.handleSubmit}>
                                <Question
                                    key={idx}
                                    question={elem.question}
                                    answer={elem.answer}
                                    shouldSubmit={shouldSubmit}
                                />
                            </form>
                        )
                    })
                }
                <div>
                    {shouldSubmit ? (
                        <div>
                            <Button
                                className='play-again-button'
                                onClick={() => this.changeShouldSubmit(false)}
                            >
                                Jogar Novamente
                            </Button>
                            <Label className='correct-label'>Você Acertou: {correctAnswers}!</Label>
                        </div>
                    ) :
                        <Button
                            className='submit-button'
                            onClick={() => this.changeShouldSubmit(true)}
                        >
                            Ver resultado
                        </Button>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    correctAnswers: state.correctAnswersState.points,
});

const mapDispatchToProps = (dispatch) => ({
    resetCorrectAnswers: () => dispatch({ type: 'RESET' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);