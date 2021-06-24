import Head from 'next/head';
import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/dist/client/router';
import {defaultLoadPostsVariables, loadPosts, StrapiPostAndSettings} from '../../api/load-posts';
import {PostsTemplate} from '../../templates/PostsTemplate';
import {AguardeTemplate} from '../../templates/AguardeTemplate';

export default function CategoryPage({ posts, setting, variables}: StrapiPostAndSettings){
   const router = useRouter();

   if(router.isFallback){
     return <AguardeTemplate/>
   }

   //const categoryName = posts[0].categories.filter(
  //   (category) => category.slug === router.query.slug,
   //)[0].displayName;
   const categoryName="teste";
   return (
     <>
      <Head>
        <title>
          Category: {categoryName} - {setting.blogName}
        </title>
      </Head>
      <PostsTemplate posts = {posts} settings={setting} variables={variables} />
     </>
   );
}

export const getStaticPaths: GetStaticProps<StrapiPostAndSettings> = async() =>{
    console.log("getStaticPaths");
    return {
      paths: [],
      fallback: true,
    };

};


export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async(ctx) =>{
  let data = null;
  const variables= {categorySlug: ctx.params.slug as string}
  console.log("getStaticProps");
  try {

    data = await loadPosts(variables);
  } catch (e) {
    data = null;
  }

  console.log(data.posts);
  console.log(data.posts[0].categories);

  if(!data || !data.posts || !data.posts.length){
    return {
      notFoud: true,
    };
  }

    return {
      props: {
        posts:data.posts,
        setting: data.setting,
        variables: {
          ...defaultLoadPostsVariables,
          ...variables,
        }
      },
      revalidate: 24*60*60,
    };
};
