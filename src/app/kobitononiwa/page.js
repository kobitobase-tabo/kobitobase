"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

// ←★ ここに Accordion を移動！（最重要）
function Accordion({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#dfe8db] py-3">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between">
        <span className="text-[#4a6b34] font-semibold">Q. {q}</span>
        <span className="text-[#6b8e23]">{open ? "−" : "＋"}</span>
      </button>
      {open && <p className="mt-2 text-[#2e4d2a]">A. {a}</p>}
    </div>
  );
}

export default function Kobitonoiwa() {

  const now = new Date();
  const month = now.getMonth() + 1;
  const monthUrl = `/kobitononiwa/month/${month}`;

  const monthlyData = {
    11: {
      desc: "寒さに強い植物で冬支度を。落ち葉掃除もこまめに。",
      plants: "ガーデンシクラメン、クリスマスローズ、ハボタン",
      thumb: "/thumbnails/month11.jpg",
    },
    10: {
      desc: "パンジーやビオラの植え付けが最適。肥料の見直しも◎",
      plants: "パンジー、ビオラ、ガーデンシクラメン",
      thumb: "/thumbnails/month10.jpg",
    },
  };

  const current = monthlyData[month] || {
    desc: "季節に合わせて植物の様子を観察してみましょう🌱",
    plants: "季節の植物",
    thumb: "/thumbnails/default.jpg",
  };

  const pastMonths = [
    { m: 10, label: "10月のにわごと", img: "/thumbnails/month10.jpg" },
    { m: 9, label: "9月のにわごと", img: "/thumbnails/default.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#f9fff7] flex flex-col items-center px-4 py-10 text-center">

      <section className="mb-12">
        <Image src="/kobitononiwa_logo.png" alt="こびとのにわ ロゴ" width={400} height={200} priority />
        <p className="mt-4 text-lg text-[#375a2c]">小さな庭から見える四季の記録🌸</p>
      </section>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 text-left">

        <main className="md:w-2/3 w-full flex flex-col items-center">

          <section className="w-full max-w-3xl mb-12 bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold text-[#4a6b34] mb-4">ガーデニングカレンダー</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2 text-center">
              {Array.from({ length: 12 }, (_, i) => (
                <Link key={i} href={`/kobitononiwa/month/${i + 1}`}
                  className="p-3 bg-[#e7f5e9] rounded-xl hover:bg-[#d9ecd8] transition text-[#2e4d2a] font-semibold">
                  {i + 1}月
                </Link>
              ))}
            </div>
          </section>

          <section className="w-full max-w-3xl mb-12 bg-white rounded-2xl shadow overflow-hidden">
            <Image src={current.thumb} alt={`${month}月`} width={800} height={300} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#4a6b34] mb-2">{month}月のにわごと</h2>
              <p className="text-gray-700 mb-2">{current.desc}</p>
              <p className="text-gray-600 text-sm">🌿 おすすめ植物：{current.plants}</p>
              <Link href={monthUrl} className="inline-block mt-4 bg-[#6b8e23] text-white px-5 py-2 rounded-lg shadow hover:bg-[#5a7b1e] transition">
                → 詳細を見る
              </Link>
            </div>
          </section>

          <section className="w-full max-w-3xl mb-12 bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold text-[#4a6b34] mb-4">過去のにわごと</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pastMonths.map((item, i) => (
                <Link key={i} href={`/kobitononiwa/month/${item.m}`} className="group block">
                  <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                    <Image src={item.img} alt={item.label} width={400} height={200} className="object-cover w-full h-32" />
                    <p className="p-3 text-center text-[#375a2c] font-semibold group-hover:underline">{item.label}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <Link href="/" className="px-6 py-3 bg-[#8b7355] text-white rounded-xl shadow hover:bg-[#7a6549] transition">
            ← KOBITO BASE に戻る
          </Link>

        </main>

        <aside className="md:w-1/3 w-full flex flex-col gap-6">

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-bold text-[#4a6b34] mb-4">植物図鑑</h3>
            <Link href="/kobitononiwa/plant" className="block bg-[#6b8e23] text-white px-4 py-2 rounded-lg text-center shadow hover:bg-[#5a7b1e] transition">
              図鑑をひらく →
            </Link>
          </div>

          <section className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold text-[#4a6b34] mb-4">よくある質問</h2>
            {[
              { q: "植え替えはいつ？", a: "春か秋の穏やかな時期が最適です🌱" },
              { q: "肥料はどのくらい？", a: "成長期に2週間に1回が目安です。" },
              { q: "室内で育てるコツは？", a: "日当たり＆風通しが大切です🍃" },
            ].map((item, idx) => <Accordion key={idx} q={item.q} a={item.a} />)}
          </section>

        </aside>
      </div>

      <Footer />
    </div>
  );
}

