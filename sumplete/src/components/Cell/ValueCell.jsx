import React from 'react'

function ValueCell({cellObj}) {
    console.log("VALUE CELL", cellObj)
  return (
    <div>{cellObj.value}</div>
  )
}

export {ValueCell}