import React from "react";
import Box from "./components/Box";

const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function App() {
  // Create a variable of array containing at least 4 colors
  // const colors = ['red', 'yellow', 'blue', 'orange']
  // const colorClasses = {
  //   red: "bg-red-500",
  //   yellow: "bg-yellow-500",
  //   blue: "bg-blue-500",
  //   orange: "bg-orange-500"
  // }

  // Each box component has a interpolated string that gets the value of the current color, using a state

  // const [currentColor, setCurrentColor] = useState(0)
  // Everytime the box is clicked, increment the currentColor
  // Set the current color by classNames={`... bg-${colors[currentColor]-500}`}

  // Create a function handler that handles the changing of the current color to the next color base on the colorClasses and currentColor state

  // function handleChangeColor() {
  //   ...  
  // }

  return (
    <main className="min-h-screen bg-slate-700 p-4 text-white text-5xl flex justify-center items-center flex-col gap-8">
      <h1>Click the Boxes</h1>

      <div className="flex gap-4">
        {boxes.map((item) => (
          /*
            1. Render 10 boxes using a map and a single "Box" component
            2. Each boxes are unique but they all share the same function (changing of colors on click).
          */

          <Box key={item} num={item} />
        ))}
      </div>
    </main>
  );
}
