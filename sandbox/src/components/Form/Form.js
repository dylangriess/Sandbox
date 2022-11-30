import React from "react";
import { useRef } from "react";

function Form() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    const confirmation = document.querySelector(".confirmation");
    if (emailRef && passwordRef) {
      confirmation.classList.remove("none");
      confirmation.classList.add("show");
      confirmation.textContent = "Sent! Check console for output.";
    }
  }

  return (
    <div>
      <h1>FORM</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id="password"
        />
        <button type="submit">Submit</button>
        <span className="confirmation"></span>
      </form>
    </div>
  );
}

export default Form;
