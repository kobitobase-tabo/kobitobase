"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Kobitonoiwa() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const questions = [
  {
    q: "庭づくりを始める一番いい季節は？",
    a: "春または秋が育てやすい季節です。極端に暑い・寒い時期は避けるのがおすすめです。",
  },
  {
    q: "水やりは毎日必要？",
    a: "土の表面が乾いてからでOKです。季節や植物によって頻度は変わります🌱",
  },
  {
    q: "肥料はどれを使えばいい？",
    a: "基本は緩効性肥料＋状況に応じて液肥を使うとバランスが良いです。",
  }
];

  // 今日の月を自動取得
  const now = new Date();
  const month = now.getMonth() + 1;
  const monthUrl = `/kobitononiwa/month/${month}`;

  // 月ごとの紹介データ
  const monthlyData = {
    11: {
      desc: "寒さに強い植物で冬支度を。落ち葉掃除もこまめに。",
      plants: "ガーデンシクラメン、クリスマスローズ、ハボタン",
      thumb: "/thumbnails/month11.jpg",
    },
    10: {
      desc: "パンジーやビオラの植え付けが最適。肥料の見直しも◎",
      plants: "パンジー、ビオラ、ガーデンシクラメン",
      thumb: "/thumbnails/month10.jpg",
    },
  };

  const current = monthlyData[month] || {
    desc: "季節に合わせて植物の様子を観察してみましょう🌱",
    plants: "季節の植物",
    thumb: "/thumbnails/default.jpg",
  };

  // 過去のにわごとリスト（必要に応じて追加OK）
  const pastMonths = [
    { m: 10, label: "10月のにわごと", img: "/thumbnails/month10.jpg" },
    { m: 9, label: "9月のにわごと", img: "/thumbnails/preparation.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#f9fff7] flex flex-col items-center px-4 py-10 text-center">
      
      {/* ロゴ */}
      <section className="mb-12">
        <Image src="/kobitononiwa_logo.png" alt="こびとのにわ ロゴ" width={400} height={200} priority />
        <p className="mt-4 text-lg text-[#375a2c]">小さな庭から見える四季の記録🌸</p>
      </section>

      {/* 2カラム */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 text-left">

        {/* 左カラム */}
        <main className="md:w-2/3 w-full flex flex-col items-center">

          {/* カレンダー */}
          <section className="w-full max-w-3xl mb-12 bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold text-[#4a6b34] mb-4">ガーデニングカレンダー</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2 text-center">
              {Array.from({ length: 12 }, (_, i) => (
                <Link
                  key={i}
                  href={`/kobitononiwa/month/${i + 1}`}
                  className="p-3 bg-[#e7f5e9] rounded-xl hover:bg-[#d9ecd8] transition text-[#2e4d2a] font-semibold"
                >
                  {i + 1}月
                </Link>
              ))}
            </div>
          </section>

          {/* 今月のにわごと */}
          <section className="w-full max-w-3xl mb-12 bg-white rounded-2xl shadow overflow-hidden">
            <Image src={current.thumb} alt={`${month}月`} width={800} height={300} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#4a6b34] mb-2">{month}月のにわごと</h2>
              <p className="text-gray-700 mb-2">{current.desc}</p>
              <p className="text-gray-600 text-sm">🌿 おすすめ植物：{current.plants}</p>
              <Link href={monthUrl} className="inline-block mt-4 bg-[#6b8e23] text-white px-5 py-2 rounded-lg shadow hover:bg-[#5a7b1e] transition">
                → 詳細を見る
              </Link>
            </div>
          </section>

          {/* 過去のにわごと */}
          <section className="w-full max-w-3xl mb-12 bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold text-[#4a6b34] mb-4">過去のにわごと</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pastMonths.map((item, i) => (
                <Link key={i} href={`/kobitononiwa/month/${item.m}`} className="group block">
                  <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                    <Image src={item.img} alt={item.label} width={400} height={200} className="object-cover w-full h-32" />
                    <p className="p-3 text-center text-[#375a2c] font-semibold group-hover:underline">{item.label}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        {/* 読みもの（コラム） */}
<section className="w-full max-w-3xl mb-12 bg-white rounded-2xl shadow p-6">
  <h2 className="text-2xl font-bold text-[#4a6b34] mb-4">📚 読みもの（コラム）</h2>

  {/* ✨ 記事リストは Sanity で管理するので削除 */}

  <Link
    href="/kobitononiwa/column"
    className="block text-right text-sm text-[#6b8e23] hover:underline mt-4"
  >
    → もっと見る
  </Link>
</section>

          {/* 戻る */}
          <Link href="/" className="px-6 py-3 bg-[#8b7355] text-white rounded-xl shadow hover:bg-[#7a6549] transition">
            ← KOBITO BASE に戻る
          </Link>
        </main>
        
        {/* 右カラム */}
        <aside className="md:w-1/3 w-full flex flex-col gap-6">

          {/* 図鑑 */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-bold text-[#4a6b34] mb-4">植物図鑑</h3>
            <Link href="/kobitononiwa/plant" className="block bg-[#6b8e23] text-white px-4 py-2 rounded-lg text-center shadow hover:bg-[#5a7b1e] transition">
              図鑑をひらく →
            </Link>
          </div>

          {/* Q&Aコーナー */}
<section className="w-full max-w-3xl mb-12 bg-white rounded-2xl shadow p-6">
  <h2 className="text-2xl font-bold text-[#4a6b34] mb-4">
    よくある質問（Q&A）
  </h2>

  {questions.map((q, index) => (
    <div key={index} className="border-b border-gray-200 pb-3">
      <button
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
        className="w-full text-left flex justify-between items-center py-2 font-semibold text-[#375a2c]"
      >
        {q.q}
        <span>{openIndex === index ? "▲" : "▼"}</span>
      </button>

      {openIndex === index && (
        <p className="mt-2 text-gray-700 leading-relaxed">{q.a}</p>
      )}
    </div>
  ))}
</section>

          {/* プロフィールカード（LAB と同じスタイル） */}
            <div className="relative bg-gradient-to-br from-[#ffffff] to-[#f6fff4] rounded-2xl shadow-lg border border-[#dfe8db] p-6 overflow-hidden">
          
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <Image
                  src="/profile_icon2.png"   // ← 例：プロフィールの丸アイコン画像
                  alt="プロフィール"
                  width={48}
                  height={48}
                  className="rounded-full border border-[#6b8e23]"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#4a6b34] leading-tight">タボ</h3>
                  <p className="text-gray-600 text-sm">こびとのにわ 運営</p>
                </div>
              </div>
          
              <p className="text-gray-700 text-sm mb-4 leading-relaxed relative z-10">
                移り行く季節の植物をゆるく発信しています。
              </p>
          
              <div className="flex flex-col gap-2 border-t border-gray-200 pt-3 relative z-10">
                <a href="https://x.com/namakeland" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1DA1F2] hover:underline">
                  X（旧Twitter）
                </a>
                <a href="https://www.youtube.com/@kobitobase" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#FF0000] hover:underline">
                  YouTubeチャンネル
                </a>
              </div>
                    </div>
                  </aside>
                </div>
                <Footer />
    </div>
  );
}
