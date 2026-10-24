
interface ButtonProps{
    onClick : ()=> void;
}



function ButtonComponent({onClick} : ButtonProps) {
  return (
   <>
   <button onClick={onClick}>Click Me</button>
   </>
  )
}

export default ButtonComponent