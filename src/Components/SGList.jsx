import "./table.css"
const Student = () =>{
    const data = [{Guide_name: "Manjush k", Student:["Pooja A","Fathima Fiya K M"]},
                  {Guide_name:"Arun Raj Kumar",Student:["Tilok Doley"]},
                  {Guide_name:"JP", Student:["Soorya"]}]
        return(
            <>
                <div className="table">
                   { data.map(dat => (

                    <div className="guide"> 
                        
                        <div className="col1">{dat.Guide_name}</div>
                        <div className="col2">{dat.Student}</div>
                    </div>


                )
                
                )}
                </div>
                
            

            <div className="table">{
                data.map(dat => (

                    <div className="guide">
                        <li>{dat.Student}</li>
                    </div>

                    
                )
                
                )
            }</div> 
                
            </>
        )
}

export default Student


