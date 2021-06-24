import * as Styled from './styles';
import {SettingsStrapi } from '../../shared-types/settings-strapi';
import {BaseTemplate } from '../Base';
import { useRouter } from 'next/router'
import { HtmlComponent } from '../../components/HtmlContent';
import { PostContainer } from '../../components/PostContainer';
import { Heading } from '../../components/Heading';

export type OtherPagesTemplateProps = {
  title: string;
  content: string;
  settings: SettingsStrapi;
};

export const OtherPagesTemplate = ({ title, content, settings }: OtherPagesTemplateProps) => {
  const router = useRouter()
  const handleBack = async() => {
    router.push("/");
  };

  return (
    <BaseTemplate settings={settings}>
      <Styled.Wrapper>
        <PostContainer size="max">
          <Heading size="big"> {title} </Heading>
        </PostContainer>
        <PostContainer size="content">
          <HtmlComponent html={content} />
        </PostContainer>

    </Styled.Wrapper>


      <Styled.ButtonContainer>
        <Styled.Button onClick={handleBack}>
          {'Voltar'}
        </Styled.Button>
      </Styled.ButtonContainer>
    </BaseTemplate>
  );
};
