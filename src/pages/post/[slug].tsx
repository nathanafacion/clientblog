import Head from 'next/head';
import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/dist/client/router';
import {loadPosts, StrapiPostAndSettings} from '../../api/load-posts';
import {PostTemplate} from '../../templates/PostTemplate';
import {AguardeTemplate} from '../../templates/AguardeTemplate';

export default function PostPage({ posts, settings}: StrapiPostAndSettings){
   const router = useRouter();

   if (posts && posts.length) {
       const post = posts[0];

       if(router.isFallback){
         return <AguardeTemplate/>

       } else {


         return (
           <>
            <Head>
              <title>
                {post.title} - {settings.blogName}
              </title>
              <meta name="description" content={post.excerpt} />
            </Head>
            <PostTemplate post = {post} settings={settings} />
           </>
         );
     }
   } else {
     return 'Post Inválido';
   }
}

export const getStaticPaths: GetStaticPaths = async () => {
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

    return {
      paths,
      fallback: true,
    };

};


export const getStaticProps: GetStaticProps = async(ctx) =>{
  let data =null;

  try {
    data = await loadPosts({postSlug: ctx.params.slug as string});

  } catch (e) {
    data = null;
  }

  if(!data || !data.posts || !data.posts.length){
      return {
        notFound: true,
      };
  }

    console.log(data.posts[0].cover);

    return {
      props: {
        posts:data.posts,
        settings: data.setting,
      },
      revalidate: 24*60*60,
    };

};
