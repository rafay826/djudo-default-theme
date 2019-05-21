import React from 'react';
import {NavLink} from 'react-router-dom';

const Login = ({handleSubmit, setUsername, setPassword}) => {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>username</label>
        <input type="text" onChange={setUsername} />
      </fieldset>

      <fieldset>
        <label>password</label>
        <input type="password" onChange={setPassword} />
      </fieldset>

      <button className="waves-effect waves-light btn" type="submit">login</button>
      <div><NavLink to="/reset-password">forgot password?</NavLink></div>
    </form>
  );
};

export default Login
