import React from 'react';
import { Link } from 'react-router-dom';
function Notfound() {
  return (
    <section className="container not-found">
      <div>
        <h1>Page 404 Not Found</h1>
        <p>
          <Link to="/register">Now use Register Login Page!!</Link>
        </p>
      </div>
    </section>
  );
}

export default Notfound;
