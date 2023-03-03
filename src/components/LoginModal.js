export const LoginModal = () => {
  return (
    <div className="login-modal">
      <form className="modal">
        <div className="input">
          <label>YOUR EMAIL</label>
          <input type="email" />
          <label>YOUR PASSWORD</label>
          <input type="password" />
        </div>
        <div className="login-button">
            <button>LOG IN</button>
        </div>

        <div className="help-user">
            <div>New user registration</div>
            <div>Forget your password?</div>
        </div>
      </form>
    </div>
  );
};
