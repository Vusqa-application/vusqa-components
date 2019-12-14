<template>
<div class="ads-grid"
  :style="{
    'width': width,
    'height': height
  }"
>
  <h1 class="heading font--base-semibold">
    {{heading}}
  </h1>

  <div class="ad-row">
    <img class="first-image" :src="items[0].image_link" />
    <div class="ads-next-to-first">
      <img class="image" :src="items[1].image_link" />
      <img class="image" :src="items[2].image_link" />
    </div>
  </div>

  <div class="ad-row">
    <img class="image" :src="items[3].image_link" />
    <img class="image" :src="items[4].image_link" />
    <img class="image" :src="items[5].image_link" />
  </div>
  
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
    heading: {
      type: String,
      default: 'Shopping'
    },
    items: {
      type: Array,
      default: () => [
        {id: 1, image_link: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'},
        {id: 2, image_link: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'},
        {id: 3, image_link: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'},
        {id: 4, image_link: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'},
        {id: 5, image_link: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'},
        {id: 6, image_link: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.ads-grid {
  .heading {
    color: black;
    margin-bottom: 8px;
  }

  .ad-row {
    display: flex;
        
    .first-image {
      width: 221px;
      height: 222px;
      margin-bottom: 8px;
      margin-right: 8px;
      border-radius: 4px;
      
    }
    
    // 이거 고쳐야 하네

    .image {
      width: 107px;
      height: 107px;
      margin-bottom: 8px;
      margin-right: 8px;
      border-radius: 4px;
    }

    .ads-next-to-first {
      
      :last-child {
        margin-top: 0px;
        margin-bottom: 4px;
      }

      
    }

    
  }

  
}
</style>