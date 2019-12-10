<template>
<div class="list-card"
  :style="{
    'width': width,
    'height': height
  }"
>
  <div class="card-header">
    <h1 class="heading font--base-semibold">
      {{card_heading}}
    </h1>
    <a href="#" class="link-text font--link">
      {{link_text}}
      <img src="@/assets/svg/blue-arrow-right.svg"/>
    </a>
  </div>
  
  <div class="navigation">
    <slot name="navigation"></slot>
  </div>
  
  <ul class="list">
    <li
      v-for="item in items"
      :key="item.id"
      class="list-item font--link"
    >
      <span class="rank">{{item.rank}}.</span>
      <span class="text">{{item.text}}</span>
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
    card_heading: {
      type: String,
      default: 'Most anticipated news'
    },
    link_text: {
      type: String,
      default: 'View More'
    },
    items: {
      type: Array,
      default: () => [
        {id: 1, text: 'un punto de venta de droga en la Isla Santa Ma...', rank: 1},
        {id: 2, text: 'un punto de venta de droga en la Isla Santa Ma...', rank: 2},
        {id: 3, text: 'un punto de venta de droga en la Isla Santa Ma...', rank: 3},
        {id: 4, text: 'un punto de venta de droga en la Isla Santa Ma...', rank: 4},
        {id: 5, text: 'un punto de venta de droga en la Isla Santa Ma...', rank: 5},
        {id: 6, text: 'un punto de venta de droga en la Isla Santa Ma...', rank: 6},
        {id: 7, text: 'un punto de venta de droga en la Isla Santa Ma...', rank: 7},
        {id: 8, text: 'un punto de venta de droga en la Isla Santa Ma...', rank: 8},
        {id: 9, text: 'un punto de venta de droga en la Isla Santa Ma...', rank: 9},
        {id: 10, text: 'un punto de venta de droga en la Isla Santa Ma...', rank: 10},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.list-card {

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 12px;

    .heading {
      color: black;
    }

    .link-text {
      text-decoration: none;
      color: $Secondary;

      img {
        margin-left: 5px;
      }
    }

  }

  .navigation {
    margin-bottom: 16px;
  }

  .list {
    list-style: none;

    .list-item {
      font-weight: bold;
      margin-bottom: 16px;

      .rank {
        margin-right: 5px;
        color: $VusqaBrandSecondary;
      }

      .text {

      }
    }
  }
}
</style>