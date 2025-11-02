"use client";

import Image from "next/image";
import Link from "next/link";

export default function Kyushu2025Report() {
  return (
    <main className="flex flex-col items-center bg-[#fafafa] min-h-screen p-6 md:p-12">
      <article className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#4a6b34] mb-4">
          九州地区予選会 出場レポート
        </h1>
        <p className="text-gray-600 mb-6">2025年10月12日</p>

        <Image
          src="/thumbnails/kyushu2025.jpg"
          alt="九州地区予選会 出場レポート"
          width={800}
          height={500}
          className="rounded-xl mb-6 w-full"
        />

        <section className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            2025年10月12日、初出場となる九州地区予選会に参加しました。
            大会当日は多くのチームが集まり、白熱した試合が続きました。
          </p>

          <p>
            今回の目標は「自立型500gクラスへの出場」。残念ながら初戦敗退という結果でしたが、
            試合会場の雰囲気や試合の流れを肌で感じ、多くの課題と学びが得られました。
          </p>

          <p>
            特に立ち合い時の反応速度と相手検知の精度向上が次の課題です。
            今後はセンサーの配置見直しと、より高精度な制御アルゴリズムの導入を進めていきます。
          </p>

          <p>
            今後も技術的な挑戦と改良を積み重ねていく予定です。
          </p>
        </section>

        {/* 戻るボタン */}
        <div className="text-center mt-10">
          <Link
            href="/kobitolab"
            className="inline-block bg-[#86827e] text-white py-2 px-6 rounded-lg text-lg shadow-md hover:opacity-90 transition"
          >
            ← KOBITO LAB に戻る
          </Link>
        </div>
      </article>
    </main>
  );
}
