const toggleBtn = document.getElementById("toggle-extension");
const statusText = document.getElementById("status-text");

function updateStatusUI(enabled) {
  toggleBtn.textContent = enabled ? "Désactiver l'extension" : "Activer l'extension";
  statusText.textContent = enabled ? "Extension activée ✅" : "Extension désactivée ❌";
}

function loadState() {
  chrome.storage.sync.get(["enabled"], (result) => {
    const enabled = result.enabled ?? true;
    updateStatusUI(enabled);
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

loadState();
