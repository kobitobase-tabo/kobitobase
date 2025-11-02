import Link from "next/link";

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f4] flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-bold text-[#4a6b34] mb-6">お知らせ</h1>

      <div className="max-w-2xl bg-white rounded-2xl shadow p-6 space-y-4 border border-[#e0dcd2]">
        <p><strong>2025.11.01：</strong> KOBITO BASE を公開しました！🎉</p>
      </div>

      <p className="text-sm text-gray-500 mt-8">
        ※お知らせは随時更新します。
      </p>

      {/* 戻るボタン */}
      <Link
        href="/"
        className="px-6 py-3 bg-[#8b7355] text-white font-bold rounded-xl shadow hover:bg-[#7a6549] transition"
      >
        ← KOBITO BASE に戻る
      </Link>
    </main>
  );
}
