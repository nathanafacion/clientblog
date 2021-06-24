import Head from 'next/head';
import { GetStaticProps} from 'next';
import {defaultLoadPostsVariables,loadPosts, StrapiPostAndSettings} from  '../api/load-posts'
import {PostsTemplate} from   '../templates/PostsTemplate';

export default function Index({ posts, setting, variables}: StrapiPostAndSettings){
  return(
    <>
      <Head>
        <title>
          {setting.blogName} - {setting.description}
        </title>
        <meta name="description" content={setting.description} />
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables}/>
    </>
  )

}

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async() =>{
  let data =null;

  try {
    data = await loadPosts();

  } catch (e) {
    data = null;
  }
  console.log('teste')
  console.log(data);
  if(!data || !data.posts || !data.posts.length){
      return {
        notFound: true,
      };
  }

    console.log(data.posts[0].cover);

    return {
      props: {
        posts:data.posts,
        setting: data.setting,
        variables: {
          ...defaultLoadPostsVariables,
        },
      },
      revalidate: 24*60*60,
    };

};
