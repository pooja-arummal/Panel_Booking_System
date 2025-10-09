
import "./dash.css";
import cutepresenter from "./cute-presenter.jpg"

const DashBoard = () =>{
    return(
    <div className="dashboard">
        <div className="heading">Welcome to Panel Hub

        </div>
      
        <div className="dash">DashBoard</div>
        <div className="content">
          <div className="block">
        <div className="options">Available slot</div>
        <div className="options">Pending Presentation</div>
         <div className="options">Project Panel Group</div>
        <div className="options">Guide Student list</div>
        <div className="options">Available Venues</div>
        </div>

        <div className="Image">
          {/* <img src = ""> */}
          <img src = {cutepresenter}/>
        </div>
       
        </div>


        
      {/* <Button/> */}
            
    </div>
    )
}

export default DashBoard


