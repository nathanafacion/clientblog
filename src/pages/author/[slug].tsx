import Head from 'next/head';
import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/dist/client/router';
import {defaultLoadPostsVariables, loadPosts, StrapiPostAndSettings} from '../../api/load-posts';
import {PostsTemplate} from '../../templates/PostsTemplate';
import {AguardeTemplate} from '../../templates/AguardeTemplate';

export default function AuthorPage({ posts, setting, variables}: StrapiPostAndSettings){
   const router = useRouter();

   if(router.isFallback){
     return <AguardeTemplate/>
   }

   const post = posts[0];

   return (
     <>
      <Head>
        <title>
          Author: {post.author.displayName} - {setting.blogName}
        </title>
      </Head>
      <PostsTemplate posts = {posts} settings={setting} variables={variables} />
     </>
   );
}

export const getStaticPaths: GetStaticProps<StrapiPostAndSettings> = async() =>{

    return {
      paths: [],
      fallback: true,
    };

};


export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async(ctx) =>{
  let data = null;
  const variables = {authorSlug: ctx.params.slug as string};

  try {
    data = await loadPosts(variables);

  } catch (e) {
    data = null;
  }

  if(!data || !data.posts || !data.posts.length){
    return {
      notFoud: true,
    };
  }

    return {
      props: {
        posts:data.posts,
        setting: data.setting,
        variables:{
          ...defaultLoadPostsVariables,
          ...variables,
        }
      },
      revalidate: 24*60*60,
    };
};
