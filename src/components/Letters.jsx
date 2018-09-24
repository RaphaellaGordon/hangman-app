import React from 'react'
import PropTypes from 'prop-types'

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const Letters = ({ makeGuess, incorrectGuesses }) => {
    const style = {

    }
    // const incorrectStyle = { textDecoration: "line-through" }

    return (
        <div className="letters_box">
            {alphabet.map(ltr => {
                const correct = incorrectGuesses.includes(ltr) ? true : false;
                if (!correct) {
                    return <button className="letter_button" style={style} id={ltr} onClick={() => makeGuess(ltr)}>{ltr}</button>
                } else {
                    return <button className="letter_button" style={{ ...style, textDecoration: "line-through" }} id={ltr} onClick={makeGuess}>{ltr}</button>
                }
            })}
        </div>
    )
}

Letters.propTypes = {

}

export default Letters

