function SumCell({sum, size, className, solved}) {

  return (
    <div className={`cell ${className} ${size} ${solved ? 'correct' : ''}`}>{sum}</div>
  )
}

export {SumCell}