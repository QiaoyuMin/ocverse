// 假数据：先用一个数组假装是"数据库里的角色"。
// 每个 { } 是一个角色，里面是它的各项信息。
// 等到第 4 步接入 Supabase，就把这里换成从数据库读取。
export const characters = [
  {
    id: 1,
    name: "林小夜",
    tagline: "游走于城市夜色中的画师",
    tags: ["画师", "夜猫子", "现代都市"],
    world: "霓虹之城",
    color: "#7c5cff",
  },
  {
    id: 2,
    name: "白砚",
    tagline: "守着一座旧书阁的修书人",
    tags: ["古风", "书卷气", "寡言"],
    world: "青岚山",
    color: "#2f9e8f",
  },
  {
    id: 3,
    name: "阿卡莉",
    tagline: "驾驶旧飞艇送信的少女",
    tags: ["冒险", "机械", "乐天派"],
    world: "浮空群岛",
    color: "#e0823d",
  },
  {
    id: 4,
    name: "零号",
    tagline: "刚学会做梦的机器人",
    tags: ["科幻", "AI", "温柔"],
    world: "第七实验站",
    color: "#4a7bd6",
  },
];
