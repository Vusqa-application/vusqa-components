<template>
<div class="ad-section2">
  
</div>
</template>

<script>


export default {
  components: {
    // ATOMS

    // BLOCKS
    
    SmallNavigation: () => import(process.env.BLOCK + 'small_navigation.vue'),
    ListCard: () => import(process.env.BLOCK + 'list_card.vue'),
    AdBlock: () => import(process.env.BLOCK + 'ad_block.vue'),
  }
}
</script>

<style lang="scss" scoped>
  
</style>