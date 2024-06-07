import React from 'react';
import { Link, json, useNavigate } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className="main">
        <div className="nav">
          <div className="left">
            <h3>Recipe</h3>
          </div>
          <div className="search-nav">
            <input type="text" />
          </div>
          <div className="right">
            <div>Europen</div>
            <div>Indian</div>
            <div>Chiness</div>
            <div>Thai</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
