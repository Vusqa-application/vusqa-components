<template>
<div class="vusqa-news-post-template">

  <!-- 안에 뭐가 있으면 grid area 를 무시하고 일단 렌더링 해버리니 주의하십시오. -->

  <header>
    <slot name="header"></slot>
  </header>
  
  <section class="news-item-section">
    <slot name="news-item-section"></slot>
  </section>

  <section class="news-post-section">
    <slot name="news-post-section"></slot>
  </section>


</div>

</template>

<script>
export default {
  components: {

  }
}
</script>

<style lang="scss" scoped>

// -------------------- GRID LAYOUT CONTROL

.vusqa-news-post-template {
  width: 1072px;
  @include normal-grid;
  grid-template-areas: 
  "header header header header header header header header header header header header"
  "news-item news-item news-item news-item news-item news-item news-post news-post news-post news-post news-post news-post"
}
// -------------------- ITEMS CONTROL

header {
  grid-area: header;
  background-color: lightblue;
}

.news-item-section {
  grid-area: news-item;
  background-color: lightblue;

}

.news-post-section {
  grid-area: news-post;
  background-color: lightblue;

}
  
</style>