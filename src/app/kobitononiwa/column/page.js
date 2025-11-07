"use client";

import Link from "next/link";
import Image from "next/image";

export default function ColumnList() {
  // ここに読み物(コラム)一覧を追加していく
  const columns = [
    {
      title: "スリット鉢のメリット・デメリット",
      thumb: "/column/slitpot_thumb.jpg",
      link: "/kobitononiwa/column/slitpot",
      desc: "根の回り方が変わる？育つ植物が変わる？スリット鉢の本当の特徴。",
    },
    {
      title: "肥料と活力剤の違い",
      thumb: "/column/fertilizer_thumb.jpg",
      link: "/kobitononiwa/column/fertilizer",
      desc: "「肥料」と「活力剤」、同じように見えて役割が全然違います。",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f9fff7] px-4 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#4a6b34] mb-8">読み物（コラム）一覧</h1>

      <div className="grid gap-6 max-w-4xl w-full grid-cols-1 sm:grid-cols-2">
        {columns.map((item, i) => (
          <Link key={i} href={item.link} className="block group bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <Image
              src={item.thumb}
              alt={item.title}
              width={600}
              height={350}
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg text-[#375a2c] group-hover:underline">{item.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
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
