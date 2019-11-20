/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';


// MARKDOWNS
import test_markdown from '@/assets/notes/test.md'


// BLOCKS
import HeadlineImage from '@/components/blocks/headline_image.vue';
import TextBlockWithImage from '@/components/blocks/text_block_with_image.vue';

storiesOf('components/blocks', module)
  .addDecorator(withKnobs)
  .add('Headline Image', () => ({
    components: { HeadlineImage },
    props: {
      
    },
    template: '<headline-image @click="action">Hello Button</headline-image>',
    methods: {
      
    },
  }), {
    notes: {markdown: test_markdown}
  })
  add('TextBlock With Image', () => ({
    components: { TextBlockWithImage },
    props: {
      
    },
    template: '<text-block-with-image @click="action">Hello Button</text-block-with-image>',
    methods: {
      
    },
  }), {
    notes: {markdown: test_markdown}
  })