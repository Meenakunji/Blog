// import React, { useState } from "react";

// import { Link } from "react-router-dom";

// import "./Navbar.css"
// //import DummyDataComponent from './Dummy';

// const Navbar = ({ onSearchSubmit }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterType, setFilterType] = useState("title");

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleFilterChange = (e) => {
//     setFilterType(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();

//     //onSearchSubmit(searchQuery); not definr error
//     // Here you can perform the search action using the searchQuery
//     console.log("Searching for:", searchQuery);
//   };

//   const handleFilterSubmit = (e) => {
//     e.preventDefault();
//     //onFilterSubmit(filterType);
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/">
//         {" "}
//         <div className="logo">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/3959/3959420.png"
//             alt="Logo"
//           />
//         </div>
//       </Link>

//       <div className="navbar-right">
//         <ul>
//           <li>
//             <Link to="/signup">SignUp</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           {/* <li><button>SignUp</button></li> */}
//           {/* <li><Link to="/signup">SignUp</Link></li> */}

//           <li>
//             {/* <div className="filter-box">
//               <input type="text" placeholder="Filter" />
//               <button type="submit">Filter</button>
//             </div> */}

//             <form onSubmit={handleFilterSubmit}>
//               <div className="filter-box">
//                 <select value={filterType} onChange={handleFilterChange}>
//                   <option value="title">Title</option>
//                   <option value="author">Author</option>
//                   <option value="date">Date</option>
//                   <option value="likes">Number of Likes</option>
//                   <option value="comments">Number of Comments</option>
//                 </select>
//                 <button type="submit">Filter</button>
//               </div>
//             </form>
//           </li>
//           <li>
//             {/* <div className="search-box">
//               <input type="text" placeholder="Search" />
//               <button type="submit">Search</button>
//             </div> */}
//             <form onSubmit={handleSearchSubmit}>
//               <div className="search-box">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   value={searchQuery}
//                   onChange={handleSearchChange}
//                 />
//                 <button type="submit">Search</button>
//               </div>
//             </form>
//           </li>
//           <li>
//             <button>
//               <img
//                 src="https://png.pngitem.com/pimgs/s/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png"
//                 alt="Profile"
//               />
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css";

const Navbar = ({setData}) => {
  const isLoggedIn = window.localStorage.getItem('login_username_email'); 
  const handleLogout =()=>{
    window.localStorage.removeItem('login_username_email');
    window.localStorage.removeItem('login_password');
    window.location.reload();
  }

  const  handleFilter= ()=>{
    // filetr author , likes , title  

    //sort by 
    // setData(prev=>{
    //   // prev ==data 
    //   const newArray = prev.sort((a,b)=>{
    //     // filetrValue - interger, string , date 
    //     const filterValue = 1;
    //     if( typeof filterValue === Number ){
    //       //sort inter login 
    //       return  b.likes - a.likes;
    //     }else if (typeof filterValue === String){
    //       //sort string logic 
    //     }
    //   });
    //   return newArray;
    // })

    setData((prev)=>{
      const filterValue = 'jim';
      return prev.filter((post)=> post.author === filterValue);
    })
  }

  const handleSearch = ()=>{
    const searchValue = 'searchValue';
    setData((prev)=>{
      return prev.filter((post)=> post.title.include(searchValue));
    })
  }
  return (
    <nav className="navbar">
       <Link to="/"> <div className="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/3959/3959420.png" alt="Logo" />
      </div></Link>
     
      <div className="navbar-right">
        <ul>
          {
            isLoggedIn ? <span onClick={handleLogout}>Logout</span> : <><li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/login">Login</Link></li></>
          }

          <li>
          <div className="filter-box">
              <input type="text" placeholder="Filter" />
              <button onClick={handleFilter}>Filter</button>
            </div>
          </li>
          { isLoggedIn ? (<>
            <li>
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <button onClick = {handleSearch}>Search</button>
            </div>
          </li>
            <li><button><img src="https://png.pngitem.com/pimgs/s/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png" alt="Profile" /></button></li>
          </>) : null}
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
