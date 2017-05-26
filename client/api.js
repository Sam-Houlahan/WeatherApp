import request from 'superagent'

module.exports = {
  getWeather,
  get3DForecast,
  getVideo
}

function getVideo (query) {
  return gapi.client.init({
    'apiKey': 'AIzaSyAcCIkK_3m1zTuiSizzxgwTmzEeEV7V4Vw',
    // clientId and scope are optional if auth is not required.
    'clientId': 'weather-app-168801',
    'scope': ''
  }).then(function () {
    // 3. Initialize and make the API request.
    return gapi.client.request({
      'path': 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query
    })
  }).then(function (response) {
    return response.result
  }, function (reason) {
    console.log('Error: ' + reason.result.error.message)
  })
}

function getWeather (city, callback) {
  request.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=fc04e2e516b1de4348fb0323f981a1d9`)
  .end((err, res) => {
    if (err) {
      callback(err.message)
      return
    }
    const weather = res.body
    callback(null, weather)
  })
}

function get3DForecast (city, callback) {
  request
  .get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=4&APPID=fc04e2e516b1de4348fb0323f981a1d9`)
  .set('Accept', 'application/json')
  .end((err, res) => {
    if (err) {
      callback(err.message)
      return
    }
    const weather = res.body
    callback(null, weather)
  })
}
function getYouTube () {
  request
  .get('http://')
}
