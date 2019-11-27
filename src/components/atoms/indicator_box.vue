<template>
  <div 
    :class="{'indicator-box': true, 'primary': is_primary, 'secondary': !is_primary}"
    :style="{'width': width, 'height': height}"
  >
    <span 
      class="indicator"
      :style="{
        'fontSize': font_size,
        'fontWeight': font_weight,
        'lineHeight': line_height
      }"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script>
// 폰트를 더 자세히 제어할 수 있도록 해야겠다.

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
    },
    font_size: {
      type: String,
      default: '10px'
    },
    font_weight: {
      type: String,
      default: '800'
    },
    line_height: {
      type: String,
      default: '100%'
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
  }

}
.primary {
  background-color: $VusqaBrandPrimary ;
}

.secondary {
  background-color: $LightGrey;
}
</style>