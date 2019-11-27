<template>
<div class="headline-news-section">
  <div class="trending-info">
    <div class="trending-news">
      <section-navigation>
        <simple-dot slot="indicators"></simple-dot>
        <simple-dot slot="indicators"></simple-dot>
        <simple-dot slot="indicators"></simple-dot>
        <slider-buttons slot="slider-buttons">
          1 ~ 20
        </slider-buttons>
      </section-navigation>
      <headline-image>
        <play-button slot="button"></play-button>
      </headline-image>
      <text-block-list></text-block-list>
      <div class="news-block-list">
        <text-block-with-image
          v-for="i in 3"
          :key="i"
        >
        </text-block-with-image>
      </div>
    </div>
    <div class="trending-keywords">
      <rank-list>
        <navigation-item-box slot="indicators">
          1 ~ 10
        </navigation-item-box>
        <navigation-item-box slot="indicators">
          10 ~ 20
        </navigation-item-box>
      </rank-list>
      <text-block-with-image>
        <indicator-box slot="bottom-right-indicator"
          :width="'28px'"
        >AD</indicator-box>
      </text-block-with-image>
    </div>
  </div>
</div>
</template>

<script>
const atom_path = component_name => import(`@/components/atoms/${component_name}.vue`);
const block_path = component_name => import(`@/components/blocks/${component_name}.vue`);

export default {
  components: {
    // ATOMS
    PlayButton: () => atom_path('play_button'),
    IndicatorBox: () => atom_path('indicator_box'),
    SliderButtons: () => atom_path('slider_buttons'),
    SimpleDot: () => atom_path('simple_dot'),
    NavigationItemBox: () => atom_path('navigation_item_box'),

    // BLOCKS
    HeadlineImage: () => block_path('headline_image'),
    SectionNavigation: () => block_path('section_navigation'),
    RankList: () => block_path('rank_list'),
    TextBlockWithImage: () => block_path('text_block_with_image'),
    TextBlockList: () => block_path('text_block_list')
  }
}
</script>

<style lang="scss" scoped>

.headline-news-section {
  display: flex;
  flex-direction: column;
  
  .trending-info {
    display: flex;
    flex-direction: row;
    margin-bottom: 28px;
    
    .trending-news {
      display: flex;
      flex-direction: column;
      padding-right: 10px;
      margin-bottom: 20px;

      @include border-right;
      .section-navigation {
        margin-bottom: 16px;
      }

      .headline-image {
        margin-bottom: 20px;
      }

      .text-block-list {
        margin-bottom: 20px;
      }

      .news-block-list {
        display: flex;
        :not(:last-child) {
          margin-right: 20px;
        }
      }

    }

    .trending-keywords {
      padding-left: 10px;
      
      .rank-list {
        margin-bottom: 20px;
      }

    }

  }

}


</style>