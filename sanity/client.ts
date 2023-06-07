import { apiVersion, dataset, projectId, useCdn } from "./config";
import { type Post, postquery, singlePost, postpaths } from "./groq";
import { createClient } from "next-sanity";

if (!projectId) {
  console.error(
    "The Sanity Project ID is not set. Check your environment variables."
  );
}

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null;

// export async function getSettings(): Promise<Settings> {
//     if (client) {
//         return (await client.fetch(settingsQuery)) || {}
//     }
//     return {}
// }

export async function getAllPosts(): Promise<Post[]> {
  console.log(
    "refetching data..",
    Date.now(),
    useCdn,
    "log fetch",
    await client.fetch(postquery)
  );

  if (client) {
    return (await client.fetch(postquery)) || [];
  }
  return [];
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(singlePost, { slug })) || ({} as any);
  }
  return {} as any;
}

export async function getAllPostsSlugs(): Promise<Pick<Post, "slug">[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postpaths)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

// export async function getPostAndMoreStories(
//     slug: string,
//     token?: string | null
// ): Promise<{ post: Post; morePosts: Post[] }> {
//     if (projectId) {
//         const client = createClient({
//             projectId,
//             dataset,
//             apiVersion,
//             useCdn,
//             token: token || undefined,
//         })
//         return await client.fetch(postAndMoreStoriesQuery, { slug })
//     }
//     return { post: null, morePosts: [] }
// }
