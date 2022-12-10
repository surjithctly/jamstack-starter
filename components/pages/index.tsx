import PostList from "../parts/postlist";
import type { Post } from "../../sanity/lib/groq";

export default function MoreStories({ posts }: { posts: Post[] }) {
  console.log(posts);

  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostList
            key={post._id}
            title={post.title}
            mainImage={post.mainImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
