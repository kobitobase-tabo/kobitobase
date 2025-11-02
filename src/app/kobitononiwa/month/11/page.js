import Link from "next/link";

export default function NovemberGarden() {
  return (
    <main className="min-h-screen bg-[#f9fff7] flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-[#4a6b34] mb-6">
        🍂 11月のにわごと
      </h1>

      <section className="max-w-3xl bg-white shadow rounded-2xl p-6 text-gray-800 leading-relaxed">
        <p className="mb-4">
          秋も深まり、気温が下がってくる11月。冬に向けて植物たちの準備を整える季節です。
        </p>

        <h2 className="text-2xl font-semibold text-[#4a6b34] mt-6 mb-2">
          🌱 今月の作業ポイント
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>落ち葉の掃除と堆肥づくり。</li>
          <li>宿根草の刈り込みや枯れ葉の整理。</li>
          <li>チューリップやスイセンなどの球根を植えつける。</li>
          <li>パンジー・ビオラの植え替えはこの時期がベスト。</li>
          <li>鉢植えは霜対策で軒下などへ移動。</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#4a6b34] mt-6 mb-2">
          🌼 今月のおすすめ植物
        </h2>
        <p>
          <strong>パンジー・ビオラ</strong>：寒さに強く、冬の花壇の主役。  
          <br />
          <strong>ガーデンシクラメン</strong>：日当たりの良い場所に置けば冬中楽しめます。  
          <br />
          <strong>クリスマスローズ</strong>：植え替えや株分けはこの時期が◎。
        </p>

        <h2 className="text-2xl font-semibold text-[#4a6b34] mt-6 mb-2">
          ☀️ ワンポイントアドバイス
        </h2>
        <p>
          寒くなる前にしっかり日光を当てて、株を丈夫にしておきましょう。  
          霜の予報が出たら、鉢植えは夜だけ屋内に避難させるのもおすすめです。
        </p>
      </section>

      {/* 戻るボタン */}
      <Link
        href="/kobitononiwa"
        className="mt-10 inline-block bg-[#6b8e23] text-white py-3 px-6 rounded-lg text-lg shadow-md hover:bg-[#5a7b1e] transition"
      >
        ← こびとのにわトップへ戻る
      </Link>
    </main>
  );
}
