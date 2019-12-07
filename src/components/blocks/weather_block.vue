<template>
<div class="weather-block"
  :style="{
    'width': width,
    'height': height
  }"
>
  <div class="block-header">
    <h1 class="heading">{{block_heading}}</h1>
    <divider></divider>
  </div>
  <div class="block-body">
    <div class="weather-info">
      <div class="weather-text">
        <h1 class="weather">
          {{weather_text}}
        </h1>
        <h2 class="temperature">
          {{temperature}}
        </h2>
      </div>
      <img src="@/assets/svg/sun.svg" class="weather-icon">
    </div>
  </div>
</div>
</template>

<script>

export default {
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    block_heading: {
      type: String,
      default: 'Santiago'
    },
    weather_text: {
      type: String,
      default: 'Sunny'
    },
    temperature: {
      type: String,
      default: '32 C'
    },
  },
  components: {
    Divider: () => import('@/components/atoms/divider.vue')
  }
}
</script>

<style lang="scss" scoped>

.weather-block {

}
  
</style>