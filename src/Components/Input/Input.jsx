// eslint-disable-next-line react/prop-types
const Input = ({changeHandler, value, enterkeyHandler}) => {
  return (
    <> <input type="text" 
    onChange={(e)=> changeHandler(e.target.value)}
     value={value} 
     onKeyUp={(e)=>{
      if(e.key ==='Enter'){
       enterkeyHandler();
      }
    }}/></>
  
  )
    
  
}

export default Input
