<template>
<button href="#" class="opinion-button"
  :style="{
    'width': width,
    'height': height
  }"
>
  <img class="opinion-icon" :src="require(`@/assets/svg/${opinion}.svg`)">
  <span class="opinion-count">{{opinion_count}}</span>
</button>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '41px'
    },
    height: {
      type: String,
      default: '18px'
    },
    opinion: {
      type: String,
      default: 'comment'
    },
    opinion_count: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.opinion-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $Light;
  /* Text / Light Grey */
  border: 0.5px solid $LightGrey;
  border-radius: 4px;

  .opinion-icon {
    margin-right: 4px;
  }
  .opinion-count {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 8px;
    line-height: 120%;
  }
}
</style>