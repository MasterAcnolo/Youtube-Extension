const checkbox = document.getElementById("toggle");

// Vérifier l'état actuel de l'extension (activée ou désactivée)
chrome.storage.sync.get(["enabled"], (result) => {
  checkbox.checked = result.enabled ?? true;  // Par défaut, activée
});

// Gérer l'activation/désactivation de l'extension via la case à cocher
checkbox.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: checkbox.checked });
});
