import React from 'react'

const PasswordShow = () => {
  return (
    <div className='container mt-5'>
      <div className="col-8">
        <h2>Password Name:</h2>
        <div className='mt-5 ms-5'>
          <div className="d-flex my-3">
            <p className='centerText col-2'>Website:</p>
            <p className='centerText col-7'>website name</p>
            <div className="d-flex justify-content-end wide">
              <button className="btn btn-primary">copy</button>
            </div>
          </div>
          <div className="d-flex my-3">
            <p className='centerText col-2'>Username:</p>
            <p className='centerText col-7'>username</p>
            <div className="d-flex justify-content-end wide">
              <button className="btn btn-primary">copy</button>
            </div>
          </div>
          <div className="d-flex my-3">
            <p className='centerText col-2'>Password:</p>
            <p className='centerText col-6'>password</p>
            <div className="d-flex justify-content-end wide">
              <button className="btn btn-primary me-2">show/hide</button>
              <button className="btn btn-primary">copy</button>
            </div>
          </div>
          <div className="my-3">
            <p className='centerText'>Backup 2FA Codes:</p>
            <p className='outline py-2 px-3'>
              user's backup codes
            </p>
          </div>
          <div className="my-3">
            <p className='centerText'>Notes:</p>
            <p className='outline py-2 px-3'>
              user's notes
            </p>
          </div>
          <div className="d-flex justify-content-end">
          <button className="btn btn-warning me-2">edit</button>
          <button className="btn btn-danger">delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordShow