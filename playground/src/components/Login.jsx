import Input from "./Input";

export default function Login(props) {
  return (
    <form onSubmit={props.handleChange}>
      <Input
        id='1'
        type="text" 
        name="username" 
        placeholder="Enter your name"
        handleInput={props.handleInput} 
      />

      <Input
        id='2'
        type="password"
        name="password"
        placeholder="Enter your password"
        handleInput={props.handleInput} 
      />

      {!props.isLoggedIn && (
        <Input
          id='3'
          type="password"
          name="confirmpassword"
          placeholder="Confirm password"
          handleInput={props.handleInput} 
        />
      )}

      <button onClick={props.handleChange} type="submit">{props.isLoggedIn ? "Login" : "Register"}</button>
    </form>
  );
}
