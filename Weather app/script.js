let submit = document.querySelector('button')
let city = document.querySelector('.cityname')
const apiKey = 'eba8fec5175e40cd8b6f53c923a9a182'
let temp = document.querySelector('.temp')
let desc = document.querySelector('.desc')
let icon = document.querySelector('.weatherimage')
let aqi = document.querySelector('.aqi')
let timezone = document.querySelector('.timezone')
let weatherstats = document.querySelector('.weatherimage')
function getcity() {

  submit.addEventListener('click', async event => {
    event.preventDefault()
    let cityname = document.querySelector('input').value
    cityname.toLowerCase()
    if (cityname) {
      try {
        console.log(cityname)
        await getweather(cityname)
      } catch (error) {
        console.log('error')
      }
    }
  })
}
getcity()
async function getweather(data) {
  try {
    const API = `https://api.weatherbit.io/v2.0/current?&city=${data}&key=${apiKey}&include=minutely`
    const getter = await fetch(API)
    const response = await getter.json()
    console.log(response)
    city.textContent = data
    const temperature = response.data[0].temp
    temp.innerHTML = `${temperature}°<sup class="deg text-m">c</sup>`;
    const cityy = response.data[0].city_name
    city.textContent = cityy
    const description = response.data[0].weather.description
    desc.textContent = description
    timezone.textContent = response.data[0].timezone
    const aqivalue = response.data[0].aqi
    aqi.textContent = `AQI ${aqivalue}`
    Aqihandler(aqivalue)
    console.group(description)
    changeicon()
    function changeicon() {
      if (description === "Clear sky") {
        weatherstats.src = '/Day 4/Weather app/images/sun.png'
      }
      if (description === "Few clouds" || description === "Scattered clouds" || description === 'Fog') {
        weatherstats.src = '/Day 4/Weather app/images/foggy.png'
      }
      if (description === "Broken clouds") {
        weatherstats.src = '/Day 4/Weather app/images/brokenclouds.png'
      }
      if (description === "Haze" || description === 'Smoke') {
        weatherstats.src = '/Day 4/Weather app/images/windy.gif'
      }
    }
    animations()

  } catch (error) {
    console.log('server side error')
  }

}
getweather('Miami')

function animations() {
  gsap.fromTo(temp, {
    opacity: 0,
  }, {
    opacity: 1,
    duration: 2
  })
  gsap.fromTo(desc, {
    opacity: 0,
  }, {
    opacity: 1,
    duration: 3
  })
  gsap.fromTo(icon, {
    opacity: 0,
    y: -100
  }, {
    y: 0,
    opacity: 1,
    duration: 2.5,
    scale: 1
  })
  gsap.fromTo(aqi, {
    opacity: 0,
  }, {
    opacity: 1,
    duration: 3
  })
  gsap.fromTo('.cityname', {
    opacity: 0,
  }, {
    opacity: 1,
    duration: 2
  })
  gsap.fromTo('.regiondiv', {
    opacity: 0,
  }, {
    opacity: 1,
    duration: 4
  })
}
function Aqihandler(aqivalue) {
  aqivalue = Number(aqivalue)
  if (aqivalue <= 51) {
    aqi.style.backgroundColor = '#86EFAC'
  }
  else if (aqivalue <= 75) {
    aqi.style.backgroundColor = 'orange'
  }
  else if (aqivalue <= 176) {
    aqi.style.backgroundColor = 'red'
  }
  else if (aqivalue <= 999) {
    aqi.style.backgroundColor = 'purple'
  }
}
