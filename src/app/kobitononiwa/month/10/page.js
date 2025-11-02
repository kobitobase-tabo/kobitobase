export default function Month10() {
  return (
    <div className="min-h-screen bg-[#f9fff7] flex flex-col items-center justify-start text-center px-4 py-10">

      <h1 className="text-3xl font-bold text-[#4a6b34] mb-6">10月のにわごと</h1>

      <p className="text-[#375a2c] leading-relaxed max-w-2xl mb-6">
        涼しくなり、植物がよく根を伸ばす季節です🍂<br />
        パンジー・ビオラの植え付けに最適。<br />
        土作りや元肥の準備もこの時期に行うと冬越しが楽になります。
      </p>

      <div className="border border-[#dfe8db] rounded-xl bg-white p-5 shadow max-w-xl w-full text-left">
        <h2 className="text-xl font-bold text-[#4a6b34] mb-3">植えたい植物</h2>
        <ul className="list-disc pl-6 text-[#375a2c] space-y-1">
          <li>パンジー / ビオラ</li>
          <li>ガーデンシクラメン</li>
          <li>ラベンダー（秋植え）</li>
        </ul>
      </div>

      <a
        href="/kobitononiwa"
        className="mt-10 inline-block bg-[#6b8e23] text-white py-3 px-6 rounded-lg text-lg shadow-md hover:opacity-90 transition"
      >
        ← こびとのにわへ戻る
      </a>

    </div>
  );
}

