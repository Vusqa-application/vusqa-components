<template>
  <a href="#" @click.prevent="clickEvent" class="simple-dot">
    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.5" cx="2.5" cy="2.5" r="2.5" fill="#A9A9A9"/>
    </svg>
  </a>
  
</template>

<script>
export default {
  props: {
    clickEvent: {
      type: Function,
      default: () => {
      }
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

.simple-dot {
  display: flex;
  width: 5px;
  height: 5px;
  cursor: pointer;
  &:focus {
    circle {
      fill: $VusqaBrandPrimary;
    }
  }

}

</style>