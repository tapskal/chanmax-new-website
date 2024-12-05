// src/lib/wordpress.ts
const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function fetchPosts(page = 1) {
  const response = await fetch(
    `${WORDPRESS_API_URL}/wp/v2/posts?page=${page}&_embed`
  );
  const data = await response.json();
  return data;
}

export async function fetchPost(slug: string) {
  const posts = await fetch(
    `${WORDPRESS_API_URL}/wp/v2/posts?slug=${slug}&_embed`
  );
  const data = await posts.json();
  return data[0];
}

export async function fetchCaseStudies(page = 1) {
  const response = await fetch(
    `${WORDPRESS_API_URL}/wp/v2/case-study?page=${page}&_embed`
  );
  const data = await response.json();
  return data;
}
