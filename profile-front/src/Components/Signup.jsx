import React, { useContext } from 'react';            // Import React as for any React-Component, as well as the hook useContext
import { signup } from '../Services/auth-service';    // Import Signup service to call our API for signing up
import { AppContext } from '../AppContext';           // Import the context to use it within this component
import { useHistory } from 'react-router-dom'         // Import useHistory hook to allow quicker navigation
import { useForm } from '../Hooks/useForm';           // Import our custom hook for form data manipulation

const Signup = () => {

  const { setUser } = useContext(AppContext);         // Destructure setUser in order to modify the user state in our context later
  const { push } = useHistory();                      // Destructure push from useHistory
  const [form, handleInputs] = useForm();             // Destructure form state and handleInputs from our useForm custom hook

  // Function to handle the submit action of the form, while passing all the required data through the form state
  const handleSubmit = (event) => {
    event.preventDefault();   // Prevent the page refresh after hitting submit button
    const { username, password, campus, course } = form; // Destructure the input values from the form state

    // Call to our signup API service, sending the required data
    signup(username, password, campus, course)
    .then( res => {

      const { user, token } = res.data; // Destructure the user and token sent by the API
      // Store the user and token as variables inside localStorage. This will allow easy authentication in our app
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);

      setUser(user);      // Change our user state, setting the user data in our context as the one provided from our API
      
      push('/profile');   // "Redirect" our users to their profile "page"

    })
    .catch( err => console.log(err) );

  };

  return(
    <div className="section">
      <div className="columns">
        <div className="column">
          <h1>Signup</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input className="input" type="text" name="username" value={form.username} onChange={handleInputs} />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="password" name="password" value={form.password} onChange={handleInputs} />
              </div>
            </div>
            <div className="field">
              <label className="label">Campus</label>
              <div className="control">
                <input className="input" type="text" name="campus" value={form.campus} onChange={handleInputs} />
              </div>
            </div>
            <div className="field">
              <label className="label">Course</label>
              <div className="control">
                <input className="input" type="text" name="course" value={form.course} onChange={handleInputs} />
              </div>
            </div>
            <button type="submit" className="button is-primary">Create the Account</button>
          </form>
        </div>
        <div className="column">
          <h2>Hello!!!</h2>
          <h3>Welcome to IronProfile</h3>
          <p>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</p>
        </div>
      </div>
    </div>
  )
};

export default Signup;