// ĒDUCŌ — page behaviour
const root = document.documentElement;
root.classList.add("js");
addEventListener("load", () => requestAnimationFrame(() => root.classList.add("is-loaded")));
setTimeout(() => root.classList.add("is-loaded"), 1200);

/* Menu sheet (mobile) */
const sheet = document.querySelector(".sheet-menu");
const menuBtn = document.querySelector(".menu-btn");
if (sheet && menuBtn) {
  const closeBtn = sheet.querySelector(".sheet-menu__close");
  const setOpen = (open) => {
    sheet.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    (open ? closeBtn : menuBtn).focus();
  };
  menuBtn.addEventListener("click", () => setOpen(true));
  closeBtn.addEventListener("click", () => setOpen(false));
  sheet.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  addEventListener("keydown", (e) => { if (e.key === "Escape" && sheet.classList.contains("is-open")) setOpen(false); });
}

/* Schedule configurator: Full-time / Part-time re-specs the table */
const config = document.querySelector("[data-config]");
if (config) {
  const toggle = config.querySelector(".toggle");
  const buttons = toggle.querySelectorAll("button");
  const slots = config.querySelectorAll("[data-ft]");
  const set = (mode) => {
    toggle.dataset.mode = mode;
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.mode === mode)));
    slots.forEach((el) => {
      const next = el.dataset[mode];
      if (el.textContent === next) return;
      el.classList.add("is-swapping");
      setTimeout(() => { el.textContent = next; el.classList.remove("is-swapping"); }, 200);
    });
  };
  buttons.forEach((b) => b.addEventListener("click", () => set(b.dataset.mode)));
}
