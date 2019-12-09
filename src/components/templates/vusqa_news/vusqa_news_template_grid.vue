<template>
<div class="vusqa-news-template">

  <!-- 안에 뭐가 있으면 grid area 를 무시하고 일단 렌더링 해버리니 주의하십시오. -->

  <header>
    <slot name="header"></slot>
  </header>
  <section class="ad-section1">
    <slot name="ad-section1"></slot>
  </section>

  <section class="top-section">
    <slot name="top-section"></slot>
  </section>

  <section class="middle-section">
    <slot name="middle-section"></slot>
  </section>

  <section class="ad-section2">
    <slot name="ad-section2"></slot>
  </section>

  <section class="bottom-section">
    <slot name="bottom-section"></slot>
  </section>

  <aside>
    <slot name="top-aside"></slot>
    <slot name="bottom-aside"></slot>
  </aside>

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

.vusqa-news-template {
  width: 1072px;
  @include normal-grid;
  grid-template-areas: 
  "header header header header header header header header header header header header"
  "ad-section1 ad-section1 ad-section1 ad-section1 ad-section1 ad-section1 ad-section1 ad-section1 aside aside aside aside"
  "top-section top-section top-section top-section top-section top-section top-section top-section aside aside aside aside"
  "middle-section middle-section middle-section middle-section middle-section middle-section middle-section middle-section aside aside aside aside"
  "ad-section2 ad-section2 ad-section2 ad-section2 ad-section2 ad-section2 ad-section2 ad-section2 aside aside aside aside"
  "bottom-section bottom-section bottom-section bottom-section bottom-section bottom-section bottom-section bottom-section aside aside aside aside";

}

// -------------------- ITEMS CONTROL

header {
  grid-area: header;
  background-color: lightblue;
}

main {
  grid-area: main;
  background-color: lightblue;
}

aside {
  grid-area: aside;
  background-color: lightblue;
  padding-left: 8px;
}

.ad-section1 {
  grid-area: ad-section1;
  background-color: lightblue;
}

.top-section {
  grid-area: top-section;
  background-color: lightblue;
}

.middle-section {
  grid-area: middle-section;
  background-color: lightblue;
}

.ad-section2 {
  grid-area: ad-section2;
  background-color: lightblue;
}

.bottom-section {
  grid-area: bottom-section;
  background-color: lightblue;
}


  
</style>