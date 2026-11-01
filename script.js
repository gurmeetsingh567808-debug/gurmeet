
/* =================================
   GURMEET SINGH - PERSONAL WEBSITE
   EDIT YOUR DETAILS HERE
================================= */

const profile = {

  name: "Gurmeet Singh",

  photo: "https://placehold.co/500x500/png",

  instagram: "https://instagram.com/YOUR_USERNAME",

  telegram: "https://t.me/YOUR_USERNAME",

  youtube: "https://youtube.com/@YOUR_CHANNEL",

  about: `Hey! I'm Gurmeet Singh.

I enjoy exploring technology, coding, website development
and digital creativity.

Always learning, building and exploring new things.`

};


/* =================================
   LOAD PROFILE
================================= */

document.getElementById("profileName").textContent =
  profile.name;

document.getElementById("profilePhoto").src =
  profile.photo;

document.getElementById("profileAbout").textContent =
  profile.about;

document.getElementById("heroAbout").textContent =
  profile.about;

document.getElementById("instagramLink").href =
  profile.instagram;

document.getElementById("telegramLink").href =
  profile.telegram;

document.getElementById("youtubeLink").href =
  profile.youtube;

document.getElementById("year").textContent =
  new Date().getFullYear();


/* =================================
   COPY WEBSITE LINK
================================= */

const toast = document.getElementById("toast");

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);

}

async function copyWebsiteLink() {

  try {

    await navigator.clipboard.writeText(
      window.location.href
    );

    showToast("Website link copied!");

  } catch {

    showToast("Copy unavailable. Copy URL manually.");

  }

}

document.getElementById("shareBtn")
  .addEventListener("click", copyWebsiteLink);

document.getElementById("copyBtn")
  .addEventListener("click", copyWebsiteLink);


/* =================================
   3D HOVER EFFECT
================================= */

const supportsHover =
  window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;

const reducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

if (supportsHover && !reducedMotion) {

  document.querySelectorAll(".tilt-card")
    .forEach(card => {

      card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x =
          (e.clientX - rect.left) / rect.width - 0.5;

        const y =
          (e.clientY - rect.top) / rect.height - 0.5;

        card.style.transform =
          `perspective(1000px)
           rotateX(${-y * 5}deg)
           rotateY(${x * 5}deg)`;

      });

      card.addEventListener("mouseleave", () => {

        card.style.transform =
          "perspective(1000px) rotateX(0) rotateY(0)";

      });

    });

}


/* =================================
   PROFILE PHOTO FALLBACK
================================= */

document.getElementById("profilePhoto")
  .addEventListener("error", function() {

    this.src = "https://placehold.co/500x500/png";

  });
