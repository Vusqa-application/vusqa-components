<template>
  <div class="section-navigation"
    :style="{
      'width': width,
      'height': height
    }"
  >
    <div class="navigations">
      <h1 class="headline font--base">
        <a href="#">
          {{headline_text}}
        </a>
      </h1>
      <!-- indicator에 getItemData가 동작해야 함 -->
      <div class="indicators">
        <slot name="indicators"></slot>
      </div>
      <div class="navigation-items">
        <a
          class="navigation-item font--base" 
          v-for="item in items" 
          :key="item.item_id"
          href="#"
          @click.prevent="getItemData(item.item_url)"
        >
          {{item.item_text}}
        </a>
      </div>
    </div>
    
    <div class="slider-buttons">
      <slot name="slider-buttons"></slot>
    </div>
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
      default: '27px'
    },
    headline_text: {
      type: String,
      default: 'Headline'
    },
    headline_item_url: {
      type: String,
      default: '#'
    },
    items: {
      type: Array,
      default: () => [
        {item_text: "World", item_url: "#", item_id: '1'},
        {item_text: "Sports", item_url: "#", item_id: '2'},
        {item_text: "Money", item_url: "#", item_id: '3'},
        {item_text: "Movie", item_url: "#", item_id: '4'},
      ]
    }
  },
  methods: {
    getItemData (url) {
      alert(url);
    }
  }
}
</script>

<style lang="scss" scoped>
.section-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .navigations {
    display: flex;
    align-items: center;

    .headline {
      a {
        color: $PrimaryActionColor;
        text-decoration: none;
      }
      margin-right: 8px;
    }

    .indicators {
      display: flex;
      :not(:last-child) {
        margin-right: 8px;
      }
    }

    .navigation-items {
      margin-left: 16px;
      .navigation-item {
        text-decoration: none;
        color: $LightGrey;
        opacity: 0.8;
        &:focus {
          color: $PrimaryActionColor;
        }
      }
      :not(:last-child) {
        margin-right: 16px;
      }
      
    }
  }

  .slider-buttons {

  }


}


</style>