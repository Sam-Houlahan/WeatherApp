import React from 'react'
import Landing from './Landing'
import Header from './Header'
import Results from './Results'
import Search from './Search'
import {getWeather, get3DForecast, getVideo } from '../api'

class App extends React.Component{

  componentDidMount() {
    gapi.load('client', () => {
      this.setState({ apiLoaded: true })
    })
  }

  constructor(props){
    super(props)

    this.state = {
      videoLink: '',
      apiLoaded: false,
      displayHeader: false,
      displayLanding: true,
      displayResult: false,
      displaySearch: false,
  weatherToday:{
                  city: '',
                  temp: 0,
                  description: '',
                  icon: '',
                  low: 0,
                  high: 0
                },
  futureWeather: [{
                  date:0,
                  temp: 0,
                  description: '',
                  icon: '',
                  low: 0,
                  high: 0
        },
      {
                  date:0,
                  temp: 0,
                  description: '',
                  icon: '',
                  low: 0,
                  high: 0
    },
      {
                  date:0,
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

  removeLanding(){
    this.setState({
      displayHeader: true,
      displayLanding: false,
      displaySearch: true
    })
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

      })
      const query = res.weather[0].description
      if (this.state.apiLoaded) {
        getVideo(query, (videoLink) => {
          this.setState({
            videoLink: videoLink.items[0].id.videoId
          })
              console.log(videoLink.items[0].id.videoId)
        })
      }

    })
   get3DForecast(searchterm,(err,res) => {
      if (err) return err
      this.setState({
     futureWeather: [{
                  date: res.list[1].dt,
                  temp: res.list[1].temp.day,
                  description: res.list[1].weather[0].description,
                  icon: res.list[1].weather[0].icon,
                  low: res.list[1].temp.min,
                  high: res.list[1].temp.max
      },
        {
                  date: res.list[2].dt,
                  temp: res.list[2].temp.day,
                  description: res.list[2].weather[0].description,
                  icon: res.list[2].weather[0].icon,
                  low: res.list[2].temp.min,
                  high: res.list[2].temp.max
      },
        {
                  date: res.list[3].dt,
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
        {this.state.displayLanding&& <Landing removeLanding={this.removeLanding.bind(this)} />}
        {this.state.displayHeader&& <Header />}
        {this.state.displaySearch&& <Search handleSearchClick={this.handleSearchClick}/>}
        {this.state.displayResult&& <Results weatherToday={this.state.weatherToday}futureWeather={this.state.futureWeather}/>}

      </div>
    )
  }
}

export default App


// {this.state.videoLink && <iframe width="560" height="315" src=`https://www.youtube.com/embed/${this.state.videoLink}` frameborder="0" allowfullscreen></iframe>
// }
