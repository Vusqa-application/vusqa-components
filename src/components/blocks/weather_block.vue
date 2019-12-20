<template>
<div class="weather-block"
  :style="{
    'width': width,
    'height': height
  }"
>
  <div class="block-header">
    <h1 class="heading font--base-semibold">{{weather_data.city}}</h1>
    <img class="weather-arrow" src="@/assets/svg/weather-arrow.svg" />
  </div>
  <divider></divider>
  <div class="block-body">
    <div class="weather-info">
      <div class="weather-text">
        <h1 class="weather">
          {{weather_data.description}}
        </h1>
        <h2 class="temperature">
          {{weather_data.temp}} &#8451;
        </h2>
      </div>
      <img :src="require(`@/assets/svg/weather-icons/${weather_data.iconId}.png`)" class="weather-icon">
    </div>
    <div class="weekly-weather">
      <div 
        class="weekday"
        v-for="forecast_item in weather_data.forecast_list"
        :key="forecast_item.day"
      >
        <h1 class="day font--base-semibold">{{forecast_item.day}}</h1>
        <img :src="require(`@/assets/svg/weather-icons/${forecast_item.iconId}.png`)" class="day-weather-icon">
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data () {
    return {
      clicked: 0,
      weather_data: {
        temp: 0,
        description: 'searching',
        iconId: 'default',
        city: 'searching',
        country: 'searching',
        forecast_list: [
          { day: 'Today', iconId: 'default', temp: 32 },
          { day: 'Sat', iconId: 'default', temp: 31 },
          { day: 'Sun', iconId: 'default', temp: 30 },
          { day: 'Mon', iconId: 'default', temp: 30 },
          { day: 'Tue', iconId: 'default', temp: 32 },
        ]
      }
    }
  },
  mounted() {

    // -------------------- 현재 기온 DISPLAY
    const KELVIN = 273;
    const api_key = '6e535f2ab4a4197c95d9ee154d8e907b';

    const getCurrentWeather = (latitude, longitude) => {
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`;

      fetch(api).then(res => {
        // 아 이 안에 있는 동작도 비동기인가
        const data = res.json();
        return data;
        
      }).then(data => {
        
        this.weather_data.temp = Math.floor(data.main.temp - KELVIN);
        this.weather_data.description = data.weather[0].description;
        this.weather_data.iconId = data.weather[0].icon;
        this.weather_data.city = data.name;
        this.weather_data.country = data.sys.country;
        
      });
    }


    // ---------------------- 5일치 FORECASE

    // api.openweathermap.org/data/2.5/forecast?lat=35&lon=139


    const fiveDaysForecast = (latitude, longitude) => {
      const KELVIN = 273;
      const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${api_key}`;
    
      fetch(api).then(res => {

        const data = res.json();
        return data;
      }).then(data => {

        const d = new Date();
        const today = d.getDate();

        const week_list = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

        const result_list = [];
        
        for (let i=2; i < data.list.length; i += 8) {

          let display_day = '';

          if (i === 2) {
            display_day = 'Today';
          } else {
            display_day = week_list[new Date(data.list[i].dt_txt.slice(0,10)).getDay()];
          }

          result_list.push({day: display_day, iconId: data.list[i].weather[0].icon, temp: Math.floor(data.list[i].main.temp - KELVIN), date: data.list[i].dt_txt });
        }

        this.weather_data.forecast_list = result_list;
        
      })
    }
    

    // ---------------------- 실행

    const setPosition = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log('position! : ', latitude, longitude)

      getCurrentWeather(latitude, longitude);
      fiveDaysForecast(latitude, longitude)
    }

    

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition( setPosition, err => console.log(err) );
    } else {
      console.log('no geolocation! Browser does not support it');
    }
  },
  computed: {
    // weather () {
    //   return this.weekly_weather_list[this.clicked].weather;
    // },
    // temperature () {
    //   return this.weekly_weather_list[this.clicked].temperature;
    // }
  },
  props: {
    width: {
      type: String,
      default: '336px'
    },
    height: {
      type: String,
      default: ''
    }
  },
  components: {
    Divider: () => import('@/components/atoms/divider.vue')
  }
}
</script>

<style lang="scss" scoped>

.weather-block {
  padding: 8px 16px 8px 16px;
  border: 1px solid rgba(169, 169, 169, 0.4);
  border-radius: 4px;

  .block-header {
    display: flex;
    justify-content: space-between;

    .heading {
      margin-bottom: 8px;
    }
    .weather-arrow {

    }
  }

  .block-body {
    margin-top: 16px;

    .weather-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;

      .weather-text {
        
        .weather {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: #FDD020;;
        }

        .temperature {
          font-family: Lato;
          font-style: normal;
          font-weight: normal;
          font-size: 32px;
          line-height: 150%;
          color: $DarkGrey;
        }
      }
      
      .weather-icon {
        width: 65px;
        height: 65px;
      }
    }
    .weekly-weather {
      display: flex;
      width: inherit;
      justify-content: space-between;
      margin-bottom: 10px;

      .weekday {

        display: flex;
        flex-direction: column;
        align-items: center;

        .day {
          color: $LightGrey;
          font-weight: normal;
          margin-bottom: 4px;
        }

        .day-weather-icon {
          width: 40px;
          height: 40px;
        }

      }
    }
  }

  
}
  
</style>