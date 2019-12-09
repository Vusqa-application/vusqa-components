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
      <img :src="require(`@/assets/svg/weather/sunny.svg`)" class="weather-icon">
    </div>
    <div class="weekly-weather">
      <div class="weekday">
        <h1 class="day font--base-semibold">Today</h1>
        <img :src="require(`@/assets/svg/weather/${weekly_weather_list[0].weather}.svg`)" class="day-weather-icon">
      </div>
      <div class="weekday">
        <h1 class="day font--base-semibold">{{weekly_weather_list[1].day}}</h1>
        <img :src="require(`@/assets/svg/weather/${weekly_weather_list[1].weather}.svg`)" class="day-weather-icon">
      </div>
      <div class="weekday">
        <h1 class="day font--base-semibold">{{weekly_weather_list[2].day}}</h1>
        <img :src="require(`@/assets/svg/weather/${weekly_weather_list[2].weather}.svg`)" class="day-weather-icon">
      </div>
      <div class="weekday">
        <h1 class="day font--base-semibold">{{weekly_weather_list[3].day}}</h1>
        <img :src="require(`@/assets/svg/weather/${weekly_weather_list[3].weather}.svg`)" class="day-weather-icon">
      </div>
      <div class="weekday">
        <h1 class="day font--base-semibold">{{weekly_weather_list[4].day}}</h1>
        <img :src="require(`@/assets/svg/weather/${weekly_weather_list[4].weather}.svg`)" class="day-weather-icon">
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
      weather_data: {}
    }
  },
  mounted() {
    const KELVIN = 273;
    const api_key = '6e535f2ab4a4197c95d9ee154d8e907b';

    const getWeather = (latitude, longitude) => {
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`;

      fetch(api).then(res => {
        // 아 이 안에 있는 동작도 비동기인가
        const data = res.json();
        return data;
        
      }).then(data => {
        this.weather_data = {
          temp: Math.floor(data.main.temp - KELVIN),
          description: data.weather[0].description,
          iconId: data.weather[0].icon,
          city: data.name,
          country: data.sys.country
        }
      }).then(
        result => console.log(this.weather_data)
      );
    }

    const setPosition = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log('position! : ', latitude, longitude)

      getWeather(latitude, longitude);
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition( setPosition, err => console.log(err) );
    } else {
      alert('no geolocation! Browser does not support it');
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
    },
    weekly_weather_list: {
      type: Array,
      default: () => [
        { day: 'Fri', weather: 'sunny', temperature: 32 },
        { day: 'Sat', weather: 'cloudy', temperature: 31 },
        { day: 'Sun', weather: 'cloudy-rainy', temperature: 30 },
        { day: 'Mon', weather: 'cloudy-rainy', temperature: 30 },
        { day: 'Tue', weather: 'sunny', temperature: 32 },
      ]
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

        .day {
          color: $LightGrey;
          font-weight: normal;
          margin-bottom: 4px;
        }

        .day-weather-icon {

        }

      }
    }
  }

  
}
  
</style>