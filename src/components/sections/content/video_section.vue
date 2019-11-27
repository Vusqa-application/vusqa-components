<template>
<div class="video-section">
  <h1 class="heading font--base-semibold">Today’s Top Video</h1>
  <div class="video-item-row">
    <text-block-with-image
      v-for="i in 4"
      :key="i"
    >
      <indicator-box
        slot="top-left-indicator"
      >
        <img src="@/assets/svg/play.svg" />
      </indicator-box>
      <indicator-box
        slot="bottom-right-indicator"
        :width="'32px'"
        :font_size="'8px'"
        :font_weight="'600'"
        :line_height="'150%'"
      >
        20:13
      </indicator-box>
      <video-desc-block
        slot="video-desc-block"
      >
      </video-desc-block>
    </text-block-with-image>
  </div>
  <div class="video-item-row">
    <text-block-with-image
      v-for="i in 4"
      :key="i"
      :sub_text="sub_text"
    >
      <indicator-box
        slot="top-left-indicator"
      >
        <img src="@/assets/svg/play.svg" />
      </indicator-box>
      <indicator-box
        slot="bottom-right-indicator"
        :width="'32px'"
        :font_size="'8px'"
        :font_weight="'600'"
        :line_height="'150%'"
      >
        20:13
      </indicator-box>
      <video-desc-block
        slot="video-desc-block"
      >
      </video-desc-block>
    </text-block-with-image>
  </div>
</div>
</template>

<script>
const atom_path = component_name => import(`@/components/atoms/${component_name}.vue`);
const block_path = component_name => import(`@/components/blocks/${component_name}.vue`);

export default {
  props: {
    sub_text: {
      type: String,
      default: ''
    },
    video_items: {
      type: Array,
      default: () => [
        
      ]
    }
  },
  components: {
    IndicatorBox: () => atom_path('indicator_box'),
    VideoDescBlock: () => atom_path('video_desc_block'),

    // BLOCKS
    SectionNavigation: () => block_path('section_navigation'),
    TextBlockWithImage: () => block_path('text_block_with_image'),
    AdBlcok: () => block_path('ad_block'),
  }
}
</script>

<style lang="scss" scoped>
.video-section {
  .heading {
    color: $TextBlack;
    margin-bottom: 16px;
  }

  .video-item-row {
    display: flex;
    margin-bottom: 16px;

    > :not(:last-child) {
      margin-right: 20px;
    }
  }
}

</style>