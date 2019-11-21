/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';

// -------------- MARKDOWNS
import test_markdown from '@/assets/notes/test.md'

// -------------- ATOMS
import PlayButton from '@/components/atoms/play_button.vue';
import IndicatorBox from '@/components/atoms/indicator_box.vue';


// -------------- BLOCKS
import HeadlineImage from '@/components/blocks/headline_image.vue';
import TextBlockWithImage from '@/components/blocks/text_block_with_image.vue';


// -------------- SECTIONS
import HeadlineSection from '@/components/sections/headline_section.vue';


// -------------- TEMPLATES
import VusqaNewsPage from '@/components/templates/vusqa-news/vusqa_news_page.vue';



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
    template: 
    `<indicator-box>1</indicator-box>`
  }), {

  })


storiesOf('Components/Blocks', module)
  .addDecorator(withKnobs)
  .add('Headline Image', () => ({
    components: { HeadlineImage, PlayButton },
    props: {
      block_width: {
        type: String,
        default: text('block_width', '520px')
      },
      block_height: {
        type: String,
        default: text('block_height', '140px')
      },
      block_border_radius: {
        type: String,
        default: text('border_border_radius', '4px')
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
      :block_width="block_width"
      :block_height="block_height"
      :block_border_radius="block_border_radius"
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
    components: { TextBlockWithImage, IndicatorBox },
    props: {
      block_width: {
        type: String,
        default: text('block_width', '160px')
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
      }
    },
    template: 
    `
    <div>
    <text-block-with-image 
      :block_width="block_width"
      :image_width="image_width"
      :image_height="image_height"
      :image_border_radius="image_border_radius"
      :image_src="image_src"
      :text="text"
      :text_align="text_align"
    >
    </text-block-with-image>
    <text-block-with-image 
      :block_width="block_width"
      :image_width="image_width"
      :image_height="image_height"
      :image_border_radius="image_border_radius"
      :image_src="image_src"
      :text="text"
      :text_align="text_align"
    >
      <indicator-box slot="top-left-indicator">1</indicator-box>
      <indicator-box slot="bottom-right-indicator" :width="'29px'">20:13</indicator-box>
    </text-block-with-image>
    </div>
    `,
    methods: {
      
    }
  }), {
    notes: {markdown: test_markdown}
  })

storiesOf('Components/Sections', module)
  .addDecorator(withKnobs)
  

storiesOf('Components/Templates', module)
  .addDecorator(withKnobs)
  .add('Vusqa News Page', () => ({
    components: {
      VusqaNewsPage
    },
    template: 
    `
    <vusqa-news-page></vusqa-news-page>
    `
  }), {

  })

