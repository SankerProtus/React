import { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    try {
      const { name, value } = event.target;

      setContact((prevValues) => ({
        ...prevValues,
        [name]: value
      }));
    } catch (error) {
      console.error(`Something went wrong. ${error}`);
      setErrorMessage('Something went wrong. Please try again later.');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      // Here you could add form validation or submission logic
      console.log('Form submitted:', contact);
      
      // Example: Reset form after submission
      setContact({ fName: "", lName: "", email: "" });
      
      // Clear any error messages
      setErrorMessage("");
    } catch (error) {
      console.error(`Something went wrong. ${error}`);
      setErrorMessage('Something went wrong. Please try again later.');
    }
  }
  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      {errorMessage ? <p>{errorMessage}</p> : <p>{contact.email}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
