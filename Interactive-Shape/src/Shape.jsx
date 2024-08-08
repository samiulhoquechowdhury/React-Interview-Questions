import React from 'react'
import { useMemo } from 'react'

const Shape = ({data}) => {
    const boxes = useMemo(()=> data.flat(Infinity),[data]) ;
  return (
    <div className='boxes'>
      {
        boxes.map((box, index)=>)
      }
    </div>
  )
}

export default Shape
