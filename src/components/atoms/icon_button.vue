<template>
<a class="icon-button">
  <img class="icon" :src="require(`@/assets/svg/${icon}.svg`)">
</a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'exit'
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-button {

  border-radius: 50%;
  padding: 9px 14px 9px 14px;
  &:hover {
    background-color: rgba($PrimaryActionColor,0.2)
  }

  .icon {
    cursor: pointer;
  }
}
</style>