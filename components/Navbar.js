// 导航栏组件：每个页面顶部都会出现的那一条。
// Link 是 Next.js 提供的"链接"，和 HTML 的 <a> 类似，
// 但点击时不会整页刷新，切换页面更快。
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        OCverse
      </Link>
      <div className="navbar-links">
        <Link href="/">首页</Link>
        <Link href="/characters">角色</Link>
      </div>
    </nav>
  );
}
