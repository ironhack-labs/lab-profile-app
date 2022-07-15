import axios from 'axios';
import React, { useState } from 'react';
const API_URL = 'http://localhost:5005';

const PhotoUpload = () => {
  const [image, setImage] = useState('');

  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/api/users/upload`, {
        image,
      });
      console.log(data);
    } catch (error) {}
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image">Image: </label>
        <input type="file" name="image" id="image" onChange={handleImage} />
      </div>
      <button>Upload</button>
    </form>
  );
};
export default PhotoUpload;
