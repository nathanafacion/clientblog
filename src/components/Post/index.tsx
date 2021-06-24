
import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlComponent } from '../HtmlContent';
import { PostContainer } from '../PostContainer';
import {StrapiImage} from '../../shared-typed/strapiimage';
import { Category } from '../Category';
import { Author } from '../Author';
import * as Styled from './styles';

export type PostProps =  {
  id: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
  author: Author;
  categories: Category[];
  createdAt: string;
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
      console.log("cover teste");
      console.log(cover)
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
