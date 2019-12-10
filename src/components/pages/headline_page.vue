
<template>
<div class="headline-page">
  <vusqa-news-headline-template>
    <header-section slot="header">
      <div slot="header-right-item" class="header-item">
        <app-square-icon></app-square-icon>
        <basic-button>Sign In</basic-button>
      </div>
    </header-section>
    <page-top-navigation
      slot="header"
    ></page-top-navigation>

    <headline-card slot="headline-top">
    </headline-card>
    <news-category-section
      slot="headline-left-side"
      :news_list="news_lists"
    >
    </news-category-section>

    <div class="ad-section" slot="headline-right-side">
      <list-card>

      </list-card>
      <ad-block
        :width="'336px'"
        :height="'300px'"
        
      >

      </ad-block>
      <list-card>
        <small-navigation slot="navigation"></small-navigation>
      </list-card>

      <ads-grid>

      </ads-grid>

    </div>

  </vusqa-news-headline-template>
</div>

</template>

<script>
export default {
  components: {
    // TEMPLATE
    VusqaNewsHeadlineTemplate: () => import(process.env.TEMPLATE + 'vusqa_news/vusqa_news_headline_template.vue'),

    // Layout Sections
    HeaderSection: () => import(process.env.LAYOUT_SECTION + 'header_section.vue'),

    // Content Sections
    NewsCategorySection: () => import(process.env.CONTENT_SECTION + 'news_category_section.vue'),
    AdSection2: () => import(process.env.CONTENT_SECTION + 'ad_section2.vue'),

    // EXTRA BLOCKS
    HeadlineCard: () => import(process.env.BLOCK + 'headline_card.vue'),
    PageTopNavigation: () => import(process.env.BLOCK + 'page_top_navigation.vue'),
    SmallNavigation: () => import(process.env.BLOCK + 'small_navigation.vue'),
    ListCard: () => import(process.env.BLOCK + 'list_card.vue'),
    AdBlock: () => import(process.env.BLOCK + 'ad_block.vue'),
    AdsGrid: () => import(process.env.BLOCK + 'ads_grid.vue'),

    // EXTRA ATOMS
    BasicButton: () => import(process.env.ATOM + 'basic_button.vue'),
    AppSquareIcon: () => import(process.env.ATOM + 'app_square_icon.vue'),

    

  },
  data() {
    return {
      news_lists: [
        { id: 0, category_name: 'World', item_list: [
          {id: 0, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
        ]},
        { id: 1, category_name: 'Sports', item_list: [
          {id: 0, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
        ]},
        { id: 2, category_name: 'Politics', item_list: [
          {id: 0, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
        ]},
        { id: 3, category_name: 'Most Engaging News', item_list: [
          {id: 0, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
        ]},
        { id: 4, category_name: 'World', item_list: [
          {id: 0, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
        ]},
      ]
    }
  },
  
}
</script>

<style lang="scss" scoped>
.headline-page {
  max-width: 1072px;
  margin: auto;

  .vusqa-news-headline-template {
    .header-section {
      margin-top: 36px;
      margin-bottom: 36px;
      .header-item {
        display: flex;
        align-items: center;

        .app-square-icon {
          margin-right: 16px;
        }
      }
    }

    .page-top-navigation {
      margin-bottom: 32px;
    }

    .headline-card {
      margin-bottom: 76px;
    }

    .ad-section {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      .list-card {
        margin-bottom: 16px;
      }

      .ad-block {
        margin-bottom: 16px;
      }
    }
  }
}
</style>