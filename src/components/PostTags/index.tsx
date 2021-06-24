import * as Styled from './styles';
import {PostTag} from '../../shared-types/tag';
import Link from 'next/link';

export type PostTagsProps = {
  tags?: PostTag[];
};

export const PostTags = ({ tags=[] }: PostTagsProps) => {
  return (
    <Styled.Wrapper>
      tag:
      {tags.map((tag) =>{
        return(
            <span key={tag.id}>
              <Link href={`/tag/${tag.slug}`}>
                <a>{tag.displayName}</a>
              </Link>
            </span>
        );
      })}
    </Styled.Wrapper>
  );
};
