import React from 'react'

export default (props) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const today = new Date()
  const todayDay = days[today.getDay()]
  let iconURL = `http://openweathermap.org/img/w/${props.weatherToday.icon}.png`
  return (
    <div className='results'>
      <h2>{props.weatherToday.city}</h2>
      <div className ="row">
      <h2>Today's Weather</h2>

      <div className="col-md-4">
      </div>
    
      <div className='today col-md-4'>
       <h4> {todayDay}</h4>
            <div className="temperature">
                <p>
                {Math.ceil(props.weatherToday.temp)}℃
                </p>
            </div>

            <div className="description">
                <p>
                    {props.weatherToday.description}
                </p>
            </div>

            <div className="icon"><p><img src={iconURL} /></p> </div>
           

            <div className="templow">
                <p>
                   <strong> Min:</strong> {Math.ceil(props.weatherToday.low)}℃
                </p>
            </div>

            <div className="temphigh">
            <p>
                <strong>Max:</strong> {Math.ceil(props.weatherToday.high)}℃
            </p>
            </div>

            </div>
     
       <div className="col-md-4">
            </div>
      </div>

     <div className="future">
      <h2>3 Day Forecast</h2>
        <span>
         {props.futureWeather.map((day, key) => {
         const a = new Date(day.date * 1000)
         const dayofWeek = days[a.getDay()]
         let dayIcon = `http://openweathermap.org/img/w/${day.icon}.png`
         return (
           
                <p className = "futurep">
                    <h4>{dayofWeek}</h4><br />
                    {Math.ceil(day.temp)}℃<br />
                    {day.description} <br />
                    <img src={dayIcon} /><br/>
                    <strong>Low:</strong> {Math.ceil(day.low)}℃<br />
                    <strong>High:</strong> {Math.ceil(day.high)}℃
                </p>
         
       )
    })}
        </span>
      </div>
    </div>
  )
}
