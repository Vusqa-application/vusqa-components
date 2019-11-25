<template>
  <div class="navigation-item-box">
    <span class="navigation-item">
      <slot>1 ~ 20</slot>
    </span>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

.navigation-item-box {
  width: 52px;
  height: 22px;
  cursor: pointer;
  border-radius: 4px;
  // padding: 4px 12px 4px 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  .navigation-item {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    color: $LightGrey;
  }

  &:hover {
    background-color: rgba($LightGrey, 0.2);
    .navigation-item {
      color: $DarkGrey;
    }
  }

  
}

</style>