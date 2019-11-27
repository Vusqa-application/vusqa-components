<template>
<div class="front-page">
  
</div>
</template>

<script>
// TEMPLATE
import VusqaNewsTemplate from '@/components/templates/vusqa_news/vusqa_news_template.vue';

// SECTION
const layout_section_path = component_name => import(`@/components/sections/layout/${component_name}.vue`);
const content_section_path = component_name => import(`@/components/sections/content/${component_name}.vue`);

// Layout
import HeaderSection from '@/components/sections/layout/header_section.vue';

// Content
import HeadlineNewsSection from '@/components/sections/content/headline_news_section.vue';
import PopularNewsSection from '@/components/sections/content/popular_news_section.vue';
import VideoSection from '@/components/sections/content/video_section.vue';


export default {
  components: {
    // TEMPLATE
    VusqaNewsTemplate,

    // Layout Sections
    HeaderSection: () => layout_section_path('header_section'),

    // Content Sections
    HeadlineNewsSection: () => content_section_path('headline_news_section'),
    PopularNewsSection: () => content_section_path('popular_news_section'),
    VideoSection: () => content_section_path('video_section'),
  }
}
</script>

<style lang="scss">





  .ads-row {
    display: flex;
    margin-bottom: 16px;
    :not(:last-child) {
      margin-right: 20px;
    }
  }
</style>