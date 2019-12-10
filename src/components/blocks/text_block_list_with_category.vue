<template>
<div class="text-block-list-with-category"
  :style="{
    'width': width,
    'height': height
  }"
>
  <div class="list-header">
    <div class="header-icon">
      <img v-if="category_icon" :src="require(`@/assets/svg/${category_icon}.svg`)" />
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
        <span v-if="item.leading_number" class="leading">{{item.leading_number}}</span>
      </div>
      <div class="item-info">
        <span class="item-text">{{item.text}}</span>
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
      default: '662px'
    },
    height: {
      type: String,
      default: ''
    },
    category_name: {
      type: String,
      default: 'World'
    },
    category_icon: {
      type: String,
      default: ''
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
      img {
        margin-right: 12px;
      }
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
          font-family: 'Lato';
          font-style: normal;
          font-weight: 600;
          font-size: 40px;
          line-height: 100%;
          color: $VusqaBrandSecondary;
          margin-right: 8px;
        }
      }

      .item-text {
        margin-right: 16px;
      }

      .item-meta {
        margin-top: 4px;
        display: inline-block;
        color: $LightGrey;
        
        .press {
          margin-right: 12px;
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