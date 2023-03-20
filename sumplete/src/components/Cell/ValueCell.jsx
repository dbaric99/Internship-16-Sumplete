import React from 'react'

function ValueCell({cellObj}) {
  return (
    <div className='cell number'>{cellObj.value}</div>
  )
}

export {ValueCell}