"use client";

import Image from "next/image";
import Link from "next/link";

export default function MonthPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#fafafa] text-gray-700 text-center px-4">

      <Image
        src="/images/cat_working.png"
        alt="準備中"
        width={220}
        height={220}
        className="mx-auto opacity-90 mb-4"
      />

      <h1 className="text-2xl font-bold mb-2">準備中です🌱</h1>
      <p className="mb-6">
        この月の「にわごと」情報は、ただいま作成中です。<br />
        もうすこしだけお待ちください🐈☕
      </p>

      <Link
        href="/kobitononiwa"
        className="px-6 py-3 bg-[#6b8e23] text-white rounded-xl shadow hover:bg-[#5a7b1e] transition"
      >
        ← こびとのにわトップへ戻る
      </Link>
    </main>
  );
}