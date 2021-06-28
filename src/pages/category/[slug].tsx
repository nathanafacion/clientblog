import Head from 'next/head';
import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/dist/client/router';
import {defaultLoadPostsVariables, loadPosts, StrapiPostAndSettings} from '../../api/load-posts';
import {PostsTemplate} from '../../templates/PostsTemplate';
import {AguardeTemplate} from '../../templates/AguardeTemplate';

export default function CategoryPage({ posts, settings, variables}: StrapiPostAndSettings){
   const router = useRouter();

   if(router.isFallback){
     return <AguardeTemplate/>
   }

   const categoryName = posts[0].categories.filter(
     (category) => category.slug === router.query.slug,
   )[0].displayName;

   return (
     <>
      <Head>
        <title>
          Category: {categoryName} - {settings.blogName}
        </title>
      </Head>
      <PostsTemplate posts = {posts} settings={settings} variables={variables} />
     </>
   );
}

export const getStaticPaths: GetStaticPaths = async () => {
    console.log("getStaticPaths");
    return {
      paths: [],
      fallback: true,
    };

};


export const getStaticProps: GetStaticProps = async (ctx) => {
  let data = null;
  const variables = { categorySlug: ctx.params.slug as string };

  try {
    data = await loadPosts(variables);
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      settings: data.setting,
      variables: {
        ...defaultLoadPostsVariables,
        ...variables,
      },
    },
    revalidate: 60,
  };
};
