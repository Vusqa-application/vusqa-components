<template>
<div class="news-category-section">
  <text-block-list-with-category
    v-for="list in news_lists"
    :key="list.id"
    :items="list.item_list"
    :category_name="list.category_name"
    :category_icon="list.category_icon"
  ></text-block-list-with-category>
</div>
</template>

<script>
export default {
  props: {
    news_lists: {
      type: Array,
      default: () => [
        { id: 0, category_icon: 'world-category', category_name: 'World', item_list: [
          {id: 0, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
        ]},
        { id: 1, category_icon: 'sports-category', category_name: 'Sports', item_list: [
          {id: 0, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
        ]},
        { id: 2, category_icon: 'politics-category', category_name: 'Politics', item_list: [
          {id: 0, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
          {id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam dolor eset is...', press: 'Biobiochile.cl', time: '17:56' },
        ]},
        { id: 3, category_name: 'Most Engaging News', item_list: [
          {id: 0, leading_number: 1, text: "Los azules pegaron de entrada: la U está venciendo a Cobresal por 'cuartos' de Copa Chile", press: 'Biobiochile.cl', time: '17:56' },
          {id: 1, leading_number: 2, text: "Los azules pegaron de entrada: la U está venciendo a Cobresal por 'cuartos' de Copa Chile", press: 'Biobiochile.cl', time: '17:56' },
          {id: 2, leading_number: 3, text: "Los azules pegaron de entrada: la U está venciendo a Cobresal por 'cuartos' de Copa Chile", press: 'Biobiochile.cl', time: '17:56' },
          {id: 3, leading_number: 4, text: "Los azules pegaron de entrada: la U está venciendo a Cobresal por 'cuartos' de Copa Chile", press: 'Biobiochile.cl', time: '17:56' },
          {id: 4, leading_number: 5, text: "Los azules pegaron de entrada: la U está venciendo a Cobresal por 'cuartos' de Copa Chile", press: 'Biobiochile.cl', time: '17:56' },
        ]}
      ]
    }
  },
  components: {
    TextBlockListWithCategory: () => import(process.env.BLOCK + 'text_block_list_with_category.vue'),
  },
  // 안 넘겨지네?? 뭐지???
  mounted() {
    console.log(this.news_lists);
  },
}
</script>

<style lang="scss" scoped>
.news-category-section {
  .text-block-list-with-category {
    margin-bottom: 32px;
  }
}
</style>