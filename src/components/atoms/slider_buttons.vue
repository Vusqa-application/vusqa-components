<template>
  <div class="slider-buttons">
    <div class="slider-button">
      <svg class="slider-button-arrow left" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.8" d="M5 1L1 5L5 9" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="slider-button">
      <svg class="slider-button-arrow right" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.8" d="M5 1L1 5L5 9" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.slider-buttons {

  display: flex;
  width: 50px;
  justify-content: space-between;

  .slider-button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;

    &:hover {

      background-color: rgba($VusqaBrandPrimary, 0.2);

      .slider-button-arrow {
        path {
          stroke: $PrimaryActionColor;
        }
      }
    }
    .left {
      right: 1px;
      position: relative;
    }
    
    .right {
      left: 1px;
      position: relative;
      transform: rotate(180deg);
    }
  }
}

</style>
