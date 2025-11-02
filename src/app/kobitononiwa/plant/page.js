"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PlantIndex() {
  const plants = [
    { name: "パンジー", image: "/plants/pansy.jpg", season: "春〜初夏", color: "紫・黄・白・ピンク" },
    { name: "ビオラ", image: "/plants/viola.jpg", season: "秋〜春", color: "紫・青・白" },
    { name: "ラベンダー", image: "/plants/lavender.jpg", season: "春〜夏", color: "紫" },
  ];

  // 🔍 検索用ステート
  const [search, setSearch] = useState("");

  // 🔍 検索フィルタ
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase()) ||
    plant.color.includes(search) ||
    plant.season.includes(search)
  );

  return (
    <main className="min-h-screen bg-[#f9fff7] flex flex-col items-center px-4 py-10">

      {/* 見出し */}
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#4a6b34] mb-2">植物図鑑 🌿</h1>
        <p className="text-[#375a2c] text-lg">
          こびとのにわで紹介した植物たちをまとめました。<br />
          季節ごとにお気に入りの花を見つけてください。
        </p>
      </section>

      {/* 🔍 検索窓 (ナチュラル・ふんわり Bスタイル) */}
      <div className="w-full max-w-md mb-10">
        <div className="bg-white rounded-2xl shadow p-3 flex items-center gap-2 border border-[#dfe8db]">
          <span className="text-[#6b8e23] text-lg">🔍</span>
          <input
            type="text"
            placeholder="植物名・花色・季節で検索…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-[#2e4d2a]"
          />
        </div>
      </div>

      {/* 植物カード一覧 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {filteredPlants.map((plant, index) => (
          <div key={index} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
            <Image
              src={plant.image}
              alt={`${plant.name}の写真`}
              width={400}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-4 text-left">
              <h2 className="text-xl font-bold text-[#4a6b34]">{plant.name}</h2>
              <p className="text-sm text-gray-600">開花期：{plant.season}</p>
              <p className="text-sm text-gray-600 mb-3">花色：{plant.color}</p>

              {/* ← ここを準備中リンクに統一 */}
              <Link href="/kobitononiwa/plant/coming-soon" className="text-[#6b8e23] underline hover:text-[#5a7b1e]">
                詳細を見る →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 戻るリンク */}
      <Link
        href="/kobitononiwa"
        className="mt-12 px-6 py-3 bg-[#6b8e23] text-white font-bold rounded-xl shadow hover:bg-[#5a7b1e] transition"
      >
        ← こびとのにわに戻る
      </Link>
    </main>
  );
}
