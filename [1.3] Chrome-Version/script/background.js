chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "toggle-extension",
    title: "Activer / Désactiver",
    contexts: ["action"]
  });

  chrome.contextMenus.create({
    id: "open-github",
    title: "Code source",
    contexts: ["action"]
  });

  chrome.contextMenus.create({
    id: "version",
    title : "Dernière Version Stable: 1.2",
    contexts: ["action"]
  })

  chrome.contextMenus.create({
    id: "versionactuelle",
    title : "Version De Build 1.3",
    contexts: ["action"]
  })
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

  } else if (menuId === "version") {
     chrome.tabs.create({ url: "https://github.com/MasterAcnolo/Youtube-Extension/releases/tag/1.2" });

   } else if (menuId === "versionactuelle") {
    chrome.tabs.create({ url: "https://www.youtube.com/watch?v=SeE6dzk1tO0&pp=ygUdaW5zcGVjdGV1ciBnYWRnZXQgZ8OpbsOpcmlxdWU%3D" });
  }
  

});
