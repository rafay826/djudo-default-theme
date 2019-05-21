import React from 'react';

const RegistrationForm = ({onChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <label>Username</label>
        <input data-key="username" type="text" onChange={onChange} />
      </fieldset>

      <fieldset>
        <label>Email</label>
        <input data-key="email" type="text" onChange={onChange} />
      </fieldset>

      <fieldset>
        <label>Password</label>
        <input data-key="password1" type="password" onChange={onChange} />
      </fieldset>

      <fieldset>
        <label>Confirm Password</label>
        <input data-key="password2" type="password" onChange={onChange} />
      </fieldset>

      <button className="waves-effect waves-light btn" type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
