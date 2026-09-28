// 根布局：所有页面共用的"外框"。
// 导航栏和页脚写在这里，每个页面就都会有，不用重复写。
// {children} 的位置会被换成当前打开的那个页面的内容。
import Navbar from "@/components/Navbar";
import "./globals.css";

// 浏览器标签页上显示的标题和网站描述
export const metadata = {
  title: "OCverse",
  description: "中文原创角色创作平台",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <footer className="site-footer">OCverse · 第 2 步：Next.js 项目骨架</footer>
      </body>
    </html>
  );
}
