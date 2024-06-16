import { Link, useNavigate } from 'react-router-dom';
import { validateCredentials } from './loginUtil';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (await validateCredentials(event)) {
      navigate('/cuisine');
    } else {
      setShowLoginModal(true);
    }
  };

  return (
    <>
      <div className="center">
        <div className="tab-content">
          <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form onSubmit={handleSubmit}>
              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="loginName">
                  Email or username
                </label>
                <input type="email" id="loginName" className="form-control" />
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
                <input type="password" id="loginPassword" className="form-control" />
              </div>

              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-primary btn-block mb-4"
              >
                Sign in
              </button>

              <div className="text-center">
                <p>
                  Not a member? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        className={`modal ${showLoginModal ? 'show' : ''}`}
        style={{
          display: showLoginModal ? 'block' : 'none',
          background: 'rgba(0, 0, 0, .8)',
        }}
        id="errorModal"
        aria-labelledby="errorModalLabel"
        aria-hidden={showLoginModal ? undefined : 'true'}
        aria-modal={showLoginModal ? 'true' : undefined}
        role={showLoginModal ? 'dialog' : undefined}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Error
              </h5>
            </div>
            <div className="modal-body">You have entered incorret credential.</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => setShowLoginModal(false)}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
