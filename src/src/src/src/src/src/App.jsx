import React from "react";

export default function App() {
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

      <section className="login">
        <h2>تسجيل الدخول</h2>

        <input
          type="text"
          placeholder="رقم الموبايل أو البريد الإلكتروني"
        />

        <input
          type="password"
          placeholder="كلمة المرور"
        />

        <button
          type="button"
          onClick={() => alert("سيتم تفعيل تسجيل الدخول بعد ربط النظام")}
        >
          دخول
        </button>
      </section>

      <footer>MEDIA PRO © 2026</footer>
    </main>
  );
}
