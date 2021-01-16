import React from 'react'
import PropTypes from 'prop-types'
import Key from '../Key/Key';

import './Keyboard.css'

const Keyboard = ({letters,onKeyClick,onKeyPressed,onKeyReleased}) => (
    <div className="keyboard">
        { letters.map((letter,index) => (
            <Key 
            letter={letter.symbol}
            key={index}
            onClick={()=>onKeyClick(index)}
            index={index}
            used={letter.used}
            keyPressed={letter.keyState}
            onKeyPressed={()=>onKeyPressed(index)}
            onKeyReleased={()=>onKeyReleased(index)}
            />)
        )}
    </div>
)

Keyboard.propTypes = {
    letters: PropTypes.arrayOf(PropTypes.shape({
        symbol: PropTypes.string,
        used: PropTypes.string,
        keyState: PropTypes.string
    })).isRequired,
    onKeyClick: PropTypes.func.isRequired,
    onKeyPressed: PropTypes.func.isRequired,
    onKeyReleased: PropTypes.func.isRequired
}

export default Keyboard