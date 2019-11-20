/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import test_markdown from '@/assets/notes/test.md'

// MARKDOWNS
import test_markdown from '@/assets/notes/test.md'

// BLOCKS
import HeadlineImage from '@/components/blocks/headline_image.vue';
import TextBlockWithImage from '@/components/blocks/text_block_with_image.vue';

// GLOBAL SCSS
import '@/assets/scss/design-tokens/typography/typography-0+.scss';
import '@/assets/scss/design-tokens/typography/typography-600+.scss';
import '@/assets/scss/design-tokens/typography/typography-900+.scss';
import '@/assets/scss/design-tokens/typography/typography-1200+.scss';

storiesOf('Components/Blocks', module)
  .addDecorator(withKnobs)
  .add('Headline Image', () => ({
    components: { HeadlineImage },
    data () {
      return {
        image_src: '@/assets/img/asdsad'
      }
    },
    props: {
      something: {
        default: text('hey')
      },
      something2: {
        default: boolean(false)
      },
      something3: {
        default: object(label, defaultValue, groupId)
      }
    },
    template: `<headline-image :image_src="image_src"></headline-image>`,
    methods: {
      action: action('onMouseOver'),
    },
  }), {
    notes: {markdown: test_markdown}
  })
  .add('TextBlock With Image', () => ({
    components: { TextBlockWithImage },
    props: {
      
    },
    template: '<text-block-with-image>Hello Button</text-block-with-image>',
    methods: {
      
    },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }), {
    notes: {markdown: test_markdown}
  })
