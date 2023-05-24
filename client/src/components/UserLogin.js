import React from 'react';
import {useNavigate} from 'react-router-dom';

const UserLogin = () => {
  const Navigate = useNavigate();
  const handleLogin = () => {
    Navigate('/folders/all');
  }
  const handleRegister = () => {
    Navigate('/folders/all');
  }
  return (
    <div className='mt-3'>
      <h1 className='text-center'>Welcome to the Password Manager</h1>
      <div className='d-flex justify-content-evenly mt-4 container'>
        <div className="col-5">
          <h4 className='mb-4'>Register:</h4>
          <form action="">
            <label htmlFor="register_username">Username:</label>
            <input type="text" name="register_username" id="register_username" className='form-control mt-2 mb-3' />
            <label htmlFor="register_password">Password:</label>
            <input type="password" name="register_password" id="register_password" className='form-control mt-2 mb-3' />
            <label htmlFor="register_confirm_password">Confirm Password:</label>
            <input type="password" name="register_confirm_password" id="register_confirm_password" className='form-control mt-2 mb-3' />
            <div className='justify-content-end d-flex'>
              <button className="btn btn-primary" onClick={e => handleRegister()}>Register</button>
            </div>
          </form>
        </div>
        <div className="col-5">
          <h4 className='mb-4'>Login:</h4>
          <form action="">
            <label htmlFor="login_username">Username:</label>
            <input type="text" name="login_username" id="login_username" className='form-control mt-2 mb-3' />
            <label htmlFor="login_password">Password:</label>
            <input type="password" name="login_password" id="login_password" className='form-control mt-2 mb-3' />
            <div className='justify-content-end d-flex'>
              <button className="btn btn-primary" onClick={e => handleLogin()}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserLogin