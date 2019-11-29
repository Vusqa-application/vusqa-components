<template>
<div class="comment-header"
  :style="{
    'width': width,
    'height': height
  }"
>
  <div 
    class="comment-section-header"
    v-if="comment_count"
  >
    <span class="comment-section-heading font--base-semibold">Comment {{comment_count}}</span>
    <span class="comment-section-sub-heading font--small">Comment Guideline</span>
  </div>
  <textarea 
    class="comment-input font--small" 
    placeholder="Please Login to Comment"
  ></textarea>
  <div class="comment-tabs">
    <a
      href="#"
      @click.prevent
      class="tab font--small"
      v-for="tab in tabs"
      :key="tab.text"
    >
      {{tab.text}}
    </a>
  </div>
  <divider></divider>
</div>
</template>

<script>
export default {
  components: {
    Divider: () => import('@/components/atoms/divider.vue')
  },
  props: {
    width: {
      type: String,
      default: '520px'
    },
    height: {
      type: String,
      default: ''
    },
    comment_count: {
      type: Number,
      default: null
    },
    tabs: {
      type: Array,
      default: () => [
        { text: 'relevant', sort_target: '' },
        { text: 'newest', sort_target: '' },
        { text: 'oldest', sort_target: '' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-header {
  display: flex;
  flex-direction: column;
  margin: auto;
  .comment-section-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0px 8px 0px 8px;

    .comment-section-heading {

    }
    .comment-section-sub-heading {
      color: $LightGrey;
    }
  }

  .comment-input {
    margin-top: 24px;
    margin-bottom: 16px;
    background-color: $Light;
    padding: 14px 8px 14px 8px;
    border: 1px solid #A9A9A9;
    border-radius: 4px;
    resize: none;
  }

  .comment-tabs {
    margin-bottom: 8px;
    padding-left: 8px;
    :not(:last-child) {
      margin-right: 12px;
    }
    .tab {
      text-decoration: none;
      color: $LightGrey;
      font-weight: 600;

      &:focus {
        color: $TextGrey;
      }
    }
  }
}
</style>