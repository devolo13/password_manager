import React from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordShow = () => {
  const Navigate = useNavigate();

  const edit = (passwordId) => {
    // passwordId will be database id of the password
    Navigate('/password/1/edit');
  }

  const showHide = (e) => {
    if (document.getElementById("password").innerText == '****************'){
      document.getElementById('password').innerText = '9pckO*q_Ifv6ow^';
    } else {
      document.getElementById('password').innerText = '****************';
    }
  }

  return (
    <div className='container mt-5'>
      <div className="col-8">
        <h2>Amazon:</h2>
        <div className='mt-5 ms-5'>
          <div className="d-flex my-3">
            <p className='centerText col-2'>Website:</p>
            <p className='centerText col-7'>amazon.com</p>
            <div className="d-flex justify-content-end wide">
              <button className="btn btn-primary">copy</button>
            </div>
          </div>
          <div className="d-flex my-3">
            <p className='centerText col-2'>Username:</p>
            <p className='centerText col-7'>devolo13@gmail.com</p>
            <div className="d-flex justify-content-end wide">
              <button className="btn btn-primary">copy</button>
            </div>
          </div>
          <div className="d-flex my-3">
            <p className='centerText col-2'>Password:</p>
            <p className='centerText col-6' id="password">****************</p>
            <div className="d-flex justify-content-end wide">
              <button className="btn btn-primary me-2" onClick={e => showHide()}>show/hide</button>
              <button className="btn btn-primary">copy</button>
            </div>
          </div>
          <div className="my-3">
            <p className='centerText'>Backup 2FA Codes:</p>
            <p className='outline py-2 px-3'>
              A113 L337 N00B 5138008
            </p>
          </div>
          <div className="my-3">
            <p className='centerText'>Notes:</p>
            <p className='outline py-2 px-3'>
              Please help. <br/> Bezos took my rent.
            </p>
          </div>
          <div className="d-flex justify-content-end">
          <button className="btn btn-warning me-2" onClick={e => edit()}>edit</button>
          <button className="btn btn-danger">delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordShow