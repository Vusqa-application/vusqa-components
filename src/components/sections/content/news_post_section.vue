<template>
<div class="news-post-section">
  <div class="icons">
    <icon-button></icon-button>
  </div>
  <div class="news-post">
    <news-post-header>
      <opinion-button slot="post-opinion"></opinion-button>
      <opinion-button slot="post-opinion"></opinion-button>
    </news-post-header>
    <news-post-content></news-post-content>
  </div>
</div>
</template>

<script>
const atom_path = component_name => import(`@/components/atoms/${component_name}.vue`);
const block_path = component_name => import(`@/components/blocks/${component_name}.vue`);

export default {
  components: {
    // ATOMS
    Divider: () => atom_path('divider'),
    IconButton: () => atom_path('icon_button'),
    OpinionButton: () => atom_path('opinion_button'),
    // BLOCKS
    NewsPostHeader: () => block_path('news_post_header'),
    NewsPostContent: () => block_path('news_post_content'),
    CommentBlock: () => block_path('comment_block'),
    CommentBlock: () => block_path('comment_block'),
    CommentBlock: () => block_path('comment_block'),

  }
}
</script>

<style lang="scss" scoped>

.news-post-section {

  padding: 16px 8px 16px 8px;

  .icons {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 14px;
  }

  .news-post {

  }

}

</style>