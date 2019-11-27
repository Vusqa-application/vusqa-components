/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, object, array } from '@storybook/addon-knobs';

// -------------- MARKDOWNS
import test_markdown from '@/assets/notes/test.md'

// -------------- ATOMS
import PlayButton from '@/components/atoms/play_button.vue';
import IndicatorBox from '@/components/atoms/indicator_box.vue';
import SliderButtons from '@/components/atoms/slider_buttons.vue';
import SimpleDot from '@/components/atoms/simple_dot.vue';
import Divider from '@/components/atoms/divider.vue';
import NavigationItemBox from '@/components/atoms/navigation_item_box.vue';
import BrandLogo from '@/components/atoms/brand_logo.vue';
import VideoDescBlock from '@/components/atoms/video_desc_block.vue';




// -------------- BLOCKS
import HeadlineImage from '@/components/blocks/headline_image.vue';
import TextBlockWithImage from '@/components/blocks/text_block_with_image.vue';
import SearchBar from '@/components/blocks/search_bar.vue';
import EventItem from '@/components/blocks/event_item.vue';
import SectionNavigation from '@/components/blocks/section_navigation.vue';
import RankList from '@/components/blocks/rank_list.vue';
import TextBlockList from '@/components/blocks/text_block_list.vue';
import AdBlock from '@/components/blocks/ad_block.vue';
import LoginCard from '@/components/blocks/login_card.vue';





// -------------- SECTIONS

// Layout
import HeaderSection from '@/components/sections/layout/header_section.vue';

// Content
import HeadlineNewsSection from '@/components/sections/content/headline_news_section.vue';
import PopularNewsSection from '@/components/sections/content/popular_news_section.vue';
import VideoSection from '@/components/sections/content/video_section.vue';




// -------------- TEMPLATES
import VusqaNewsTemplate from '@/components/templates/vusqa_news/vusqa_news_template.vue';
import VusqaNewsTemplateGrid from '@/components/templates/vusqa_news/vusqa_news_template_grid.vue';



// -------------- PAGES
import FrontPage from '@/components/pages/front_page.vue';




storiesOf('Components/Atoms', module)
  .addDecorator(withKnobs)
  .add('Play Button', () => ({
    components: { PlayButton },
    template: 
    `<play-button></play-button>`
  }), {

  })
  .add('Indicator Box', () => ({
    components: { IndicatorBox },
    props: {
      props: {
        width: {
          type: String,
          default: text('width','20px')
        },
        height: {
          type: String,
          default: text('height','20px')
        },
        is_primary: {
          type: Boolean,
          default: boolean('is_primaryt',true)
        },
        font_size: {
          type: String,
          default: text('font_size','10px')
        }
      }
    },
    template: `
    <indicator-box
      :width="width"
      :height="height"
      :is_primary="is_primary"
      :font_size="font_size"
    >
      1
    </indicator-box>`
  }), {

  })
  .add('Slider Buttons', () => ({
    components: { SliderButtons },
    template: 
    `<slider-buttons></slider-buttons>`
  }), {

  })
  .add('Simple Dot', () => ({
    components: { SimpleDot },
    template: 
    `<simple-dot></simple-dot>`
  }), {

  })
  .add('Divider', () => ({
    components: { Divider },
    template: 
    `<divider></dividier>`
  }), {

  })
  .add('Navigation Item Box', () => ({
    components: { NavigationItemBox },
    template: 
    `<navigation-item-box></navigation-item-box>`
  }), {

  })
  .add('Brand Logo', () => ({
    components: { BrandLogo },
    template: 
    `<brand-logo></brand-logo>`
  }), {

  })
  .add('Video Desc Block', () => ({
    components: { VideoDescBlock },
    props: {
      author: {
        type: String,
        default: text('author','Felip Crespo')
      },
      views: {
        type: String,
        default: text('views','10k')
      },
      time: {
        type: String,
        default: text('time','21 hours ago')
      }
    },
    template: `
    <video-desc-block
      :author="author"
      :views="views"
      :time="time"
    >
    </video-desc-block>`
  }), {

  })
  

  

storiesOf('Components/Blocks', module)
  .addDecorator(withKnobs)
  .add('Headline Image', () => ({
    components: { HeadlineImage, PlayButton },
    props: {
      width: {
        type: String,
        default: text('width', '520px')
      },
      height: {
        type: String,
        default: text('height', '140px')
      },
      border_radius: {
        type: String,
        default: text('border_radius', '4px')
      },
      image_src: {
        type: String,
        default: text('image_src', 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80')
      },
      text: {
        type: String,
        default: text('text','Today’s Report: incendios forestales se mantienen activos en el país')
      },
      text_align: {
        type: String,
        default: text('text_align','default')
      }
    },
    template: 
    `<headline-image
      :width="width"
      :height="height"
      :border_radius="border_radius"
      :image_src="image_src"
      :text="text"
      :text_align="text_align"
    >
      <play-button slot="button"></play-button>
    </headline-image>`,
    methods: {

    },
  }), {
    notes: {markdown: test_markdown}
  })
  .add('TextBlock With Image', () => ({
    components: { TextBlockWithImage, IndicatorBox, VideoDescBlock },
    props: {
      width: {
        type: String,
        default: text('width', '160px')
      },
      image_width: {
        type: String,
        default: text('image_width', '160px')
      },
      image_height: {
        type: String,
        default: text('image_height', '96px')
      },
      image_border_radius: {
        type: String,
        default: text('image_border_radius', '4px')
      },
      image_src: {
        type: String,
        default: text('image_src', 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80')
      },
      text: {
        type: String,
        default: text('text','Ebrio y con licencia suspendida: conductor...')
      },
      text_align: {
        type: String,
        default: text('text_align','default')
      },
      is_primary: {
        type: Boolean,
        default: boolean('is_primary', true)
      }
    },
    template: 
    `
    <div>
    <text-block-with-image 
      :width="width"
      :image_width="image_width"
      :image_height="image_height"
      :image_border_radius="image_border_radius"
      :image_src="image_src"
      :text="text"
      :text_align="text_align"
    >
    </text-block-with-image>
    <text-block-with-image 
      :width="width"
      :image_width="image_width"
      :image_height="image_height"
      :image_border_radius="image_border_radius"
      :image_src="image_src"
      :text="text"
      :text_align="text_align"
    >
      <indicator-box slot="top-left-indicator" 
        :is_primary="is_primary"
      >
        1
      </indicator-box>
      <indicator-box slot="bottom-right-indicator" 
        :width="'29px'" 
        :is_primary="is_primary"
      >
        20:13
      </indicator-box>
    </text-block-with-image>
    <text-block-with-image 
      :width="width"
      :image_width="image_width"
      :image_height="image_height"
      :image_border_radius="image_border_radius"
      :image_src="image_src"
      :text="text"
      :text_align="text_align"
    >
      <indicator-box slot="top-left-indicator" 
        :is_primary="is_primary"
      >
        1
      </indicator-box>
      <indicator-box slot="bottom-right-indicator" 
        :width="'29px'" 
        :is_primary="is_primary"
      >
        20:13
      </indicator-box>
      <video-desc-block
        slot="video-desc-block"
      >
      </video-desc-block>
    </text-block-with-image>
    </div>
    `,
    methods: {
      
    }
  }), {
    notes: {markdown: test_markdown}
  })
  .add('Search Bar', () => ({
    components: { SearchBar },
    props: {
      width: {
        type: String,
        default: text('width', '520px')
      },
      height: {
        type: String,
        default: text('height', '43px')
      },
      border_radius: {
        type: String,
        default: '4px'
      },
      placeholder: {
        type: String,
        default: text('placeholder', 'Search...')
      },
      
    },
    template: `
    <search-bar
      :width="width"
      :height="height"
      :placeholder="placeholder"
      :border_radius="border_radius"
    >
    </search-bar>
    `
  }), {

  })
  .add('Event Item', () => ({
    components: { EventItem },
    props: {
      heading: {
        type: String,
        default: text('heading','50th Fiestas Patrias')
      },
      sub_heading: {
        type: String,
        default: text('sub_heading', 'independencia comienza')
      }
    },
    template: `
    <event-item
      :heading="heading"
      :sub_heading="sub_heading"
    >
    </event-item>
    `
  }), {

  })
  .add('Section Navigation', () => ({
    components: { SectionNavigation, SliderButtons, SimpleDot },
    props: {
      width: {
        type: String,
        default: text('width', '520px')
      },
      height: {
        type: String,
        default: text('height', '27px')
      },
      headline_text: {
        type: String,
        default: text('headline_text', 'Headline')
      },
      headline_item_url: {
        type: String,
        default: text('headline_item_url', '#')
      },
      item1: {
        type: Object,
        default: () => object('item1', {item_text: "World", item_url: "#", item_id: '1'})
      },
      item2: {
        type: Object,
        default: () => object('item2', {item_text: "Sports", item_url: "#", item_id: '2'})
      },
      item3: {
        type: Object,
        default: () => object('item3', {item_text: "Money", item_url: "#", item_id: '3'})
      },
      item4: {
        type: Object,
        default: () => object('item4', {item_text: "Movie", item_url: "#", item_id: '4'})
      }
    },
    template: `
    <div>
      <section-navigation
        :width="width"
        :height="height"
        :headline_text="headline_text"
        :headline_item_url="headline_item_url"
        :items="[item1, item2, item3, item4]"
      ></section-navigation>
      <section-navigation
        :width="width"
        :height="height"
        :headline_text="headline_text"
        :headline_item_url="headline_item_url"
        :items="[item1, item2, item3, item4]"
      >
        <slider-buttons slot="slider-buttons"></slider-buttons>
        <simple-dot slot="indicators"></simple-dot>
        <simple-dot slot="indicators"></simple-dot>
        <simple-dot slot="indicators"></simple-dot>
      </section-navigation>
    </div>
    
    `
  }), {

  })
  .add('Rank List', () => ({
    components: { RankList, NavigationItemBox },
    props: {
      rank_list_name: {
        type: String,
        default: text('rank_list_name', 'Trending Now')
      },
      items: {
        type: Array,
        default: () => [
          {text: 'Kelsea Ballerini', views: 2000, current_state: 'increase'},
          {text: 'Bankruptcy Information', views: 1900, current_state: 'decrease'},
          {text: 'Scarlett Johansson', views: 1800, current_state: 'unchanged'},
          {text: 'Hayley Orrantia', views: 1700, current_state: 'increase'},
          {text: 'Tauck River Cruises', views: 1600, current_state: 'decrease'},
          {text: 'Blake Shelton tour 2020', views: 1500, current_state: 'increase'},
          {text: 'Kate Gosselin', views: 1400, current_state: 'increase'},
          {text: 'Elizabeth Banks', views: 1300, current_state: 'unchanged'},
          {text: 'Hayley Orrantia', views: 1200, current_state: 'decrease'},
          {text: 'Heidi Klum', views: 1100, current_state: 'increase'}
        ]
      }
    },
    template: `
    <rank-list
      :rank_list_name="rank_list_name"
      :items="items"
    >
      <navigation-item-box slot="indicators">1 ~ 10</navigation-item-box>
      <navigation-item-box slot="indicators">10 ~ 20</navigation-item-box>
    </rank-list>
    `
  }), {

  })
  .add('Text Block List', () => ({
    components: { TextBlockList },
    template: `
    <text-block-list></text-block-list>
    `
  }), {

  })
  .add('Ad Block', () => ({
    components: { AdBlock },
    width: {
      type: String,
      default: text('340px')
    },
    height: {
      type: String,
      default: text('120px')
    },
    image_src: {
      type: String,
      default: text('https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80')
    },
    template: `
    <ad-block
      :width="width"
      :height="height"
      :image_src="image_src"
    >
    </ad-block>
    `
  }), {

  })
  .add('Login Card', () => ({
    components: { LoginCard },
    template: `
    <login-card
    >
    </login-card>
    `
  }), {

  })

storiesOf('Components/Sections', module)
  .addDecorator(withKnobs)
  .add('Header Section',() => ({
    components: { HeaderSection },
    template: `
    <header-section></header-section>
    `
  }), {

  })
  .add('Headline News Section',() => ({
    components: { HeadlineNewsSection },
    template: `
    <headline-news-section></headline-news-section>
    `
  }), {

  })
  .add('PopularNewsSection',() => ({
    components: { PopularNewsSection },
    template: `
    <popular-news-section></popular-news-section>
    `
  }), {

  })
  .add('Video Section',() => ({
    components: { VideoSection },
    template: `
    <video-section></video-section>
    `
  }), {

  })
  

storiesOf('Components/Templates', module)
  .addDecorator(withKnobs)
  .add('Vusqa News Template', () => ({
    components: {
      VusqaNewsTemplateGrid
    },
    template: 
    `
    <vusqa-news-template-grid></vusqa-news-template-grid>
    `
  }), {

  })


storiesOf('Components/Pages', module)
  .addDecorator(withKnobs)
  .add('Front Page', () => ({
    components: {
      FrontPage
    },
    template: 
    `
    <front-page></front-page>
    `
  }), {

  })
