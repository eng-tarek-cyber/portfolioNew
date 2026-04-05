(function () {
  var PRELOADER_SHOW_MS = 2000;
  var REVEAL_FALLBACK_MS = 850;

  var preloaderTimerHide = null;
  var preloaderDone = false;
  var siteRevealed = false;

  function initAOS() {
    if (typeof AOS === "undefined") return;
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
    requestAnimationFrame(function () {
      AOS.refresh();
    });
  }

  function initTypedInstances() {
    if (document.querySelector(".typing")) {
      new Typed(".typing", {
        strings: [
          "Welcome to my Portfolio",
          "Tarek Ahmed",
          "Front-End Developer",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      });
    }

    if (document.querySelector(".about-typing")) {
      new Typed(".about-typing", {
        strings: ["About Me", "Tarek Eid"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
    }

    if (document.querySelector(".skill-typing")) {
      new Typed(".skill-typing", {
        strings: ["Skills", "مهاراتي"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
    }

    if (document.querySelector(".project-typing")) {
      new Typed(".project-typing", {
        strings: ["Projects", "المشاريع"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
    }

    if (document.querySelector(".contact-typing")) {
      new Typed(".contact-typing", {
        strings: ["CONTACT", "اتصل بنا"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
    }

    if (document.querySelector(".services-typing")) {
      new Typed(".services-typing", {
        strings: ["SERVICES", "قسم الخدمات"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
    }
  }

  function revealSite() {
    if (siteRevealed) return;
    siteRevealed = true;
    document.body.classList.remove("is-preloading");
    requestAnimationFrame(function () {
      initAOS();
      initTypedInstances();
    });
  }

  function finishPreloader() {
    if (preloaderDone) return;
    preloaderDone = true;
    if (preloaderTimerHide) {
      clearTimeout(preloaderTimerHide);
      preloaderTimerHide = null;
    }

    var preloader = document.getElementById("preloader");
    if (!preloader) {
      revealSite();
      return;
    }

    preloader.classList.add("loader-hidden");
    preloader.setAttribute("aria-busy", "false");
    preloader.setAttribute("aria-hidden", "true");

    var revealedAfterAnim = false;
    function tryReveal() {
      if (revealedAfterAnim) return;
      revealedAfterAnim = true;
      revealSite();
    }

    function onTransitionEnd(e) {
      if (e.target !== preloader) return;
      preloader.removeEventListener("transitionend", onTransitionEnd);
      tryReveal();
    }

    preloader.addEventListener("transitionend", onTransitionEnd);
    setTimeout(tryReveal, REVEAL_FALLBACK_MS);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var skipBtn = document.querySelector(".preloader-skip");
    if (skipBtn) {
      skipBtn.addEventListener("click", finishPreloader);
    }
  });

  window.addEventListener("load", function () {
    var preloader = document.getElementById("preloader");
    if (!preloader) {
      if (!siteRevealed) revealSite();
      return;
    }
    if (preloaderDone) return;
    preloaderTimerHide = setTimeout(finishPreloader, PRELOADER_SHOW_MS);
  });
})();

function updateThemeMeta() {
  var meta = document.getElementById("meta-theme-color");
  if (!meta) return;
  meta.setAttribute(
    "content",
    document.documentElement.getAttribute("data-theme") === "light"
      ? "#f8fafc"
      : "#020617"
  );
}

document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");

  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (e) {}
    updateThemeMeta();
  }

  updateThemeMeta();

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next =
        root.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
    });
  }

  document.querySelectorAll(".btn-copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy-target") || "";
      function ok() {
        var prev = btn.textContent;
        btn.classList.add("is-copied");
        btn.innerHTML =
          '<i class="fa-solid fa-check" aria-hidden="true"></i> تم';
        setTimeout(function () {
          btn.classList.remove("is-copied");
          btn.innerHTML =
            '<i class="fa-regular fa-copy" aria-hidden="true"></i> نسخ';
        }, 2000);
      }
      function fail() {
        window.prompt("انسخ يدويًا:", text);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(ok).catch(fail);
      } else {
        fail();
      }
    });
  });

  var modal = document.getElementById("project-modal");
  if (modal) {
    var titleEl = document.getElementById("project-modal-title");
    var descEl = document.getElementById("project-modal-desc");
    var techEl = document.getElementById("project-modal-tech");
    var linksEl = document.getElementById("project-modal-links");
    var mediaEl = document.getElementById("project-modal-media");
    var backdrop = modal.querySelector(".project-modal__backdrop");
    var closeBtn = modal.querySelector(".project-modal__close");
    var lastFocus = null;

    function openModal(card) {
      if (!card) return;
      lastFocus = document.activeElement;
      var h3 = card.querySelector(".project-info h3");
      var p = card.querySelector(".project-info > p");
      var spans = card.querySelectorAll(".project-tech span");
      var anchors = card.querySelectorAll(".project-links a");
      var img = card.querySelector(".project-card__media img");

      titleEl.textContent = h3 ? h3.textContent : "";
      descEl.innerHTML = p ? p.innerHTML : "";
      techEl.innerHTML = "";
      spans.forEach(function (s) {
        var sp = document.createElement("span");
        sp.textContent = s.textContent;
        techEl.appendChild(sp);
      });
      linksEl.innerHTML = "";
      anchors.forEach(function (a) {
        linksEl.appendChild(a.cloneNode(true));
      });
      mediaEl.innerHTML = "";
      if (img) {
        var clone = img.cloneNode(true);
        clone.removeAttribute("loading");
        mediaEl.appendChild(clone);
      }

      modal.removeAttribute("hidden");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      closeBtn.focus();
    }

    function closeModal() {
      modal.setAttribute("hidden", "");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      if (lastFocus && typeof lastFocus.focus === "function") {
        lastFocus.focus();
      }
    }

    document.querySelectorAll(".btn-project-detail").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openModal(btn.closest(".project-card"));
      });
    });

    if (backdrop) backdrop.addEventListener("click", closeModal);
    if (closeBtn) closeBtn.addEventListener("click", closeModal);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hasAttribute("hidden")) {
        closeModal();
      }
    });
  }

  var form = document.getElementById("contact-form");
  if (form) {
    var FORMSUBMIT_ENDPOINT =
      "https://formsubmit.co/ajax/snamr015@gmail.com";
    var okBox = form.querySelector(".form-feedback--success");
    var errBox = form.querySelector(".form-feedback--error");
    var submitBtn = document.getElementById("contact-submit");

    function hideFeedback() {
      if (okBox) {
        okBox.setAttribute("hidden", "");
        okBox.textContent = "";
      }
      if (errBox) {
        errBox.setAttribute("hidden", "");
        errBox.textContent = "";
      }
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      hideFeedback();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var hp = form.querySelector("[name='_gotcha']");
      if (hp && hp.value) return;

      var fd = new FormData(form);
      var payload = {
        name: fd.get("name"),
        email: fd.get("email"),
        subject: fd.get("subject") || "Portfolio contact",
        message: fd.get("message"),
        _gotcha: fd.get("_gotcha") || "",
        _template: "table",
        _captcha: "false",
      };

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }

      fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          if (!res.ok) throw new Error("fail");
          if (okBox) {
            okBox.textContent =
              "تم الإرسال بنجاح. شكرًا لتواصلك — سأرد قريبًا.";
            okBox.removeAttribute("hidden");
          }
          form.reset();
        })
        .catch(function () {
          if (errBox) {
            errBox.textContent =
              "تعذّر الإرسال. جرّب مباشرة عبر البريد أو واتساب.";
            errBox.removeAttribute("hidden");
          }
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message";
          }
        });
    });
  }
});

var scrollBtn = document.querySelector(".scroll-btn");

if (scrollBtn) {
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", function () {
    scrollBtn.classList.toggle("scroll-btn--visible", window.scrollY > 320);
  });
}

var menuBtn = document.querySelector(".menu-btn");
var navLinks = document.querySelector(".links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuBtn.setAttribute(
      "aria-expanded",
      navLinks.classList.contains("active") ? "true" : "false"
    );
  });

  document.querySelectorAll(".links a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}

var skillContainer = document.querySelector(".skill-card");
var nextBtn = document.querySelector(".right-arrow");
var prevBtn = document.querySelector(".left-arrow");

if (skillContainer && nextBtn && prevBtn) {
  nextBtn.addEventListener("click", function () {
    skillContainer.scrollLeft += 200;
  });

  prevBtn.addEventListener("click", function () {
    skillContainer.scrollLeft -= 200;
  });
}
