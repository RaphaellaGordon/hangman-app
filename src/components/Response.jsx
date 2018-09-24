import React from 'react'

export default ({ correctGuesses, goalWord }) => {
    return (
        <div className='response'>
            {goalWord.split('').map((ltr) => {
                if (correctGuesses.includes(ltr)) return ltr;
                else return '_ ';
            })}
        </div>
    )
}
