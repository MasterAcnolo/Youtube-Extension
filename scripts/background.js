chrome.runtime.onInstalled.addListener(() => {
    
    chrome.contextMenus.create({
      id: "toggle-extension",
      title: "Activer / Désactiver",
      contexts: ["action"]
    });

    chrome.contextMenus.create({
      id: "open-github",
      title: "Code source sur GitHub",
      contexts: ["action"]
    });
  
    // Vérifier l'état de l'extension au démarrage
    chrome.storage.sync.get(["enabled"], (result) => {
      const enabled = result.enabled ?? true; // Si non défini, on considère l'extension activée par défaut
      // Définir l'icône de l'extension en fonction de l'état
      chrome.action.setIcon({
        path: enabled ? "images/icon128.png" : "images/icon16.png"
      });
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "toggle-extension") {
      // Change l'état de l'extension
      chrome.storage.sync.get(["enabled"], (result) => {
        const newState = !(result.enabled ?? true);
        chrome.storage.sync.set({ enabled: newState });
        // Met à jour l'icône de l'extension en fonction de l'état
        chrome.action.setIcon({
          path: newState ? "images/icon128.png" : "images/icon16.png"
        }); 
      });
    
    } else if (info.menuItemId === "open-github") {
      chrome.tabs.create({ url: "https://github.com/MasterAcnolo/Youtube-Extension" });
    }
  });
  