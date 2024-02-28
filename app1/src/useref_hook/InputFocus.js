import { useRef, useEffect } from 'react';
function InputFocus() {
  const inputRef = useRef();
  useEffect(() => {
    // Logs `HTMLInputElement` 
    console.log('inside useEffect'+inputRef.current);
    inputRef.current.focus();
  }, []); //calls useEffect after initial rendering

  // Logs `undefined` during initial rendering
  console.log(inputRef.current);

  return (
    <input 
      ref={inputRef} 
      type="text" 
    />
  );
}

export default InputFocus;