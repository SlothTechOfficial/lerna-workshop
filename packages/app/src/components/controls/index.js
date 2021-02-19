import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Controls = ({ onPressNext, onPressPrev, prevIsDisabled }) => { 

    return <>
        <button onClick={onPressNext} className="next">Next &raquo;</button>
    </>
}

Controls.propTypes = {
    onPressNext: PropTypes.func.isRequired,
}