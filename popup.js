const checkbox = document.getElementById("toggle");

chrome.storage.sync.get(["enabled"], (result) => {
  checkbox.checked = result.enabled ?? true;
});

checkbox.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: checkbox.checked });
});
