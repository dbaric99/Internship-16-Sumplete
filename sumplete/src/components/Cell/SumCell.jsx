import React from 'react'

function SumCell({sum}) {
    console.log("SUM CELL:", sum)
  return (
    <div>{sum}</div>
  )
}

export {SumCell}