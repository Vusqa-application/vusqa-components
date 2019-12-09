<template>
<button class="basic-button">
  <slot>Click</slot>
</button>
</template>

<script>
export default {
  props: {
    click_event: {
      type: Function,
      default: () => {

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.basic-button {
  cursor: pointer;
  background: #2E9E4C;
  border-radius: 4px;
  padding: 8px 32px 8px 32px;
  color: $Light;
  width: 119px;
  height: 42px;
  outline: none;
  border: none;

  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
}
</style>