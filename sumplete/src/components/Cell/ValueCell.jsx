import React from 'react'

function ValueCell({cellObj, size}) {

  const handleCellClick = (e) => {
    console.log('clicked');
    e.target.classList.toggle('delete');
  }

  return (
    <div onClick={handleCellClick} className={`cell number ${size}`}>{cellObj.value}</div>
  )
}

export {ValueCell}