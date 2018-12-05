import React from 'react';

const CourseSelect = ({title, name, handleChange, course}) => (

  <div className='form-field'>
    <label className='label'>
      {title}
      <select className='input'
        value={course}
        name={name}
        onChange={handleChange}>
          <option value=''></option>
          <option value='WebDev'>WebDev</option>
          <option value='UX/UI'>UX/UI</option>
          <option value='Data Analytics'>Data Analytics</option>
        </select>     
    </label>
  </div>
)
export default CourseSelect;