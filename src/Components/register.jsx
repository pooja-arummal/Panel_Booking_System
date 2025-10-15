import "./register.css"
// const Registration = () =>{
//     return(

//         <div className="registeration-form">
//             <div className="box">
//                 <form className="regform">
//                     <label className="RollNo" for="rno">Enter you RollNo</label>
//                     <input id="rno" className="deptbox" placeholder="CSE"></input>
//                     <label className="Name" for = "name">Enter you Name</label>
//                     <input id="name" className="namebox" placeholder="Full Name"/>
//                     <label className="Email" for = "mail">Enter your College mail id</label>
//                     <input id = "mail" className="mailbox" placeholder="abc@nitc.ac.in"/>
//                     <label className="password" for = "passwrd">Enter your Password</label>
//                     <input id= "passwrd" className="passwrdbox" placeholder="" type="password"/>
//                     <label className="Department" for="department">Enter you Department</label>
//                     <input id="department" className="deptbox" placeholder="CSE"></input>
                    
//                 </form>

//             </div>
//         </div>
//     ) 
// }

const Registration = () => {
  return (

    <div className="registration-form">
      <div className="box">
        <div  className="form-heading">
            <h2>Registration Form</h2>
        </div>
        <form className="regform">
          <label className="RollNo" htmlFor="rno">
            Enter your Roll No
          </label>
          <input id="rno" className="rollbox" placeholder="e.g., CSE001" />

          <label className="Name" htmlFor="name">
            Enter your Name
          </label>
          <input id="name" className="namebox" placeholder="Full Name" />

          <label className="Email" htmlFor="mail">
            Enter your College Mail ID
          </label>
          <input
            id="mail"
            className="mailbox"
            placeholder="abc@nitc.ac.in"
            type="email"
          />

          <label className="Password" htmlFor="passwrd">
            Enter your Password
          </label>
          <input
            id="passwrd"
            className="passwrdbox"
            type="password"
            placeholder="Enter Password"
          />

          <label className="Department" htmlFor="department">
            Enter your Department
          </label>
          <input id="department" className="deptbox" placeholder="CSE" />

          <label className="GuideName" htmlFor="guideName">
            Enter your Guide Name
          </label>
          <input
            id="guideName"
            className="guidebox"
            placeholder="Dr. ABC"
          />

          <label className="GuideMail" htmlFor="guideMail">
            Enter your Guide Mail ID
          </label>
          <input
            id="guideMail"
            className="guidemailbox"
            placeholder="guide@nitc.ac.in"
            type="email"
          />

          <button type="submit" className="submit-btn">
            Complete Registration
          </button>

          <div className="signin-option">
            Already Registered?{" "}
            <a href="/signin" className="signin-link">
              Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};




export default Registration