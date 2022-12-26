import PostPage from "@/components/pages/post";
import { getAllPostsSlugs, getPostBySlug } from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export default async function SlugRoute({
  params,
}: {
  params: { slug: string };
}) {
  const data = getPostBySlug(params.slug);
  return <PostPage post={await data} />;
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
// export const revalidate = 20;
