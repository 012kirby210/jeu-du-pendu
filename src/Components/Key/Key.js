import React from 'react'
import PropTypes from 'prop-types'

import './Key.css'

const Key = ({index,letter,onClick,used,keyPressed,onKeyPressed,onKeyReleased}) => (
    <div className={`key ${used} ${keyPressed}`} onClick={onClick} onMouseDown={onKeyPressed} onMouseUp={onKeyReleased}>
        <span className="letter">
            {letter}
        </span>
    </div>
)

Key.propTypes = {
    index: PropTypes.number.isRequired,
    letter: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    used: PropTypes.string.isRequired,
    keyPressed: PropTypes.string.isRequired,
    onKeyPressed: PropTypes.func.isRequired,
    onKeyReleased: PropTypes.func.isRequired
}

export default Key;
