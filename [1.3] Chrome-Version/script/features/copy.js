document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.getElementById("copy-button");
  if (copyButton) {
    copyButton.addEventListener("click", copyYouTubeLinkFromTab);
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

    if (url.hostname.includes("youtube.com") && url.searchParams.has("v")) {
      videoId = url.searchParams.get("v");
    } else if (url.hostname.includes("youtube.com") && url.pathname.startsWith("/shorts/")) {
      const match = url.pathname.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
      if (match) {
        videoId = match[1];
      }
    } else if (url.hostname.includes("youtube-nocookie.com")) {
      const match = url.pathname.match(/\/embed\/([a-zA-Z0-9_-]+)/);
      if (match) {
        videoId = match[1];
      }
    }

    if (!videoId) {
      updateButton("No Video", false);
      return;
    }

    const finalURL = `https://www.youtube.com/watch?v=${videoId}`;

    await navigator.clipboard.writeText(finalURL);
    updateButton("Lien copié ✅", true);
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
