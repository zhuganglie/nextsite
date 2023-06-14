import { allPosts, Post } from "contentlayer/generated";
import { Metadata } from "next";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";
import { TbTag } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Post",
};


function PostCard(post: Post) {
  return (
    <>
    <div className="border border-slate-900 rounded-lg p-4 flex flex-col gap-y-4 items-center">
    <p> {format(parseISO(post.date), "LLLL d, yyyy")}</p>

    <Link
      href={post.url}
      className="w-full h-full cursor-pointer flex group flex-col items-center"
    >
      <h2 className="mb-0 text-xl font-regula text-center group-hover:border-b-slate-900 transition-all duration-300 border-b border-b-white text-slate-900 ">
        {post.title}
      </h2>
    </Link>

    <ul className="flex gap-x-2 m-0">
    {post.tags.map((tag, idx) => (
    <li key={idx} className="list-none flex items-center gap-x-1"><TbTag /><Link href={`/tags/${tag}`}>{tag}</Link></li>
  ))}
  </ul>
    
    </div>
    </>
  );
}

function page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="w-full h-full flex flex-col">    
    <h1>Posts</h1>
        <div className="w-full h-fit overflow-auto space-y-10 flex flex-col xl:px-48 px-10 pt-20">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
   
  );
}

export default page;