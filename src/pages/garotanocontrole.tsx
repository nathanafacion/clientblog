import Head from 'next/head';
import {GetStaticProps} from 'next';
import {useRouter} from 'next/dist/client/router';
import {defaultLoadPostsVariables, loadPosts, StrapiPostAndSettings} from '../api/load-posts';
import { OtherPagesTemplate } from '../templates/OtherPagesTemplate';
import * as Mock from '../templates/OtherPagesTemplate/mock';

export default function Index({ settings, variables}: StrapiPostAndSettings){
   const router = useRouter();
     return (
     <>
      <Head>
        <title>
          Garota no Controle
        </title>
      </Head>
        <OtherPagesTemplate title={Mock.default.garotaNoControle.title} content={Mock.default.garotaNoControle.content} settings={settings} />
     </>
   );
}



export const getStaticProps: GetStaticProps = async (ctx) => {
  let data = null;

  try {
    data = await loadPosts();
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
      settings: data.setting,
      variables: {
        ...defaultLoadPostsVariables,
      },
    },
    revalidate: 60,
  };
};
