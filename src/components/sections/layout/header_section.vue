<template>
  <div class="header-section">
    <brand-logo></brand-logo>
    <search-bar></search-bar>
    <event-item></event-item>
  </div>
</template>

<script>
const atom_path = component_name => import(`@/components/atoms/${component_name}.vue`);
const block_path = component_name => import(`@/components/blocks/${component_name}.vue`);

export default {
  components: {
    // ATOM
    BrandLogo: () => atom_path('brand_logo'),

    // BLOCK
    SearchBar: () => block_path('search_bar'),
    EventItem: () => block_path('event_item')
  }
}
</script>

<style lang="scss" scoped>

.header-section {
  display: flex;
  align-items: center;

  .brand-logo {
    padding-top: 7px;
    margin-right: 46px;
  }

  .search-bar {
    margin-right: 175px;
  }

  .event-item {
    padding-top: 7px;
  }
}
  
</style>