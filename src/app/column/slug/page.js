import { client } from "@/src/sanity/client";
import { urlFor } from "@/src/sanity/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function getColumn(slug) {
  const query = `*[_type == "column" && slug.current == $slug][0]{
    title,
    thumbnail,
    body,
    category
  }`;

  return await client.fetch(query, { slug });
}

export default async function ColumnPage({ params }) {
  const column = await getColumn(params.slug);

  if (!column) {
    return <p>記事が見つかりませんでした。</p>;
  }

  const components = {
    types: {
      speech: ({ value }) => (
        <div style={{ display: "flex", margin: "1.5em 0" }}>
          {value.icon && (
            <Image
              src={urlFor(value.icon).width(60).height(60).url()}
              alt=""
              width={60}
              height={60}
              style={{ borderRadius: "50%", marginRight: "12px" }}
            />
          )}
          <div
            style={{
              background: "#fffaf1",
              border: "1px solid #e8dfc8",
              borderRadius: "8px",
              padding: "12px 16px",
              lineHeight: "1.6",
              maxWidth: "500px",
            }}
          >
            {value.text}
          </div>
        </div>
      ),
    },
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#375a2c] mb-6">{column.title}</h1>

      {column.thumbnail && (
        <Image
          src={urlFor(column.thumbnail).width(800).url()}
          alt={column.title}
          width={800}
          height={450}
          className="rounded mb-6"
        />
      )}

      <article className="prose prose-neutral">
        <PortableText value={column.body} components={components} />
      </article>
    </main>
  );
}
