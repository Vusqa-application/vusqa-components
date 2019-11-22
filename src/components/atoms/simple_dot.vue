<template>
  <div class="simple-dot">
    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.5" cx="2.5" cy="2.5" r="2.5" fill="#A9A9A9"/>
    </svg>
  </div>
  
</template>

<script>
export default {
  
}
</script>

<style lang="scss">

.simple-dot {
  display: flex;
  width: 5px;
  height: 5px;
  cursor: pointer;
  &:active {
    circle {
      fill: $VusqaBrandPrimary;
    }
  }

}

</style>