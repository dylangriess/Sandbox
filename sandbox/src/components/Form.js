import React from "react";
import { useRef } from "react";

function Form() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    // console.log({ email, password });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input ref={passwordRef} type="password" id="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
