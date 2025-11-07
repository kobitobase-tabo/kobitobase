"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function HiryoVsKatsuryokuzai() {
  return (
    <main className="min-h-screen bg-[#f9fff7] flex flex-col items-center px-4 py-10">
      
      {/* 記事タイトル */}
      <article className="w-full max-w-3xl bg-white rounded-2xl shadow p-8 leading-relaxed">
        <h1 className="text-3xl font-bold text-[#4a6b34] mb-6 text-center">
          肥料と活力剤の違いってなに？🌿
        </h1>

        {/* メイン画像（なくてもOK / 後で差し替え可） */}
        <div className="w-full mb-6 rounded-xl overflow-hidden shadow">
          <Image
            src="/images/fertilizer_thumb.jpg" // → なければ別の画像 or 後で追加OK
            alt="肥料と活力剤"
            width={800}
            height={400}
            className="w-full object-cover"
          />
        </div>

        <p className="text-gray-700 mb-6">
          「肥料と活力剤って、何が違うの？」という質問はとても多いです。
          実はこの二つ、**役割がまったく違う**んです。
          わかりやすく例えると…
        </p>

        <p className="text-lg font-bold text-[#4a6b34] text-center mb-6">
          🌱 肥料 = 植物のごはん  
          💊 活力剤 = 植物のサプリ
        </p>

        <h2 className="text-2xl font-semibold text-[#4a6b34] mt-8 mb-3">肥料とは？</h2>
        <p className="text-gray-700 mb-4">
          植物が成長するために必要な栄養を補給するものです。
          特に有名なのは「N・P・K」と呼ばれる三大栄養素。
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>N（窒素）：葉や茎を育てる</li>
          <li>P（リン）：花や実のつきをよくする</li>
          <li>K（カリ）：根を丈夫にし、体を整える</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#4a6b34] mt-8 mb-3">活力剤とは？</h2>
        <p className="text-gray-700 mb-4">
          活力剤は、栄養ではなく「元気になる成分」を与えるもの。
          弱っているときや植え替え後のケア、季節の変わり目に効果的です。
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>ビタミン</li>
          <li>アミノ酸</li>
          <li>酵素 / 有効菌</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#4a6b34] mt-8 mb-3">結論：どっちも必要？</h2>
        <p className="text-gray-700 mb-6">
          **基本は「肥料」** で健康な生育を支え、  
          **必要なときに「活力剤」をサポートとして加える** のがおすすめです🍃
        </p>

        <p className="bg-[#f3f9f1] border-l-4 border-[#6b8e23] p-4 text-gray-700 rounded-lg mb-8">
          ✅ 例：植え替えしたばかり → 活力剤  <br />
          ✅ ぐんぐん育てたい → 肥料 + 適度な日光・水管理
        </p>
    
        {/* YouTube埋め込み */}
        <div className="my-8">
  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
    <iframe
      src="https://www.youtube-nocookie.com/embed/c0HFYgt3qEc"
      title="肥料と活力剤の違い"
      className="absolute top-0 left-0 w-full h-full rounded-xl shadow"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</div>
        <Link
        href="/kobitononiwa"
        className="px-6 py-3 bg-[#6b8e23] text-white rounded-xl shadow hover:bg-[#5a7b1e] transition"
      >
        ← こびとのにわトップへ戻る
      </Link>
      </article>

      <Footer />
    </main>
  );
}
