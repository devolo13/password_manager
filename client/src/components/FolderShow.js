import React from 'react'

const PasswordShow = () => {
  return (
    <div className='d-flex'>
      {/* hamburger button? */}
      <div className="col-8 p-3 ps-5">
        <h1>Folder Name:</h1>
        <div className="ms-5">
          <div className="d-flex align-items-center my-3">
            <p className='centerText'>Password 1</p>
            <button className="btn btn-primary mx-3">copy</button>
            <button className="btn btn-primary">view</button>
            <button className="btn btn-warning ms-3">edit</button>
          </div>
          <div className="d-flex align-items-center my-3">
            <p className='centerText'>Password 2</p>
            <button className="btn btn-primary mx-3">copy</button>
            <button className="btn btn-primary">view</button>
            <button className="btn btn-warning ms-3">edit</button>
          </div>
          <div className="d-flex align-items-center my-3">
            <p className='centerText'>Password 3</p>
            <button className="btn btn-primary mx-3">copy</button>
            <button className="btn btn-primary">view</button>
            <button className="btn btn-warning ms-3">edit</button>
          </div>
        </div>
      </div>
      <div className="col-4 bg-secondary rounded p-3 tall">
        <h2>New Password:</h2>
        <form action="" className='ps-2'>
          <label htmlFor="username">Username:</label>
          <input type="text" name='username' id="username" className='form-control mt-1 mb-2' />
          <label htmlFor="password">Password:</label>
          <div className='d-flex'>
            <input type="password" name="password" id="password" className='form-control mt-1 mb-2' />
            <button className="btn btn-primary ms-2 mt-1 mb-2">generate</button>
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
            <button className="btn btn-primary mt-2">Save New Password</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PasswordShow