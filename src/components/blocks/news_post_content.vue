<template>
<div class="news-post-content"
  :style="{'width': width, 'height': height}"
>
  <img 
    class="post-image" 
    :style="{'width': image_width}"
    :src="image_src" />
  <div class="post-text font--base" v-html="news_text">

  </div>
</div>
</template>

<script>
// 텍스트 컨텐츠는 v-html 로 넣어야 한다.

export default {
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    image_width: {
      type: String,
      default: '520px'
    },
    image_src: {
      type: String,
      default: 'https://images.unsplash.com/photo-1502772066658-3006ff41449b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1456&q=80'
    },
    news_text: {
      type: String,
      default: `
      A un “marco de entendimiento social” llegaron en la madrugada de este jueves los senadores de oposición y el Gobierno por el Presupuesto 2020. La pensión básica solidaria aumentará a partir de enero en un 50% para los mayores de 80 años.
      <br />
      <br />
      A un “marco de entendimiento social” llegaron en la madrugada de este jueves los senadores de oposición y el Gobierno por el Presupuesto 2020. La pensión básica solidaria aumentará a partir de enero en un 50% para los mayores de 80 años.
      <br />
      <br />
      Lo mismo ocurrirá en ese rango para aquellos que sean beneficiados con la pensión máxima con aporte solidario (PMAS).
      En tanto, aquellos de entre 75 y 80 años verán incrementadas sus pensiones en un 30% en enero de 2020, lo que llegaría a 50% en 2021.
      <br />
      <br />
      Finalmente, los menores de 75 años verán sus pensiones aumentadas en 25% en 2020, 40% en enero de 2021 y 50% en enero de 2022.
      <br />
      <br />
      “En materia de pensiones se genera a través de una nueva ley, distinta del presupuesto”, comentó el ministro Briones.
      <br />
      <br />
      El secretario detalló que los parlamentarios se comprometieron a una tramitación rápida de dicho proyecto.
      <br />
      <br />
      <span class="font--f5">Acuerdo en pasaje de locomoción colectiva</span>
      <br />
      <br />
      Además, se acordó que el pasaje de la locomoción colectiva disminuirá en un 50% para todos los adultos mayores del país, lo que deberá estar completado en junio de 2020.
      <br />
      <br />
      Otro de los acuerdos importantes fue el aumento del per cápita de la Atención Primaria de Salud de 6 mil 494 pesos a 7 mil 200.
      <br />
      <br />
      <span class="font--base-semibold">El documento completo del acuerdo a continuación:</span>
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.news-post-content {
  padding: 30px 0px 24px 0px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .post-image {
    border-radius: 4px;
    margin-bottom: 24px;
  }
  .post-text {
    color: $DarkGrey;
  }
}
</style>