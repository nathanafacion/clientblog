import { Meta, Story } from '@storybook/react/types-6-0';
import { HtmlComponent, HtmlComponentProps } from '.';
import mock from './mock';

export default {
  title: 'HtmlComponent',
  component: HtmlComponent,
  args: {
    html: mock,
  },

} as Meta;

export const Template: Story<HtmlComponentProps> = (args) => {
  return (
    <div style={{maxWidth: '800px', margin: '0 auto'}}>
      <HtmlComponent {...args} />
    </div>
  );
};
