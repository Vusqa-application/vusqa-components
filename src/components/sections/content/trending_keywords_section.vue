<template >
<div class="trending-keywords">
  <rank-list
    :width="'100%'"
  >
    <navigation-item-box slot="indicators">
      1 ~ 10
    </navigation-item-box>
    <navigation-item-box slot="indicators">
      10 ~ 20
    </navigation-item-box>
  </rank-list>
  <slot name="extra-ads"></slot>
  <text-block-with-image>
    <indicator-box slot="bottom-right-indicator"
      :width="'28px'"
    >AD</indicator-box>
  </text-block-with-image>
</div>
</template>

<script>
const atom_path = component_name => import(`@/components/atoms/${component_name}.vue`);
const block_path = component_name => import(`@/components/blocks/${component_name}.vue`);

export default {
  components: {
    // ATOMS
    IndicatorBox: () => atom_path('indicator_box'),
    NavigationItemBox: () => atom_path('navigation_item_box'),

    // BLOCKS
    RankList: () => block_path('rank_list'),
    TextBlockWithImage: () => block_path('text_block_with_image'),
  } 
}
</script>

<style lang="scss" scoped>
.trending-keywords {

  padding-left: 10px;
  @include border-left;
  
  .rank-list {
    margin-bottom: 20px;
  }

}
</style>