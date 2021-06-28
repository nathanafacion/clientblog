import Head from 'next/head';
import { GetStaticProps} from 'next';
import {defaultLoadPostsVariables,loadPosts, StrapiPostAndSettings} from  '../api/load-posts'
import {PostsTemplate} from   '../templates/PostsTemplate';

export default function Index({ posts, settings, variables}: StrapiPostAndSettings){
  console.log(settings)
  return(
    <>
      <Head>
        <title>
          {settings.blogName} - {settings.description}
        </title>
        <meta name="description" content={settings.description} />
      </Head>
      <PostsTemplate posts={posts} settings={settings} variables={variables}/>
    </>
  )

}

export const getStaticProps: GetStaticProps = async() =>{
  let data =null;

  try {
    data = await loadPosts();

  } catch (e) {
    data = null;
  }

  if(!data || !data.posts || !data.posts.length){
      return {
        notFound: true,
      };
  }
    return {

      props: {
        posts:data.posts,
        settings: data.setting,
        variables: {
          ...defaultLoadPostsVariables,
        },
      },
      revalidate: 24*60*60,
    };

};
