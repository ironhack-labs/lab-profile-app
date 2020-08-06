import React, { useState } from 'react';
import AuthService from '../../auth/authService';

function UploadFoto(props) {
  const [showUpload, setShowUpload] = useState(false);
  const [file, setFile] = useState(null);
  const handleUpload = () => {
    setShowUpload(true);
  };
  const handleChange = (event) => {
    setFile(event.target.files[0]);
    const service = new AuthService();

    service.upload(event.target.files[0]).then((response) => {
      props.onUpload(response);
      setShowUpload(false);
    });
  };
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //       const service = new AuthService();

  //       service.upload(file).then((response) => {
  //           props.onUpload(response);
  //           setShowUpload(false);
  //       });
  //   };
  if (!showUpload) {
    return (
      <div>
        <button className="link-reverse" onClick={handleUpload}>
          Edit foto
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <div className="form-field">
          <label htmlFor="photo">Photo file</label>
          <input
            type="file"
            name="file"
            id="file"
            placeholder="Photo file"
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

export default UploadFoto;
