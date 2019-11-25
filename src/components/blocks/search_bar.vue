<template>
  <div class="search-bar">
    <input 
      type="text" 
      class="search-input"
      :placeholder="placeholder"
      :style="{'width': width, 'height': height}"  
    >
    <img src="@/assets/svg/icon-search.svg" class="search-icon" />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '520px'
    },
    height: {
      type: String,
      default: '43px'
    },
    placeholder: {
      type: String,
      default: 'Search...'
    }
  }
}
</script>

<style lang="scss" scoped>

.search-bar {
  display: inline-block;
  position: relative;

  .search-input {
    background: $Light;
    border: 2px solid $VusqaBrandPrimary;
    border-radius: 30px;
    padding: 8px 16px 8px 24px;
    &:focus {
      outline: none;
    }
  }

  .search-icon {
    cursor: pointer;
    position: absolute;
    top: 14px;
    right: 16px;
  }

}

</style>