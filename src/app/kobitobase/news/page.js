"use client";

import Link from "next/link";

export default function NewsArchive() {
  return (
    <main className="min-h-screen bg-[#f8f8f4] p-10 text-center">
      <h1 className="text-2xl font-bold text-[#8b7355] mb-6">
        過去のお知らせ一覧
      </h1>

      <p className="text-gray-600 mb-10">
        過去に掲載したお知らせをまとめています。
      </p>

      <ul className="space-y-4 text-left mx-auto max-w-xl">
        <li>2025.11.04 — KOBITO BASEが始まりました！</li>
        {/* 必要に応じて追加 */}
      </ul>

      {/* ← aタグ → Link に変更 */}
      <Link
        href="/"
        className="inline-block mt-12 bg-[#8b7355] text-white py-2 px-4 rounded-lg hover:opacity-80 transition"
      >
        ← KOBITO BASE に戻る
      </Link>
    </main>
  );
}
