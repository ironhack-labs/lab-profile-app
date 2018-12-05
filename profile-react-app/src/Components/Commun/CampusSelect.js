import React from 'react';

const CampusSelect = ({title, name, handleChange, campus}) => (

  <div className='form-field'>
    <label className='label'>
      {title}
      <select className='input'
        value={campus}
        name={name}
        onChange={handleChange}>
          <option value=''></option>
          <option value='Madrid'>Madrid</option>
          <option value='Barcelona'>Barcelona</option>
          <option value='Miami'>Miami</option>
          <option value='Paris'>Paris</option>
          <option value='Berlin'>Berlin</option>
          <option value='Amsterdam'>Amsterdam</option>
          <option value='México'>México</option>
          <option value='Sao Paulo'>Sao Paulo</option>
        </select>     
    </label>
  </div>
)

export default CampusSelect;