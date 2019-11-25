<template>
  <div 
    :class="{'indicator-box': true, 'primary': is_primary, 'secondary': !is_primary}"
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
    },
    is_primary: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.indicator-box {
  opacity: 0.8;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  .indicator {
    color: $Light;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 800;
    font-size: 10px;
    line-height: 100%;
  }

}
.primary {
  background-color: $VusqaBrandPrimary ;
}

.secondary {
  background-color: $LightGrey;
}
</style>