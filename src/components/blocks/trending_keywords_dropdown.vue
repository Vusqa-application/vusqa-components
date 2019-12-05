<template>
<div 
  class="trending-keywords-dropdown"
  :style="{
    'width': width,
    'height': height
  }"
>
  <div class="top-rank-item font--base-semibold">
    <span class="rank">{{top_rank_item.rank}}</span>
    <span class="text">{{top_rank_item.text}}</span>
    <svg class="dropdown-icon" width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
      <path d="M5.00095 7.85018C4.82173 7.85018 4.64253 7.78175 4.50589 7.64518L0.206118 3.34536C-0.0674039 3.07184 -0.0674039 2.62837 0.206118 2.35496C0.479529 2.08155 0.922909 2.08155 1.19645 2.35496L5.00095 6.15968L8.80547 2.35509C9.07899 2.08168 9.52232 2.08168 9.79571 2.35509C10.0694 2.6285 10.0694 3.07197 9.79571 3.34549L5.49601 7.64531C5.3593 7.78191 5.1801 7.85018 5.00095 7.85018Z" fill="#505050"/>
      </g>
      <defs>
        <clipPath id="clip0">
        <rect width="10" height="10" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    top_rank_item () {
      return {
        rank: '1.',
        text: this.items[0].text,
        link: this.items[0].link
      };
    },
    // 이제 이걸 바탕으로 아래로 내려오는 애니메이션이 생길 수 있도록 해야지
    rank_items () {
      return this.items.slice(1);
    }
  },
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => [
        { id: 0, text: 'Blizzard Entertainment', link: '#', views: 100},
        { id: 1, text: 'Blizzard Entertainment1', link: '#', views: 200},
        { id: 2, text: 'Blizzard Entertainment2', link: '#', views: 300},
        { id: 3, text: 'Blizzard Entertainment3', link: '#', views: 400},
        { id: 4, text: 'Blizzard Entertainment4', link: '#', views: 500},
        { id: 5, text: 'Blizzard Entertainment5', link: '#', views: 600},

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.trending-keywords-dropdown {
  cursor: pointer;
  .top-rank-item {
    display: flex;
    align-items: baseline;

    .rank {
      color: $VusqaBrandSecondary;
      margin-right: 5px;
    }

    .text {
      margin-right: 10px;
    }

    .dropdown-icon {
      path {
        fill: $VusqaBrandSecondary;
      }
    }

  }

}
</style>