<template>
<div class="ad-block"
  :style="{
    'width': width,
    'height': height,
    'backgroundImage': `url('${image_src}')`
  }"
>
</div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '340px'
    },
    height: {
      type: String,
      default: '120px'
    },
    image_src: {
      type: String,
      default: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
    }
  }
}
</script>

<style lang="scss" scoped>

.ad-block {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
}

</style>