/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import test_markdown from '@/assets/notes/test.md'

import MyButton from '../components/atoms/MyButton.vue'


// 아하! / 만 넣으면 알아서 다 되는구나

// 아하! action이 emit으로 전달되는걸 받아와서 출력하는거구나!

const label = 'Styles';
const defaultValue = {
  backgroundColor: 'red'
};
const groupId = 'GROUP-ID1';

const value = object(label, defaultValue, groupId);

const testFunction = () => {
  console.log('testFunction!')
}

storiesOf('components/atoms', module)
  .addDecorator(withKnobs)
  .add('with text', () => ({
    components: { MyButton },
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
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: {
      action: action('onMouseOver'),
    },
  }), {
    notes: {markdown: test_markdown}
  })
  // .add('with JSX', () => ({
  //   components: { MyButton },
  //   render() {
  //     return <my-button onClick={this.action}>With JSX</my-button>;
  //   },
  //   methods: { action: linkTo('Button', 'with some emoji') }
  // }))
  // .add('with some emoji', () => ({
  //   components: { MyButton },
  //   template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
  //   methods: { action: action('clicked') }
  // }))

  storiesOf('components/molecules', module)
  .addDecorator(withKnobs)
  .add('with text', () => ({
    components: { MyButton },
    props: {
      something: {
        default: text('hey')
      },
      something2: {
        default: boolean(false)
      }
    },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }), {
    notes: {markdown: test_markdown}
  })
