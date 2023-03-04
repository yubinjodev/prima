export const Register = () => {
  return (
    <form className="register">
      <h3>REGISTRATION</h3>
      <label>E-MAIL *</label>
      <input type="email" placeholder="enter your e-mail address ..." />
      <label>PASSWORD *</label>
      <input type="password" />
      <label>CHECK PASSWORD *</label>
      <input type="password" />

      <div className="radio">
        <input type="radio" checked readOnly />
        <label >Private Person</label>
      </div>

      <label>FIRSTNAME *</label>
      <input />
      <label>LASTNAME *</label>
      <input />
      <label>COUNTRY *</label>
      <select>
        <option>Australia</option>
        <option>Canada</option>
        <option>South Korea</option>
        <option>United States</option>
      </select>
      <label>CELL PHONE *</label>
      <input />
      <label>PHONE</label>
      <input />

      <div className="password-help">
        <div>Are you already registered but forgot your password?</div>
        <div>Have you shopped with us before?</div>
        <div>
          In that event you only have to log in using your e-mail
          addressandpassword. Did you forget your password or you do not know
          it?
        </div>
      </div>
      <div className="register-button">
        <button>REGISTRATION</button>
      </div>
    </form>
  );
};
