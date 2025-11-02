import Link from "next/link";

export default function StartNotice() {
  return (
    <main className="min-h-screen bg-[#f8f8f4] flex flex-col items-center justify-start px-6 py-12 text-center">
      <h1 className="text-3xl font-bold text-[#6b5a3a] mb-6">
        KOBITO BASE が始まりました！🌿
      </h1>

      <p className="text-gray-700 leading-relaxed max-w-2xl mb-10">
        ガーデニング記録「こびとのにわ」と<br />
        ロボット相撲の活動記録「KOBITO LAB」をまとめた場所として、<br />
        新しいウェブサイト <strong>KOBITO BASE</strong> をオープンしました。
        <br /><br />
        のんびり更新していきますので、よかったらお立ち寄りください🌱
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-[#8b7355] text-white font-bold rounded-xl shadow hover:bg-[#7a6549] transition"
      >
        ← KOBITO BASE に戻る
      </Link>
    </main>
  );
}
