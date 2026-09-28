// 这个文件里的函数都在服务器上运行（第一行的 "use server" 就是这个意思）。
// 登录页的表单提交后，会调用这里的函数。
"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

// 登录
export async function login(formData) {
  const supabase = await createClient();

  // formData.get("email") 会拿到表单里 name="email" 的输入框内容
  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (error) {
    // 登录失败：跳回登录页，并在网址后面带上错误信息
    redirect("/login?error=" + encodeURIComponent("邮箱或密码不对"));
  }

  // 登录成功：跳到首页
  redirect("/");
}

// 注册
export async function signup(formData) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (error) {
    redirect("/login?error=" + encodeURIComponent("注册失败：" + error.message));
  }

  // 如果 Supabase 开着"邮箱确认"，注册后不会直接登录，需要先去邮箱点链接
  if (!data.session) {
    redirect("/login?message=" + encodeURIComponent("注册成功，请去邮箱点确认链接后再登录"));
  }

  redirect("/");
}

// 退出登录
export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
