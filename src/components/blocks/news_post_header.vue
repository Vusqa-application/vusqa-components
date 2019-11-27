<template>
<div class="news-post-header">
  <h1 class="post-heading font--f4">
    {{heading}}
  </h1>
  <div class="post-meta-1">
    <span class="press">{{press}}</span>
    <span class="website">view at Vusqa</span>
    <span class="published-and-update-time">{{published_time}} | {{update_time}}</span>
  </div>
  <div class="post-meta-2">
    <span class="author">Por <a :href="author_link" class="author-name">{{author_name}}</a></span>
    <span class="source">Con información de <a :href="source_link" class="source-name">{{source}}</a></span>
  </div>
  <div class="post-opinion">
    <slot name="post-opinion"></slot>
  </div>
</div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: 'Senadores y Gobierno acuerdan alza en pensión básica y rebaja en transporte para adultos mayores'
    },
    press: {
      type: String,
      default: 'biobiochile.cl'
    },
    published_time: {
      type: String,
      default: 'Jueves 21 noviembre de 2019'
    },
    update_time: {
      type: String,
      default: 'Publicado a las 01:12 · Actualizado a las 03:46'
    },
    author_name: {
      type: String,
      default: 'Yerko Roa'
    },
    author_link: {
      type: String,
      default: '#'
    },
    source: {
      type: String,
      default: 'Óscar Valenzuela.'
    },
    source_link: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
.news-post-header {
  .post-heading {
    margin-bottom: 8px;
  }

  .post-meta-1 {
    margin-bottom: 8px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 8px;
    line-height: 120%;
    color: $Grey;

    .press {
      margin-right: 8px;
    }
    
    .website {
      margin-right: 8px;
    }

    .published-and-update-time {

    }
  }

  .post-meta-2 {
    margin-bottom: 12px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 8px;
    line-height: 120%;
    color: $Grey;

    .author {
      margin-right: 8px;
      .author-name {
        text-decoration: none;
      }
    }

    .source {
      .source-name {
        text-decoration: none;
      }
    }
  }


  .post-opinion {
    display: flex;
    
    :not(:last-child) {
      margin-right: 8px;
    }
  }
}
</style>