import Link from "next/link";

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-[#f9fff7] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold text-[#4a6b34] mb-4">🌱 ただいま準備中です</h1>
      <p className="text-[#375a2c] mb-6">
        植物の育て方や特徴を現在まとめています。<br />
        もうしばらくお待ちください…⏳
      </p>

      <Link
        href="/kobitononiwa/plant"
        className="px-6 py-3 bg-[#6b8e23] text-white font-bold rounded-xl shadow hover:bg-[#5a7b1e] transition"
      >
        ← 植物図鑑に戻る
      </Link>
    </main>
  );
}
