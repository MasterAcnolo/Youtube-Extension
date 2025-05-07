const toggleBtn = document.getElementById("toggle-extension");
const statusText = document.getElementById("TextButton");
const copyUrlBtn = document.getElementById("copy-url");
const warningText = document.getElementById("warning-text");

function updateStatusUI(enabled) {
  toggleBtn.textContent = enabled ? "Désactiver l'extension" : "Activer l'extension";
  statusText.textContent = enabled ? "Activé" : "Désactivé";
}

function copyUrl() {
  const url = window.location.href;
  const videoId = new URL(url).searchParams.get('v');
  
  if (videoId) {
    const noCookieUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
    navigator.clipboard.writeText(noCookieUrl).then(() => {
      alert("URL copié : " + noCookieUrl);
    }).catch(err => {
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

toggleBtn.addEventListener("click", () => {
  chrome.storage.sync.get(["enabled"], (result) => {
    const currentState = result.enabled ?? true;
    const newState = !currentState;

    chrome.storage.sync.set({ enabled: newState }, () => {
      updateStatusUI(newState);
    });
  });
});

copyUrlBtn.addEventListener("click", copyUrl);

loadState();
