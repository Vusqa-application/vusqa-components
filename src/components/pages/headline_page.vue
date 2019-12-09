<template>
<div class="headline-page">
  <vusqa-news-headline-template>
    <header-section slot="header">
      <div slot="header-right-item" class="header-item">
        <app-square-icon></app-square-icon>
        <basic-button>Sign In</basic-button>
      </div>
    </header-section>


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

    // EXTRA BLOCKS

    // EXTRA ATOMS
    BasicButton: () => import(process.env.ATOM + 'basic_button.vue'),
    AppSquareIcon: () => import(process.env.ATOM + 'app_square_icon.vue'),

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
      
      .header-item {
        display: flex;
        align-items: center;

        .app-square-icon {
          margin-right: 16px;
        }
      }
      
    }
  }
}
</style>