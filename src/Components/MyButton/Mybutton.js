import React from 'react';
import PropTypes from 'prop-types'

const MyButton = ({textToDisplay,clickHandler}) => (
    <button onClick={clickHandler}>
        {textToDisplay}
    </button>
)

MyButton.propTypes = {
    textToDisplay: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default MyButton;