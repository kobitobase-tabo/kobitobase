"use client";

import Image from "next/image";
import Link from "next/link";

export default function October2025() {
  return (
    <main className="flex flex-col items-center bg-[#fafafa] min-h-screen p-6 md:p-12">
      <article className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#4a6b34] mb-4">
          10月のにわごと 🍂
        </h1>
        <p className="text-gray-600 mb-6">2025年10月</p>

        <Image
          src="/thumbnails/october2025.jpg"
          alt="10月のにわごと"
          width={800}
          height={500}
          className="rounded-xl mb-6 w-full"
        />

        <section className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            秋のガーデニングシーズンがいよいよ本番。夏に疲れた庭を整えつつ、
            冬〜春に向けた準備を始めましょう。
          </p>

          <h2 className="text-xl font-bold text-[#4a6b34] mt-6 mb-2">🌼 今月の作業ポイント</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>パンジー・ビオラ・ガーデンシクラメンなどの植え付け</li>
            <li>球根（チューリップ・スイセン）の植え付け</li>
            <li>宿根草の切り戻し・株分け</li>
            <li>落ち葉掃除・マルチング（霜よけ）準備</li>
          </ul>

          <h2 className="text-xl font-bold text-[#4a6b34] mt-6 mb-2">🌿 おすすめの植物</h2>
          <p>
            冬に向けて長く楽しめる草花を植えるのにぴったりの時期です。  
            特におすすめは次の3つ：
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>パンジー・ビオラ（花期が長く、寒さに強い）</li>
            <li>ガーデンシクラメン（寄せ植えの主役に）</li>
            <li>ハボタン（冬の彩りに）</li>
          </ol>

          <h2 className="text-xl font-bold text-[#4a6b34] mt-6 mb-2">💡 ワンポイントアドバイス</h2>
          <p>
            植え替えの際は根をほぐしすぎず、早朝や夕方の涼しい時間帯に行うと◎  
            植え付け後はたっぷりと水をあげて根付きを促しましょう。
          </p>
        </section>

        {/* 戻るボタン */}
        <div className="text-center mt-10">
          <Link
            href="/kobitononiwa"
            className="inline-block bg-[#6b8e23] text-white py-2 px-6 rounded-lg text-lg shadow-md hover:opacity-90 transition"
          >
            ← こびとのにわ に戻る
          </Link>
        </div>
      </article>
    </main>
  );
}
