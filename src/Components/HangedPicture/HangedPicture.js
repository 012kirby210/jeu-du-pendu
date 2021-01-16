import React from 'react'
import PropTypes from 'prop-types'

import './HangedPicture.css'

const HangedPicture = ({uncover}) => (
    <div className="hanged-picture">
          <div className={uncover>7?"visible":"invisible"}>&nbsp;&nbsp;&nbsp;+-----+</div>
          <div className={uncover>6?"visible":"invisible"}>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</div>
          <div className={uncover>5?"visible":"invisible"}>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</div>
          <div className={uncover>4?"visible":"invisible"}>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;/|\</div>
          <div className={uncover>3?"visible":"invisible"}>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;\</div>
          <div className={uncover>2?"visible":"invisible"}>&nbsp;&nbsp;&nbsp;|</div>
          <div className={uncover>1?"visible":"invisible"}>&nbsp;&nbsp;&nbsp;|</div>
          <div className={uncover>0?"visible":"invisible"}>------</div>
    </div>
)

HangedPicture.propTypes = {
    uncover: PropTypes.number.isRequired
}

export default HangedPicture;