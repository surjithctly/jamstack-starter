import Container from "@/components/parts/container";
import { PortableText } from "@portabletext/react";
import type { Post } from "@/lib/sanity/groq";
import { notFound } from "next/navigation";
import CoverImage from "@/components/parts/coverimage";

export default function PostPage(props: {
  loading?: boolean;
  post: Post;
}) {
  const { loading, post } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  return (
    <Container>
      <article>
        <h1 className="text-3xl font-bold ">{post.title}</h1>
        <div className="">
          {post.author && <div>{post.author.name}</div>}
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage
            title={post.title}
            image={post.mainImage}
            priority
          />
        </div>
        <div className="prose prose-lg">
          <PortableText value={post.body} />
        </div>
      </article>
    </Container>
  );
}
