import React from 'react'
import 'bulma/css/bulma.css';

const SignupForm = ( ) => {
  return(
    <div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" name="username" type="text" placeholder="Username"/>
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password"/>
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="field has-addons">
        <div className="control is-expanded">
          <div className="select is-fullwidth">
            <select name="campus" id="campus">
              <option selected>Select type...</option>
              <option value="MADRID">Madrid</option>
              <option value="BARCELONA">Barcelona</option>
              <option value="MIAMI">Miami</option>
              <option value="PARIS">Paris</option>
              <option value="BERLIN">Berlin</option>
              <option value="AMSTERDAM">Amsterdam</option>
              <option value="MEXICO">México</option>
              <option value="SAO PAULO">Sao Paulo</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field has-addons">
        <div className="field-label is-normal">
        <label className="label">Course</label>
        </div>
        <div className="control is-expanded">
          <div className="select is-fullwidth">
            <select name="course" id="campus">
              <option selected>Select type...</option>
              <option value="WEB DEV">Web Development</option>
              <option value="UX-UI">UX/UI Design</option>
              <option value="DATA ANALYTICS">Data Analytics</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupForm;