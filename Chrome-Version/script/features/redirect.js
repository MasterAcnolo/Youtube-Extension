let alreadyRedirected = false;

function redirectToNoCookie() {
  if (alreadyRedirected) return;
  alreadyRedirected = true;

  const url = new URL(window.location.href);
  const videoId = url.searchParams.get("v");

  if (videoId && !url.hostname.includes("youtube-nocookie.com")) {
    chrome.storage.sync.get(['redirectCount'], ({ redirectCount }) => {
      const newCount = (redirectCount || 0) + 1;
      chrome.storage.sync.set({ redirectCount: newCount }, () => {
        console.log(`Compteur mis à jour : ${newCount}`);
        const newUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
        window.location.replace(newUrl);
      });
    });
  }
}



chrome.storage.sync.get(["Bieenabled"], (result) => {
  const isEnabled = result.enabled ?? true;
  if (isEnabled && window.location.href.includes("watch?v=")) {
    redirectToNoCookie();
  }
});


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

observer.observe(document, {
  subtree: true,
  childList: true
});
