import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card/Card'
import './Cardboard.css'

const Cardboard = ({word}) => {
    return (
    <div className="cardboard">
        { word.map((letter,index) =>  
            (
                <Card key={index}
                    letter={letter.symbol}
                    feedback={letter.feedback}
                />
            ))
        }
    </div>
)}

Cardboard.propTypes = {
    word: PropTypes.arrayOf(PropTypes.shape({
        symbol: PropTypes.string,
        feedback: PropTypes.oneOf(["hidden","visible"])
    })).isRequired
}

export default Cardboard;