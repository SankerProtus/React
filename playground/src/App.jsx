import "./App.css";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  let isLoggedIn = true;

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });

  function handleChange(event) {
    event.preventDefault();
    setFormData({username: "", password: "", confirmpassword: ""})
  }

  function handleInput(event) {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData, [name]: value,
    }))
  }

  return (
    <div className="container">
      <p>{formData.username}</p>
      <p>{formData.password}</p>
      <p>{formData.confirmpassword}</p>
      <Login
        isLoggedIn={isLoggedIn}
        handleChange={handleChange}
        handleInput={handleInput}
      />
    </div>
  );
}

export default App;
