<template>
<div class="video-desc-block">
  <span class="heading">{{author}}</span>
  <div class="description">
    <span class="views">{{views}} views</span>
    <simple-dot></simple-dot>
    <span class="time">{{time}}</span>
  </div>
  
</div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      default: 'Felip Crespo'
    },
    views: {
      type: String,
      default: '10k'
    },
    time: {
      type: String,
      default: '21 hours ago'
    }
  },
  components: {
    SimpleDot: () => import('@/components/atoms/simple_dot.vue')
  }
}
</script>

<style lang="scss" scoped>
.video-desc-block {
  font-family: 'Lato';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: $LightGrey;

  display: flex;
  flex-direction: column;
  
  .heading {

  }

  .description {
    display: flex;
    align-items: center;

    .views {
      margin-right: 5px;
    }

    .simple-dot {
      margin-right: 5px;
    }

    .time {

    }
  }
}
</style>