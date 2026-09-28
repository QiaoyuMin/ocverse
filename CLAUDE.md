# OCverse 项目说明

## 项目
- **项目名**：OCverse，中文 OC（原创角色）创作平台。
- **背景**：之前用 Bubble.io 做过无代码版本，功能有：登录、角色增删改查、世界观设定、富文本编辑、标签页、作品和故事模块。
- **开发者**：编程新手，边做边学。

## 学习路线（8 步）
1. [x] HTML/CSS 静态角色卡（练习文件保留在 `practice/`）
2. [x] Next.js 项目骨架，并部署到 Vercel
3. [ ] Supabase 注册登录
4. [ ] 角色增删改查
5. [ ] 角色详情页和标签页
6. [ ] 作品模块（图片上传）
7. [ ] 故事模块（富文本）
8. [ ] 世界观模块、权限、手机适配

## 当前进度
- **第 1 步**：已完成。
- **第 2 步**：已完成。Next.js 项目有导航栏、首页、角色列表页，内容是假数据，已部署到 Vercel，每次推送代码会自动重新部署。
- **第 3 步**（进行中）：注册 / 登录 / 退出的代码已写好。用户需要：①本地建 `.env.local` 填入 Supabase 的 URL 和 anon key；②在 Vercel 项目设置里填同样两个环境变量；③在 Supabase 后台关闭「Confirm email」。

## 技术选择
- Next.js 16（App Router），用 JavaScript（不用 TypeScript），样式用普通 CSS（`app/globals.css`），不用 Tailwind。
- 本地运行：`npm install` 然后 `npm run dev`，浏览器打开 http://localhost:3000 。

## 文件结构
- `practice/`：第 1 步的练习文件（`index.html` + `style.css`），只保留做纪念，不参与网站。
- `app/layout.js`：所有页面共用的外框（导航栏、页脚）。
- `app/page.js`：首页（网址 `/`）。
- `app/characters/page.js`：角色列表页（网址 `/characters`）。
- `app/globals.css`：全站样式。
- `components/Navbar.js`：导航栏组件。
- `components/CharacterCard.js`：角色卡组件。
- `data/characters.js`：假的角色数据，第 4 步会换成 Supabase 数据库。
- `app/login/page.js`：登录 / 注册页（网址 `/login`）。
- `app/auth/actions.js`：登录、注册、退出三个服务器函数（Server Actions）。
- `lib/supabase/server.js`：在服务器端创建 Supabase 客户端，负责读写登录 cookie。
- `proxy.js`：每个请求前自动续期登录状态（Next.js 16 里 middleware 改名叫 proxy）。
- `.env.local.example`：环境变量示例。真正的 `.env.local` 不上传 GitHub。

## 以后想做的功能
- 邮箱确认：现在为了简单先关掉 Supabase 的「Confirm email」。以后要开启的话，需要加一个处理确认链接的路由，并把 Supabase 的 Site URL 设成 Vercel 网址。
- 在网页上直接编辑角色卡（改名字、标签、故事等）。按新路线，这会在第 4 步「角色增删改查」里实现，数据存到 Supabase，换设备和别人都能看到。

## 教学要求（给 Claude 的规则）
- 每段代码用简单中文解释在做什么。
- 一次不要改太多。
- 改完告诉我怎么看效果。
- 每做完一个阶段，或者用户有新想法，都要更新这个文件的「当前进度」和「以后想做的功能」。

## Next.js 给 AI 的规则
@AGENTS.md
