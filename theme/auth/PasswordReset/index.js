import React from 'react';

const PasswordReset = ({ response, handleSubmit, setEmail }) => {
  return (
    !response ?
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input placeholder="email" type="text" onChange={e => setEmail(e.target.value)} />
        </fieldset>

        <button className="waves-effect waves-light btn" type="submit">reset password</button>
      </form> :

      <div>
        <p>An email has been sent with reset instructions.</p>
      </div>
  );
};

export default PasswordReset
