import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContextInfo } from '../hooks/context';
import {uploadFunction} from '../services/auth'

function UploadProfilePic() {
  //TODO bien por acá pero aun no le dedico el tiempo a ver que el boton que triggerea handleUploadPhoto se
  //comporte correctamente cuando ya existe una foto del usuario.


  const [status, setStatus] = useState('Select a file');
  const { user, addProfilePic } = useContextInfo();
  const [image, setImage] = useState(user.image || null);
  

  async function handleSubmit(e){
    e.preventDefault();
    console.log("handleSubmit")
    addProfilePic(image);
    console.log("image: ", image)
    const response = await uploadFunction({image})
    console.log("response: ", response)

  
  };

  const handleUploadPhoto = async ({ target: { files } }) => {
    console.log(files[0]);
    setStatus('Loading...');
    const cloudinaryAPI =
      'https://api.cloudinary.com/v1_1/maufigueroapa/image/upload';

    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'lab-profile-app');

    const {
      data: { secure_url },
    } = await axios.post(cloudinaryAPI, data);
    console.log(secure_url);
    setImage(secure_url);
    setStatus('Add picture');
  };

  return (
    <div>
      {image ? (
        <img style={{ width: '70px' }} src={image} alt="" />
      ) : (
        <img
          style={{ width: '70px' }}
          src="https://librenoticias.com/wp-content/uploads/2020/08/default-user-image.png"
          alt=""
        />
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="profile-pic"
          id="profile-pic"
          onChange={handleUploadPhoto}
        />
        <button type="submit" disabled={!image}>
          {status}
        </button>
      </form>
    </div>
  );
}

export default UploadProfilePic;
