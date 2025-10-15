import "./gregister.css"

const GuideRegistration = () => {
  return (
    <div className="registration-form">
      <div className="box">
        <h2 className="form-heading">Guide Registration Form</h2>

        <form className="regform">
          <label htmlFor="guideName" className="label">
            Guide Name
          </label>
          <input
            id="guideName"
            className="input-box"
            placeholder="Dr. John Doe"
            type="text"
          />

          <label htmlFor="guideMail" className="label">
            Mail ID
          </label>
          <input
            id="guideMail"
            className="input-box"
            placeholder="guide@nitc.ac.in"
            type="email"
          />

          <label htmlFor="department" className="label">
            Department
          </label>
          <input
            id="department"
            className="input-box"
            placeholder="e.g., CSE"
            type="text"
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            className="input-box"
            placeholder="Enter password"
            type="password"
          />

          <label htmlFor="panelNumber" className="label">
            Panel Number
          </label>
          <input
            id="panelNumber"
            className="input-box"
            placeholder="e.g., Panel-3"
            type="text"
          />

          <button type="submit" className="submit-btn">
            Complete Registration
          </button>
        
          <p className="signin-text">
            Already registered?
            <a href="/login" className="signin-link">
                {" "}Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default GuideRegistration;