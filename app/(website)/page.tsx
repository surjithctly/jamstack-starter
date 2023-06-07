import HomePage from "./home";
import { getAllPosts } from "@/sanity/client";

export default async function IndexRoute() {
  const posts = await getAllPosts();

  return <HomePage posts={posts} />;
}

// export const revalidate = 60;
