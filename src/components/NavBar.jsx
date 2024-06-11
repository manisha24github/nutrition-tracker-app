import React from 'react';
import { useState, useEffect } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="main">
        <div className="nav">
          <div className="left">
            <Link to="/" className="link">
              <h3> Food</h3>
            </Link>
          </div>
          <div className="search-nav">
            <form onSubmit={handleSubmit}>
              <input onChange={(e) => setInput(e.target.value)} type="text" />
            </form>
          </div>
          <div className="right">
            <Link to={`/categroy/europen`} className="link">
              <div>Dutsch</div>
            </Link>
            <Link to={`/categroy/indian`} className="link">
              <div>Indian</div>
            </Link>
            <Link to={`/categroy/chines`} className="link">
              <div>Chiness</div>
            </Link>
            <Link to={`/categroy/thai`} className="link">
              <div>Thai</div>
            </Link>
          </div>
        </div>

        {/* <button className="btn">
          <Link className="link" to="/nutrition-meal">
            Nutrition Meal
          </Link>
        </button> */}
      </div>
    </>
  );
};

export default NavBar;
