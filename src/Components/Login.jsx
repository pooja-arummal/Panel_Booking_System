import "./Login.css";
// const Login = () => {
//     return(

//         <div className="loginpage">
//             <div className="box"> 
//                 <div><h2>Login Page</h2></div>
//             <form className="login-form">
//                 <label className="parent label" for="name">Username/Email</label>
//                 <input id="name" className="parent input" placeholder="pooja_arummal@nitc.ac.in"/>
//                 <label for="passwd" className="parent label">Password</label>
//                 <input id="passwd" className="parent input" placeholder="" type="password" />
//             </form>
//         </div>
//         </div>
        
//     )
// }

const Login = () => {
  return (
    <div className="loginpage">
      <div className="box">
        <h2 className="login-heading">Login Here</h2>

        <form className="login-form">
          <label htmlFor="name" className="parent label">
            Username / Email
          </label>
          <input
            id="name"
            className="parent input"
            placeholder="pooja_arummal@nitc.ac.in"
            type="email"
          />

          <label htmlFor="passwd" className="parent label">
            Password
          </label>
          <input
            id="passwd"
            className="parent input"
            placeholder="Enter password"
            type="password"
          />

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="register-text">
            Not registered?{" "}
            <a href="/register" className="register-link">
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};


export default Login