"use client";
import Image from "next/image";
import Link from "next/link";

export default function Ready() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center py-20">
      <Image
        src="/images/cat_working.png"
        alt="準備中"
        width={220}
        height={220}
        className="mb-6 opacity-95"
      />
      <h2 className="text-2xl font-bold text-[#4a6b34] mb-3">
        ただいま準備中です…⏳
      </h2>
      <p className="text-gray-600 mb-6">
        コンテンツは近日公開予定です。少しだけお待ちください🌱
      </p>

      <Link
        href="/"
        className="mt-4 inline-block bg-[#6b8e23] text-white py-3 px-6 rounded-lg text-lg shadow-md hover:opacity-90 transition"
      >
        ← KOBITO BASE に戻る
      </Link>
    </div>
  );
}
