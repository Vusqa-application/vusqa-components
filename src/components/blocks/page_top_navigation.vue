<template>
<div class="page-top-navigation"
  
>
  <div class="navigation-wrapper"
    :style="{
      'width': width,
      'height': height
    }"
  >
    <ul class="navigation-list">
      <li class="navigation-item"
        v-for="item in items"
        :key="item.id"
      >
        <a class="navigation-link font--base-semibold" :href="item.link">{{item.text}}</a>
      </li>
    </ul>
    <div class="right-item">
      <slot name="right-item"></slot>
    </div>
  </div>
  
</div>
    
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '1066px'
    },
    height: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => [
        { id: 0, text: 'Home', link: '#'},
        { id: 1, text: 'Chile', link: '#'},
        { id: 2, text: 'World', link: '#'},
        { id: 3, text: 'Sports', link: '#'},
        { id: 4, text: 'Politics', link: '#'},
        { id: 5, text: 'Finance', link: '#'},
        { id: 6, text: 'IT', link: '#'},

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  
.page-top-navigation {
  border-top: 1px solid rgba($LightGrey, 0.4);
  border-bottom: 1px solid rgba($LightGrey, 0.4);

  .navigation-wrapper {
    margin: auto;
    display: flex;
    justify-content: space-between;

    .navigation-list{
      display: flex;

      > :not(:last-child) {
        margin-right: 36px;
      }

      .navigation-item {
        list-style: none;
        padding: 16px 0px 16px 0px;

        .navigation-link {
          text-decoration: none;
          color: black;
        }

        &:hover {
          padding: 14px 0px 14px 0px;
          // border 자체가 height를 차지하는군...
          border-bottom: 2px solid $VusqaBrandSecondary;

          .navigation-link {
            color: $VusqaBrandSecondary;
          }
        }
      }
    }

    .right-item {
      padding: 16px 0px 16px 0px;
    }
  }

  

  
}

</style>