
import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlComponent } from '../HtmlContent';
import { PostContainer } from '../PostContainer';
import * as Styled from './styles';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
    id,
    title,
    excerpt,
    cover,
    author,
    categories,
    createdAt,
    content,
    }: PostProps) => {

return (
  <>
  <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader author={author} categories={categories} title={title}
          excerpt={excerpt} id={id} cover={cover[0]} createdAt={createdAt}/>
      </PostContainer>
      <PostContainer size="content">
        <HtmlComponent html={content} />
      </PostContainer>

  </Styled.Wrapper>


  </>
);
};
