import React, { useEffect, useState } from 'react'


export default function App() {
  useEffect(() => {}, [])

  const [isVisible, setVisible] = useState(false)

  /* useState Syntax
  > If useState is imported
  const [getter, setter] = useState(default value: Any)

  > If useState is not import
  const [getter, setter] = React.useState(default value: Any)

  > The default value of a state can be any type
    - number (decimal or int)
    - str
    - arr (List in python)
    - obj (Dictionary in python)
    - bool 
    - etc...

  */

  return (
    <div>App</div>
  )
}
