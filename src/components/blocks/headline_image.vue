<template>
  <div class="headline-image"
    :style="{
      'width': block_width,
      'height': block_height,
      'background': `url(${image_src})`,
      'backgroundRepeat': 'no-repeat',
      'backgroundSize': 'cover',
      'borderRadius': block_border_radius
    }"
  >
    <div class="button">
      <slot name="button"></slot>
    </div>
    <h1 class="text font--f4">{{text}}</h1>
  </div>

</template>

<script>
export default {
  props: {
    block_width: {
      type: String,
      default: '520px'
    },
    block_height: {
      type: String,
      default: '140px'
    },
    block_border_radius: {
      type: String,
      default: '4px'
    },
    image_src: {
      type: String,
      default: 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
    },
    text: {
      type: String,
      default: 'Today’s Report: incendios forestales se mantienen activos en el país'
    },
    text_align: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.headline-image {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  .button {
    padding-left: 16px;
  }

  .text {
    margin: 0;
    padding: 0px 16px 8px 16px;
    color: white;
  }
}
</style>