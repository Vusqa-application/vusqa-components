<template>
<div class="text-block-list">
  <a
    class="text-block font--link"
    :href="item.link" 
    v-for="item in items"
    :key="item.id"
  >
    {{item.text}}
  </a>
</div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [
        { id: '1', text: 'Balance Onemi: 12 incendios forestales se mantienen activos en el país', link: '#'},
        { id: '2', text: 'Incendio en sector Rodelillo de Valparaíso: al menos 9 viviendas destruidas y 31 damnificados', link: '#'},
        { id: '3', text: 'Autoridades apuntan a intencionalidad en incendios simultáneos registrados en Valparaíso', link: '#'},
        { id: '4', text: 'Manifestación en plaza Italia congregó a miles de personas, a un mes del inicio del estallido social', link: '#'},
        { id: '5', text: 'Desconocidos incendian casa patrimonial que alberga Seremi de Desarrollo Social en La Serena', link: '#'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.text-block-list {
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: 8px;
  }

  .text-block {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: $Accent-9;
    }
  }
}
</style>