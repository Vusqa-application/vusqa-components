<template>
<div class="headline-card"
  :style="{'width': width, 'height': height}"
>
  <h1 class="heading font--f3">
    {{heading}}
  </h1>
  <div class="card">
    <div class="card-left-block">
      <ul class="headline-list">
        <li v-for="item in items"
          :key="item.id"
          class="headline-item"
        >
          <p class="headline-item-text font--base">
            {{item.text}}
            <span class="item-category font--small">{{item.category}}</span>  
          </p>
        </li>
      </ul>
    </div>

    <div class="card-right-block">
      <div class="headline-image"
        :style="{
          'width': image_width,
          'height': image_height,
          'backgroundImage': `url(${image_src})`
        }"
      >
        <span class="image-heading">
          {{image_heading}}
        </span>
        <span class="image-text font--base-semibold">
          {{image_text}}
        </span>
      </div>
    </div>
  </div>
</div>
    
</template>

<script>
export default {
  data() {
    return {
      image_heading: 'Podría firmarse en la APEC Chile: Trump confirma acuerdo para tregua en guerra comercial con China - Biobiochile',
      image_text: ' Podría firmarse en la APEC Chile: Trump confirma acuerdo para tregua en guerra comercial con China - Biobiochile Podría firmarse en la APEC Chile: Trump confirma acuerdo para tregua en guerra comercial con China - Biobiochile'
    }
  },
  props: {
    width: {
      type: String,
      default: '1072px'
    },
    height: {
      type: String,
      default: '478px'
    },
    image_width: {
      type: String,
      default: '644px'
    },
    image_height: {
      type: String,
      default: '478px'
    },
    heading: {
      type: String,
      default: "Today's Headline"
    },
    image_src: {
      type: String,
      default: "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    items: {
      type: Array,
      default: () => [
        {id: 1, text: 'Podría firmarse en la APEC Chile: Trump confirma acuerdo para tregua en guerra', link: '#', category: 'World'},
        {id: 2, text: 'Podría firmarse en la APEC Chile: Trump confirma acuerdo para tregua en guerra', link: '#', category: 'World'},
        {id: 3, text: 'Podría firmarse en la APEC Chile: Trump confirma acuerdo para tregua en guerra', link: '#', category: 'World'},
        {id: 4, text: 'Podría firmarse en la APEC Chile: Trump confirma acuerdo para tregua en guerra', link: '#', category: 'World'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.headline-card {
  .heading {
    font-family: 'Lato';
    margin-bottom: 24px;
  }

  .card {

    display: flex;

    .card-left-block {

      .headline-list {
        display: flex;
        flex-direction: column;

        .headline-item {
          list-style: none;
          cursor: pointer;
          padding: 20px 56px 20px 16px;          

          .headline-item-text {
            padding-left: 24px;
            border-left: 2px solid $LightGrey;
            color: $LightGrey;
            display: flex;
            flex-direction: column;

            .item-category {
              color: $LightGrey;
            }
          }

          &:hover {
            .headline-item-text {
              color: $VusqaBrandSecondary;
              border-left: 2px solid $VusqaBrandSecondary;
              .item-category {
                color: $DarkGrey;
                
              }
            }
          }

        }
      }

    }

    .card-right-block {

      .headline-image {
        
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 8px;
        padding: 24px;
        height: 100%;

        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 32px;
        /* or 114% */

        /* White */
        color: $Light;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;

        z-index: 1;

        > ::before {
          z-index: -1;
          display: block;
          position: absolute;
          border-radius: 8px;
          top: 0;
          left: 0;
          content: "";
          background: $VusqaBrandSecondary;
          width: 100%;
          height: 100%;
          opacity: 0.2;
        }
        
        .image-heading {
        
        }

        .image-text {
          color: $Light;
          padding: 2px;
        }
      }
      
    }
  }
}
</style>