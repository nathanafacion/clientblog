import * as Styled from './styles';
import {SettingsStrapi } from '../../shared-types/settings-strapi';
import {BaseTemplate } from '../Base';
import { useRouter } from 'next/router'
import { HtmlComponent } from '../../components/HtmlContent';
import { PostContainer } from '../../components/PostContainer';
import { Heading } from '../../components/Heading';


import * as Mock from './mock';

export type SobreMimTemplateProps = {
  settings: SettingsStrapi;
};

export const SobreMimTemplate = ({ settings }: PostTemplateProps) => {
  const router = useRouter()
  const handleBack = async() => {
    router.push("/");
  };

  console.log("Mock");
  console.log(Mock.default);

  return (
    <BaseTemplate settings={settings}>
      <Styled.Wrapper>
        <PostContainer size="max">
          <Heading size="big"> {Mock.default.title} </Heading>
        </PostContainer>
        <PostContainer size="content">
          <HtmlComponent html={Mock.default.content} />
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
