document.addEventListener("DOMContentLoaded", function () {
  const anchors = document.querySelectorAll("a[href^='#']");
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function (e) {
      e.preventDefault();
      const blockID = anchors[i].getAttribute("href").substring(1);
      document.getElementById(blockID).scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function () {
      setTimeout(function () {
        window.location.href = "thankyou.html";
      }, 1500);
    });
  }
});
