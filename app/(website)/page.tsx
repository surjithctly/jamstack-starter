import HomePage from "./home";
import { getAllPosts, getSettings } from "@/sanity/client";

export default async function IndexRoute() {
  const posts = await getAllPosts();
  const settings = await getSettings();

  return <HomePage posts={posts} settings={settings} />;
}

// export const revalidate = 60;
