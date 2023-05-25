import React from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordEdit = () => {
  const Navigate = useNavigate();

  const handleSave = () => {
    // needs to take the form and save the info in the database
    // then redirect to that password's folder
    let folder = document.getElementById('folder').value;
    if (folder == 'none'){
      folder = 'all';
    }
    Navigate(`/folders/${folder}`);
  }
  return (
    <div className='container my-5'>
      <div className="col-8">
        <h2>Password Name:</h2>
        <div className='mt-5 ms-5'>
          <div className="d-flex my-3">
            <label for="website" className='centerText col-2'>Website:</label>
            <input type="text" name="website" id="website" value="amazon.com" className='form-control' />
          </div>
          <div className="d-flex my-3">
            <label for="username" className='centerText col-2'>Username:</label>
            <input type="text" name="username" id="username" value="devolo13@gmail.com" className='form-control' />
          </div>
          <div className="d-flex my-3">
            <label for="password" className='centerText col-2'>Password:</label>
            <input type="password" name="password" id="password" value="****************" className='form-control' />
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
              A113 L337 N00B 5138008
            </textarea>
          </div>
          <div className="my-3">
          <label for="notes" className='mb-2'>Notes:</label>
            <textarea name="notes" id="notes" cols="30" rows="8" className='form-control'>
              Please help. Bezos took my rent.
            </textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary" onClick={e => handleSave()}>save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordEdit