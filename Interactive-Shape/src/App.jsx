import React from 'react'
import Shape from './Shape'

const BOX_DATA = [
  [1,1,1],
  [1,0,0],
  [1,1,1]
];

const App = () => {
  return (
    <div>
      <Shape data={BOX_DATA}/>
    </div>
  )
}

export default App
