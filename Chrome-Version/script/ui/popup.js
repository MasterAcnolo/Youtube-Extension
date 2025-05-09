const toggleCheckbox = document.getElementById("toggle-checkbox");
const statusText = document.getElementById("TextButton");
const copyUrlBtn = document.getElementById("copy-url");
const warningText = document.getElementById("warning-text");

function updateStatusUI(enabled) {
  toggleCheckbox.checked = enabled;
  statusText.textContent = enabled ? "Activé" : "Désactivé";
}

function copyUrl() {
  const url = window.location.href;
  const videoId = new URL(url).searchParams.get("v");

  if (videoId) {
    const noCookieUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
    navigator.clipboard.writeText(noCookieUrl).then(() => {
      alert("URL copiée : " + noCookieUrl);
    }).catch(() => {
      alert("Erreur lors de la copie de l'URL");
    });
  } else {
    warningText.style.display = "block";
  }
}

function loadState() {
  chrome.storage.sync.get(["enabled"], (result) => {
    const enabled = result.enabled ?? true;
    updateStatusUI(enabled);

    if (window.location.href.includes("watch?v=")) {
      copyUrlBtn.style.display = "inline-block";
      warningText.style.display = "none";
    } else {
      copyUrlBtn.style.display = "none";
      warningText.style.display = "block";
    }
  });
}

toggleCheckbox.addEventListener("change", () => {
  const enabled = toggleCheckbox.checked;
  chrome.storage.sync.set({ enabled }, () => {
    updateStatusUI(enabled);
  });
});

copyUrlBtn.addEventListener("click", copyUrl);

loadState();
