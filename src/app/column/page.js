import Link from "next/link"
import { client } from "@/sanity/client"

export default async function Page() {
  const query = `*[_type == "column"] | order(_createdAt desc){
    title,
    slug,
    publishedAt,
    thumbnail{
      asset->{url}
    }
  }`

  const posts = await client.fetch(query)

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>コラム一覧</h1>

      <ul style={{ display: "grid", gap: "1.5rem" }}>
        {posts.map((post) => (
          <li key={post.slug.current} style={{ borderBottom: "1px solid #ddd", paddingBottom: "1rem" }}>
            <Link href={`/column/${post.slug.current}`} style={{ textDecoration: "none", color: "inherit" }}>
              {post.thumbnail?.asset?.url && (
                <img
                  src={post.thumbnail.asset.url}
                  alt={post.title}
                  style={{ width: "100%", maxWidth: "400px", borderRadius: "6px" }}
                />
              )}
              <h2 style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
