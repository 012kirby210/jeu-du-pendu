import React from 'react'
import PropTypes from  'prop-types'

import './Card.css'

const HIDDEN_SYMBOL = '?'

const Card = ({letter,feedback}) => (
    <div data-testid="card-element" className={`card ${feedback}`} >
        <span className="symbol">
            {feedback === "hidden" ? HIDDEN_SYMBOL : letter }
        </span>
    </div>
)

Card.propTypes = {
    letter: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf(["hidden","visible"]).isRequired
}

export default Card;