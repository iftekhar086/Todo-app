// eslint-disable-next-line react/prop-types
const Button = ({clickHandler, disabled=false, btnLabel='click me', btnClassName='', btnStyle={},}) => {
  return (
    <>
    <button onClick={clickHandler}
     disabled={disabled} 
      className={btnClassName} 
      style={btnStyle}>
      {btnLabel}
       </button>
    </>
  );
  
};

export default Button
