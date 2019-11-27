<template>
<div class="popular-news-section">
  <div class="navigation">
    <section-navigation
      :headline_text="'Popular'"
      :items="navigation_items"
    >
    </section-navigation>
  </div>

  <div class="primary-news-row">
    <text-block-with-image
      v-for="i in 4"
      :key="i"
    >
      <indicator-box
        :is_primary="true"
        slot="top-left-indicator"
      >
        {{i}}
      </indicator-box>
    </text-block-with-image>
  </div>
  <div class="secondary-news-row">
    <text-block-with-image
      v-for="i in 4"
      :key="i"
    >
      <indicator-box
        :is_primary="false"
        slot="top-left-indicator"
      >
        {{i + 4}}
      </indicator-box>
    </text-block-with-image>
  </div>
</div>
</template>

<script>
const atom_path = component_name => import(`@/components/atoms/${component_name}.vue`);
const block_path = component_name => import(`@/components/blocks/${component_name}.vue`);

export default {
  // 동적으로 제어할 부분은 data가 아니라 prop에 담는다
  props: {
    navigation_items: {
      type: Array,
      default: () => [
        {item_text: "TV", item_url: "#", item_id: '1'},
        {item_text: "Cars", item_url: "#", item_id: '2'},
        {item_text: "Tech", item_url: "#", item_id: '3'},
        {item_text: "Issue", item_url: "#", item_id: '4'},
        {item_text: "Blog", item_url: "#", item_id: '5'},
        {item_text: "Shop", item_url: "#", item_id: '6'},
        {item_text: "Travel", item_url: "#", item_id: '7'},

      ]
    }
  },
  components: {
    IndicatorBox: () => atom_path('indicator_box'),

    // BLOCKS
    SectionNavigation: () => block_path('section_navigation'),
    TextBlockWithImage: () => block_path('text_block_with_image'),
    AdBlcok: () => block_path('ad_block'),
  }
}
</script>

<style lang="scss" scoped>

.popular-news-section {
  .navigation {
    margin-bottom: 16px;
  }

  .primary-news-row {
    display: flex;
    margin-bottom: 36px;
    :not(:last-child) {
      margin-right: 20px;
    }
    
  }

  .secondary-news-row {
    display: flex;
    margin-bottom: 28px;
    :not(:last-child) {
      margin-right: 20px;
    }
  }

  
}

</style>