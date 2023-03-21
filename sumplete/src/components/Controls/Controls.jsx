function Controls({changeDifficulty}) {
  return (
    <div>
      <button onClick={() => changeDifficulty(9)}>Easy</button>
      <button onClick={() => changeDifficulty(16)}>Medium</button>
      <button onClick={() => changeDifficulty(25)}>Hard</button>
    </div>
  )
}

export {Controls}