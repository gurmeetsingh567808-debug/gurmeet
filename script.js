
/* =====================================
   PERSONAL DETAILS
   Change your details here
===================================== */

const profile = {

  name: "Gurmeet Singh",

  photo: "https://i.ibb.co/20ZML3Zq/2c3688d7e305ec9057d76f2d0e567e4a.jpg",

  instagram: "https://www.instagram.com/_mg_verse_08_/",

  telegram: "https://t.me/YOUR_USERNAME",

  youtube: "https://youtube.com/@gurmeet_explains",

  about: `Hey! I'm Gurmeet Singh.

I enjoy exploring technology, coding, website development
and digital creativity.

Always learning, building and exploring new things.`

};


/* =====================================
   LOAD PROFILE DETAILS
===================================== */

// Name
document.getElementById("profileName").innerHTML =
  `${profile.name}<span>.</span>`;

// Profile photo
const photo = document.getElementById("profilePhoto");

photo.src = profile.photo;

photo.onerror = function() {
  this.src = "https://placehold.co/500x500/png";
};

// About section (only one place)
document.getElementById("aboutText").textContent =
  profile.about;


/* =====================================
   SOCIAL MEDIA LINKS
===================================== */

document.getElementById("instagramLink").href =
  profile.instagram;

document.getElementById("telegramLink").href =
  profile.telegram;

document.getElementById("youtubeLink").href =
  profile.youtube;


/* =====================================
   FOOTER YEAR
===================================== */

document.getElementById("year").textContent =
  new Date().getFullYear();


/* =====================================
   COPY WEBSITE LINK
===================================== */

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


/* =====================================
   3D HOVER EFFECT
===================================== */

const supportsHover = window.matchMedia(
  "(hover: hover) and (pointer: fine)"
).matches;

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (supportsHover && !reducedMotion) {

  document.querySelectorAll(".tilt-card").forEach(card => {

    card.addEventListener("mousemove", event => {

      const rect = card.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      card.style.transform =
        `perspective(1000px)
         rotateX(${-y * 5}deg)
         rotateY(${x * 5}deg)`;

    });

    card.addEventListener("mouseleave", () => {

      card.style.transform = "";

    });

  });

}
