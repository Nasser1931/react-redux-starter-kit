import React, { useState } from 'react'
import useColor from '../../../Hooks/useFetch'

function About() {
    const [color, ChangeColor, ResetColor] = useColor()

    return (

        <div>
            <h3 style={{ color: color }}>About this Project!</h3>
            <br />
            <p> AJAHAIOHIAJDIJIAJISJFIIWR </p>
            <br />
            <button
                onClick={ChangeColor} >
                Random color</button>
            <button
                onClick={ResetColor} >
                Reset color</button>
        </div>

    )
}

export default About
