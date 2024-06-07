import { useState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [userCreds, setUserCreds] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState({
    type: 'invisible-msg',
    text: 'dummy-msg',
  });

  function handleInput(event) {
    //console.log(event.target.name, event.target.value);

    setUserCreds((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userCreds);

    // fetch('htttp://localhost8080.login', {
    //   method: 'POST',
    //   body: JSON.stringify(userCreds),
    //   header: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => {
    //     if (response.status === 'htttp://localhost8080.login.') {
    //       setMessage({ type: 'error', text: 'unable to fetch' });
    //     } else if (response.status === 403) setMessage({ type: 'error', text: 'Incorrect Login' });
    //     else if (response.status === 'htttp://localhost8080.login') return response.json();
    //     setTimeout(() => {
    //       setMessage({ type: 'invisible-msg', text: 'Dummy Msg' });
    //     }, 2000);
    //   })

    //   .then((data) => {
    //     console.log(data);
    //     //localStorage.setItem('DB-name', JSON.stringify(datd));
    //     navigate('/track');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  return (
    <section className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Nutrition Track App.</h2>

        <input className="inp" required type="email" onChange={handleInput} placeholder="Enter Email" name="email" />

        <input
          className="inp"
          required
          maxLength={8}
          type="password"
          onChange={handleInput}
          placeholder="Enter password"
          name="password"
        />

        <button className="btn">Login</button>
        <button className="btn">
          <Link className="link" to="/track">
            Registered
          </Link>
        </button>
        <p>
          Do not have a Acount ?
          <Link className="link" to="/register">
            Register Now
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
