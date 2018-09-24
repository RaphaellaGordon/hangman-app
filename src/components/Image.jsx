import React, { Component } from 'react'
import PropTypes from 'prop-types'
import image0 from '../images/0.jpg'
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import image4 from '../images/4.jpg'
import image5 from '../images/5.jpg'
import image6 from '../images/6.jpg'
import image7 from '../images/7.jpg'

const lookupObj = {
    0: image0,
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
    6: image6,
    7: image7
}

export default class Image extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <img src={lookupObj[this.props.incorrectGuesses.length]} alt="hangman" height="350px" width="350px" />
            </div>
        )
    }
}
