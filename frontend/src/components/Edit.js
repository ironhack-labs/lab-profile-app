import React from 'react'

const Edit = ({handle, file, inputs, edit}) => {
    return (
        <div>
        <form className="edit" onSubmit={edit}>
                <h2>Edit</h2>
                <p>Email</p>
                <input onChange={handle} value={inputs.email} type="email" placeholder="email" name="email"></input>
                <p>Campus</p>
                <input onChange={handle} value={inputs.campus} type="text" placeholder="campus" name="campus"></input>
                <p>Course</p>
                <input onChange={handle} value={inputs.course} type="text" placeholder="course" name="course"></input>
                <br/><input type="file" name="image" onChange={file}/>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default Edit
