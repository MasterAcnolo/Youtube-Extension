export function createContextMenus() {
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
  
    chrome.contextMenus.create({
      id: "copy-nocookie-url",
      title: "Copier l'URL sans cookie",
      contexts: ["action"]
    });
  }
  
  export function handleContextMenuClick(info) {
    const menuId = info.menuItemId;
  
    if (menuId === "toggle-button") {
      chrome.storage.sync.get(["enabled"], (result) => {
        const newState = !(result.enabled ?? true);
        chrome.storage.sync.set({ enabled: newState });
        chrome.action.setIcon({
          path: newState ? "images/icon128.png" : "images/icon16.png"
        });
      });
  
    } else if (menuId === "open-github") {
      chrome.tabs.create({ url: "https://github.com/MasterAcnolo/Youtube-Extension" });
  
    } else if (menuId === "copy-nocookie-url") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        if (!tab || !tab.id || !tab.url) return;
  
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => {
            const url = window.location.href;
            const videoId = new URL(url).searchParams.get("v");
            if (videoId) {
              const noCookieUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
              navigator.clipboard.writeText(noCookieUrl)
                .then(() => alert("URL copiée : " + noCookieUrl))
                .catch(() => alert("Échec de la copie dans le presse-papier"));
            } else {
              alert("Aucune vidéo YouTube détectée.");
            }
          }
        });
      });
    }
  }
  