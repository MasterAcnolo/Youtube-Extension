document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("copy-button");
  if (button) {
    button.addEventListener("click", copyYouTubeLinkFromTab);
  }
});

async function copyYouTubeLinkFromTab() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !tab.url) {
      throw new Error("Aucun onglet actif trouvé");
    }

    const url = new URL(tab.url);
    let videoId = null;

    // Cas Youtube standard
    if (url.hostname.includes("youtube.com") && url.searchParams.has("v")) {
      videoId = url.searchParams.get("v");
    }

    // Cas YouTube NoCookie
    if (url.hostname.includes("youtube-nocookie.com")) {
      const match = url.pathname.match(/\/embed\/([a-zA-Z0-9_-]+)/);
      if (match) {
        videoId = match[1];
      }
    }

    if (videoId) {
      const noCookieURL = `https://www.youtube-nocookie.com/embed/${videoId}`;
      await navigator.clipboard.writeText(noCookieURL);
      updateButton("Lien copié ✅", true);
    } else {
      updateButton("Aucune vidéo détectée ❌", false);
    }
  } catch (err) {
    console.error("Erreur lors de la copie :", err);
    updateButton("Erreur ❌", false);
  }
}

function updateButton(message, success) {
  const button = document.getElementById("copy-button");
  if (!button) return;

  button.textContent = message;
  button.style.backgroundColor = success ? "#4CAF50" : "#e74c3c";

  setTimeout(() => {
    button.textContent = "Copier le lien";
    button.style.backgroundColor = "";
  }, 2000);
}
