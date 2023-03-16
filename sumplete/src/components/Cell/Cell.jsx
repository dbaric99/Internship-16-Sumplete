import React from 'react'

function Cell({value, index}) {
    console.log("CELL:",value, index);
  return (
    <div>{value}</div>
  )
}

export {Cell}