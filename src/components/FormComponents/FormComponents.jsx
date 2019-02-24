import React from 'react';
import PropTypes from 'prop-types';
import './FormComponents.css';

const Button = (props) => {
    return <button {...{type: 'button', ...props}}></button>
}

const Label = (props) => {
    return <label {...props}></label>
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
}

Label.propTypes = {
    className: PropTypes.string,
}

export {Button, Label};