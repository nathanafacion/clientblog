import { Meta, Story } from '@storybook/react/types-6-0';
import { SobreMimTemplate, SobreMimTemplateProps } from '.';

import mock from './mock';

export default {
  title: 'PostTemplate',
  component: SobreMimTemplate,
  args: mock,
  parameters:{
      layout: 'fullscreen',
  },
} as Meta<SobreMimTemplateProps>;


export const Template: Story<SobreMimTemplateProps> = (args) => {
  return (
    <div>
      <PostTemplate {...args} />
      <Styled.Button onClick={handleLoadMorePosts} disabled={buttonDisabled}>
      </Styled.Button>
    </div>
  );
};
