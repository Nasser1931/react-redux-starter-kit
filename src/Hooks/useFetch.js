import React, { useState } from 'react'

function useClr(initailColor = "green", value) {
    const [color, setColor] = useState(initailColor);

    const ChangeColor = () => {
        const colors = ["yellow", "blue", "brown", "red"]
        var randomElement = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomElement.toString())
    }

    const ResetColor = () => {
        setColor("black")
    }

    return [color, ChangeColor, ResetColor]
}

export default useClr
