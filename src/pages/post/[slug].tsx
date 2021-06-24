import Head from 'next/head';
import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/dist/client/router';
import {loadPosts, StrapiPostAndSettings} from '../../api/load-posts';
import {PostTemplate} from '../../templates/PostTemplate';

export default function PostPage({ posts, setting}: StrapiPostAndSettings){
   const router = useRouter();

   if(router.isFallback){
     return (

       <>
        <Head>
          <title>
            {post.title} - {setting.blogName}
          </title>
        </Head>
        <h1> Aguarde... </h1>
       </>

     )
   }

   const post = posts[0];

   return (
     <>
      <Head>
        <title>
          {post.title} - {setting.blogName}
        </title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostTemplate post = {post} settings={setting} />
     </>
   );
}

export const getStaticPaths: GetStaticProps<StrapiPostAndSettings> = async() =>{
  let data : StrapiPostAndSettings | null = null;
  let paths = [];

  try {
    data = await loadPosts();
    paths = data.posts.map((post) => ({params: {slug: post.slug}}));

  } catch (e) {
    data = null;
  }

  if(!data || !data.posts || !data.posts.length){
    paths=[];
  }

    console.log(data.posts[0].cover);

    return {
      paths,
      fallback: true,
    };

};


export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async(ctx) =>{
  let data =null;

  try {
    data = await loadPosts({postSlug: ctx.params.slug as string});

  } catch (e) {
    data = null;
  }
  console.log('slug')
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
      },
      revalidate: 24*60*60,
    };

};
