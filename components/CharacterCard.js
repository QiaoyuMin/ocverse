// 角色卡组件：把第 1 步的角色卡做成一个可以重复使用的"积木"。
// 大括号里的 character 是从外面传进来的一个角色的数据，
// 同一个组件传进不同的角色，就能显示不同的卡片。
export default function CharacterCard({ character }) {
  return (
    <article className="card">
      {/* 头像：取名字的第一个字，背景色用角色自己的颜色 */}
      <div className="card-avatar" style={{ backgroundColor: character.color }}>
        {character.name[0]}
      </div>

      <h3 className="card-name">{character.name}</h3>
      <p className="card-tagline">{character.tagline}</p>

      {/* map 的意思是：对 tags 里的每一个标签，都生成一个 <li> */}
      <ul className="card-tags">
        {character.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <p className="card-world">所属世界：{character.world}</p>
    </article>
  );
}
