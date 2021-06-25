import { Meta, Story } from '@storybook/react/types-6-0';
import { OtherPagesTemplate,  OtherPagesTemplateProps } from '.';
import { PostTemplate} from '../PostTemplate';

import mock from './mock';

export default {
  title: ' OtherPagesTemplate',
  component:  OtherPagesTemplate,
  args: mock,
  parameters:{
      layout: 'fullscreen',
  },
} as Meta <OtherPagesTemplateProps>;


export const Template: Story<OtherPagesTemplateProps> = (args) => {
  return (
    <div>

    </div>
  );
};
