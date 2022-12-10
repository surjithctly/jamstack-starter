// import Avatar from "components/AuthorAvatar";
import CoverImage from "./coverimage";
// import Date from "components/PostDate";
import type { Post } from "@/lib/sanity/groq";
import Link from "next/link";

export default function PostList({
  title,
  mainImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, "_id">) {
  //console.log("heeee", mainImage);

  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={mainImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl font-bold leading-snug">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      {/* <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div> */}
      {excerpt && (
        <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      )}
      {/* {author && (
        <Avatar name={author.name} picture={author.picture} />
      )} */}
    </div>
  );
}
