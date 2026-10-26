
function Counter({increment, count}) {
  return (
    <>
    <h2>{`${count}`}</h2>
      <button onClick={increment} className="border-2 border-amber-200 px-4 bg-black text-white py-2 rounded-xs">Increase</button>
  
    
    </>
  )
}

export default Counter