import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export const LoginModal = () => {
  const { showLoginModal, setshowLoginModal  } = useContext(LoginContext);
  return (
    <>
      {showLoginModal ? (
        <div className="modal-container">
          <form className="modal">
            <div className="exit-button">
              <button
                onClick={() => {
                  setshowLoginModal(false);
                }}
              >
                X
              </button>
            </div>

            <div className="input-modal">
              <label>YOUR EMAIL</label>
              <input type="email" />
              <label>YOUR PASSWORD</label>
              <input type="password" />
            </div>

            <div className="login-button">
              <button>LOG IN</button>
            </div>

            <div className="buttons-modal">
              <div>New user registration</div>
              <div>Forget your password?</div>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
