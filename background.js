// background.js (Service Worker)
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installée avec succès !");
  
  // Créer un menu contextuel pour ouvrir GitHub
  chrome.contextMenus.create({
    id: "open-github",
    title: "Mon GitHub",
    contexts: ["action"],  // Le menu sera accessible via l'icône de l'extension
  });

  // Créer un autre menu contextuel pour voir les logs
  chrome.contextMenus.create({
    id: "view-logs",
    title: "Voir les logs",
    contexts: ["action"],  // Le menu sera accessible via l'icône de l'extension
  });
});

// Gérer les clics sur les éléments du menu contextuel
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "open-github") {
    chrome.tabs.create({ url: "https://github.com/ton-github" });
  } else if (info.menuItemId === "view-logs") {
    chrome.tabs.create({ url: "logs.html" });
  }
});
