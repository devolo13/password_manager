import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordShow = () => {
  const Navigate = useNavigate();
  const [password, setPassword] = useState('');

  const view = (passwordId) => {
    // passwordId will be database id of the password
    passwordId = 1;
    Navigate(`/password/${passwordId}`);
  }

  const copy = (passwordId) => {
    // passwordId will be database id of the password
    // let text = document.getElementById(passwordId).innerText;
    let text = "password123";
    navigator.clipboard.writeText(text);
  }

  const edit = (passwordId) => {
    // passwordId will be database id of the password
    passwordId = 1;
    Navigate(`/password/${passwordId}/edit`);
  }

  const generateNewPassword = (e) => {
    e.preventDefault();
    const length = 15;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    let newPassword = '';
    while (newPassword.length < length){
      newPassword += charset.charAt(Math.floor(Math.random()*charset.length));
    }
    document.getElementById('password').type = 'text';
    // uncomment next line if you want to copy the new password to the clipboard after creation
    // navigator.clipboard.writeText(newPassword);
    setPassword(newPassword);
  }

  // handleSave doesn't work yet
  const handleSave = (e) => {
    e.preventDefault();
    const folder = document.getElementById('folder').value;
    Navigate(`/folder/${folder}`);
  }

  return (
    <div className='d-flex'>
      {/* hamburger button? */}
      <div className="col-8 p-3 ps-5">
        <h1>All Passwords:</h1>
        <div className="ms-5">
          <div className="d-flex align-items-center my-3">
            {/* id needs to be database id of the password */}
            {/* all onclick functions need updated with the proper ids */}
            <p id="password1" className="col-2 centerText">Amazon</p>
            <button className="btn btn-primary mx-3" onClick={e => copy('password1')}>copy</button>
            <button className="btn btn-primary" onClick={e => view('password1')}>view</button>
            <button className="btn btn-warning ms-3" onClick={e => edit('password1')}>edit</button>
          </div>
          <div className="d-flex align-items-center my-3">
            <p id="password2" className="col-2 centerText">Etsy</p>
            <button className="btn btn-primary mx-3" onClick={e => copy('password2')}>copy</button>
            <button className="btn btn-primary" onClick={e => view('password2')}>view</button>
            <button className="btn btn-warning ms-3" onClick={e => edit('password2')}>edit</button>
          </div>
          <div className="d-flex align-items-center my-3">
            <p id="password3" className="col-2 centerText">LTT Store</p>
            <button className="btn btn-primary mx-3" onClick={e => copy('password3')}>copy</button>
            <button className="btn btn-primary" onClick={e => view('password3')}>view</button>
            <button className="btn btn-warning ms-3" onClick={e => edit('password3')}>edit</button>
          </div>
        </div>
      </div>
      <div className="col-4 bg-secondary rounded p-3 tall">
        <h2>New Password:</h2>
        <form action="" className='ps-2'>
          <label htmlFor="name">Password Label:</label>
          <input type="text" name='name' id="name" className='form-control mt-1 mb-2' />
          <label htmlFor="username">Username:</label>
          <input type="text" name='username' id="username" className='form-control mt-1 mb-2' />
          <label htmlFor="password">Password:</label>
          <div className='d-flex'>
            <input type="password" name="password" id="password" className='form-control mt-1 mb-2' onChange={e => setPassword(e.target.value)} value={password}/>
            <button className="btn btn-primary ms-2 mt-1 mb-2" onClick={e => generateNewPassword(e)}>generate</button>
          </div>
          <label htmlFor="username">Website:</label>
          <input type="text" name='website' id="website" className='form-control mt-1 mb-2' />
          <label htmlFor="folder">Folder:</label>
          <select name="folder" id="folder" className='form-control mt-1 mb-2'>
            <option value="none">none</option>
            <option value="gaming">gaming</option>
            <option value="banking">banking</option>
          </select>
          <label htmlFor="codes">Backup 2FA Codes:</label>
          <textarea name="codes" id="codes" cols="30" rows="4" className='form-control mt-1 mb-2'></textarea>
          <label htmlFor="notes">Notes:</label>
          <textarea name="notes" id="notes" cols="30" rows="4" className='form-control mt-1 mb-2'></textarea>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary mt-2" type="submit" onclick={e => handleSave(e)}>Save New Password</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PasswordShow