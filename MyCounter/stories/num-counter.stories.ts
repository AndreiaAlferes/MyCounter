import { html, TemplateResult } from 'lit';
import '../src/main/num-counter.js';

export default {
  title: 'NumCounter',
  component: 'num-counter',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <num-counter style="--num-counter-background-color: ${backgroundColor}" .header=${header}></num-counter>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
