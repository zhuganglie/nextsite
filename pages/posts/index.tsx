import { allPosts, Post } from "contentlayer/generated";
import Layout from "@/components/layout";
import type {
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{ posts: Post[] }>
> {
  return { props: { posts: allPosts } };
}

const Posts: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <Layout>
      <Head>
        <title>NextJs Content Layer Blog Template</title>
      </Head>

      {posts.map((post, idx) => (
        <div key={idx}>
          <Link href={post.url}>
            {post.title}
          </Link>
          <p>{post.tags}</p>
        </div>
        
      ))}
    </Layout>
  );
};

export default Posts;