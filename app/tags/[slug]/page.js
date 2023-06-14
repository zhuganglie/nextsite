
import { allPosts } from "contentlayer/generated";
import Link from 'next/link';
import { TbArrowBack } from "react-icons/tb";

export default function TagPage({ params }) {
  const slug = decodeURIComponent(params.slug)
  const posts = allPosts.filter((post) => post.tags.includes(slug))
  console.log(slug)
  return (
    <div>
      <h1>Posts tagged with "{slug}"</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`${post.url}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
        <Link href="/tags" className="mt-4 flex items-center gap-x-1"><span>All Tags</span><TbArrowBack /></Link>
    </div>
  )
}

