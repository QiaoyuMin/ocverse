// 首页，对应网址 /
// app 文件夹里的 page.js 就是首页。
import Link from "next/link";
import CharacterCard from "@/components/CharacterCard";
import { characters } from "@/data/characters";

export default function HomePage() {
  // slice(0, 3) 表示只取前 3 个角色，放在首页展示
  const latest = characters.slice(0, 3);

  return (
    <>
      {/* 欢迎区 */}
      <section className="hero">
        <h1>欢迎来到 OCverse</h1>
        <p>在这里创造你的原创角色，搭建属于他们的世界。</p>
        <Link href="/characters" className="button">
          浏览全部角色
        </Link>
      </section>

      {/* 最新角色 */}
      <section>
        <h2 className="section-title">最新角色</h2>
        <div className="card-grid">
          {latest.map((c) => (
            <CharacterCard key={c.id} character={c} />
          ))}
        </div>
      </section>
    </>
  );
}
