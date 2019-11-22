<template>
  <div class="event-item">
    <div class="text">
      <h1 class="heading">{{heading}}</h1>
      <span class="sub-heading">{{sub_heading}}</span>
    </div>
    <img 
      class="event-image"
      src="@/assets/svg/event-image.svg"
    />
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: '50th Fiestas Patrias'
    },
    sub_heading: {
      type: String,
      default: 'independencia comienza'
    }
  }
}
</script>

<style lang="scss">

.event-item {

  display: flex;
  
  .text {
    display: flex;
    flex-direction: column;
    margin-right: 12px;
    text-align: right;

    .heading {
      margin: 0;
      color: #2E48B0;
      font-family: 'Open Sans';
      font-size: 14px;
      line-height: 150%;
    }
    .sub-heading {
      margin: 0;
      font-family: 'Open Sans';
      font-size: 14px;
      line-height: 150%;
    }
  }

}

</style>