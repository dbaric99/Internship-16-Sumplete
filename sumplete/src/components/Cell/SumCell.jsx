import React from 'react'

function SumCell({sum, size, className}) {

  return (
    <div className={`cell ${className} ${size}`}>{sum}</div>
  )
}

export {SumCell}