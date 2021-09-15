const PatientEditForm = () => {

  return (
    <>
      <div className="col-md-5 border-right">
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select your nutritionniste</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="row mt-2">
              <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-input-display" placeholder="first name" value=""/></div>
              <div className="col-md-6"><label className="labels">Last Name</label><input type="text" className="form-input-display" value="" placeholder="surname"/></div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12"><label className="labels">E-mail</label><input type="text" className="form-input-display" placeholder="enter email id" value=""/></div>
            <div className="col-md-12"><label className="labels">New Password</label><input type="text" className="form-input-display" placeholder="enter address line 2" value=""/></div>
            <div className="col-md-12"><label className="labels">Confirm Password</label><input type="text" className="form-input-display" placeholder="enter address line 2" value=""/></div>
          </div>
          <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
        </div>
      </div>
    </>
  )
}

export default PatientEditForm;