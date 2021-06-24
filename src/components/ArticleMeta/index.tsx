import Link from 'next/link';
import { Author } from '../../shared-types/author';
import { Category } from '../../shared-types/category';
import { formatDate } from '../../utils/format-date';
import * as Styled from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  author: Author;
  categories: Category[];
};

export const ArticleMeta = ({
  createdAt,
  author,
  categories,
}: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        {author && typeof author !== 'undefined' && (
          <>
            <span>Por </span>
            <Link href={`/author/${author.slug}`}>{author.displayName}</Link>
            <span className="separator"> | </span>
            <time dateTime={createdAt}>{formatDate(createdAt)}</time>

          </>
        )}
        {categories && typeof categories !== 'undefined' && (
          <>
            <span className="separator"> | </span>
            <span className="categories">
              {categories.map((category) => {
                return (
                  <span key={`article-meta-cat-${category.id}`}>
                    <Link href={`/category/${category.slug}`}>
                      {category.displayName}
                    </Link>
                  </span>
                );
              })}
            </span>
          </>
      )}
      </p>
    </Styled.Wrapper>
  );
};
