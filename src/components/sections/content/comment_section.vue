<template>
<div :class="{'comment-section': true, 'nested': is_nested}">
  <comment-header
    :comment_count="comment_count"
  ></comment-header>
  <div class="comment-block-list">
    <comment-block 
      v-for="i in 3"
      :key="i"
    ></comment-block>
  </div>
</div>
</template>

<script>
const atom_path = component_name => import(`@/components/atoms/${component_name}.vue`);
const block_path = component_name => import(`@/components/blocks/${component_name}.vue`);

export default {
  props: {
    comment_count: {
      type: Number,
      default: 130
    },
    comment_block_list: {
      type: Array,
      default: () => [
        { id: '1', comment_user: '', comment_time: '' },
      ]
    },
    is_nested: {
      type: Boolean,
      default: false
    }
  },
  components: {
    // ATOMS
    Divider: () => atom_path('divider'),
    
    // BLOCKS
    CommentHeader: () => block_path('comment_header'),
    CommentBlock: () => block_path('comment_block'),

  }
}
</script>

<style lang="scss" scoped>
.comment-section {

  .comment-header {

  }

  .comment-block-list {
    padding: 0px 8px 0px 8px;
    .comment-block {
      margin-top: 8px;
    }
  }

}

.nested {
  background-color: rgba($LightGrey, 0.1);
}
</style>