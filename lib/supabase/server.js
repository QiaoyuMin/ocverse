// 在"服务器端"创建一个 Supabase 客户端。
// 页面和表单处理函数都在服务器上运行，就用这个文件里的函数。
// 登录状态保存在浏览器的 cookie 里，这里负责读取和更新 cookie。
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        // Supabase 需要读 cookie 时，把全部 cookie 交给它
        getAll() {
          return cookieStore.getAll();
        },
        // Supabase 需要写 cookie 时（比如登录成功），逐个写进去
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // 在普通页面里是不允许写 cookie 的，只有表单处理函数可以。
            // 这种情况下忽略就好，proxy.js 会负责刷新登录状态。
          }
        },
      },
    }
  );
}
