chrome.storage.sync.get(["enabled"], (result) => {
    const isEnabled = result.enabled ?? true;
  
    if (isEnabled && window.location.href.includes("watch?v=")) {
      const url = new URL(window.location.href);
      const videoId = url.searchParams.get("v");
  
      if (videoId) {
        const newUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
        window.location.replace(newUrl);
      }
    }
  });
  