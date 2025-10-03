export default function Input({ type, name, placeholder, id, handleInput}) {
  return (
    <>
      <input id={id} type={type} name={name} placeholder={placeholder} onChange={handleInput} />
    </>
  );
}