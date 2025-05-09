chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "toggle-extension",
    title: "Activer / Désactiver",
    contexts: ["action"]
  });

  chrome.contextMenus.create({
    id: "open-github",
    title: "Code source GitHub",
    contexts: ["action"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const menuId = info.menuItemId;

  if (menuId === "toggle-extension") {
    chrome.storage.sync.get(["enabled"], (result) => {
      const newState = !(result.enabled ?? true);
      chrome.storage.sync.set({ enabled: newState });
     
    });

  } else if (menuId === "open-github") {
    chrome.tabs.create({ url: "https://github.com/MasterAcnolo/Youtube-Extension" });
  }
});
