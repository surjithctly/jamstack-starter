import { groq } from "next-sanity";

export interface Author {
  name?: string;
  picture?: any;
}
export interface Post {
  _id: string;
  title?: string;
  mainImage?: any;
  date?: string;
  excerpt?: string;
  author?: Author;
  slug?: string;
  body?: any;
}

const postfields = groq`
  _id,
  title,
  date,
  excerpt,
  mainImage,
  "slug": slug.current,
  "author": author->{name, picture},
`;

export const postquery = groq`
*[_type == "post"] | order(publishedAt desc, _updatedAt desc) {
  ${postfields}
}`;

export const singlePost = groq`
 *[_type == "post" && slug.current == $slug][0] {
  body,
    ${postfields}
}`;

export const postpaths = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;
