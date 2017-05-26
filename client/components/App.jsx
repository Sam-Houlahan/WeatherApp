import React from 'react'

//import Header from './Header'
import Results from './Results'
import Search from './Search'
import {getWeather, get3DForecast } from '../api'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      displayHeader: true,
      displayLanding: true,
      displayResult: false,
      displaySearch: true,
  weatherToday:{
                  city: '',
                  temp: 0,
                  description: '',
                  icon: '',
                  low: 0,
                  high: 0
                },
  futureWeather: [{
                  temp: 0,
                  description: '',
                  icon: '',
                  low: 0,
                  high: 0
        },
      {
                  temp: 0,
                  description: '',
                  icon: '',
                  low: 0,
                  high: 0
    },
      {
                  temp: 0,
                  description: '',
                  icon: '',
                  low: 0,
                  high: 0
        }
      ]               
    }

    this.handleSearchClick = this.handleSearchClick.bind(this)
  }

  handleSearchClick(searchterm) {
    getWeather(searchterm,(err,res) => {
      if(err) return err
      this.setState({
        weatherToday: {
          city: res.name,
          temp: res.main.temp,
          description: res.weather[0].description,
          icon: res.weather[0].icon,
          low: res.main.temp_min,
          high: res.main.temp_max
        },
        displayResult: true,
        displayLanding: false,
      })

    })
   get3DForecast(searchterm,(err,res) => {
      if (err) return err
      this.setState({
     futureWeather: [{
                  temp: res.list[1].temp.day,
                  description: res.list[1].weather[0].description,
                  icon: res.list[1].weather[0].icon,
                  low: res.list[1].temp.min,
                  high: res.list[1].temp.max
      },
        {
                  temp: res.list[2].temp.day,
                  description: res.list[2].weather[0].description,
                  icon: res.list[2].weather[0].icon,
                  low: res.list[2].temp.min,
                  high: res.list[2].temp.max
      },
        {
                  temp: res.list[3].temp.day,
                  description: res.list[3].weather[0].description,
                  icon: res.list[3].weather[0].icon,
                  low: res.list[3].temp.min,
                  high: res.list[3].temp.max
          }
        ]                     
      })
   })
  }



  render(){
    return (
      <div className="MainApp">
        {this.state.displaySearch&& <Search handleSearchClick={this.handleSearchClick}/>}
        {this.state.displayResult&& <Results weatherToday={this.state.weatherToday}futureWeather={this.state.futureWeather}/>}
      </div>
    )
  }
}

export default App
