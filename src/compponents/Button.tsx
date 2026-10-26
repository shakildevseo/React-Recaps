
function Button({text, onClick}) {
  return (
   <>
   <button onClick={onClick} className="border-2 border-amber-200 px-4 bg-black text-white py-2 rounded-xs">{text}</button>
   
   </>
  )
}

export default Button