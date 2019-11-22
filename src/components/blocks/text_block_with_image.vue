<template>
  <div class="text-block-with-image"
    :style="{'width': width }"
  >
    <div 
      class="image"
      :style="{
        'width': image_width,
        'height': image_height,
        'border-radius': image_border_radius,
        'backgroundImage': `url(${image_src})`
      }"
    >
      <!-- Indicator -->
      <div class="top-left-indicator">
        <slot name="top-left-indicator"></slot>
      </div>
      <div class="bottom-right-indicator">
        <slot name="bottom-right-indicator"></slot>
      </div>
    </div>
    <div class="text">
      <h1 class="font--link"
        :style="{'text-align': text_align}"
      >
        {{text}}
      </h1>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '160px'
    },
    image_width: {
      type: String,
      default: '160px'
    },
    image_height: {
      type: String,
      default: '96px'
    },
    image_border_radius: {
      type: String,
      default: '4px'
    },
    image_src: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'Ebrio y con licencia suspendida: conductor...'
    },
    text_align: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">

.text-block-with-image {
  position: relative;
  .image {
    border-radius: 4px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .text {
    padding: 0px 4px 0px 4px;
  }

  .top-left-indicator {
    position: absolute;
    top: 4px;
    left: 4px;
  }

  .bottom-right-indicator {
    position: absolute;
    bottom: 4px;
    right: 4px;
  }

}

</style>