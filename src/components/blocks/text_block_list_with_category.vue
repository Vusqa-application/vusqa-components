<template>
<div class="text-block-list-with-category"
  :style="{
    'width': width,
    'height': height
  }"
>
  <div class="list-header">
    <div class="header-icon">
      <img src="@/assets/svg/world-category.svg" />
      <slot name="header-icon"></slot>
    </div>
    <h1 class="category-name">
      {{category_name}}
    </h1>
  </div>

  <ul class="list">
    <li class="font--base-semibold list-item"
      v-for="item in items"
      :key="item.id"
    >
      <div class="item-leading">
        <slot name="item-leading">
          <span class="leading">1</span>
        </slot>
      </div>
      <div class="item-info">
        {{item.text}}
        <div class="font--small item-meta">
          <span class="press">
            {{item.press}}
          </span>
          <span class="time">
            {{item.time}}
          </span>
        </div>
      </div>
      
    </li>
  </ul>
  <div class="extra-link">
    <slot name="extra-link"><a class="extra-link-item" href="#">View more news</a></slot>
  </div>
</div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    category_name: {
      type: String,
      default: 'World'
    },
    items: {
      type: Array,
      default: () => [
        { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
        { id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
        { id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
        { id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
        { id: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  
.text-block-list-with-category {

  .list-header {
    margin-bottom: 16px;
    display: flex;
    align-items: center;

    .header-icon {
      margin-right: 12px;
    }

    .category-name {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 150%;
    }
  }
  
  .list {
    .list-item {
      margin-bottom: 16px;
      display: flex;

      .item-leading {
        .leading {
          font-family: Lato;
          font-style: normal;
          font-weight: 600;
          font-size: 40px;
          line-height: 100%;
          color: $VusqaBrandSecondary;
          margin-right: 8px;
        }
      }

      .item-meta {
        margin-top: 4px;
        
        color: $LightGrey;
        
        .press {
          margin-right: 16px;
        }

        .time {
          
        }
      }
    }
  }

  .extra-link {

    .extra-link-item {
      text-decoration: none;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 120%
    }
  }
}

</style>