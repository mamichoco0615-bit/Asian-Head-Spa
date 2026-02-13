// mobile nav
(() => {
  const btn = document.querySelector(".hamburger");
  const body = document.body;
  const navLinks = document.querySelectorAll(".nav a");

  if (!btn) return;

  btn.addEventListener("click", () => {
    const isOpen = body.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((a) => {
    a.addEventListener("click", () => {
      body.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });

  // scroll したら自動で閉じる（便利）
  window.addEventListener("scroll", () => {
    if (body.classList.contains("is-open")) {
      body.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }
  }, { passive: true });
})();

// reveal on scroll
(() => {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("is-show");
    });
  }, { threshold: 0.12 });

  els.forEach((el) => io.observe(el));
})();

// contact form (dummy)
(() => {
  const form = document.getElementById("contactForm");
  const done = document.getElementById("formDone");
  if (!form || !done) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    done.textContent = "送信完了しました。担当よりご連絡します（ポートフォリオ用ダミー）";
    form.reset();
  });
})();

// map dummy
(() => {
  const btn = document.getElementById("mapBtn");
  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("地図リンク（ダミー）です。実案件なら Google Map のURLに差し替えます。");
  });
})();