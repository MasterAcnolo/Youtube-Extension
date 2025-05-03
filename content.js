// Fonction qui effectue la redirection vers le lecteur sans cookie
function redirectToNoCookie() {
    const url = new URL(window.location.href);
    const videoId = url.searchParams.get("v");
  
    if (videoId) {
      const newUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
      window.location.replace(newUrl);  // Redirige vers la version sans cookies
    }
  }
  
  // Vérification initiale de l'état d'activation de la redirection
  chrome.storage.sync.get(["enabled"], (result) => {
    const isEnabled = result.enabled ?? true;  // Par défaut, activée
    if (isEnabled && window.location.href.includes("watch?v=")) {
      redirectToNoCookie();
    }
  });
  
  // Utilisation d'un MutationObserver pour observer les changements dans l'URL (si l'utilisateur change de vidéo)
  const observer = new MutationObserver(() => {
    if (window.location.href.includes("watch?v=")) {
      chrome.storage.sync.get(["enabled"], (result) => {
        const isEnabled = result.enabled ?? true;
        if (isEnabled) {
          redirectToNoCookie();
        }
      });
    }
  });
  
  // Commencer à observer les changements dans l'URL
  observer.observe(document, {
    subtree: true,
    childList: true
  });
  