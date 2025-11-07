"use client";
import Image from "next/image";
import Link from "next/link";

export default function SlitPotColumn() {
  return (
    <main className="flex flex-col items-center bg-[#f9fff7] min-h-screen py-10 px-4 text-gray-700">
      <article className="w-full max-w-3xl bg-white rounded-2xl shadow p-6 md:p-10">

        {/* タイトル */}
        <h1 className="text-3xl font-bold text-[#4a6b34] mb-6 text-center">
          スリット鉢ってなに？根が元気に育つ鉢のしくみ🌱
        </h1>

        {/* アイキャッチ画像 */}
        <Image
          src="/images/column/slit-pot.jpg"   // ← 画像は /public/images/column/ に入れてください
          alt="スリット鉢"
          width={900}
          height={500}
          className="rounded-xl mb-6"
        />

        {/* 本文 */}
        <p className="leading-relaxed mb-4">
          スリット鉢は、鉢の側面や底に細い切れ目（スリット）が入っている形の鉢です。
          このスリットによって<strong>通気性と水はけが良くなり、根が健康に育ちやすい</strong>という特徴があります。
        </p>

        <h2 className="text-2xl font-bold text-[#4a6b34] mt-8 mb-3">根がぐるぐる巻かない🔁</h2>
        <p className="leading-relaxed mb-4">
          通常の鉢では、根が鉢の中をぐるぐる回り（根巻き）、いずれ根詰まりを起こすことがあります。
          しかしスリット鉢では、<strong>根がスリット部分に触れると成長が止まり、代わりに細かい根が増える</strong>ため、
          根鉢がしっかり育ちやすくなります。
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>🌿 根がしっかり張る</li>
          <li>💧 水やりや肥料の吸収が安定する</li>
          <li>😊 生育がゆっくり長く楽しめる</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#4a6b34] mt-8 mb-3">細かいところまで考えられている✨</h2>
        <table className="w-full border-collapse text-center mb-8">
          <tbody>
            <tr>
              <td className="border p-3 bg-[#f5faef]">底の形が少し浮いている</td>
              <td className="border p-3">根腐れ防止 & 通気性アップ</td>
            </tr>
            <tr>
              <td className="border p-3 bg-[#f5faef]">側面の段差</td>
              <td className="border p-3">根がまっすぐ下に伸びやすい</td>
            </tr>
            <tr>
              <td className="border p-3 bg-[#f5faef]">鉢底石が不要</td>
              <td className="border p-3">植え替えが楽になる</td>
            </tr>
          </tbody>
        </table>

        {/* YouTube埋め込み */}
        <div className="my-6 w-full aspect-video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/h6zyvZZ_21I"
            title="YouTube video"
            allowFullScreen
            className="w-full h-full rounded-xl shadow-md"
          />
        </div>

        <h2 className="text-2xl font-bold text-[#4a6b34] mt-8 mb-3">メリットとデメリット🌿</h2>

        <h3 className="text-xl font-semibold mt-4">✅ メリット</h3>
        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>根が健康に育つ</li>
          <li>鉢底石不要で植え替えが楽</li>
          <li>軽くて扱いやすい</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">⚠️ デメリット</h3>
        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>土が少しこぼれることがある → しっかり植えれば防げる</li>
          <li>軽い → 風が強い場所は注意</li>
          <li>見た目はシンプル → 鉢カバーを使えばOK</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#4a6b34] mt-8 mb-3">まとめ🌸</h2>
        <p className="leading-relaxed mb-6">
          見た目は普通の鉢だけど、育てやすさは大きく変わります。<br />
          「植物をしっかり育てたい」「根が大事って言うけど何からしたらいい？」という方には、
          <strong>スリット鉢はぜひ一度使ってほしい鉢です。</strong>
        </p>

        {/* 戻る */}
        <Link
        href="/kobitononiwa"
        className="px-6 py-3 bg-[#6b8e23] text-white rounded-xl shadow hover:bg-[#5a7b1e] transition"
      >
        ← こびとのにわトップへ戻る
      </Link>

      </article>
    </main>
  );
}

