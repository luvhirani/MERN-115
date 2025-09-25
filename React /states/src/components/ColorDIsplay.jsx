import React from 'react'

const ColorDIsplay = ({color}) => {
  return (
    <>
      <p>Your Selected Color is : {color}</p>

      <div style={{width:50, height:50, backgroundColor:color }}></div>

    </>
  )
}

export default ColorDIsplay