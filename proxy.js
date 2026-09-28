// proxy.js：每次有人打开网站的任何页面，这个函数都会先运行一次。
// 它的任务只有一个：检查登录状态是否过期，过期了就自动续期，
// 这样用户不用隔一会儿就重新登录。
import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function proxy(request) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // 这一行会触发续期。不要删，也不要在它和 return 之间加别的逻辑。
  await supabase.auth.getUser();

  return response;
}

export const config = {
  // 只对页面运行，跳过图片、CSS、JS 等静态文件，省资源
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
