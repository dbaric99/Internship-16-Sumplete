function ValueCell({cellObj, size, handleCellSelect}) {

  const handleCellClick = (e) => {
    let cellArea = e.target;
    cellArea.classList.toggle('delete');
    handleCellSelect(cellObj.id);
  }

  return (
    <div onClick={handleCellClick} className={`cell number ${size}`}>{cellObj.value}</div>
  )
}

export {ValueCell}