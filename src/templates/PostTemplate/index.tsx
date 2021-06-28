import * as Styled from './styles';
import { Post } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import {SettingsStrapi } from '../../shared-types/settings-strapi';
import {PostStrapi } from '../../shared-types/post-strapi';
import {BaseTemplate } from '../Base';
import { useRouter } from 'next/router'

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post: PostStrapi;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  const router = useRouter()
  const handleBack = async() => {
    router.push("/");
  };

  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />

      <Styled.TagsContainer>
        <PostTags tags={post.tags}/>
      </Styled.TagsContainer>
      <Styled.ButtonContainer>
        <Styled.Button onClick={() => handleBack()}>
          {'Voltar'}
        </Styled.Button>
      </Styled.ButtonContainer>
    </BaseTemplate>
  );
};
