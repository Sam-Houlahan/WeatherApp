import React from 'react'

function Landing(props){
        
        return (
            <div className="landingpage row"> 
                <h1 className = "text-center ">Get Ready To Enjoy the Best Weather App Ever Created</h1>  
              <button className="btn btn-lg btn-primary" onClick={props.removeLanding}>Go to App</button> 
            </div>
        )
}

export default Landing