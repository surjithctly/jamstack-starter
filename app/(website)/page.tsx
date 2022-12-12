import HomePage from "@/components/pages/home";
// import PreviewIndexPage from 'components/PreviewIndexPage'
// import { PreviewSuspense } from 'components/PreviewSuspense'
import { getAllPosts } from "@/lib/sanity/client";
// import { previewData } from 'next/headers'

export default async function IndexRoute() {
  // Fetch queries in parallel
  //   const [
  //     // settings,
  //     posts,
  //   ] = await Promise.all([
  //     // getSettings(),
  //     getAllPosts(),
  //   ]);

  const posts = await getAllPosts();

  //console.log("from app/page", posts);

  //   if (previewData()) {
  //     const token = previewData().token || null

  //     return (
  //       <PreviewSuspense
  //         fallback={
  //           <IndexPage loading preview posts={posts} settings={settings} />
  //         }
  //       >
  //         <PreviewIndexPage token={token} />
  //       </PreviewSuspense>
  //     )
  //   }

  //   return <IndexPage posts={posts} settings={settings} />;
  return <HomePage posts={posts} />;
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
// export const revalidate = 1;
