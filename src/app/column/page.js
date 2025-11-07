import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import { urlFor } from "@/src/sanity/client";

export const revalidate = 60; // 60秒ごとにキャッシュ更新（お好み）

async function getColumns() {
  const query = `*[_type == "column"] | order(_createdAt desc) {
    _id,
    title,
    thumbnail,
    category,
    body
  }`;

  return await client.fetch(query);
}

export default async function ColumnList() {
  const columns = await getColumns();

  return (
    <main className="min-h-screen bg-[#f9fff7] px-4 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#4a6b34] mb-8">読み物（コラム）一覧</h1>

      <div className="grid gap-6 max-w-4xl w-full grid-cols-1 sm:grid-cols-2">
        {columns.map((item) => (
          <Link
            key={item._id}
            href={`/column/${item.slug.current}`}
            className="block group bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {item.thumbnail && (
              <Image
                src={urlFor(item.thumbnail).width(600).height(350).url()}
                alt={item.title}
                width={600}
                height={350}
                className="object-cover w-full h-40"
              />
            )}
            <div className="p-4">
              <h2 className="font-bold text-lg text-[#375a2c] group-hover:underline">
                {item.title}
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                {item.category === "garden" && "🌱 園芸"}
                {item.category === "robot" && "🤖 ロボット相撲"}
                {item.category === "base" && "🏠 BASE"}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Link href="/kobitononiwa" className="mt-10 px-6 py-3 bg-[#8b7355] text-white rounded-xl hover:bg-[#7a6549] transition shadow">
        ← こびとのにわへ戻る
      </Link>
    </main>
  );
}
