import React from 'react'

const PasswordEdit = () => {
  return (
    <div className='container my-5'>
      <div className="col-8">
        <h2>Password Name:</h2>
        <div className='mt-5 ms-5'>
          <div className="d-flex my-3">
            <label for="website" className='centerText col-2'>Website:</label>
            <input type="text" name="website" id="website" value="website" className='form-control' />
          </div>
          <div className="d-flex my-3">
            <label for="username" className='centerText col-2'>Username:</label>
            <input type="text" name="username" id="username" value="username" className='form-control' />
          </div>
          <div className="d-flex my-3">
            <label for="password" className='centerText col-2'>Password:</label>
            <input type="password" name="password" id="password" value="password" className='form-control' />
            <button className="btn btn-primary ms-2">Generate</button>
          </div>
          <div className='d-flex my-3'>
            <label htmlFor="folder" className='col-2'>Folder:</label>
            <select name="folder" id="folder" className='form-control'>
            <option value="none">none</option>
            <option value="banking">banking</option>
            <option value="gaming">gaming</option>
            </select>
          </div>
          <div className="my-3">
            <label for="codes" className='mb-2'>Backup 2FA Codes:</label>
            <textarea name="codes" id="codes" cols="30" rows="8" className='form-control'>
              user's backup codes
            </textarea>
          </div>
          <div className="my-3">
          <label for="notes" className='mb-2'>Notes:</label>
            <textarea name="notes" id="notes" cols="30" rows="8" className='form-control'>
              user's notes
            </textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary">save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordEdit