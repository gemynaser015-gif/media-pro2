import React, { useState } from "react";
import { supabase } from "./supabaseClient";
import "./style.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (error) {
      setError("بيانات الدخول غير صحيحة أو الحساب غير مفعّل.");
      return;
    }

    window.location.reload();
  }

  return (
    <main className="app">
      <header className="header">
        <div className="logo">
          MEDIA <span>PRO</span>
        </div>
        <div className="subtitle">إدارة الإعلانات والعملاء</div>
      </header>

      <section className="welcome">
        <p>مرحباً بك في</p>
        <h1>MEDIA PRO</h1>
        <p>منصتك لإدارة ومتابعة الحملات الإعلانية</p>
      </section>

      <form className="login" onSubmit={handleLogin}>
        <h2>تسجيل الدخول</h2>

        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: "#ff7777" }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "جاري الدخول..." : "دخول"}
        </button>
      </form>

      <footer>MEDIA PRO © 2026</footer>
    </main>
