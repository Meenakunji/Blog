import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import DummyDataComponent from './Dummy';



const Navbar = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

   
    // Here you can perform the search action using the searchQuery
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="navbar">
       <Link to="/"> <div className="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/3959/3959420.png" alt="Logo" />
      </div></Link>
     
      <div className="navbar-right">
        <ul>
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/login">Login</Link></li>
          {/* <li><button>SignUp</button></li> */}
          {/* <li><Link to="/signup">SignUp</Link></li> */}

          <li>
          <div className="filter-box">
              <input type="text" placeholder="Filter" />
              <button type="submit">Filter</button>
            </div>
          </li>
          <li>
            {/* <div className="search-box">
              <input type="text" placeholder="Search" />
              <button type="submit">Search</button>
            </div> */}
             <form onSubmit={handleSearchSubmit}>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
               
              </div>
            </form>
          </li>
          <li><button><img src="https://png.pngitem.com/pimgs/s/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png" alt="Profile" /></button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
