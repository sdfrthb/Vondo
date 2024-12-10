function Input({label, placeholder}) {
  return (
    <>
    <label for="first-name">{label}</label>
<input type="text" id="first-name" placeholder={placeholder}></input>
    </>

   );
}

export default Input;
