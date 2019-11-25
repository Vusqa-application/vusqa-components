<template>
<div class="rank-list"
  :style="{
    'width': width,
    'height': height  
  }"
>
  <h1 class="rank-list-name">
    {{rank_list_name}}
  </h1>
  <div class="rank-navigation">
    <slot name="indicators"></slot>
  </div>
  <ul class="rank-list-blocks">
    <li 
      class="rank-list-block"
      v-for="(item, index) in sorted_items"
      :key="item.id"
    >
      <div class="item-content">
        <span class="rank">{{index + 1}}.</span>
        <span class="text">{{item.text}}</span>
      </div>
      <img :src="require('@/assets/svg/state-icons/'+item.current_state+'.svg')" />
    </li>
  </ul>
</div>
</template>

<script>
export default {
  computed: {
    sorted_items () {
      return this.items.sort((a, b) => (a.views < b.views) ? 1 : -1);
    }
  },
  props: {
    width: {
      type: String,
      default: '152px'
    },
    height: {
      type: String,
      default: ''
    },
    rank_list_name: {
      type: String,
      default: 'Trending Now'
    },
    items: {
      type: Array,
      default: () => [
        {text: 'Kelsea Ballerini', views: 2000, current_state: 'increase'},
        {text: 'Bankruptcy Information', views: 1900, current_state: 'decrease'},
        {text: 'Scarlett Johansson', views: 1800, current_state: 'unchanged'},
        {text: 'Hayley Orrantia', views: 1700, current_state: 'increase'},
        {text: 'Tauck River Cruises', views: 1600, current_state: 'decrease'},
        {text: 'Blake Shelton tour 2020', views: 1500, current_state: 'increase'},
        {text: 'Kate Gosselin', views: 1400, current_state: 'increase'},
        {text: 'Elizabeth Banks', views: 1300, current_state: 'unchanged'},
        {text: 'Hayley Orrantia', views: 1200, current_state: 'decrease'},
        {text: 'Heidi Klum', views: 1100, current_state: 'increase'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.rank-list {

  .rank-list-name {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 12px;
  }

  .rank-navigation {
    margin-bottom: 16px;
    display: flex;

    :not(:last-child) {
      margin-right: 8px;
    }
  }
  .rank-list-blocks {

    > :not(:last-child) {
      margin-bottom: 16px;
    }

    .rank-list-block {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: Lato;
      font-style: normal;
      font-weight: 600;
      font-size: 8px;
      line-height: 120%;
      color: $TextBlack;

      .item-content {
        .rank {
          margin-right: 9px;
        }

        .text {

        }
      }

    }
  }
}



</style>