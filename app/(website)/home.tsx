import PostList from "../../components/parts/postlist";
import type { Post } from "@/sanity/groq";
import Container from "@/components/parts/container";

export default function HomePage({
  posts,
  settings,
}: {
  posts: Post[];
  settings: Record<string, any>;
}) {
  // console.log(posts);
  return (
    <Container>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter text-center md:text-6xl">
        {settings?.siteName || "Local Title"}
      </h1>
      <div className="max-w-2xl mx-auto mt-4 text-lg text-center">
        <p>{settings?.siteDesc || "Some fallback description"}</p>
        <a
          href={settings?.githubUrl || "#"}
          target="_blank"
          className="inline-block px-3 py-2 mt-4 text-white bg-blue-500 rounded-md"
          rel="noopener noreferrer">
          View on Github
        </a>
      </div>
      <div className="mt-20">
        <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tighter text-center md:text-4xl">
          Our Recent Posts
        </h2>
        <div className="grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-16 ">
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
      </div>
    </Container>
  );
}
