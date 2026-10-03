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

/* Booking: tours (Calendly) and student cuts (Squire) open in a panel instead of a new tab.
   Links stay plain links without JS. */
const TOUR = "https://calendly.com/admin-educoacademy/educo-academy-open-house";
const CUTS = "https://getsquire.com/booking/book/educo-academy-san-jose";
const KINDS = {
  [TOUR]: { title: "Book a tour", sub: "See the floor, meet the educators. 111 N Market St #150, San Jose.", by: "Scheduling by Calendly",
    src: () => `${TOUR}?embed_type=Inline&embed_domain=${location.hostname}&hide_gdpr_banner=1&background_color=fafaf8&text_color=1a1a1a&primary_color=1a1a1a` },
  [CUTS]: { title: "Book a student cut", sub: "Supervised by licensed instructors. 111 N Market St #150, San Jose.", by: "Booking by Squire", src: () => CUTS },
};
const X = '<svg viewBox="0 0 14 14" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 2l10 10M12 2L2 12"/></svg>';
const booker = document.createElement("dialog");
booker.className = "booker";
booker.setAttribute("aria-labelledby", "booker-title");
booker.innerHTML = `
  <header class="booker__top">
    <div><h2 class="h-m" id="booker-title"></h2><p></p></div>
    <button class="menu-btn booker__close" type="button" aria-label="Close booking">${X}</button>
  </header>
  <div class="booker__body"><p class="mono booker__wait">Opening the book…</p><iframe title="Booking"></iframe></div>
  <footer class="booker__foot mono"><span></span><a target="_blank" rel="noopener">Open in a new tab</a></footer>`;
document.body.append(booker);
const bookFrame = booker.querySelector("iframe");
booker.addEventListener("click", (e) => {
  if (e.target.closest(".booker__close") || e.target === booker) booker.close();
});
booker.addEventListener("close", () => { document.body.style.overflow = ""; });
document.addEventListener("click", (e) => {
  const a = e.target.closest(`a[href^="${TOUR}"], a[href^="${CUTS}"]`);
  if (!a || booker.contains(a) || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
  e.preventDefault();
  if (sheet?.classList.contains("is-open")) sheet.querySelector(".sheet-menu__close").click();
  const base = a.href.startsWith(TOUR) ? TOUR : CUTS, k = KINDS[base];
  booker.querySelector("h2").textContent = k.title;
  booker.querySelector(".booker__top p").textContent = k.sub;
  booker.querySelector(".booker__foot span").textContent = k.by;
  booker.querySelector(".booker__foot a").href = base;
  bookFrame.title = k.title;
  if (bookFrame.dataset.base !== base) { bookFrame.dataset.base = base; bookFrame.src = k.src(); }
  booker.showModal();
  document.body.style.overflow = "hidden";
});
