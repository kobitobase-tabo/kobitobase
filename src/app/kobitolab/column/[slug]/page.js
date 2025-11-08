import { client } from "@/sanity/client";
import Image from "next/image";

export default async function Page({ params }) {
  const { slug } = params;

  const query = `*[_type == "column" && slug.current == $slug][0]{
    title,
    mainImage,
    body
  }`;

  const article = await client.fetch(query, { slug });

  if (!article) {
    return <div className="p-10 text-center">記事が見つかりませんでした。</div>;
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">{article.title}</h1>

      {article.mainImage && (
        <Image
          src={article.mainImage.asset.url}
          alt={article.title}
          width={800}
          height={500}
          className="rounded-lg mb-8"
        />
      )}

      <div className="prose max-w-none leading-relaxed">
        {article.body && article.body.map((block, i) => (
          <p key={i}>{block.children[0].text}</p>
        ))}
      </div>
    </main>
  );
}
