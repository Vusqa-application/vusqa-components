<template>
<div class="comment-block"
  :style="{
    'width': width,
    'height': height
  }"
>
  <div class="comment-info">
    <div class="info-text">
      <span class="comment-user">{{comment_user}}</span>
      <span class="comment-time font--small">{{comment_time}}</span>
    </div>
    <img class="comment-icon" src="@/assets/svg/exclamation.svg"/>
  </div>

  <div class="comment-text">
    <span class="font--small">{{comment_text}}</span>
  </div>

  <div class="comment-reaction">
    <span class="comment-comments font--small">
      {{comment_comments}} comments
    </span>
    <div class="comment-opinion font--small">
      <div class="like">
        <img src="@/assets/svg/like.svg" class="like-icon">
        {{comment_like}}
      </div>
      <div class="hate">
        <img src="@/assets/svg/hate.svg" class="hate-icon">
        {{comment_hate}}
      </div>
    </div>
  </div>
  <divider></divider>
  
</div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '520px'
    },
    height: {
      type: String,
      default: ''
    },
    comment_user: {
      type: String,
      default: 'John Doe'
    },
    comment_time: {
      type: String,
      default: '3 hours ago'
    },
    comment_text: {
      type: String,
      default: 'Escucho a piñera y escucho a maduro diciendo que no hay violaciones a los derechos humanos. La derecha hace un mes lavandose la boca por los derechos humanos de Venezuela y ahora en su propio pais los desconoce.'
    },
    comment_comments: {
      type: Number,
      default: 16
    },
    comment_like: {
      type: Number,
      default: 311
    },
    comment_hate: {
      type: Number,
      default: 10
    },
    is_comment_comment: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Divider: () => import('@/components/atoms/divider.vue')
  }
}
</script>

<style lang="scss" scoped>
.comment-block {
  .comment-info {
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .info-text {
      .comment-user {
        color: $HoverDarken;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 14.4px;
        line-height: 150%;

        margin-right: 8px;
      }
      .comment-time {
        color: $LightGrey;
      }
    }
    .comment-icon {
      cursor: pointer;
    }
  }

  .comment-text {
    margin-bottom: 16px;
  }

  .comment-reaction {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .comment-comments {

    }

    .comment-opinion {
      display: flex;
      .like {
        font-size: 8px;
        .like-icon {
          cursor: pointer;
          margin-right: 5px;
        }
        margin-right: 10px;
      }
      .hate {
        font-size: 8px;
        .hate-icon {
          cursor: pointer;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>