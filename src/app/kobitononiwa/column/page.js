import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export const revalidate = 60; // サーバー再検証（自動更新）

export default async function NiwaColumnList() {
  const query = `*[_type == "column" && category match "にわ"] | order(_updatedAt desc){
    title,
    slug,
    "date": _updatedAt,
    mainImage
  }`;

  const posts = await client.fetch(query);

  return (
    <main className="max-w-4xl mx-auto pt-10 pb-20 px-4"
  style={{ backgroundColor: "#f8f8f4", minHeight: "100vh" }}
    >
      <h1 className="text-3xl font-bold text-[#4a6b34] mb-8">
        🌱 こびとのにわのコラム一覧
      </h1>

      {posts.length === 0 && (
        <p className="text-gray-500">まだコラムがありません。</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {posts.map((post) => (
          <Link
            key={post.slug.current}
            href={`/kobitononiwa/${post.slug.current}`}
            className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
          >
            {post.mainImage && (
              <Image
                src={urlFor(post.mainImage).width(800).height(600).url()}
                alt={post.title}
                width={800}
                height={600}
                className="h-48 w-full object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-[#375a2c]">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                更新日：{post.date.split("T")[0]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
