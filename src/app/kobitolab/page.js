import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

async function getColumns() {
  const query = `*[_type == "column" && !(category match "にわ")] | order(_createdAt desc){
  title,
  "thumbnailUrl": thumbnail.asset->url,
  category,
  slug
}`;
  return await client.fetch(query);
}

export default async function KobitoLab() {
  const columns = await getColumns();

  return (
    <main className="flex flex-col items-center bg-[#f4f4f4] min-h-screen p-6 md:p-12">
      {/* ロゴ */}
      <Image
        src="/kobitolab_logo.png"
        alt="KOBITO LAB ロゴ"
        width={400}
        height={200}
        priority
      />

      {/* KOBITO LABとは */}
      <p className="text-gray-700 text-center text-base md:text-lg leading-relaxed max-w-2xl mt-4 mb-8">
        「KOBITO LAB」では<br />
        <a
          href="https://www.robot-sumo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6b8e23] hover:underline"
        >
          全日本ロボット相撲大会
        </a>
        への出場を目指して活動しています。<br />
        規格は500gクラスの自立型。技術と工夫で勝負します。
      </p>

      {/* 2カラム構成 */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
        {/* 左カラム：活動内容・今後の予定 */}
        <section className="md:w-2/3 w-full bg-white rounded-2xl shadow p-6">
          {/* 活動レポートカード一覧 */}
          <h2 className="text-xl font-bold text-[#333] mb-4">活動レポート</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {columns.map((col) => (
              <Link
                key={col.slug.current}
                href={`/kobitolab/column/${col.slug.current}`}
                className="block bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
              >
                {col.thumbnailUrl && (
                  <Image
                    src={col.thumbnailUrl}
                    alt={col.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  {col.category && (
                    <span className="text-xs px-2 py-1 bg-[#e7efe3] rounded text-[#375a2c]">
                      {col.category}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-[#4a6b34] mt-2">{col.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          {/* 戻るボタン */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="px-6 py-3 bg-[#8b7355] text-white rounded-xl shadow hover:bg-[#7a6549] transition"
            >
              ← KOBITO BASE に戻る
            </Link>
          </div>
        </section>

        {/* 右カラム：ロボット紹介＋プロフィール */}
        <aside className="md:w-1/3 w-full flex flex-col gap-6">
          <Link
            href="/kobitolab/robot/i"
            className="no-underline hover:opacity-90 transition"
          >
            <div className="bg-white rounded-2xl shadow p-6 cursor-pointer">
              <h3 className="text-xl font-bold text-[#4a6b34] mb-4">ロボット紹介</h3>
              <Image
                src="/i_robot.png"
                alt="ロボットi"
                width={300}
                height={200}
                className="rounded-xl mb-3 mx-auto"
              />
              <p className="text-gray-700 text-sm leading-relaxed">
                しこ名「 i（アイ）」<br />
                500gクラス自立型<br />
                2025年九州地区予選会出場ロボット。<br />
                詳細はこちら →
              </p>
            </div>
          </Link>

          {/* プロフィールカード */}
          <div className="relative bg-gradient-to-br from-[#ffffff] to-[#f6fff4] rounded-2xl shadow-lg border border-[#dfe8db] p-6 overflow-hidden">
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <Image
                src="/profile_icon2.png"
                alt="プロフィール"
                width={48}
                height={48}
                className="rounded-full border border-[#6b8e23]"
              />
              <div>
                <h3 className="text-lg font-bold text-[#4a6b34] leading-tight">タボ</h3>
                <p className="text-gray-600 text-sm">KOBITO LAB 運営</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm mb-4 leading-relaxed relative z-10">
              個人でロボット相撲作っています🤖<br />
              製作過程をゆるく発信しています。
            </p>

            <div className="flex flex-col gap-2 border-t border-gray-200 pt-3 relative z-10">
              <a href="https://x.com/namakeland" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1DA1F2] hover:underline">
                X（旧Twitter）
              </a>
              <a href="https://www.youtube.com/@kobitobase" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#FF0000] hover:underline">
                YouTubeチャンネル
              </a>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}

