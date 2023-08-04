
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Signup.css"
const Signup = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', username:'' })
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData(p => {
      return { ...p, [e.target.name]: e.target.value }
    })
  }
  const handleLogin = ()=>{
    navigate('/login');
  }
  const handleCreate = ()=>{
    const isEmailTaken = localStorage.getItem("user_email") === formData.email;
    const isUserNameTaken = localStorage.getItem("user_name") === formData.username;
    if(isEmailTaken || isUserNameTaken){
        setError({message: 'Email or Username Taken'})
    }else{
      localStorage.setItem("user_email", formData.email);
      localStorage.setItem("user_name", formData.username);
      localStorage.setItem("password", formData.password);
      navigate('/login',{state: {email: formData.email,username:formData.username, password: formData.password}});

    }
  }
  return (
    <div className="signup">
      <div className="signup__container">
        <h2 className='signup__signin'>Sign up</h2>
        <div className='signup__label'>Email</div>
        <input autoComplete='off' type="email"  name='email' value={formData.email} onChange={handleChange} />
        <div className='signup__label'>Username</div>
        <input autoComplete='off' type="text"  name='username' value={formData.username} onChange={handleChange} />
        <div className='signup_label signup_password'>
          <span>Password</span>
          <span onClick={()=>setShow(p=>!p)}>{show ? 'hide': 'show'}</span>
        </div>
          <input autoComplete='off' type={show ? 'text' : 'password'}  name='password' value={formData.password} onChange={handleChange} />
          <button onClick={handleCreate} disabled={loading}>{loading? 'creating' : 'create'} account</button>
          <div className="signup__error">{error && error.message }</div>
        <button onClick={handleLogin} disabled={loading}>Signin</button>
      </div>
    </div>
  );
}

export default Signup;