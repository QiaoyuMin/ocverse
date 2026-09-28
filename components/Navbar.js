// 导航栏组件：每个页面顶部都会出现的那一条。
// 现在它会检查你有没有登录：登录了显示邮箱和"退出"，没登录显示"登录"。
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/auth/actions";

// 加了 async，因为要等 Supabase 告诉我们当前用户是谁
export default async function Navbar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        OCverse
      </Link>
      <div className="navbar-links">
        <Link href="/">首页</Link>
        <Link href="/characters">角色</Link>

        {user ? (
          // 已登录：显示邮箱 + 退出按钮（退出也是一个小表单）
          <form action={logout} className="navbar-user">
            <span>{user.email}</span>
            <button type="submit" className="link-button">退出</button>
          </form>
        ) : (
          // 未登录：显示登录链接
          <Link href="/login">登录</Link>
        )}
      </div>
    </nav>
  );
}
