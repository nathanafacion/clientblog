import Head from 'next/head';
import {GetStaticProps} from 'next';
import {useRouter} from 'next/dist/client/router';
import {defaultLoadPostsVariables, loadPosts, StrapiPostAndSettings} from '../api/load-posts';
import { OtherPagesTemplate } from '../templates/OtherPagesTemplate';
import * as Mock from '../templates/OtherPagesTemplate/mock';

export default function Index({ post, setting, variables}: StrapiPostAndSettings){
   const router = useRouter();
     return (
     <>
      <Head>
        <title>
          Pesquisa: {router.query.q} - {setting.blogName}
        </title>
      </Head>
        <OtherPagesTemplate title={Mock.default.garotaNoControle.title} content={Mock.default.garotaNoControle.content} settings={setting} />
     </>
   );
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
