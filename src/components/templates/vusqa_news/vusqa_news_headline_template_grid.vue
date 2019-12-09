<template>
<div class="vusqa-news-headline-template">

  <!-- 안에 뭐가 있으면 grid area 를 무시하고 일단 렌더링 해버리니 주의하십시오. -->

  <header>
    <slot name="header"></slot>
  </header>
  <section class="headline-top">
    <slot name="headline-top"></slot>
  </section>

  <section class="headline-left-side">
    <slot name="headline-left-side"></slot>
  </section>

  <section class="headline-right-side">
    <slot name="headline-right-side"></slot>
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

.vusqa-news-headline-template {
  width: 1072px;
  @include normal-grid;
  grid-template-areas: 
  "header header header header header header header header header header header header"
  "headline-top headline-top headline-top headline-top headline-top headline-top headline-top headline-top headline-top headline-top headline-top headline-top"
  "headline-left-side headline-left-side headline-left-side headline-left-side headline-left-side headline-left-side headline-right-side headline-right-side headline-right-side headline-right-side headline-right-side headline-right-side"

}

// -------------------- ITEMS CONTROL

header {
  grid-area: header;
  background-color: lightblue;
}

.headline-top {
  grid-area: headline-top;
  background-color: lightblue;
}

.headline-left-side {
  grid-area: headline-left-side;
  background-color: lightblue;
}

.headline-right-side {
  grid-area: headline-right-side;
  background-color: lightblue;
}

  
</style>