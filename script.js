
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

// LOAD PROFILE
document.getElementById("profileName").innerHTML =
  `${profile.name}<span>.</span>`;

const photo = document.getElementById("profilePhoto");

photo.src = profile.photo;

photo.onerror = function() {
  this.src = "https://placehold.co/500x500/png";
};

// ABOUT ME
const aboutElement = document.getElementById("aboutText");

if (aboutElement) {
  aboutElement.textContent = profile.about;
}

// SOCIAL LINKS
document.getElementById("instagramLink").href =
  profile.instagram;

document.getElementById("telegramLink").href =
  profile.telegram;

document.getElementById("youtubeLink").href =
  profile.youtube;

// FOOTER YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();

// TOAST
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// SHARE WEBSITE
async function shareWebsite() {
  const shareData = {
    title: "Gurmeet Singh",
    text: "Check out my personal website!",
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await copyLink();
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      await copyLink();
    }
  }
}

// COPY LINK WITH FALLBACK
async function copyLink() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("Website link copied!");
  } catch {
    const textarea = document.createElement("textarea");

    textarea.value = window.location.href;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);
    textarea.select();

    const success = document.execCommand("copy");

    textarea.remove();

    showToast(
      success ? "Website link copied!" : "Please copy URL manually."
    );
  }
}

// BUTTON EVENTS
document.getElementById("shareBtn")
  .addEventListener("click", shareWebsite);

document.getElementById("copyBtn")
  .addEventListener("click", copyLink);

// 3D EFFECT
if (
  matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  document.querySelectorAll(".tilt-card").forEach(card => {

    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      card.style.transform =
        `perspective(1000px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });

  });
}
