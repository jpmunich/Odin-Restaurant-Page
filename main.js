(() => {
  "use strict";
  function e(e) {
    const t = document.createElement("div");
    return t.classList.add("menu-item"), e.appendChild(t), t;
  }
  function t() {
    const e = document.createElement("h1");
    (e.innerText = "Greeks Gyros"), e.classList.add("menu-title");
    const t = document.createElement("div");
    t.classList.add("menu-overlay");
    const a = document.createElement("div");
    a.classList.add("link-container"),
      document.getElementById("content").appendChild(t),
      t.appendChild(e),
      t.appendChild(a),
      n(a, "Home", "link", "home"),
      n(a, "Menu", "link", "menu"),
      n(a, "Contact", "link", "contact");
  }
  const n = (e, t, n, a) => {
    const c = document.createElement("button");
    return (
      (c.innerText = t),
      c.classList.add(n),
      e.appendChild(c),
      (c.dataset.buttonType = a),
      c
    );
  };
  function a(n, d) {
    var i;
    (i = n),
      document.querySelector(i).remove(),
      null !== document.querySelector(".menu-overlay") &&
        document.querySelector(".menu-overlay").remove(),
      (function (n) {
        "home" === n && o(),
          "menu" === n &&
            (t(),
            (function () {
              document.getElementById("content").style.backgroundImage =
                "url(./images/background-img.jpg)";
              const t = document.createElement("div");
              t.classList.add("menu-page-container"),
                document.getElementById("content").appendChild(t),
                c("h2", "Menu", t);
              const n = document.createElement("div");
              n.classList.add("menu-container"), t.appendChild(n);
              const o = document.createElement("div");
              o.classList.add("menu-item-container"),
                c("h3", "Appetizers", n),
                n.appendChild(o);
              const d = document.createElement("div");
              d.classList.add("menu-item-container"),
                c("h3", "Entrees", n),
                n.appendChild(d);
              const i = document.createElement("div");
              i.classList.add("menu-item-container"),
                c("h3", "Desserts", n),
                n.appendChild(i);
              const s = e(o);
              c("h4", "Hummus", s),
                c(
                  "p",
                  "Pureed chick peas, tahini and lemon, garnished with parsley, olive oil and diced tomatoes",
                  s
                );
              const r = e(o);
              c("h4", "Garlic Feta Fries", r),
                c(
                  "p",
                  "French fries mixed in our homemade garlic sauce and feta cheese",
                  r
                );
              const l = e(o);
              c("h4", "Crispy Calamari", l),
                c(
                  "p",
                  "Calamari seasoned just to perfection, served with spicy tahini sauce",
                  l
                );
              const m = e(o);
              c("h4", "Spanakopita", m),
                c(
                  "p",
                  "Classic spanakopita (spinach and cheese wrapped in phyllo dough)",
                  m
                );
              const u = e(d);
              c("h4", "Stuffed Peppers", u),
                c(
                  "p",
                  "Red peppers stuffed with rice, garbanzo beans, tomatoes and onions in tomato sauce",
                  u
                );
              const p = e(d);
              c("h4", "Mixed Grill", p),
                c(
                  "p",
                  "Mixed grill comes with two skewers: one lamb & one chicken served with rice and a side salad",
                  p
                );
              const h = e(d);
              c("h4", "Gyros Platter", h),
                c(
                  "p",
                  "juicy gyros cooked to perfection, served with rice, side salad & tzatziki sauce",
                  h
                );
              const y = e(d);
              c("h4", "Chicken Kabab", y),
                c(
                  "p",
                  "Chicken tenders marinated in garlic, olive oil and Mediterranean spices",
                  y
                );
              const g = e(i);
              c("h4", "Baklava", g),
                c(
                  "p",
                  "Homemade simple syrup, paper thin phyllo dough, butter and walnuts topped with pistachio nuts",
                  g
                );
              const k = e(i);
              c("h4", "Tiramisu", k),
                c(
                  "p",
                  "Ladyfingers dipped in coffee, layered with a whipped mixture of egg yolks & mascarpone",
                  k
                ),
                document
                  .querySelector('[data-button-type="home"]')
                  .addEventListener("click", () => {
                    a(".menu-page-container", "home");
                  }),
                document
                  .querySelector('[data-button-type="contact"]')
                  .addEventListener("click", () => {
                    a(".menu-page-container", "contact");
                  });
            })()),
          "contact" === n &&
            (t(),
            (function () {
              document.getElementById("content").style.backgroundImage =
                "url(./images/contact-background.jpg)";
              const e = document.createElement("div");
              e.classList.add("contact-page-container"),
                document.getElementById("content").appendChild(e),
                c("h2", "Contact Us!", e),
                c("p", "Phone: 555-555-5555", e),
                c("p", "greeksgyros@gmail.com", e),
                c("p", "543 W St", e),
                c("p", "Mykonos, Greece, 84600", e);
              const t = (function () {
                const e = document.createElement("div");
                return (
                  e.classList.add("employment-page-container"),
                  c("h3", "Now Hiring!", e),
                  c("p", "Employment Phone Number: 555-555-5554", e),
                  c("p", "greeksgyrosjobs@gmail.com", e),
                  e
                );
              })();
              e.appendChild(t),
                document
                  .querySelector('[data-button-type="home"]')
                  .addEventListener("click", () => {
                    a(".contact-page-container", "home");
                  }),
                document
                  .querySelector('[data-button-type="menu"]')
                  .addEventListener("click", () => {
                    a(".contact-page-container", "menu");
                  });
            })());
      })(d);
  }
  function c(e, t, n) {
    const a = document.createElement(e);
    (a.innerText = t), n.appendChild(a);
  }
  function o() {
    document.getElementById("content").style.backgroundImage =
      "url(./images/background-img.jpg)";
    const e = document.createElement("div"),
      t = document.createElement("h1"),
      c = document.createElement("div");
    c.classList.add("link-container"),
      e.classList.add("title-overlay"),
      (t.innerText = "Greeks Gyros and More!"),
      document.getElementById("content").appendChild(e),
      e.appendChild(t),
      e.appendChild(c),
      n(c, "Home", "link", "home"),
      n(c, "Menu", "link", "menu"),
      n(c, "Contact", "link", "contact"),
      document
        .querySelector('[data-button-type="menu"]')
        .addEventListener("click", () => {
          a(".title-overlay", "menu");
        }),
      document
        .querySelector('[data-button-type="contact"]')
        .addEventListener("click", () => {
          a(".title-overlay", "contact");
        });
  }
  o();
})();