<template>
  <div class="text-block-with-image">
    <div class="image">
      <img :src="image_src" />
    </div>
    <div class="text">
      <h1 class="font--link">
        {{text}}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image_width: {
      type: String,
      default: '160px'
    },
    image_src: {
      type: String,
      default: '@/as/img/textblockwithimage.png'
    },
    text: {
      type: String,
      default: 'Ebrio y con licencia suspendida: conductor...'
    }
  }
}
</script>

<style lang="scss">

.text-block-with-image {

  .image {
    border-radius: 4px;
  }

}

</style>