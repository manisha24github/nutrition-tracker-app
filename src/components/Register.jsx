import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
  });

  function handleInput(event) {
    // console.log(event.target.name, event.target.value);

    setUserDetails((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userDetails);
  }
  return (
    <section className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register to Nutrition Track App !!</h2>

        <input className="inp" type="text" required onChange={handleInput} placeholder="Enter Name" name="name" />

        <input className="inp" type="email" required onChange={handleInput} placeholder="Enter Email" name="email" />

        <input
          className="inp"
          type="password"
          required
          maxLength={8}
          onChange={handleInput}
          placeholder="Enter Password"
          name="password"
        />

        <input
          className="inp"
          type="number"
          required
          max={100}
          min={12}
          onChange={handleInput}
          placeholder="Enter Age"
          name="age"
        />

        <button className="btn"> Join</button>
        <p>
          Already Register ?
          <Link className="link" to="/login">
            {' '}
            Login
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
