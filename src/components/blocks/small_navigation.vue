<template>
<div class="small-navigation"
  :style="{
    'width': width,
    'height': height
  }"
>
  <ul class="navigation-list"
    
  >
    <li 
      v-for="item in items"
      :key="item.id"
      class="list-item font--link"
    >
      <p>{{item.text}}</p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '336px'
    },
    height: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => [
        {id:0, text: 'World'},
        {id:1, text: 'Chile'},
        {id:2, text: 'Sports'},
        {id:3, text: 'Tech'},
        {id:4, text: 'Money'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.small-navigation {
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba($LightGrey, 0.4);
  border-bottom: 1px solid rgba($LightGrey, 0.4);

  .navigation-list {
    display: flex;

    :not(:last-child) {
      margin-right: 30px;
    }

    .list-item {
      cursor: pointer;
      
      color: $LightGrey;
      font-weight: bold;
      &:hover {
        color: $VusqaBrandSecondary;
      }

      p {
        position: relative;
        padding: 8px 0px 13px 0px;
        left: -7px;
        &:hover {
          padding: 8px 0px 11px 0px;
          color: $VusqaBrandSecondary;
          border-bottom: 2px solid $VusqaBrandSecondary;
        }
      }

      
    }
  }
  
}
</style>