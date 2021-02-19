import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Blockquote = ({message}) => {
    return <blockquote>
        {message}
    </blockquote>
}

Blockquote.propTypes = {
    message: PropTypes.string,
}

Blockquote.defaultProps = {
    message: 'empty joke'
}