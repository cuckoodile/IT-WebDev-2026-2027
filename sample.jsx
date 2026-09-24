import React from 'react'
import { useState } from 'react'

export default function Box({num}) {
    const [currentColor, setCurrentColor] = useState(0)

    const colors = [
        "bg-red-500",
        "bg-blue-200",
        "bg-green-700",
        "bg-yellow-400",
    ]

    function handleClick() {
        // Mathematical
        // Current color: yellow
        // colors[0]
        // let nextColor = (currentColor + 1) % colors.length;
        // let nextColor = currentColor % (colors.length - 1);

        // Alogo Based
        // if (currentColor + 1) == colors.length ? setCurrentColor(0) : setCurrentColor(currentColor + 1)

    }

  return (
    <div onClick={handleClick} className={``}>
        <p>{num}</p>
    </div>
  )
}
