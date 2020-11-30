import react from 'react'
import { useContextInfo } from '../context'

function Profile() {
    const {user} = useContextInfo()
    return (
        <div>
            {user ? (<div>
                <h1>Profile</h1>
            <h2>Name: {user.name}</h2>
            <h2>Campus: {user.campus}</h2>
            <h2>Course: {user.course}</h2>
                </div> )
            : <p>You are not logged in</p>}
            
        </div>
    )
}

export default Profile