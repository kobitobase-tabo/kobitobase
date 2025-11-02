"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";

// 更新日から7日以内なら New 表示
const isNew = (dateString) => {
  const now = new Date();
  const articleDate = new Date(dateString);
  const diff = (now - articleDate) / (1000 * 60 * 60 * 24); // 日数差
  return diff <= 7;
};


export default function Home() {
  const [activeTab, setActiveTab] = useState("topics");

  const articles = {
  topics: [
    { title: "KOBITO BASEが始まりました！", date: "2025.11.04", link: "/kobitobase/start" },
  ],
  niwa: [
    { title: "「11月のにわごと」更新しました", date: "2025.11.04", link: "/kobitononiwa/month/11" },
  ],
  lab: [
    { title: "「九州地区予選会出場レポート」更新しました", date: "2025.11.04", link: "/kobitolab/report/kyushu2025" },
  ],
};


const renderArticles = (tab) => (
  <ul className="divide-y divide-gray-200">
    {articles[tab].length > 0 ? (
      articles[tab].map((item, index) => (
        <li key={index} className="py-3">
          <div className="flex items-center gap-2">
            {isNew(item.date) && (
              <span className="text-white text-xs bg-[#e57300] px-2 py-0.5 rounded-md">
                New
              </span>
            )}
            <Link href={item.link} className="text-[#4a6b34] font-semibold hover:underline">
              {item.title}
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            更新日：{item.date}
          </p>
        </li>
      ))
    ) : (
      <li className="py-6 text-gray-500 text-center">準備中です🌱</li>
    )}
  </ul>
);


  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f8f4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "50px",
      }}
    >
      {/* ロゴ */}
      <Image
        src="/kobitobase_logo2.png"
        alt="KOBITO BASE ロゴ"
        width={400}
        height={260}
        priority
      />

      {/* ボタン */}
      <div style={{ marginTop: "40px", marginBottom: "50px" }}>
        <Link
          href="/kobitononiwa"
          style={{
            margin: "15px",
            padding: "14px 28px",
            fontSize: "18px",
            backgroundColor: "#6b8e23",
            color: "white",
            borderRadius: "10px",
            textDecoration: "none",
            boxShadow: "0 3px 5px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          こびとのにわ
        </Link>
        <Link
          href="/kobitolab"
          style={{
            margin: "15px",
            padding: "14px 28px",
            fontSize: "18px",
            backgroundColor: "#86827eff",
            color: "white",
            borderRadius: "10px",
            textDecoration: "none",
            boxShadow: "0 3px 5px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          KOBITO LAB
        </Link>
      </div>

      {/* トピックス欄 */}
      <section className="max-w-[400px] w-full bg-[#fdfcf8] border border-[#e0dcd2] shadow-md rounded-xl p-6 relative overflow-hidden">
        {/* ノート風の上タブ */}
        <div className="flex justify-around mb-4">
          <button
            onClick={() => setActiveTab("topics")}
            className={`py-2 px-4 text-sm font-semibold rounded-t-md transition ${
              activeTab === "topics"
                ? "bg-[#8b7355] text-white shadow-inner"
                : "bg-[#e7e2d8] text-[#5c4b3a] hover:bg-[#dcd3c6]"
            }`}
          >
            トピックス
          </button>
          <button
            onClick={() => setActiveTab("niwa")}
            className={`py-2 px-4 text-sm font-semibold rounded-t-md transition ${
              activeTab === "niwa"
                ? "bg-[#6b8e23] text-white shadow-inner"
                : "bg-[#e5ebda] text-[#4a6b34] hover:bg-[#dce4cf]"
            }`}
          >
            こびとのにわ
          </button>
          <button
            onClick={() => setActiveTab("lab")}
            className={`py-2 px-4 text-sm font-semibold rounded-t-md transition ${
              activeTab === "lab"
                ? "bg-[#86827e] text-white shadow-inner"
                : "bg-[#e6e6e6] text-[#555] hover:bg-[#dcdcdc]"
            }`}
          >
            KOBITO LAB
          </button>
        </div>

        {/* 本文リスト */}
        <div className="min-h-[200px] bg-white rounded-b-lg p-4 border-t border-[#dcdcdc]">
          {renderArticles(activeTab)}
        </div>

        {/* お知らせリンク追加 */}
        <p className="text-center mt-4">
          <Link href="/kobitobase/news" className="text-[#4a6b34] hover:underline">
            過去のお知らせ一覧へ
          </Link>
        </p>
      </section>
      <Footer />
    </main>
  );
}
