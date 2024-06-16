import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/user.mjs';
function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let userdetails = {
      firstname: event.target.registerFirstName.value,
      lastname: event.target.registerLastName.value,
      email: event.target.registerEmail.value,
      password: event.target.registerPassword.value,
      age: event.target.registerAge.value,
      dob: event.target.registerDOB.value,
      gender: event.target.registerGender.value,
    };
    await registerUser(userdetails);
    navigate('/login');
  };

  return (
    <div className="center">
      <h4>Register yourself to Nutrify</h4>
      <form onSubmit={handleSubmit} style={{ width: '50%', paddingTop: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" for="registerFirstName">
                  First Name
                </label>
                <input type="text" id="registerFirstName" className="form-control" />
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" for="registerLastName">
                  Last Name
                </label>
                <input type="text" id="registerLastName" className="form-control" />
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" for="registerEmail">
                  Email
                </label>
                <input type="email" id="registerEmail" className="form-control" />
              </div>
              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" for="registerGender">
                  Gender
                </label>
                <input type="text" id="registerGender" className="form-control" />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" for="registerPassword">
                  Password
                </label>
                <input type="password" id="registerPassword" className="form-control" />
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" for="registerRepeatPassword">
                  Repeat password
                </label>
                <input type="password" id="registerRepeatPassword" className="form-control" />
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" for="registerAge">
                  Age
                </label>
                <input type="number" id="registerAge" className="form-control" />
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" for="registerDOB">
                  Date of Birth
                </label>
                <input type="date" id="registerDOB" className="form-control" style={{ width: '250px' }} />
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-3">
              Register
            </button>
          </div>
        </div>
      </form>
      {/*<form onSubmit={handleSubmit}>
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" for="registerFirstName">
            First Name
          </label>
          <input type="text" id="registerFirstName" className="form-control" />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" for="registerLastName">
            Last Name
          </label>
          <input type="text" id="registerLastName" className="form-control" />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" for="registerEmail">
            Email
          </label>
          <input type="email" id="registerEmail" className="form-control" />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" for="registerPassword">
            Password
          </label>
          <input type="password" id="registerPassword" className="form-control" />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" for="registerRepeatPassword">
            Repeat password
          </label>
          <input type="password" id="registerRepeatPassword" className="form-control" />
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" for="registerAge">
            Age
          </label>
          <input type="password" id="registerAge" className="form-control" />
        </div>

        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-3">
          Register
        </button>
      </form>*/}
    </div>
  );
}

export default Register;
