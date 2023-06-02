import React, { useState } from "react";

export const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function send(event) {
    console.log("send");
    console.log(email);
    event.preventDefault();
    if (email === "Juanito@gmail.com") {
      props.setAuth(true);
    }
  }
  return (
    <div className="background-form">
      <div className="container-form">
        <form onSubmit={send}>
        <h1 className="tituloform">Plants for Everybody</h1>
          <label htmlFor="name"></label>
          <input
            onChange={handleEmail}
            value={email}
            namemaile=""
            required
            type="email"
            placeholder="User name"
          />
          <label htmlFor="password"></label>
          <input
            onChange={handlePassword}
            value={password}
            name="password"
            required
            type="password"
            placeholder="Password"
          />
          <button>Sumbit</button>
        </form>
      </div>
    </div>
  );
};
