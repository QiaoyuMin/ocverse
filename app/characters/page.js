// 角色列表页，对应网址 /characters
// 规则：app 里建一个叫 characters 的文件夹，放一个 page.js，就多了这个页面。
import CharacterCard from "@/components/CharacterCard";
import { characters } from "@/data/characters";

export const metadata = {
  title: "角色列表 · OCverse",
};

export default function CharactersPage() {
  return (
    <>
      <h1 className="page-title">全部角色</h1>
      <p className="page-subtitle">共 {characters.length} 个角色</p>

      {/* 把所有角色都显示成卡片 */}
      <div className="card-grid">
        {characters.map((c) => (
          <CharacterCard key={c.id} character={c} />
        ))}
      </div>
    </>
  );
}
