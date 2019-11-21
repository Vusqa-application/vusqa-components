<template>
  <div 
    class="indicator-box" 
    :style="{'width': width, 'height': height}"
  >
    <span 
      class="indicator"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '20px'
    },
    height: {
      type: String,
      default: '20px'
    }
  }
}
</script>

<style lang="scss">
.indicator-box {
  background: $VusqaBrandPrimary;
  opacity: 0.8;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  .indicator {
    color: white;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 800;
    font-size: 10px;
    line-height: 100%;
  }
}
</style>