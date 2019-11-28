<template>
<button class="view-more-button">
  <span class="button-text">{{button_text}}</span>
  <img class="button-icon" src="@/assets/svg/arrow-down.svg" />
</button>
</template>

<script>
export default {
  props: {
    button_text: {
      type: String,
      default: 'View more comment'
    }
  }
}
</script>

<style lang="scss" scoped>
.view-more-button {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px;

  background: $Light;
  border: 1px solid $LightGrey;
  border-radius: 4px;

  .button-text {
    margin-right: 4px;
  }

  .button-icon {

  }
}
</style>