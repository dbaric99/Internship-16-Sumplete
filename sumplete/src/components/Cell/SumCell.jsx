import React from 'react'

function SumCell({sum, size}) {

  return (
    <div className={`cell hanswer ${size}`}>{sum}</div>
  )
}

export {SumCell}