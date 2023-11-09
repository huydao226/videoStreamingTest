import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";

const Signup = () => {
  const initialFormDetails = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  };

  const currentLocation = useNavigate();
  const { signUpUser, isAuthorized } = useAuth();
  const [formDetails, setFormDetails] = useState(initialFormDetails);
  const [showConfirmPasswordIcon, setConfirmPasswordIcon] = useState(false);
  const [showPasswordIcon, setPasswordIcon] = useState(false);

  const formDetailsHandler = () => {
    signUpUser(
      formDetails.email,
      formDetails.firstName,
      formDetails.lastName,
      formDetails.password,
      formDetails.confirmPassword
    );
  };

  if (isAuthorized) {
    currentLocation("/");
  }

  return (
    <div className="authentication-page">
      <article className="container-form form-login">
        <div className="authentication-container-form">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <h3 className="h3">SIGN UP</h3>
            <label htmlFor="email" className="input-label">
              Email:
            </label>
            <div className="input-icon">
            <input
              className="input"
              autoComplete="off"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email ID"
              value={formDetails?.email}
              onChange={(e) =>
                setFormDetails((details) => ({
                  ...details,
                  email: e.target.value,
                }))
              }
              required
            />
            </div>
            <label htmlFor="fname" className="input-label">
              First Name:
            </label>
            <div className="input-icon">
            <input
              className="input"
              autoComplete="off"
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your first name"
              value={formDetails?.firstName}
              onChange={(e) =>
                setFormDetails((details) => ({
                  ...details,
                  firstName: e.target.value,
                }))
              }
              required
            />
            </div>

            <label htmlFor="lname" className="input-label">
              Last Name:
            </label>
            <div className="input-icon">
            <input
              className="input"
              autoComplete="off"
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter your last name"
              value={formDetails?.lastName}
              onChange={(e) =>
                setFormDetails((details) => ({
                  ...details,
                  lastName: e.target.value,
                }))
              }
              required
            />
            </div>

            <div className="input-with-icon">

              <label htmlFor="password" className="input-label">
                Password:
              </label>
              <div className="input-icon">
              <input
                className="input"
                type={showPasswordIcon ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter password"
                value={formDetails?.password}
                onChange={(e) =>
                  setFormDetails((details) => ({
                    ...details,
                    password: e.target.value,
                  }))
                }
                required
              />
              </div>
              <button
                className="btn-link material-icons icons-right"
                onClick={() =>
                  setPasswordIcon((showPasswordIcon) => !showPasswordIcon)
                }
              >
                {showPasswordIcon ? "visibility" : "visibility_off"}
              </button>
            </div>

            <div className="input-with-icon">

              <label htmlFor="confirm-password" className="input-label">
                Confirm Password:
              </label>
              <div className="input-icon">
              <input
                className="input"
                type={showConfirmPasswordIcon ? "text" : "password"}
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm your password"
                value={formDetails?.confirmPassword}
                onChange={(e) =>
                  setFormDetails((details) => ({
                    ...details,
                    confirmPassword: e.target.value,
                  }))
                }
                required
              />
              </div>
              <button
                className="btn-link material-icons icons-right"
                onClick={() =>
                  setConfirmPasswordIcon(
                    (showConfirmPasswordIcon) => !showConfirmPasswordIcon
                  )
                }
              >
                {showConfirmPasswordIcon ? "visibility" : "visibility_off"}
              </button>
            </div>

            <div className="container-checkbox">
            <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="tnc"
                  id="tnc"
                />
                <label htmlFor="tnc">
                  <span className="checkbox-detail">I accept all terms and conditions</span>
                </label>
              </div>
            </div>

            <button className="btn btn-primary-solid" onClick={formDetailsHandler}>
              Create New Account
            </button>
            <Link className="btn-link" to="/login">
              Already have an account &gt;
            </Link>
          </form>
        </div>
      </article>
    </div>
  );
};

export { Signup };