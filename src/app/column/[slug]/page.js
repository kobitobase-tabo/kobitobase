import { client } from "@/sanity/client"
import { PortableText } from "@portabletext/react"

export async function generateStaticParams() {
  const query = `*[_type == "column"]{ slug }`
  const posts = await client.fetch(query)

  return posts
    .filter(post => post.slug && post.slug.current)
    .map(post => ({
      slug: post.slug.current,
    }))
}

export default async function Page({ params }) {
  const query = `*[_type == "column" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    thumbnail{
      asset->{url}
    }
  }`

  const post = await client.fetch(query, { slug: params.slug })

  if (!post) {
    return <div>記事が見つかりませんでした。</div>
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "720px", margin: "0 auto" }}>
      {post.thumbnail?.asset?.url && (
        <img
          src={post.thumbnail.asset.url}
          alt={post.title}
          style={{ width: "100%", borderRadius: "6px", marginBottom: "1.5rem" }}
        />
      )}

      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{post.title}</h1>

      <PortableText value={post.body} />
    </main>
  )
}
