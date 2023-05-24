import React from 'react'

const FolderEdit = () => {
  return (
    <div className='container mt-5'>
      <div className='d-flex'>
        <div className="col-5">
          <input type="text" value="Folder Name" className="form-control"/>
        </div>
        <button className="btn btn-primary mx-3">Save</button>
        <button className="btn btn-danger">Delete</button>
      </div>
      <div className="d-flex mt-3 justify-content-evenly">
        <div className="col-5">
          <div className="d-flex my-3">
            <p className='col-4'>password 1</p>
            <button className="btn btn-danger">remove</button>
          </div>
          <div className="d-flex my-3">
            <p className='col-4'>password 2</p>
            <button className="btn btn-danger">remove</button>
          </div>
          <div className="d-flex my-3">
            <p className='col-4'>password 3</p>
            <button className="btn btn-danger">remove</button>
          </div>
          <div className="d-flex my-3">
            <p className='col-4'>password 4</p>
            <button className="btn btn-danger">remove</button>
          </div>
          <div className="d-flex my-3">
            <p className='col-4'>password 5</p>
            <button className="btn btn-danger">remove</button>
          </div>
        </div>
        <div className="col-5">
          <div className="d-flex my-3">
            <p className='col-4'>password 6</p>
            <button className="btn btn-primary">add</button>
          </div>
          <div className="d-flex my-3">
            <p className='col-4'>password 7</p>
            <button className="btn btn-primary">add</button>
          </div>
          <div className="d-flex my-3">
            <p className='col-4'>password 8</p>
            <button className="btn btn-primary">add</button>
          </div>
          <div className="d-flex my-3">
            <p className='col-4'>password 9</p>
            <button className="btn btn-primary">add</button>
          </div>
          <div className="d-flex my-3">
            <p className='col-4'>password 10</p>
            <button className="btn btn-primary">add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FolderEdit