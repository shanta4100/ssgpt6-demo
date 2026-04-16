type Post = {
  slug: string
  title: string
}

const posts: Post[] = [
  {
    slug: 'welcome',
    title: 'Welcome to the SSGPT6 Blog',
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}
