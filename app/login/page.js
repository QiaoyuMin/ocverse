// 登录 / 注册页，对应网址 /login
// 同一个表单，两个按钮：点"登录"调用 login，点"注册"调用 signup。
import { login, signup } from "@/app/auth/actions";

export const metadata = {
  title: "登录 · OCverse",
};

export default async function LoginPage({ searchParams }) {
  // 网址里可能带着错误或提示信息，比如 /login?error=xxx
  const { error, message } = await searchParams;

  return (
    <div className="auth-box">
      <h1 className="page-title">登录 OCverse</h1>

      {/* 有错误才显示红框，有提示才显示绿框 */}
      {error && <p className="notice notice-error">{error}</p>}
      {message && <p className="notice notice-ok">{message}</p>}

      <form className="auth-form">
        <label>
          邮箱
          <input type="email" name="email" required placeholder="you@example.com" />
        </label>

        <label>
          密码
          <input type="password" name="password" required minLength={6} placeholder="至少 6 位" />
        </label>

        {/* formAction 决定这个按钮提交给哪个函数 */}
        <div className="auth-buttons">
          <button type="submit" formAction={login} className="button">
            登录
          </button>
          <button type="submit" formAction={signup} className="button button-outline">
            注册新账号
          </button>
        </div>
      </form>
    </div>
  );
}
