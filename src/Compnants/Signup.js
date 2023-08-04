// Signup.js
import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server)
    const isEmailTaken = localStorage.getItem("user_email");

    const isUserNameTaken = localStorage.getItem("user_name");

    if(isEmailTaken || isUserNameTaken){
        //
    }else{
      localStorage.setItem("user_email", email);
      localStorage.setItem("user_name", username);

    }
    
    console.log('Form submitted:', localStorage.getItem("user_email"), localStorage.getItem("user_name"));
  };

  return (
    <div className='signupcl'>
    {/* <div className='signupbox'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <button type="submit">Create Account</button>
        </div>
      </form>
    </div> */}
    <form onSubmit={handleSubmit}>
    
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label"  >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} required />
    
  </div>

   
  <div className="mb-3">
    <label htmlFor="username" className="form-label"  value={username} onChange={(e) => setUsername(e.target.value)} required>Username</label>
    <input type="text" className="form-control" id="username"  value={username} onChange={(e) => setUsername(e.target.value)} required/>
  </div>


  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Create Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} required/>
  </div>
  
  <button type="submit" className="btn btn-primary">SignUp</button>
</form>
    </div>
  );
};

export default Signup;


