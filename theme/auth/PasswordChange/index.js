import React from 'react';

const PasswordChange = ({ passwordChangeSuccess, handleSubmit, setOldPassword, setNewPassword, setConfirmPassword }) => {
  return (
    !passwordChangeSuccess ?
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>old password</label>
          <input type="password" onChange={setOldPassword} />
        </fieldset>

        <fieldset>
          <label>new password</label>
          <input type="password" onChange={setNewPassword} />
        </fieldset>

        <fieldset>
          <label>confirm password</label>
          <input type="password" onChange={setConfirmPassword} />
        </fieldset>

        <button className="waves-effect waves-light btn" type="submit">reset</button>
      </form> :
      <p>your password has been successfully changed.</p>
  );
};

export default PasswordChange
